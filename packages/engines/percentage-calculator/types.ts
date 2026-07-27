export type PercentageMode =
  | 'pctOf'
  | 'ratio'
  | 'change'
  | 'total'
  | 'addSubtract';

export interface PercentageOfState {
  x: string;
  y: string;
  result: number | null;
}

export interface RatioState {
  x: string;
  y: string;
  result: number | null;
}

export interface ChangeState {
  x: string;
  y: string;
  result: number | null;
  isIncrease: boolean | null;
}

export interface TotalState {
  x: string;
  y: string;
  result: number | null;
}

export interface AddSubtractState {
  x: string;
  y: string;
  op: 'add' | 'subtract';
  result: number | null;
}

export interface PercentageCalculatorState {
  activeMode: PercentageMode;
  pctOf: PercentageOfState;
  ratio: RatioState;
  change: ChangeState;
  total: TotalState;
  addSubtract: AddSubtractState;
}
