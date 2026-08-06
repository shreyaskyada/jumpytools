'use client';

import { useState, useCallback } from 'react';
import { calculateDelulu } from './engine';
import { validateStatement } from './validators';
import { DeluluResult } from './types';

export function useDeluluMeter() {
  const [statement, setStatement] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ statement?: string }>({});
  const [result, setResult] = useState<DeluluResult | null>(null);

  const toggleQuestion = useCallback((id: string) => {
    setSelectedQuestions((prev) =>
      prev.includes(id) ? prev.filter((qId) => qId !== id) : [...prev, id]
    );
  }, []);

  const calculate = useCallback(() => {
    const errs: { statement?: string } = {};

    if (!validateStatement(statement)) {
      errs.statement = 'Please enter a scenario or thought (3-500 characters).';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setResult(null);
      return;
    }

    setErrors({});
    const res = calculateDelulu(statement, selectedQuestions);
    setResult(res);
  }, [statement, selectedQuestions]);

  const clear = useCallback(() => {
    setStatement('');
    setSelectedQuestions([]);
    setErrors({});
    setResult(null);
  }, []);

  return {
    state: {
      statement,
      selectedQuestions,
      errors,
      result,
    },
    setStatement,
    toggleQuestion,
    calculate,
    clear,
  };
}

export default useDeluluMeter;
