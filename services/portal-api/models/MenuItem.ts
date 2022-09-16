import { MultilingualString } from './MultilingualString';
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AudienceFlags } from './AudienceFlags';
import type { Menu } from './Menu';
import type { TracedEntity } from './TracedEntity';
import type { Url } from './Url';

export type MenuItem = TracedEntity & {
  menu?: Menu;
  parentId?: string | null;
  url?: Url | null;
  sortIndex?: number;
  audience?: AudienceFlags | null;
  parent?: MenuItem | null;
  children?: Array<MenuItem>;
  slug?: MultilingualString;
};
