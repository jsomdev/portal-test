import { Flags } from './Flags';

export enum ProductSettings {
  'IsGlobalCatalogProduct' = 1,
  'IsSearchable' = 2,
  'IsSellable' = 4,
}

export type ProductSettingsFlags = Flags<ProductSettings>;
