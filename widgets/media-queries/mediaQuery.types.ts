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
