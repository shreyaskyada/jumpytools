import { PercentageCalculatorState } from './types';

export const TOOL_METADATA = {
  title: 'Percentage Calculator',
  description:
    'Free online Percentage Calculator to calculate percentage values, percentage ratios, percentage increases/decreases, and add or subtract percentages instantly. Clean, private, and premium calculations.',
  slug: 'percentage-calculator',
  category: 'math-calc',
};

export const TOOL_FAQS = [
  {
    question: 'How do you calculate the percentage of a number?',
    answer:
      'To calculate the percentage of a number, convert the percentage into a decimal (divide by 100) and multiply it by the number. For example, to find 20% of 150: (20 / 100) * 150 = 0.2 * 150 = 30.',
  },
  {
    question: 'How do you calculate percentage increase or decrease between two values?',
    answer:
      'Subtract the starting value from the final value, divide the difference by the starting value, and then multiply by 100. For example, from 40 to 50: ((50 - 40) / 40) * 100 = (10 / 40) * 100 = 25% increase.',
  },
  {
    question: 'How do you add or subtract a percentage to/from a base number?',
    answer:
      'To add a percentage, multiply the base number by (1 + percentage/100). To subtract a percentage, multiply by (1 - percentage/100). For example, adding 15% to 100 is 100 * (1 + 0.15) = 115.',
  },
  {
    question: 'How do you find the total value if you know the percentage and parts?',
    answer:
      'Divide the partial value by the percentage (expressed as a decimal or fraction). For example, if 20 is 10% of a number, the total value is 20 / (10 / 100) = 20 / 0.1 = 200.',
  },
  {
    question: 'What are the practical applications of percentage calculations?',
    answer:
      'Percentage calculations are essential for calculating financial interest rates, investment returns, sales taxes, tips, product discounts, profit margins, growth rates, and statistical ratios.',
  },
];

export const TOOL_ABOUT = [
  'The Percentage Calculator is a versatile, free math utility designed to handle various daily percentage calculation tasks with ease.',
  'It supports finding the percentage of any number, calculating percentage ratios between two numbers, tracking percentage changes (increases and decreases), computing total values from a percentage representation, and adding or subtracting percentages directly to/from a base value.',
  'All calculations run locally inside your browser instantly, ensuring maximum privacy and speed with no data sent to external servers.',
];

export const INITIAL_STATE: PercentageCalculatorState = {
  activeMode: 'pctOf',
  pctOf: {
    x: '10',
    y: '200',
    result: 20,
  },
  ratio: {
    x: '50',
    y: '200',
    result: 25,
  },
  change: {
    x: '40',
    y: '50',
    result: 25,
    isIncrease: true,
  },
  total: {
    x: '20',
    y: '10',
    result: 200,
  },
  addSubtract: {
    x: '100',
    y: '15',
    op: 'add',
    result: 115,
  },
};
