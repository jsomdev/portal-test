import { Flags } from './Flags';

export enum AttributeSettings {
  'DisplayOnProductSpecifications' = 1,
  'DisplayOnProductCharacteristics' = 2,
  'DisplayOnProductTableRow' = 4,
}

export type AttributeSettingsFlags = Flags<AttributeSettings>;
