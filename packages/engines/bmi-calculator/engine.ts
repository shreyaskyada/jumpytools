import { BmiResult, BmiUnitSystem } from './types';

export function calculateBmi(
  heightCm: number,
  weightKg: number,
  unitSystem: BmiUnitSystem
): BmiResult {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  const ponderalIndex = weightKg / (heightM * heightM * heightM);

  let category: BmiResult['category'] = 'Normal weight';
  let categoryColor = 'text-green-500';

  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'text-blue-500';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal weight';
    categoryColor = 'text-green-500';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
    categoryColor = 'text-orange-500';
  } else {
    category = 'Obese';
    categoryColor = 'text-red-500';
  }

  // WHO Healthy range limits: 18.5 to 24.9 BMI
  const minHealthyWeightKg = 18.5 * (heightM * heightM);
  const maxHealthyWeightKg = 24.9 * (heightM * heightM);

  const isMetric = unitSystem === 'metric';
  const unitLabel = isMetric ? 'kg' : 'lbs';

  const convertKg = (kg: number) => {
    return isMetric ? kg : kg * 2.20462;
  };

  const minWeight = convertKg(minHealthyWeightKg);
  const maxWeight = convertKg(maxHealthyWeightKg);

  let needed = 0;
  let status: BmiResult['weightDifference']['status'] = 'normal';
  let message = 'You are in the healthy BMI weight range!';

  const currentWeight = isMetric ? weightKg : weightKg * 2.20462;

  if (currentWeight < minWeight) {
    needed = minWeight - currentWeight;
    status = 'gain';
    message = `You are ${needed.toFixed(1)} ${unitLabel} below the normal range.`;
  } else if (currentWeight > maxWeight) {
    needed = currentWeight - maxWeight;
    status = 'lose';
    message = `You are ${needed.toFixed(1)} ${unitLabel} above the normal range.`;
  }

  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
    categoryColor,
    ponderalIndex: Math.round(ponderalIndex * 10) / 10,
    bmiPrime: Math.round((bmi / 25) * 100) / 100,
    healthyRange: {
      minWeight: Math.round(minWeight * 10) / 10,
      maxWeight: Math.round(maxWeight * 10) / 10,
      unit: unitLabel,
    },
    weightDifference: {
      needed: Math.round(needed * 10) / 10,
      status,
      message,
    },
  };
}
