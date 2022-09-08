import React from 'react';

import { useMediaQuery } from './mediaQuery.hook';
import {
  MediaQuery,
  MediaQueryMatchType,
  MediaQueryOptions,
  MediaQueryPreset
} from './mediaQuery.types';
import { getMediaQueries } from '@widgets/media-queries/mediaQuery.helper';
import { IStyle, mergeStyles } from '@fluentui/react';

/**
 * Wrap styles in the specified media query
 */
const createMediaQuery = (
  mediaQuery: MediaQuery,
  styles: IStyle,
  defaultStyles: IStyle = {}
): Record<string, unknown> => {
  const queries = getMediaQueries(mediaQuery);
  return {
    ...(defaultStyles as Record<string, unknown>),
    ...queries.reduce((acc: Record<string, unknown>, current: string) => {
      acc[`@media ${current}`] = styles;
      return acc;
    }, {})
  };
};

export const mediaDesktop = (styles: IStyle): Record<string, unknown> => {
  return createMediaQuery(
    { matchType: MediaQueryMatchType.From, query: MediaQueryPreset.Large },
    styles
  );
};

/**
 * Wrapper component that will visible if the MediaQuery + MatchType matches.
 * By default, this uses CSS media queries, so it works on page load before JS is loaded.
 * If required, for performance or other specific reasons, use forceJavascript=true to only render the children if MediaQuery + MatchType matches
 */
export const Media: React.FC<MediaQuery & MediaQueryOptions> = ({
  forceJavaScript = false,
  as = 'div',
  matchType,
  query,
  children
}) => {
  const { isMatch } = useMediaQuery({ query, matchType });

  if (isMatch) {
    if (as) {
      return React.createElement(as, {}, children);
    }
    return <React.Fragment>{children}</React.Fragment>;
  }

  if (!forceJavaScript) {
    const mediaQuery: MediaQuery = { query, matchType };
    return React.createElement(
      as || 'div',
      {
        className: mergeStyles(
          createMediaQuery(
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

/**
 * Media Wrapper component for Media matching Mobile screen sizes.
 * Defaults to Medium and down.
 */
export const Mobile: React.FC<
  Partial<Pick<MediaQuery, 'matchType'>> & MediaQueryOptions
> = ({ matchType = MediaQueryMatchType.To, forceJavaScript, as, children }) => {
  return (
    <Media
      matchType={matchType}
      query={MediaQueryPreset.Medium}
      forceJavaScript={forceJavaScript}
      as={as}
    >
      {children}
    </Media>
  );
};

/**
 * Media Wrapper component for Media matching Desktop screen sizes.
 * Defaults to Large and up.
 */
export const Desktop: React.FC<
  Partial<Pick<MediaQuery, 'matchType'>> & MediaQueryOptions
> = ({
  matchType = MediaQueryMatchType.From,
  forceJavaScript,
  as,
  children
}) => {
  return (
    <Media
      matchType={matchType}
      query={MediaQueryPreset.Large}
      forceJavaScript={forceJavaScript}
      as={as}
    >
      {children}
    </Media>
  );
};
