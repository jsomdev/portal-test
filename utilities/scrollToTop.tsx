import { useEffect, useState } from 'react';

export function scrollToTop(
  querySelector: string = '#page-content',
  behavior: 'auto' | 'smooth' = 'smooth'
): void {
  const element = document.querySelector(querySelector);

  if (element !== null) {
    if (querySelector !== '#page-content') {
      /**
       * Make sure scrollIntoView is supported. It is done by checking if the property is a function
       * This check has been added based on feedback from users that were - supposedly - using an older version of
       * Edge or IE, where Element.scrollTo was not supported.
       * If needed to polyfill please refer to this stackOverflow  (saved for future reference: https://stackoverflow.com/questions/52276194/window-scrollto-with-options-not-working-on-microsoft-edge)
       */
      if (typeof element.scrollIntoView === 'function') {
        element.scrollIntoView({ behavior });
      } else {
        console.warn(
          'Element.scrollIntoView is not supported. A possible reason could be that you are using an outdated browser / browser version'
        );
      }
    } else {
      /**
       * Make sure scrollIntoView is supported. It is done by checking if the property is a function
       * This check has been added based on feedback from users that were - supposedly - using an older version of
       * Edge or IE, where Element.scrollTo was not supported.
       * If needed to polyfill please refer to this stackOverflow  (saved for future reference: https://stackoverflow.com/questions/52276194/window-scrollto-with-options-not-working-on-microsoft-edge)
       */
      if (typeof element.scrollTo === 'function') {
        element.scrollTo({ top: 0, behavior });
      } else {
        console.warn(
          'Element.scrollTo is not supported. A possible reason could be that you are using an outdated browser / browser version'
        );
      }
    }
  }
}

export const usePageScroll = (
  threshold?: number
): { isScrolledDown: boolean } => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  function evaluateScroll(ev: Event) {
    const scrollingElement: Element | null | undefined = (ev.target as Document)
      ?.scrollingElement;
    if (scrollingElement) {
      if (scrollingElement.scrollTop > (threshold || 0)) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', evaluateScroll);

    return () => {
      window.removeEventListener('scroll', evaluateScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isScrolledDown
  };
};
