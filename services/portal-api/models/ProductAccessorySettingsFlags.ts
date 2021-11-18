import { Flags } from './Flags';

export enum ProductAccessorySettings {
  'IsRecommended' = 1,
}

export type ProductAccessorySettingsFlags = Flags<ProductAccessorySettings>;
