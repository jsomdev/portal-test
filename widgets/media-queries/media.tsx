import { createMedia } from '@artsy/fresnel';
import {
  CreateMediaResults,
  MediaProps as FresnelMediaProps,
  MediaBreakpointProps
} from '@artsy/fresnel/dist/Media';

const breakpoints = {
  mobile: 0,
  tablet: 1024,
  desktop: 1280
};

export type Breakpoint = keyof typeof breakpoints;

export type MediaProps = FresnelMediaProps<Breakpoint, never>;

const sprayMedia: CreateMediaResults<Breakpoint, never> = createMedia({
  breakpoints
});

// Generate CSS to be injected into the head
export const mediaStyles = sprayMedia.createMediaStyle();
export const { Media, MediaContextProvider, SortedBreakpoints } = sprayMedia;

type GetMediaQueryType<TType> = TType extends 'between'
  ? {
      breakpoint: [Breakpoint, Breakpoint];
      match: TType;
    }
  : {
      breakpoint: Breakpoint;
      match: TType;
    };

export type MediaQuery = GetMediaQueryType<keyof MediaBreakpointProps>;

const getMediaQueryWidths = (
  query: MediaQuery
): { minWidth?: number; maxWidth?: number } => {
  switch (query.match) {
    case 'at': {
      const minWidth = breakpoints[query.breakpoint];
      const maxWidth =
        breakpoints[
          SortedBreakpoints[SortedBreakpoints.indexOf(query.breakpoint) + 1]
        ];

      const largestBreakpoint = SortedBreakpoints[SortedBreakpoints.length - 1];
      if (query.breakpoint === largestBreakpoint) {
        console.warn(
          '`at` is being used with the largest breakpoint. ' +
            "Consider using {matchType: 'greaterThanOrEqual', mediaType:" +
            `'${largestBreakpoint}'} to account for future ` +
            `breakpoint definitions outside of this range.`
        );
      }
      return { minWidth, maxWidth };
    }
    case 'between': {
      if (query.breakpoint[0] === query.breakpoint[1]) {
        throw new Error(`Invalid media query: ${JSON.stringify(query)}`);
      }
      const minWidth = breakpoints[query.breakpoint[0]];

      //get width from breakpoint that it is 1 step smaller
      const maxWidth =
        breakpoints[
          SortedBreakpoints[SortedBreakpoints.indexOf(query.breakpoint[1])]
        ];

      if (minWidth >= maxWidth || (!minWidth && !maxWidth)) {
        throw new Error(`Invalid media query: ${JSON.stringify(query)}`);
      }
      return { minWidth, maxWidth };
    }
    case 'greaterThan': {
      const nextBreakpoint =
        SortedBreakpoints[SortedBreakpoints.indexOf(query.breakpoint) + 1];
      return { minWidth: breakpoints[nextBreakpoint] };
    }
    case 'greaterThanOrEqual': {
      return { minWidth: breakpoints[query.breakpoint] };
    }
    case 'lessThan': {
      const maxWidth = breakpoints[query.breakpoint];
      if (maxWidth <= 0) {
        throw new Error(`Invalid media query: ${JSON.stringify(query)}`);
      }
      return { maxWidth };
    }
  }
};

export const getMediaQueryString = (query: MediaQuery): string => {
  const widths = getMediaQueryWidths(query);
  if (widths.minWidth === undefined) {
    if (widths.maxWidth === undefined) {
      throw new Error(`Invalid media query: ${JSON.stringify(query)}`);
    }
    return `(max-width:${widths.maxWidth - 0.02}px)`;
  }
  if (widths.maxWidth === undefined) {
    return `(min-width:${widths.minWidth}px)`;
  }
  return `(min-width:${widths.minWidth}px) and (max-width:${
    widths.maxWidth - 0.02
  }px)`;
};
