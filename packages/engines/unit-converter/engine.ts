import { UNIT_CATEGORIES } from './constants';
import { UnitCategory, UnitCategoryId, UnitConversionResult, UnitDefinition } from './types';

export function getCategory(categoryId: UnitCategoryId): UnitCategory | undefined {
  return UNIT_CATEGORIES.find((cat) => cat.id === categoryId);
}

export function getUnit(categoryId: UnitCategoryId, unitId: string): UnitDefinition | undefined {
  const category = getCategory(categoryId);
  if (!category) return undefined;
  return category.units.find((u) => u.id === unitId);
}

export function formatConvertedNumber(num: number, precision = 4): string {
  if (num === 0) return '0';

  const abs = Math.abs(num);

  // Very small or very large numbers: use scientific notation if necessary
  if (abs < 1e-6 || abs >= 1e12) {
    return num.toExponential(precision).replace(/\.?0+e/, 'e');
  }

  // Round to specified precision to eliminate binary floating point artifacts
  const factor = Math.pow(10, precision);
  const rounded = Math.round(num * factor) / factor;

  // Format as clean string without redundant trailing zeroes
  const str = rounded.toFixed(precision);
  if (str.includes('.')) {
    return str.replace(/\.?0+$/, '');
  }
  return str;
}

export function convertValue(
  categoryId: UnitCategoryId,
  fromUnitId: string,
  toUnitId: string,
  value: number
): number {
  if (fromUnitId === toUnitId) {
    return value;
  }

  const category = getCategory(categoryId);
  if (!category) {
    throw new Error(`Category "${categoryId}" not found`);
  }

  const fromUnit = category.units.find((u) => u.id === fromUnitId);
  const toUnit = category.units.find((u) => u.id === toUnitId);

  if (!fromUnit || !toUnit) {
    throw new Error(`Units "${fromUnitId}" or "${toUnitId}" not found in category "${categoryId}"`);
  }

  // 1. Convert to base unit
  let baseValue: number;
  if (fromUnit.toBase) {
    baseValue = fromUnit.toBase(value);
  } else if (fromUnit.ratioToBase !== undefined) {
    baseValue = value * fromUnit.ratioToBase;
  } else {
    baseValue = value;
  }

  // 2. Convert from base unit to target unit
  let targetValue: number;
  if (toUnit.fromBase) {
    targetValue = toUnit.fromBase(baseValue);
  } else if (toUnit.ratioToBase !== undefined && toUnit.ratioToBase !== 0) {
    targetValue = baseValue / toUnit.ratioToBase;
  } else {
    targetValue = baseValue;
  }

  return targetValue;
}

export function generateFormulaDescription(
  fromUnit: UnitDefinition,
  toUnit: UnitDefinition,
  categoryId: UnitCategoryId
): string {
  if (fromUnit.id === toUnit.id) {
    return `1 ${fromUnit.symbol} = 1 ${toUnit.symbol}`;
  }

  if (categoryId === 'temperature') {
    if (fromUnit.id === 'c' && toUnit.id === 'f') return '(°C × 9/5) + 32 = °F';
    if (fromUnit.id === 'f' && toUnit.id === 'c') return '(°F − 32) × 5/9 = °C';
    if (fromUnit.id === 'c' && toUnit.id === 'k') return '°C + 273.15 = K';
    if (fromUnit.id === 'k' && toUnit.id === 'c') return 'K − 273.15 = °C';
    if (fromUnit.id === 'f' && toUnit.id === 'k') return '(°F − 32) × 5/9 + 273.15 = K';
    if (fromUnit.id === 'k' && toUnit.id === 'f') return '(K − 273.15) × 9/5 + 32 = °F';
  }

  const factor = convertValue(categoryId, fromUnit.id, toUnit.id, 1);
  const formattedFactor = formatConvertedNumber(factor, 6);
  return `1 ${fromUnit.symbol} = ${formattedFactor} ${toUnit.symbol}`;
}

export function performConversion(
  categoryId: UnitCategoryId,
  fromUnitId: string,
  toUnitId: string,
  value: number,
  precision = 4
): UnitConversionResult {
  const category = getCategory(categoryId);
  if (!category) {
    throw new Error(`Category "${categoryId}" not found`);
  }

  const fromUnit = category.units.find((u) => u.id === fromUnitId) ?? category.units[0];
  const toUnit = category.units.find((u) => u.id === toUnitId) ?? category.units[1] ?? category.units[0];

  if (!fromUnit || !toUnit) {
    throw new Error('No valid units available in category');
  }

  const toValue = convertValue(categoryId, fromUnit.id, toUnit.id, value);
  const formula = generateFormulaDescription(fromUnit, toUnit, categoryId);

  const allConversions = category.units.map((unit) => {
    const val = convertValue(categoryId, fromUnit.id, unit.id, value);
    return {
      unit,
      value: val,
      formatted: formatConvertedNumber(val, precision),
    };
  });

  return {
    fromUnit,
    toUnit,
    fromValue: value,
    toValue,
    formula,
    category: categoryId,
    allConversions,
  };
}
