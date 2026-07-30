'use client';

import { useState, useCallback } from 'react';
import { calculateFlames } from './engine';
import { validateName } from './validators';
import { FlamesResult } from './types';

export function useFlamesGame() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');

  const [errors, setErrors] = useState<{ name1?: string; name2?: string }>({});
  const [result, setResult] = useState<FlamesResult | null>(null);

  const calculate = useCallback(() => {
    const errs: { name1?: string; name2?: string } = {};

    if (!validateName(name1)) {
      errs.name1 = 'Please enter a valid name (letters only, 1-50 characters).';
    }
    if (!validateName(name2)) {
      errs.name2 = 'Please enter a valid name (letters only, 1-50 characters).';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setResult(null);
      return;
    }

    setErrors({});
    const res = calculateFlames(name1, name2);
    setResult(res);
  }, [name1, name2]);

  const clear = useCallback(() => {
    setName1('');
    setName2('');
    setErrors({});
    setResult(null);
  }, []);

  return {
    state: {
      name1,
      name2,
      errors,
      result,
    },
    setName1,
    setName2,
    calculate,
    clear,
  };
}

export default useFlamesGame;
