import { UnitCategoryId } from './types';

export interface ValidationResult {
  isValid: boolean;
  parsedNumber?: number;
  error?: string;
}

export function validateUnitInput(value: string, categoryId?: UnitCategoryId, unitId?: string): ValidationResult {
  const trimmed = value.trim();

  if (trimmed === '') {
    return { isValid: false, error: 'Please enter a numeric value.' };
  }

  const num = Number(trimmed);

  if (Number.isNaN(num) || !Number.isFinite(num)) {
    return { isValid: false, error: 'Invalid number format.' };
  }

  // Domain checks for absolute physical limits
  if (categoryId === 'temperature') {
    if (unitId === 'k' && num < 0) {
      return { isValid: false, error: 'Temperature in Kelvin cannot be below absolute zero (0 K).' };
    }
    if (unitId === 'c' && num < -273.15) {
      return { isValid: false, error: 'Temperature in Celsius cannot be below absolute zero (-273.15 °C).' };
    }
    if (unitId === 'f' && num < -459.67) {
      return { isValid: false, error: 'Temperature in Fahrenheit cannot be below absolute zero (-459.67 °F).' };
    }
  }

  return { isValid: true, parsedNumber: num };
}

export function validatePrecision(precision: number): number {
  if (typeof precision !== 'number' || Number.isNaN(precision)) {
    return 4;
  }
  return Math.min(Math.max(Math.floor(precision), 0), 10);
}
