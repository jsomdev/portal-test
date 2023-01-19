import React, { useCallback, useEffect, useRef } from 'react';

/**
 * Hook that triggers a handler when a click outside of the ref occurs
 * @param handler Callback function when a click happens outside of the ref
 * @returns ref MutableRefObject that must added to the element for which you want to use the functionality for
 */
export default function useOnClickOutside<TElement extends HTMLElement>(
  handler: () => void
): {
  ref: React.MutableRefObject<TElement | null>;
} {
  const ref = useRef<TElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        handler();
      }
    },
    [handler]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { ref };
}
