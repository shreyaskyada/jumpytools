import { DeluluResult, DeluluBreakdown } from './types';
import { QUESTIONS } from './constants';

function computeHash(str: string, seed: number): number {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33 + str.charCodeAt(i)) % 1000;
  }
  return hash;
}

export function calculateDelulu(statement: string, selectedQuestionIds: string[]): DeluluResult {
  const trimmed = statement.trim();
  
  // Baseline score derived from hashing the statement
  const baselineSeed = computeHash(trimmed.toLowerCase(), 42);
  let score = 10 + (baselineSeed % 25); // [10, 34] baseline

  // Base breakdowns derived from statement length and hash
  let denial = 10 + (computeHash(trimmed.toLowerCase(), 11) % 20);
  let hope = 15 + (computeHash(trimmed.toLowerCase(), 17) % 25);
  let obsession = 5 + (computeHash(trimmed.toLowerCase(), 23) % 20);
  let realityGap = 5 + (computeHash(trimmed.toLowerCase(), 29) % 20);

  // Apply modifiers for each selected question
  selectedQuestionIds.forEach((id) => {
    const q = QUESTIONS.find((question) => question.id === id);
    if (q) {
      score += q.weight;
      if (q.breakdownEffects.denial) denial += q.breakdownEffects.denial;
      if (q.breakdownEffects.hope) hope += q.breakdownEffects.hope;
      if (q.breakdownEffects.obsession) obsession += q.breakdownEffects.obsession;
      if (q.breakdownEffects.realityGap) realityGap += q.breakdownEffects.realityGap;
    }
  });

  // Clamp values
  score = Math.min(100, Math.max(0, score));
  denial = Math.min(100, Math.max(0, denial));
  hope = Math.min(100, Math.max(0, hope));
  obsession = Math.min(100, Math.max(0, obsession));
  realityGap = Math.min(100, Math.max(0, realityGap));

  // Determine category, color, and message
  let category = 'Reality Grounded';
  let categoryColor = 'text-emerald-500';
  let message = '';

  if (score >= 90) {
    category = 'Astral Projection Level';
    categoryColor = 'text-purple-500';
    message = 'You have transcended reality. You are planning the honeymoon and wedding invitations, while they probably don\'t even know your last name. Seek professional solulu.';
  } else if (score >= 70) {
    category = 'Certified Delusional';
    categoryColor = 'text-rose-500';
    message = 'Warning: Severe lack of reality detected. You have built an entire cinema franchise in your head based on a single glance or double-tap. Stand up!';
  } else if (score >= 45) {
    category = 'Hopeless Romantic';
    categoryColor = 'text-amber-500';
    message = 'You are reading between lines that do not exist. A spark of hope is fine, but you\'re turning a spark into a forest fire. Proceed with caution.';
  } else if (score >= 20) {
    category = 'Mildly Optimistic';
    categoryColor = 'text-sky-500';
    message = 'A healthy level of optimism. You\'re keeping your fingers crossed but your feet are still mostly on the ground.';
  } else {
    category = 'Reality Grounded';
    categoryColor = 'text-emerald-500';
    message = 'Too realistic! Where is the fun? Where is the imagination? Go ahead and daydream a little, it\'s safe here.';
  }

  const breakdown: DeluluBreakdown = {
    denial,
    hope,
    obsession,
    realityGap,
  };

  return {
    score,
    category,
    categoryColor,
    message,
    breakdown,
  };
}
