export interface OdataEntity {
  ['@odata.context']?: string;
  ['@odata.etag']: string;
}

export interface OdataCollection<TEntity> {
  ['@odata.context']: string;
  ['@odata.count']?: number;
  value: Array<TEntity & Pick<OdataEntity, '@odata.etag'>>;
}
