/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Product } from './Product';
import type { ProductAccessorySettingsFlags } from './ProductAccessorySettingsFlags';
import type { ProductAccessoryType } from './ProductAccessoryType';
import type { Relationship } from './Relationship';

export type ProductAccessory = Relationship & {
  type?: ProductAccessoryType;
  settings?: ProductAccessorySettingsFlags | null;
  accessoryId?: string;
  accessory?: Product | null;
};
