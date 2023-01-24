import { DisplayValueType } from '@services/i18n/formatters/entity-formatters/displayFormatter';
import { Attribute } from '@services/portal-api';

export interface ProductSpecificationsGroup {
  id: string;
  name: string;
  sortIndex: number;
  description: string;
  items: ProductSpecificationsItem[];
}

export interface ProductSpecificationsItem {
  key: string;
  name: string;
  description: string;
  sortIndex: number;
  type: DisplayValueType;
  // We don't know the value of an attribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  text: string;
  alternativeText: string;
  attribute?: Attribute;
  options?: string[];
  isPublic?: boolean;
}
