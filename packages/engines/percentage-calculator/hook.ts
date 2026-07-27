'use client';

import { useState, useCallback } from 'react';
import { PercentageCalculatorState, PercentageMode } from './types';
import { INITIAL_STATE } from './constants';
import { isValidNumber } from './validators';
import {
  calculatePctOf,
  calculateRatio,
  calculateChange,
  calculateTotal,
  calculateAddSubtract,
} from './engine';

export function usePercentageCalculator() {
  const [state, setState] = useState<PercentageCalculatorState>(INITIAL_STATE);

  const setActiveMode = useCallback((mode: PercentageMode) => {
    setState((prev) => ({ ...prev, activeMode: mode }));
  }, []);

  const setPctOfX = useCallback((val: string) => {
    setState((prev) => {
      const xVal = val;
      const yVal = prev.pctOf.y;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculatePctOf(Number(xVal), Number(yVal))
          : null;
      return {
        ...prev,
        pctOf: { ...prev.pctOf, x: xVal, result },
      };
    });
  }, []);

  const setPctOfY = useCallback((val: string) => {
    setState((prev) => {
      const xVal = prev.pctOf.x;
      const yVal = val;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculatePctOf(Number(xVal), Number(yVal))
          : null;
      return {
        ...prev,
        pctOf: { ...prev.pctOf, y: yVal, result },
      };
    });
  }, []);

  const setRatioX = useCallback((val: string) => {
    setState((prev) => {
      const xVal = val;
      const yVal = prev.ratio.y;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateRatio(Number(xVal), Number(yVal))
          : null;
      return {
        ...prev,
        ratio: { ...prev.ratio, x: xVal, result },
      };
    });
  }, []);

  const setRatioY = useCallback((val: string) => {
    setState((prev) => {
      const xVal = prev.ratio.x;
      const yVal = val;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateRatio(Number(xVal), Number(yVal))
          : null;
      return {
        ...prev,
        ratio: { ...prev.ratio, y: yVal, result },
      };
    });
  }, []);

  const setChangeX = useCallback((val: string) => {
    setState((prev) => {
      const xVal = val;
      const yVal = prev.change.y;
      const resObj =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateChange(Number(xVal), Number(yVal))
          : null;
      return {
        ...prev,
        change: {
          ...prev.change,
          x: xVal,
          result: resObj ? resObj.result : null,
          isIncrease: resObj ? resObj.isIncrease : null,
        },
      };
    });
  }, []);

  const setChangeY = useCallback((val: string) => {
    setState((prev) => {
      const xVal = prev.change.x;
      const yVal = val;
      const resObj =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateChange(Number(xVal), Number(yVal))
          : null;
      return {
        ...prev,
        change: {
          ...prev.change,
          y: yVal,
          result: resObj ? resObj.result : null,
          isIncrease: resObj ? resObj.isIncrease : null,
        },
      };
    });
  }, []);

  const setTotalX = useCallback((val: string) => {
    setState((prev) => {
      const xVal = val;
      const yVal = prev.total.y;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateTotal(Number(xVal), Number(yVal))
          : null;
      return {
        ...prev,
        total: { ...prev.total, x: xVal, result },
      };
    });
  }, []);

  const setTotalY = useCallback((val: string) => {
    setState((prev) => {
      const xVal = prev.total.x;
      const yVal = val;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateTotal(Number(xVal), Number(yVal))
          : null;
      return {
        ...prev,
        total: { ...prev.total, y: yVal, result },
      };
    });
  }, []);

  const setAddSubtractX = useCallback((val: string) => {
    setState((prev) => {
      const xVal = val;
      const yVal = prev.addSubtract.y;
      const op = prev.addSubtract.op;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateAddSubtract(Number(xVal), Number(yVal), op)
          : null;
      return {
        ...prev,
        addSubtract: { ...prev.addSubtract, x: xVal, result },
      };
    });
  }, []);

  const setAddSubtractY = useCallback((val: string) => {
    setState((prev) => {
      const xVal = prev.addSubtract.x;
      const yVal = val;
      const op = prev.addSubtract.op;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateAddSubtract(Number(xVal), Number(yVal), op)
          : null;
      return {
        ...prev,
        addSubtract: { ...prev.addSubtract, y: yVal, result },
      };
    });
  }, []);

  const setAddSubtractOp = useCallback((op: 'add' | 'subtract') => {
    setState((prev) => {
      const xVal = prev.addSubtract.x;
      const yVal = prev.addSubtract.y;
      const result =
        isValidNumber(xVal) && isValidNumber(yVal)
          ? calculateAddSubtract(Number(xVal), Number(yVal), op)
          : null;
      return {
        ...prev,
        addSubtract: { ...prev.addSubtract, op, result },
      };
    });
  }, []);

  return {
    state,
    setActiveMode,
    setPctOfX,
    setPctOfY,
    setRatioX,
    setRatioY,
    setChangeX,
    setChangeY,
    setTotalX,
    setTotalY,
    setAddSubtractX,
    setAddSubtractY,
    setAddSubtractOp,
  };
}
