'use client';

import { useState, useMemo } from 'react';
import { calculateBmi } from './engine';
import { BmiUnitSystem } from './types';

export function useBmiCalculator() {
  const [unitSystem, setUnitSystem] = useState<BmiUnitSystem>('metric');

  // Metric states
  const [heightCm, setHeightCm] = useState('175');
  const [weightKg, setWeightKg] = useState('70');

  // Imperial states
  const [heightFt, setHeightFt] = useState('5');
  const [heightIn, setHeightIn] = useState('9');
  const [weightLbs, setWeightLbs] = useState('154');

  const result = useMemo(() => {
    let finalHeightCm = 0;
    let finalWeightKg = 0;

    if (unitSystem === 'metric') {
      finalHeightCm = parseFloat(heightCm);
      finalWeightKg = parseFloat(weightKg);
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inch = parseFloat(heightIn) || 0;
      const lbs = parseFloat(weightLbs) || 0;

      // Imperial to Metric conversion
      finalHeightCm = ft * 30.48 + inch * 2.54;
      finalWeightKg = lbs * 0.45359237;
    }

    if (isNaN(finalHeightCm) || isNaN(finalWeightKg) || finalHeightCm <= 0 || finalWeightKg <= 0) {
      return null;
    }

    return calculateBmi(finalHeightCm, finalWeightKg, unitSystem);
  }, [unitSystem, heightCm, weightKg, heightFt, heightIn, weightLbs]);

  return {
    state: {
      unitSystem,
      heightCm,
      weightKg,
      heightFt,
      heightIn,
      weightLbs,
      result,
    },
    setUnitSystem,
    setHeightCm,
    setWeightKg,
    setHeightFt,
    setHeightIn,
    setWeightLbs,
  };
}
export default useBmiCalculator;
