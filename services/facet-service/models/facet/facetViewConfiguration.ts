import { FacetCategory } from './facetCategory';
import { FacetControlType } from './facetControlType';
import { FacetSelectType } from './facetSelectType';

export type FacetViewConfiguration = {
  selectType: FacetSelectType;
  category: FacetCategory;
  isFacetingEnabled: boolean;
  hideInProductFinderPanel?: boolean;
  controlType: FacetControlType;
  [extraConfigurationAttributes: string]:
    | string
    | FacetCategory
    | FacetSelectType
    | boolean
    | FacetControlType
    | undefined
    | never;
};
