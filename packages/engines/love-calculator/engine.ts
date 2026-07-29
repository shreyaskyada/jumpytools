import { LoveResult } from './types';

function computeHash(str: string, seed: number): number {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33 + str.charCodeAt(i)) % 1000;
  }
  return hash;
}

export function calculateLove(name1: string, name2: string): LoveResult {
  const n1 = name1.trim().toLowerCase();
  const n2 = name2.trim().toLowerCase();

  // Alphabetically sort to guarantee order independence: Love(A, B) === Love(B, A)
  const combined = [n1, n2].sort().join(' & ');

  // Compute seeds deterministically
  const scoreSeed = computeHash(combined, 7);
  const trustSeed = computeHash(combined, 13);
  const commSeed = computeHash(combined, 17);
  const passionSeed = computeHash(combined, 23);
  const valuesSeed = computeHash(combined, 29);

  // Distribute scores. Range: 35% to 99% for a positive/fun vibe, or 25% to 99%
  const score = 30 + (scoreSeed % 70); // [30, 99]
  const trust = 40 + (trustSeed % 60); // [40, 99]
  const communication = 40 + (commSeed % 60); // [40, 99]
  const passion = 35 + (passionSeed % 65); // [35, 99]
  const values = 45 + (valuesSeed % 55); // [45, 99]

  let category: LoveResult['category'] = 'Good Potential';
  let categoryColor = 'text-amber-500';
  let message = '';

  if (score >= 90) {
    category = 'Soulmates';
    categoryColor = 'text-pink-500';
    message = 'You are made for each other! An extraordinary bond that matches perfectly.';
  } else if (score >= 75) {
    category = 'Strong Match';
    categoryColor = 'text-rose-500';
    message = 'High compatibility! Great chemistry, mutual respect, and strong connection.';
  } else if (score >= 50) {
    category = 'Good Potential';
    categoryColor = 'text-amber-500';
    message = 'Nice compatibility! With mutual effort and good communication, this can grow beautifully.';
  } else if (score >= 35) {
    category = 'Flickering Spark';
    categoryColor = 'text-blue-500';
    message = 'A spark is there, but you might have differing views. Understanding will bring you closer.';
  } else {
    category = 'Low Compatibility';
    categoryColor = 'text-zinc-500';
    message = 'Opposites attract! Challenging dynamics ahead, but compromise is key.';
  }

  return {
    score,
    category,
    categoryColor,
    message,
    breakdown: {
      trust,
      communication,
      passion,
      values,
    },
  };
}
