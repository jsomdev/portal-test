import { UnitOfMeasurement } from '../../../../utilities/measurement';
import { MultilingualString } from '../../../portal-api';
import { FacetOptionViewConfiguration } from './facetOptionViewConfiguration';

export type FacetOptionValueType =
  | string
  | number
  | Range
  | MultilingualString
  | null
  | UnitOfMeasurement;
export type FacetOption<
  TFacetOptionKey = never,
  ExtraAttributes = Record<string, unknown>
> = {
  key: TFacetOptionKey;
  configuration: FacetOptionViewConfiguration;
  isActive: boolean;
  valueId: string | null;
  value: FacetOptionValueType;
  parentId?: string | null;
  children?: string[] | null;
} & ExtraAttributes;
