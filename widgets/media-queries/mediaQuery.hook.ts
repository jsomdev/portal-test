import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { getInitialMediaQueryMatchState } from './';
import { getMediaQueries } from './mediaQuery.helper';
import {
  MediaQuery,
  MediaQueryHook,
  MediaQueryMatchAction,
  MediaQueryMatchState,
  MediaQueryMatchType,
  MediaQueryPreset,
} from './mediaQuery.types';

function mediaQueryReducer(state: MediaQueryMatchState, action: MediaQueryMatchAction): MediaQueryMatchState {
  switch (action.type) {
    case 'update':
      return {
        [action.query]: action.isMatch,
      };
  }
  return state;
}

/**
 * Hook that will match the passed media query or preset with the current screen size
 * @param mediaQuery string or
 * @returns true if matches the passed media query
 * TODO: Create MediaQueryProvider and Provide Server Side initial values
 */
export const useMediaQuery = (mediaQuery: string | MediaQuery, initialState?: MediaQueryMatchState): MediaQueryHook => {
  const [state, dispatch] = useReducer(mediaQueryReducer, initialState || {});

  const matchesAny: boolean = useMemo(() => {
    return Object.values(state).includes(true);
  }, [state]);

  const update = useCallback(
    (media: string, matches: boolean) => {
      dispatch({
        type: 'update',
        isMatch: matches,
        query: media,
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
      console.error('You cannot use this hook in a node.js environment. It must be run client-side');
      return;
    }
    const queries: string[] = getMediaQueries(mediaQuery);
    if (!queries.length) {
      return;
    }
    const mediaQueryList: MediaQueryList = window.matchMedia(queries.join(','));
    update(mediaQueryList.media, mediaQueryList.matches);
    mediaQueryList.onchange = onChange;

    return () => {
      mediaQueryList.onchange = null;
    };
  }, []);

  return {
    isMatch: matchesAny,
  };
};

export const useExtraSmall = (matchType: MediaQueryMatchType = MediaQueryMatchType.From) => {
  const query: MediaQuery = {
    query: MediaQueryPreset.ExtraSmall,
    matchType,
  };
  const { isMatch: isExtraSmall } = useMediaQuery(query, getInitialMediaQueryMatchState(query));
  return isExtraSmall;
};
export const useSmall = (matchType: MediaQueryMatchType = MediaQueryMatchType.From) => {
  const query: MediaQuery = {
    query: MediaQueryPreset.Small,
    matchType,
  };
  const { isMatch: isSmall } = useMediaQuery(query, getInitialMediaQueryMatchState(query));

  return isSmall;
};
export const useMedium = (matchType: MediaQueryMatchType = MediaQueryMatchType.From) => {
  const query: MediaQuery = {
    query: MediaQueryPreset.Medium,
    matchType,
  };
  const { isMatch: isMedium } = useMediaQuery(query, getInitialMediaQueryMatchState(query));

  return isMedium;
};
export const useLarge = (matchType: MediaQueryMatchType = MediaQueryMatchType.From) => {
  const query: MediaQuery = {
    query: MediaQueryPreset.Large,
    matchType,
  };
  const initialState = getInitialMediaQueryMatchState(query);
  const { isMatch: isLarge } = useMediaQuery(query, initialState);

  return isLarge;
};

export const useExtraLarge = (matchType: MediaQueryMatchType = MediaQueryMatchType.From) => {
  const query: MediaQuery = {
    query: MediaQueryPreset.ExtraLarge,
    matchType,
  };
  const { isMatch: isExtraLarge } = useMediaQuery(query, getInitialMediaQueryMatchState(query));
  return isExtraLarge;
};
