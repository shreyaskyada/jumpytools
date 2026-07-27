export function calculatePctOf(x: number, y: number): number {
  const res = (x / 100) * y;
  return Math.round(res * 10000) / 10000;
}

export function calculateRatio(x: number, y: number): number | null {
  if (y === 0) return null;
  const res = (x / y) * 100;
  return Math.round(res * 10000) / 10000;
}

export function calculateChange(
  x: number,
  y: number
): { result: number; isIncrease: boolean } | null {
  if (x === 0) return null;
  const diff = y - x;
  const pct = (diff / x) * 100;
  return {
    result: Math.round(Math.abs(pct) * 10000) / 10000,
    isIncrease: diff >= 0,
  };
}

export function calculateTotal(x: number, y: number): number | null {
  if (y === 0) return null;
  const res = x / (y / 100);
  return Math.round(res * 10000) / 10000;
}

export function calculateAddSubtract(
  x: number,
  y: number,
  op: 'add' | 'subtract'
): number {
  const factor = y / 100;
  const res = op === 'add' ? x * (1 + factor) : x * (1 - factor);
  return Math.round(res * 10000) / 10000;
}
