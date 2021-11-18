/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttributeSettingsFlags } from './AttributeSettingsFlags';
import type { Condition } from './Condition';
import type { Display } from './Display';
import type { LinkedEntity } from './LinkedEntity';

export type Attribute = LinkedEntity & {
  groupCode?: string;
  typeCode?: string;
  settings?: AttributeSettingsFlags | null;
  unitSymbol?: string | null;
  value?: any;
  valueId?: string | null;
  displays?: Array<Display | null>;
  conditions?: Array<Condition | null>;
  sortIndex?: number;
};
