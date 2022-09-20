import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { getMediaQueryString } from '@widgets/media-queries/media';
import { MediaQuery } from '@widgets/media-queries/media';

import {
  MediaQueryHook,
  MediaQueryMatchAction,
  MediaQueryMatchState
} from './mediaQuery.types';

function mediaQueryReducer(
  state: MediaQueryMatchState,
  action: MediaQueryMatchAction
): MediaQueryMatchState {
  switch (action.type) {
    case 'update':
      return {
        [action.query]: action.isMatch
      };
  }
  return state;
}

/**
 * Hook that will match the passed media query or preset with the current screen size
 * @param mediaQuery string or
 * @returns true if matches the passed media query
 */
export const useMediaQuery = (mediaQuery: MediaQuery): MediaQueryHook => {
  const [state, dispatch] = useReducer(mediaQueryReducer, {});

  const matchesAny: boolean = useMemo(() => {
    return Object.values(state).includes(true);
  }, [state]);

  const update = useCallback(
    (media: string, matches: boolean) => {
      dispatch({
        type: 'update',
        isMatch: matches,
        query: media
      });
    },
    [dispatch]
  );

  const onChange = useCallback(
    (event: MediaQueryListEvent) => {
      update(event.media, event.matches);
    },
    [update]
  );

  useEffect(() => {
    if (!window) {
      console.error(
        'You cannot use this hook in a node.js environment. It must be run client-side'
      );
      return;
    }
    const query: string = getMediaQueryString(mediaQuery);
    const mediaQueryList: MediaQueryList = window.matchMedia(query);
    update(mediaQueryList.media, mediaQueryList.matches);
    mediaQueryList.onchange = onChange;

    return () => {
      mediaQueryList.onchange = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isMatch: matchesAny
  };
};

export const useMobile = (): boolean =>
  useMediaQuery({
    match: 'at',
    breakpoint: 'mobile'
  }).isMatch;

export const useTablet = (): boolean =>
  useMediaQuery({
    match: 'at',
    breakpoint: 'tablet'
  }).isMatch;

export const useTabletAndDesktop = (): boolean =>
  useMediaQuery({
    match: 'greaterThanOrEqual',
    breakpoint: 'tablet'
  }).isMatch;

export const useDesktop = (): boolean =>
  useMediaQuery({
    match: 'at',
    breakpoint: 'desktop'
  }).isMatch;
