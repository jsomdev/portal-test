import { Display } from '../../../portal-api';

export type FacetOptionViewConfiguration = {
  displays: Display[];
  sortIndex?: number;
  seoPath?: string;
};
