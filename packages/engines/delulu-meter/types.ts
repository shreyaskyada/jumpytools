export interface DeluluBreakdown {
  denial: number;
  hope: number;
  obsession: number;
  realityGap: number;
}

export interface DeluluResult {
  score: number;
  category: string;
  categoryColor: string;
  message: string;
  breakdown: DeluluBreakdown;
}

export interface QuestionConfig {
  id: string;
  label: string;
  weight: number; // contribution to score
  breakdownEffects: {
    denial?: number;
    hope?: number;
    obsession?: number;
    realityGap?: number;
  };
}
