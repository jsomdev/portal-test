/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkedEntity } from './LinkedEntity';
import type { MultilingualString } from './MultilingualString';
import type { ResourceSettingsFlags } from './ResourceSettingsFlags';
import type { ResourceType } from './ResourceType';
import type { VariationFlags } from './VariationFlags';

export type Resource = LinkedEntity & {
  type?: ResourceType;
  settings?: ResourceSettingsFlags | null;
  variation?: VariationFlags;
  caption?: MultilingualString | null;
  url?: string;
  thumbnail?: string | null;
};
