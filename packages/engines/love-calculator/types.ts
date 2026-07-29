export interface LoveBreakdown {
  trust: number;
  communication: number;
  passion: number;
  values: number;
}

export interface LoveResult {
  score: number;
  category: 'Soulmates' | 'Strong Match' | 'Good Potential' | 'Flickering Spark' | 'Low Compatibility';
  categoryColor: string;
  message: string;
  breakdown: LoveBreakdown;
}
