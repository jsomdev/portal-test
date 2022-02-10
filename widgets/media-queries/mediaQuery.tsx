import React from 'react';

import { useMediaQuery } from './mediaQuery.hook';
import {
  MediaQuery,
  MediaQueryMatchType,
  MediaQueryPreset
} from './mediaQuery.types';

/**
 * Wrapper component that will render the children if the MediaQuery + MatchType matches.
 */
export const Media: React.FC<MediaQuery> = ({ matchType, query, children }) => {
  const { isMatch } = useMediaQuery({ query, matchType });

  if (isMatch) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return null;
};

/**
 * Media Wrapper component for Media matching Medium screen sizes.
 * Defaults to Medium and up.
 */
export const Medium: React.FC<Partial<Pick<MediaQuery, 'matchType'>>> = ({
  matchType = MediaQueryMatchType.From,
  children
}) => {
  return (
    <Media matchType={matchType} query={MediaQueryPreset.Medium}>
      {children}
    </Media>
  );
};

/**
 * Media Wrapper component for Media matching Large screen sizes.
 * Defaults to Large and up.
 */
export const Large: React.FC<Partial<Pick<MediaQuery, 'matchType'>>> = ({
  matchType = MediaQueryMatchType.From,
  children
}) => {
  return (
    <Media matchType={matchType} query={MediaQueryPreset.Large}>
      {children}
    </Media>
  );
};
