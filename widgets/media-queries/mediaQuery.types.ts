export interface MediaQueryHook {
  isMatch: boolean;
}
export interface MediaQueryMatchState {
  [query: string]: boolean;
}

export type MediaQueryMatchAction = {
  type: 'update';
  query: string;
  isMatch: boolean;
};

export interface MediaQuery {
  query: MediaQueryPreset;
  matchType?: MediaQueryMatchType;
}
/**
 * Presets of Media Query Breakpoints as of 2021
 * IMPORTANT: Keep an ascending (in size) order
 */
export enum MediaQueryPreset {
  ExtraSmall = '(max-width: 575.98px)',
  Small = '(min-width: 576px) and (max-width: 767.98px)',
  Medium = '(min-width: 768px) and (max-width: 991.98px)',
  Large = '(min-width: 992px) and (max-width: 1199.98px)',
  ExtraLarge = '(min-width: 1200px)'
}

export enum MediaQueryMatchType {
  Exact = 'Exact',
  From = 'From',
  To = 'To'
}
