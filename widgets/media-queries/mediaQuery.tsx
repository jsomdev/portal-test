import React from 'react';

import { useMediaQuery } from './mediaQuery.hook';
import {
  MediaQuery,
  MediaQueryMatchType,
  MediaQueryPreset
} from './mediaQuery.types';
import { getMediaQueries } from '@widgets/media-queries/mediaQuery.helper';
import { IStyle, mergeStyles } from '@fluentui/react';

const createCSSMediaQuery = (
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
  return createCSSMediaQuery(
    { matchType: MediaQueryMatchType.From, query: MediaQueryPreset.Large },
    styles
  );
};

/**
 * Wrapper component that will render the children if the MediaQuery + MatchType matches.
 */
export const Media: React.FC<
  MediaQuery & {
    forceJavaScript?: boolean;
    as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  }
> = ({ forceJavaScript = false, as = 'div', matchType, query, children }) => {
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
