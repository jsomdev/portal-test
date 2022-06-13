/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListItem } from './ListItem';
import type { ListSettingsFlags } from './ListSettingsFlags';
import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type List = TracedEntity & {
  description?: MultilingualString | null;
  groupId?: string | null;
  unitSymbol?: string | null;
  name?: MultilingualString | null;
  settings?: ListSettingsFlags | null;
  items?: Array<ListItem>;
  group?: List | null;
};
