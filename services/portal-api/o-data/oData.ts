export interface OdataEntity {
  ['@odata.context']?: string;
  ['@odata.etag']: string;
}

export interface OdataCollection<T> {
  ['@odata.context']: string;
  ['@odata.count']?: number;
  value: Array<T & Pick<OdataEntity, '@odata.etag'>>;
}
