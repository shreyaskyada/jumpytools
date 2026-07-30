import { FlamesResult, FlamesLetter } from './types';

export function calculateFlames(name1: string, name2: string): FlamesResult {
  const n1 = name1.toLowerCase().replace(/[^a-z]/g, '');
  const n2 = name2.toLowerCase().replace(/[^a-z]/g, '');

  if (!n1 || !n2) {
    return {
      letter: 'F',
      relationship: 'Friendship',
      meaning: 'Friendship',
      description: 'Please enter valid names containing letters.',
      color: 'text-blue-500',
      remainingCount: 0,
    };
  }

  const arr1 = n1.split('');
  const arr2 = n2.split('');

  // Cancel out common characters
  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i];
    if (char) {
      const idx = arr2.indexOf(char);
      if (idx !== -1) {
        arr1.splice(i, 1);
        arr2.splice(idx, 1);
        i--;
      }
    }
  }

  const remainingCount = arr1.length + arr2.length;
  const count = remainingCount === 0 ? 6 : remainingCount;

  const flames: FlamesLetter[] = ['F', 'L', 'A', 'M', 'E', 'S'];
  let index = 0;
  while (flames.length > 1) {
    index = (index + count - 1) % flames.length;
    flames.splice(index, 1);
  }

  const letter = flames[0] || 'F';

  const details: Record<
    FlamesLetter,
    {
      relationship: FlamesResult['relationship'];
      meaning: string;
      description: string;
      color: string;
    }
  > = {
    F: {
      relationship: 'Friendship',
      meaning: 'Good Friends',
      description: 'Your relationship is built on a solid foundation of trust, laughter, and companionship.',
      color: 'text-blue-500',
    },
    L: {
      relationship: 'Love',
      meaning: 'True Love',
      description: 'Deep affection, strong chemistry, and a beautiful romantic future together.',
      color: 'text-pink-500',
    },
    A: {
      relationship: 'Affection',
      meaning: 'Affectionate Bond',
      description: 'A warm and tender bond filled with care, empathy, and fondness.',
      color: 'text-purple-500',
    },
    M: {
      relationship: 'Marriage',
      meaning: 'Marriage Partners',
      description: 'A lifelong commitment of harmony, shared values, and beautiful partnership.',
      color: 'text-rose-500',
    },
    E: {
      relationship: 'Enemy',
      meaning: 'Fierce Competitors',
      description: 'You might frequently clash, but remember: opposites attract and passion runs high!',
      color: 'text-red-500',
    },
    S: {
      relationship: 'Sister (Sibling)',
      meaning: 'Sibling-like Connection',
      description: 'A protective, teasing, and deeply supportive connection resembling siblings.',
      color: 'text-amber-500',
    },
  };

  const info = details[letter];
  return {
    letter,
    relationship: info.relationship,
    meaning: info.meaning,
    description: info.description,
    color: info.color,
    remainingCount,
  };
}
