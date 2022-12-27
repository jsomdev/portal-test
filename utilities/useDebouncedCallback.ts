/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react';

/**
 * Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
 * @param func The function to be called
 * @param wait Wait period after function hasn't been called for
 * @returns A memoized function that is debounced
 */
export const useDebouncedCallback = (func: any, wait: number): any => {
  const timeout = useRef<number | undefined>();
  // Use a ref to store the timeout between renders
  // and prevent changes to it from causing re-renders
  return useCallback(
    (...args: any[]) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait) as unknown as
        | number
        | undefined;
    },
    [func, wait]
  );
};
