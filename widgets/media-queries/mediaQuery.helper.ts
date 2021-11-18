import UAParser from 'ua-parser-js';

import {
  MediaQuery,
  MediaQueryMatchState,
  MediaQueryMatchType,
  MediaQueryPreset,
} from './mediaQuery.types';

/**
 * Function that gets the device type from the User Agent string parser and returns the most conform to our needs.
 *
 * @returns The most conform device type value.
 */
export function getDeviceTypeClientHint(parser: UAParser): 'mobile' | 'tablet' | 'other' {
  /**
   * @see UAParser.IDevice for possible values
   */
  const deviceTypeClientHint: string | undefined = parser.getDevice().type;

  switch (deviceTypeClientHint) {
    case 'mobile':
      return 'mobile';
    case 'tablet':
      return 'tablet';
    // All other device types are categorized as 'other' since they have no relevance to us
    default:
      return 'other';
  }
}
/**
 * Function that will check if there's an initial match, based on device type, for the query that is passed as parameter.
 * This function is very useful to get an approximate initial MatchState when SSR.
 * @param query MediaQuery with MediaQueryPreset or string value representing the mediaQuery
 * @returns MediaQueryMatchState that's either empty if there's no match or has the [query] value set to true
 */
export function getInitialMediaQueryMatchState(query: MediaQuery): MediaQueryMatchState {
  let matchState: MediaQueryMatchState = {};
  const mediaQueries: string[] = getMediaQueries(query);

  let deviceType: 'mobile' | 'tablet' | 'other' = getDeviceTypeClientHint(new UAParser());

  function matchQueries(isMatch: boolean) {
    matchState = {
      [mediaQueries.join(',')]: isMatch,
    };
  }
  if (deviceType)
    switch (query.query) {
      case MediaQueryPreset.ExtraSmall:
      case MediaQueryPreset.Small:
        if (deviceType === 'mobile') {
          matchQueries(true);
        }
        break;
      case MediaQueryPreset.Medium:
        if (deviceType === 'tablet') {
          matchQueries(true);
        }
        break;
      case MediaQueryPreset.Large:
      case MediaQueryPreset.ExtraLarge:
        if (deviceType === 'other') {
          matchQueries(true);
        }
        break;
      default:
        break;
    }
  return matchState;
}

/**
 * Function that will, based on the parameter, build an array with all matching media query string values.
 * (e.g: This function is called with the following MediaQuery parameter:
 * {query: MediaQueryPreset.Medium, matchType: MediaQueryMatchType.From}
 * This function will get all MediaQueryPresets that follow MediaQueryPreset.Medium -including itself-
 *  and return their media query string values as an array.
 * )
 * @param query MediaQuery object or string value representing the media query string
 * @returns Array of media query strings
 */
export function getMediaQueries(query: MediaQuery | string): string[] {
  // Return an empty array if the query is empty
  if (!query) {
    return [];
  }

  // If query is of type string and thus no MatchType / Presets, return an array with the query as single element.
  if (typeof query === 'string') {
    return [query];
  }

  // If query is of type MediaQuery and no MediaQueryMatchType is defined, MediaQueryMatchType.From is used as a fallback.
  // IMPORTANT: Follow Mobile First Approach
  query.matchType === query.matchType || MediaQueryMatchType.From;

  // If the MediaQueryMatchType is Exact, return an array with the query string value as single element.
  if (query.matchType === MediaQueryMatchType.Exact) {
    return [query.query];
  }

  // If the MediaQueryMatchType is From or To, map all MediaQueryPreset values to their string values.
  const mediaQueryPresetValues: string[] = Object.values(MediaQueryPreset);
  // Get the index of the MediaQueryPrest in the query parameter.
  const queryIndex: number = mediaQueryPresetValues.indexOf(query.query);

  // Note: this should not happen
  if (queryIndex === -1) {
    console.warn('The expected media query was not found in the list of presets');
    return [query.query];
  }

  // If the MediaQueryMatchType is From, return all MediaQueryPreset values with an index greater or equal than the queryIndex.
  if (query.matchType === MediaQueryMatchType.From) {
    return mediaQueryPresetValues.filter((value, index) => index >= queryIndex);
  }

  // If the MediaQueryMatchType is To, return all MediaQueryPreset values with an index lesser or equal than the queryIndex.
  if (query.matchType === MediaQueryMatchType.To) {
    return mediaQueryPresetValues.filter((value, index) => index <= queryIndex);
  }

  return [];
}
