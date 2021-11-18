/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attribute } from './Attribute';
import type { CatalogEntry } from './CatalogEntry';
import type { Model } from './Model';
import type { Option } from './Option';
import type { ProductAccessory } from './ProductAccessory';
import type { ProductAlternative } from './ProductAlternative';
import type { ProductCategory } from './ProductCategory';
import type { ProductSettingsFlags } from './ProductSettingsFlags';

export type Product = CatalogEntry & {
  settings?: ProductSettingsFlags | null;
  modelId?: string | null;
  accessories?: Array<ProductAccessory>;
  alternatives?: Array<ProductAlternative>;
  attributes?: Array<Attribute>;
  categories?: Array<ProductCategory>;
  options?: Array<Option>;
  model?: Model | null;
};
