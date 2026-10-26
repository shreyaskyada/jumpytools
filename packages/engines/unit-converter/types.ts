export type UnitCategoryId =
  | 'length'
  | 'weight'
  | 'temperature'
  | 'volume'
  | 'speed'
  | 'area'
  | 'digital';

export interface UnitDefinition {
  id: string;
  name: string;
  symbol: string;
  // Factor relative to the base unit of the category (e.g., meter, gram, etc.)
  ratioToBase?: number;
  // Custom transform for non-linear units (temperature)
  toBase?: (val: number) => number;
  fromBase?: (val: number) => number;
}

export interface UnitCategory {
  id: UnitCategoryId;
  name: string;
  icon: string;
  baseUnitId: string;
  units: UnitDefinition[];
}

export interface UnitConversionResult {
  fromUnit: UnitDefinition;
  toUnit: UnitDefinition;
  fromValue: number;
  toValue: number;
  formula: string;
  category: UnitCategoryId;
  allConversions: Array<{
    unit: UnitDefinition;
    value: number;
    formatted: string;
  }>;
}

export interface UnitConverterState {
  categoryId: UnitCategoryId;
  fromUnitId: string;
  toUnitId: string;
  inputValue: string;
  precision: number;
  result: UnitConversionResult | null;
  error: string | null;
}
