export type FlamesLetter = 'F' | 'L' | 'A' | 'M' | 'E' | 'S';

export interface FlamesResult {
  letter: FlamesLetter;
  relationship: 'Friendship' | 'Love' | 'Affection' | 'Marriage' | 'Enemy' | 'Sister (Sibling)';
  meaning: string;
  description: string;
  color: string;
  remainingCount: number;
}
