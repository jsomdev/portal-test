import React from 'react';

import { useMediaQuery } from './mediaQuery.hook';
import {
  MediaQuery,
  MediaQueryMatchType,
  MediaQueryPreset
} from './mediaQuery.types';
import { getMediaQueries } from '@widgets/media-queries/mediaQuery.helper';
import { mergeStyles, mergeStyleSets } from '@fluentui/react';

const createCSSMediaQuery = (
  mediaQuery: MediaQuery,
  styles: any,
  defaultStyles: any = {}
): { root: any } => {
  const queries = getMediaQueries(mediaQuery);
  return {
    ...defaultStyles,
    ...queries.reduce((acc: any, current: string) => {
      acc[`@media ${current}`] = styles;
      return acc;
    }, {})
  };
};

export const desktopCSS = (styles: any) => {
  return createCSSMediaQuery(
    { matchType: MediaQueryMatchType.From, query: MediaQueryPreset.Large },
    styles
  );
};

export const getMediaQueryCSS = (query: MediaQuery, styles: any) => {
  return createCSSMediaQuery(query, styles);
};

/**
 * Wrapper component that will render the children if the MediaQuery + MatchType matches.
 */
export const Media: React.FC<
  MediaQuery & { forceJavaScript?: boolean; as?: string }
> = ({ forceJavaScript = false, as = 'div', matchType, query, children }) => {
  const { isMatch } = useMediaQuery({ query, matchType });

  if (isMatch) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  if (!forceJavaScript) {
    const mediaQuery: MediaQuery = { query, matchType };
    return React.createElement(
      as,
      {
        className: mergeStyles(
          createCSSMediaQuery(
            mediaQuery,
            { display: 'block' },
            { display: 'none' }
          )
        )
      },
      children
    );
  }

  return null;
};

export const Mobile: React.FC<Partial<Pick<MediaQuery, 'matchType'>>> = ({
  matchType = MediaQueryMatchType.To,
  children
}) => {
  return (
    <Media matchType={matchType} query={MediaQueryPreset.Medium}>
      {children}
    </Media>
  );
};

/**
 * Media Wrapper component for Media matching Medium screen sizes.
 * Defaults to Medium and up.
 */
export const Desktop: React.FC<Partial<Pick<MediaQuery, 'matchType'>>> = ({
  matchType = MediaQueryMatchType.From,
  children
}) => {
  return (
    <Media matchType={matchType} query={MediaQueryPreset.Large}>
      {children}
    </Media>
  );
};
