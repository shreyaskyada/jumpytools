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
  {
    question: 'How should middle names or nicknames be entered?',
    answer:
      'For the most authentic nostalgic experience, people usually enter their first name only. However, you can enter middle or last names as well. Keep in mind that longer names alter the remaining letter count and therefore change the outcome.',
  },
  {
    question: 'Can the results change if the order of names is swapped?',
    answer:
      'No. The letter cancellation phase compares the presence of characters in Name A against Name B. Because this comparison is commutative, the number of cancelled and remaining letters is identical regardless of who is entered as Person 1 or Person 2.',
  },
  {
    question: 'What is the origin of the FLAMES game?',
    answer:
      'While the exact origin is unknown, the FLAMES game became highly popular in classrooms and notebooks during the late 20th century, especially in Asian countries and parts of the West. It was a staple pass-time game for kids and teenagers to playfully test their crushes.',
  },
];

export const TOOL_ABOUT = [
  'The FLAMES Game is a digital recreation of the nostalgic relationship prediction game played in school classrooms, notebooks, and diaries for generations. This tool automates the process instantly while preserving the classic algorithm.',
  'The core logic works by comparing two names and crossing out all matching characters between them. Once the common letters are eliminated, the total count of the remaining letters is computed. The engine then counts out letters of the word F-L-A-M-E-S in a circular loop, removing letters one by one until only one final letter survives, signifying your relationship status.',
  'Each letter in FLAMES represents a unique outcome: Friendship, Love, Affection, Marriage, Enemy, or Sister (Sibling). This online tool highlights the elimination process visually, helping you understand how the game arrives at its ultimate prediction.',
  'By executing all processing client-side, the FLAMES Game ensures absolute data privacy. None of the names or relationship details entered are transmitted to external servers or logged in databases. Your nostalgic tests are completely secure and private.',
  'It is important to remember that FLAMES is a game of chance and linguistic fun rather than scientific fact. Real relationships are shaped by mutual understanding, communication, and commitment rather than letters in a name.',
];

