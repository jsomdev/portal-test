/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListItem } from './ListItem';
import type { ListSettingsFlags } from './ListSettingsFlags';
import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type List = TracedEntity & {
  settings?: ListSettingsFlags | null;
  groupId?: string | null;
  unitSymbol?: string | null;
  name?: MultilingualString;
  description?: MultilingualString | null;
  items?: Array<ListItem>;
  group?: List | null;
};
