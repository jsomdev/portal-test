export enum ExceptionMetaDataKey {
  MatchCustomer = 'MatchCustomer',
  AppErrorBoundary = 'AppErrorBoundary'
}

export interface TrackExceptionCustomProperties {
  key: ExceptionMetaDataKey;
  comment?: string;
}
