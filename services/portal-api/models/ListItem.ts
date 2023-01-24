/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Condition } from './Condition';
import type { Display } from './Display';
import type { LinkedEntity } from './LinkedEntity';
import type { MultilingualString } from './MultilingualString';

export type ListItem = LinkedEntity & {
  parentId?: string | null;
  groupId?: string | null;
  unitSymbol?: string | null;
  conditions?: Array<Condition | null>;
  value?: any;
  displays?: Array<Display>;
  description?: MultilingualString | null;
  sortIndex?: number;
  parent?: ListItem | null;
  children?: Array<ListItem>;
  group?: ListItem | null;
};
