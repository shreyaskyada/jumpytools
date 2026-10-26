import { MAX_INPUT_LENGTH } from './constants';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateHashInput(input: string): ValidationResult {
  if (typeof input !== 'string') {
    return { isValid: false, error: 'Input must be a valid string.' };
  }

  if (input.length > MAX_INPUT_LENGTH) {
    return {
      isValid: false,
      error: `Input text exceeds the maximum supported length of ${(MAX_INPUT_LENGTH / 1000).toLocaleString()} KB.`,
    };
  }

  return { isValid: true };
}
