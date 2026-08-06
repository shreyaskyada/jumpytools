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
  {
    question: 'What is the origin of the term "Delulu"?',
    answer:
      'The slang term "delulu" originated in the K-Pop fan community around 2014 to describe fans who held delusional beliefs about their relationship with K-Pop idols. It has since entered mainstream internet slang, especially on TikTok and Twitter/X.',
  },
  {
    question: 'Is "delulu" always a bad thing?',
    answer:
      'No! While delusion has clinical and negative connotations in psychology, the internet phrase "delulu is the solulu" suggests that a healthy dose of blind optimism, self-belief, and wishful thinking can help boost confidence and manifest career or personal goals.',
  },
  {
    question: 'How do the scoring tiers work on the Delulu Meter?',
    answer:
      'Scores below 30% represent a realistic outlook. Scores between 30% and 60% indicate mild, harmless daydreams. Scores above 60% transition into high delusion, prompting the engine to generate humorous roasts and reality checks.',
  },
];

export const TOOL_ABOUT = [
  'The Delulu Meter is an interactive, entertaining diagnostic utility built to measure your levels of internet-slang delusion ("delulu"). It acts as a playful self-assessment tool, analyzing life or relationship scenarios against a set of comical checklist parameters.',
  'By entering any scenario or thought—such as a crush interaction, career aspiration, or daily overthinking—and selecting checkboxes that represent common delusional habits, the engine calculates a diagnostic percentage. The result includes a custom reality gap score, denial level, obsession scale, and a healthy dose of hope, alongside a lighthearted roast.',
  'Technically, the application combines deterministic input hashing with weighted question coefficients. The text of the scenario you enter is mapped to a numeric hash code, which forms the individual baseline of the calculation. Selecting checkboxes then adds specific weights to determine the final score and breakdown.',
  'Privacy is a fundamental cornerstone of Jumpytools. The Delulu Meter operates entirely within the user\'s local web browser environment. Neither your typed scenario nor the checkboxes you select are transmitted to external databases or analytics platforms, ensuring your secret daydreams remain entirely confidential.',
  'Remember, the internet coined the phrase "delulu is the solulu" as a humorous testament to self-confidence. This tool is designed purely for fun and entertainment, and should not be used as a substitute for real-world psychological evaluation or relationship advice.',
];

