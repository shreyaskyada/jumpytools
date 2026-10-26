'use client';

import { useState, useCallback, useMemo } from 'react';
import { computeAllHashes } from './engine';
import { HashEncoding, HashGeneratorState, HashOptions, HashResults } from './types';

const INITIAL_RESULTS: HashResults = {
  md5: '',
  sha1: '',
  sha224: '',
  sha256: '',
  sha384: '',
  sha512: '',
};

export function useHashGenerator(initialInput = '') {
  const [input, setInputState] = useState<string>(initialInput);
  const [options, setOptions] = useState<HashOptions>({
    uppercase: false,
    encoding: 'hex',
  });

  // Purely computed or memoized results
  const results = useMemo<HashResults>(() => {
    if (!input) {
      return INITIAL_RESULTS;
    }
    return computeAllHashes(input, options);
  }, [input, options]);

  const setInput = useCallback((value: string) => {
    setInputState(value);
  }, []);

  const setUppercase = useCallback((uppercase: boolean) => {
    setOptions((prev) => ({ ...prev, uppercase }));
  }, []);

  const setEncoding = useCallback((encoding: HashEncoding) => {
    setOptions((prev) => ({ ...prev, encoding }));
  }, []);

  const clear = useCallback(() => {
    setInputState('');
  }, []);

  const loadSample = useCallback((sampleText = 'Hello, Jumpytools!') => {
    setInputState(sampleText);
  }, []);

  const state: HashGeneratorState = useMemo(
    () => ({
      input,
      options,
      results,
      isProcessing: false,
    }),
    [input, options, results]
  );

  return {
    state,
    setInput,
    setUppercase,
    setEncoding,
    clear,
    loadSample,
  };
}
