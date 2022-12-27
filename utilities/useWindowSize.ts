import { useEffect, useState } from 'react';

export function useWindowSize(): {
  width: number | undefined;
  height: number | undefined;
} {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler to call on window resize
    function onWindowResize() {
      // Update State

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    // Add event listener
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
