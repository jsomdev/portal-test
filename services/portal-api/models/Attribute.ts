/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { AttributeSettingsFlags } from './AttributeSettingsFlags';
import type { Condition } from './Condition';
import type { Display } from './Display';
import type { LinkedEntity } from './LinkedEntity';

export type Attribute = LinkedEntity & {
  conditions?: Array<Condition>;
  displays?: Array<Display>;
  groupCode?: string | null;
  settings?: AttributeSettingsFlags | null;
  sortIndex?: number;
  typeCode?: string | null;
  unitSymbol?: string | null;
  value?: any;
  valueId?: string | null;
};
