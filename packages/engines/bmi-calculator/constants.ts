export const TOOL_METADATA = {
  title: 'BMI Calculator',
  description:
    'Calculate your Body Mass Index (BMI), BMI Prime, and Ponderal Index instantly. Review detailed weight categories, risk evaluations, and target thresholds.',
  slug: 'bmi-calculator',
  category: 'math-calc',
};

export const TOOL_FAQS = [
  {
    question: 'What is BMI (Body Mass Index)?',
    answer:
      'Body Mass Index (BMI) is a simple numerical measurement of body fat based on height and weight. It is widely used as a screening tool to identify whether an individual is underweight, normal weight, overweight, or obese.',
  },
  {
    question: 'What is BMI Prime?',
    answer:
      'BMI Prime is the ratio of your calculated BMI to the upper limit of the normal weight BMI range (typically 25 kg/m²). A BMI Prime less than 0.74 indicates thinness, 0.74 to 1 is normal, and greater than 1.0 is overweight.',
  },
  {
    question: 'How is the Ponderal Index different from BMI?',
    answer:
      'While BMI divides weight by height squared, the Ponderal Index (PI) divides weight by height cubed (weight/height³). This makes the Ponderal Index more reliable for comparing body shapes among very tall or very short individuals.',
  },
  {
    question: 'What are the risks of being overweight?',
    answer:
      'According to the CDC, being overweight increases the risk of high blood pressure, high cholesterol, type II diabetes, coronary heart disease, strokes, gallbladder disease, sleep apnea, osteoarthritis, and certain cancers.',
  },
  {
    question: 'What are the risks of being underweight?',
    answer:
      'Being underweight is associated with risks such as malnutrition, vitamin deficiencies, anemia, osteoporosis (bone weakness), decreased immune function, growth issues in teenagers, and hormonal imbalances.',
  },
];

export const TOOL_ABOUT = [
  'The BMI Calculator computes your Body Mass Index, BMI Prime, and Ponderal Index instantly. It supports both metric and imperial measurement systems, providing immediate classification feedback.',
  'By evaluating height and weight parameters client-side in your browser, the tool maps your results onto standard World Health Organization (WHO) ranges: Severe Thinness (< 16), Moderate Thinness (16 - 17), Mild Thinness (17 - 18.5), Normal (18.5 - 25), Overweight (25 - 30), and Obese classes I, II, and III.',
  'While BMI is a useful screening tool for 90-95% of the population, it does not directly measure body composition or distinguish between muscle and fat mass. Muscular individuals, older adults, and children have varying body composition parameters that should be considered alongside BMI outcomes.',
];
