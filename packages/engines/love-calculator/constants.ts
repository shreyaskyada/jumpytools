export const TOOL_METADATA = {
  title: 'Love Calculator',
  description:
    'Calculate love compatibility between two people based on their names. Get a deterministic score, match analysis, and compatibility breakdown instantly.',
  slug: 'love-calculator',
  category: 'fun-games',
};

export const TOOL_FAQS = [
  {
    question: 'How does the Love Calculator calculate compatibility?',
    answer:
      'The Love Calculator uses a deterministic algorithm based on the characters in your names to calculate compatibility. This ensures that the same two names will always produce the same love compatibility result.',
  },
  {
    question: 'Is my personal data saved when using the Love Calculator?',
    answer:
      'No. The calculation is performed entirely client-side in your web browser. None of your names or input data are sent to any server or stored anywhere.',
  },
  {
    question: 'Can the love score change if I write the names in a different order?',
    answer:
      'No. The algorithm automatically sorts the names alphabetically before processing, ensuring that Alice & Bob yields the exact same percentage and breakdown as Bob & Alice.',
  },
];

export const TOOL_ABOUT = [
  'The Love Calculator is a fun utility designed to analyze and calculate relationship compatibility between two individuals using their names.',
  'By evaluating name characters client-side, the engine assigns scores across multiple dimensions including Trust, Communication, Passion, and Shared Values, alongside an overall compatibility percentage.',
  'Please note that this tool is purely for entertainment purposes and does not represent scientific compatibility parameters or relationship advice.',
];
