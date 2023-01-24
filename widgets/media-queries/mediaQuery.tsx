import React from 'react';

import { IStyle } from '@fluentui/react';

import {
  Breakpoint,
  Media,
  MediaProps,
  MediaQuery,
  getMediaQueryString
} from './media';

/**
 * Wrap styles in the specified media query
 */
const createMediaQuery = (
  mediaQuery: MediaQuery,
  styles: IStyle
): Record<string, unknown> => {
  const queries = getMediaQueryString(mediaQuery);
  return {
    [`@media ${queries}`]: styles
  };
};

/**
 * Wrap styles in the specified media query, greater or equal than breakpoint
 */
export const mediaQueryFrom = (
  breakpoint: Breakpoint,
  styles: IStyle
): Record<string, unknown> => {
  return createMediaQuery({ match: 'greaterThanOrEqual', breakpoint }, styles);
};

/**
 * Media Wrapper component for Media matching Mobile screen sizes.
 * <Media at="sm">
 */
export const Mobile: React.FC<
  Pick<MediaProps, 'className' | 'children'>
> = props => {
  const { children, ...otherProps } = props;
  return (
    <Media {...otherProps} between={['mobile', 'tablet']}>
      {children}
    </Media>
  );
};

/**
 * Media Wrapper component for Media matching Tablet and Desktop screen sizes.
 * <Media greaterThan="mobile">
 */
export const TabletAndDesktop: React.FC<
  Pick<MediaProps, 'className' | 'children'>
> = props => {
  const { children, ...otherProps } = props;
  return (
    <Media {...otherProps} greaterThan="largePhone">
      {children}
    </Media>
  );
};

/**
 * Media Wrapper component for Media matching Tablet screen sizes.
 * <Media greaterThan="mobile">
 */
export const Tablet: React.FC<
  Pick<MediaProps, 'className' | 'children'>
> = props => {
  const { children, ...otherProps } = props;
  return (
    <Media {...otherProps} at="tablet">
      {children}
    </Media>
  );
};
