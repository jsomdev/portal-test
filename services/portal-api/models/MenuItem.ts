/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Menu } from './Menu';
import type { TracedEntity } from './TracedEntity';
import type { Url } from './Url';

export type MenuItem = TracedEntity & {
  menu?: Menu;
  parentId?: string | null;
  url?: Url | null;
  sortIndex?: number;
  parent?: MenuItem | null;
  children?: Array<MenuItem>;
};
