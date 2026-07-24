export type BmiUnitSystem = 'metric' | 'imperial';

export interface BmiResult {
  bmi: number;
  category: 'Underweight' | 'Normal weight' | 'Overweight' | 'Obese';
  categoryColor: string;
  ponderalIndex: number;
  bmiPrime: number;
  healthyRange: {
    minWeight: number;
    maxWeight: number;
    unit: string;
  };
  weightDifference: {
    needed: number; // difference to reach healthy range limits
    status: 'normal' | 'gain' | 'lose';
    message: string;
  };
}
