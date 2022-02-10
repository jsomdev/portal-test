import { MultilingualString } from '../../../portal-api/models/MultilingualString';

export type Range = {
  minimum?: number | null;
  maximum?: number | null;
};

export interface FacetResult {
  typeCode: string;
  maximumValue?: number | null;
  minimumValue?: number | null;
  unitId?: string | null;
  unitSymbol?: string | null;
  values: FacetResultValue[];
}

export type FacetResultValue = {
  count: number;
  value: MultilingualString | number | string | Range | boolean;
  valueId?: string | null;
};
