import { QuestionConfig } from './types';

export const TOOL_METADATA = {
  title: 'Delulu Meter',
  description:
    'Measure your delusion level instantly. Enter your relationship or life scenario, answer a few questions, and get a detailed breakdown of your reality gap.',
  slug: 'delulu-meter',
  category: 'fun-games',
};

export const QUESTIONS: QuestionConfig[] = [
  {
    id: 'eye_contact',
    label: 'They made eye contact with me once in a crowded room.',
    weight: 15,
    breakdownEffects: { hope: 20, realityGap: 10 },
  },
  {
    id: 'no_real_speak',
    label: 'We have never actually spoken or met in real life.',
    weight: 25,
    breakdownEffects: { realityGap: 40, denial: 20 },
  },
  {
    id: 'celebrity',
    label: 'They are a celebrity, influencer, or fictional character.',
    weight: 30,
    breakdownEffects: { realityGap: 50, obsession: 20 },
  },
  {
    id: 'no_text_reply',
    label: "They haven't texted me back in days, but I know they are just 'really busy'.",
    weight: 20,
    breakdownEffects: { denial: 40, hope: 10 },
  },
  {
    id: 'story_view',
    label: 'They viewed my social media story, which means they want me.',
    weight: 15,
    breakdownEffects: { obsession: 30, denial: 10 },
  },
  {
    id: 'unspoken_wedding',
    label: 'I have already planned our wedding/future, but they are not aware yet.',
    weight: 35,
    breakdownEffects: { obsession: 45, realityGap: 30, denial: 30 },
  },
  {
    id: 'said_excuse_me',
    label: "They said 'excuse me' or 'thank you', which is basically an I love you.",
    weight: 20,
    breakdownEffects: { denial: 35, hope: 25 },
  },
];

export const TOOL_FAQS = [
  {
    question: 'What is a Delulu Meter?',
    answer:
      'A Delulu Meter is a fun, lighthearted calculator that analyzes your thoughts, crush interactions, or life scenarios to calculate how delusional (delulu) you might be about them.',
  },
  {
    question: 'How is the Delulu Score calculated?',
    answer:
      'The score is calculated deterministically using a combination of your text scenario (hashed to produce a baseline) and the weight of the checkboxes you select.',
  },
  {
    question: 'Is my input scenario private?',
    answer:
      'Yes, 100%. All processing is done locally inside your browser. No data is sent to a server or stored anywhere.',
  },
];

export const TOOL_ABOUT = [
  'The Delulu Meter is an interactive calculator built for fun, allowing you to gauge your levels of optimism, denial, and obsession.',
  'By inputting any scenario or thought and checking off various reality parameters, you can view your diagnostic delusion score, read custom roasts, and see a breakdown across parameters like Reality Gap and Denial.',
  'Remember, being a little delulu is sometimes the only solulu, but this tool is purely for entertainment purposes!',
];
