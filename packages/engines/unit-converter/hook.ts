'use client';

import { useState, useCallback, useMemo } from 'react';
import { UNIT_CATEGORIES } from './constants';
import { performConversion } from './engine';
import { UnitCategoryId, UnitConversionResult, UnitConverterState } from './types';
import { validatePrecision, validateUnitInput } from './validators';

export function useUnitConverter(
  initialCategory: UnitCategoryId = 'length',
  initialValue = '1'
) {
  const [categoryId, setCategoryIdState] = useState<UnitCategoryId>(initialCategory);

  const initialCat = UNIT_CATEGORIES.find((c) => c.id === initialCategory) ?? UNIT_CATEGORIES[0]!;
  const [fromUnitId, setFromUnitId] = useState<string>(initialCat.units[0]?.id ?? 'm');
  const [toUnitId, setToUnitId] = useState<string>(initialCat.units[1]?.id ?? 'km');

  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [precision, setPrecisionState] = useState<number>(4);

  const setCategory = useCallback((newCategory: UnitCategoryId) => {
    setCategoryIdState(newCategory);
    const cat = UNIT_CATEGORIES.find((c) => c.id === newCategory) ?? UNIT_CATEGORIES[0]!;
    setFromUnitId(cat.units[0]?.id ?? '');
    setToUnitId(cat.units[1]?.id ?? cat.units[0]?.id ?? '');
  }, []);

  const swapUnits = useCallback(() => {
    setFromUnitId(toUnitId);
    setToUnitId(fromUnitId);
  }, [fromUnitId, toUnitId]);

  const setPrecision = useCallback((p: number) => {
    setPrecisionState(validatePrecision(p));
  }, []);

  const clear = useCallback(() => {
    setInputValue('');
  }, []);

  // Validation
  const validation = useMemo(() => {
    return validateUnitInput(inputValue, categoryId, fromUnitId);
  }, [inputValue, categoryId, fromUnitId]);

  // Result calculation
  const result = useMemo<UnitConversionResult | null>(() => {
    if (!validation.isValid || validation.parsedNumber === undefined) {
      return null;
    }

    try {
      return performConversion(
        categoryId,
        fromUnitId,
        toUnitId,
        validation.parsedNumber,
        precision
      );
    } catch {
      return null;
    }
  }, [categoryId, fromUnitId, toUnitId, validation, precision]);

  const state: UnitConverterState = useMemo(
    () => ({
      categoryId,
      fromUnitId,
      toUnitId,
      inputValue,
      precision,
      result,
      error: validation.error ?? null,
    }),
    [categoryId, fromUnitId, toUnitId, inputValue, precision, result, validation]
  );

  return {
    state,
    setCategory,
    setFromUnit: setFromUnitId,
    setToUnit: setToUnitId,
    setInputValue,
    setPrecision,
    swapUnits,
    clear,
  };
}
