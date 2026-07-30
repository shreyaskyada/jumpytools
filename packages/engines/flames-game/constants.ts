export const TOOL_METADATA = {
  title: 'FLAMES Game',
  description:
    'Play the classic childhood FLAMES game online. Cancel common characters in your names to discover your future relationship status: Friendship, Love, Affection, Marriage, Enemy, or Sibling.',
  slug: 'flames-game',
  category: 'fun-games',
};

export const TOOL_FAQS = [
  {
    question: 'What does FLAMES stand for?',
    answer:
      'FLAMES stands for Friendship, Love, Affection, Marriage, Enemy, and Sister (Sibling). It represents the six possible relationship categories predicted by the game.',
  },
  {
    question: 'How is the FLAMES game calculated?',
    answer:
      'First, common letters between the two names are cancelled out. The remaining letter count (N) is then used to count and eliminate letters of the word "FLAMES" in a circular loop until only one letter remains.',
  },
  {
    question: 'Is this game scientifically accurate?',
    answer:
      'No. The FLAMES game is a popular, nostalgic hand-written game played by kids and teens. It is purely for entertainment purposes.',
  },
];

export const TOOL_ABOUT = [
  'The FLAMES Game is a nostalgic relationship prediction game that has been played in classrooms and notebooks for generations.',
  'By crossing out matching characters in both players\' names, the remaining letters are counted. We then iteratively step through the letters of the word F-L-A-M-E-S to reveal your relationship fate.',
  'This tool executes the logic completely client-side. None of the names or parameters entered are stored or transmitted, ensuring total privacy.',
];
