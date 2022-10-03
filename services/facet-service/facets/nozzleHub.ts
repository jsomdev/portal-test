import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum NozzleHubFacetOptionKey {
  _180Coverage = '_180Coverage',
  _360Coverage = '_360Coverage',
  _360Coveragefor18NPTTip = '_360Coveragefor18NPTTip',
  _360CoverageforWorWDTip = '_360CoverageforWorWDTip',
  _360CoverageSmallHead = '_360CoverageSmallHead'
}

export const nozzleHubFacetOptions: FacetOption<NozzleHubFacetOptionKey>[] = [
  {
    key: NozzleHubFacetOptionKey._180Coverage,
    ...defaultFacetOption,
    valueId: '',
    value: '180° Coverage',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '180° Coverage' }
        }
      ],
      sortIndex: 1
    }
  },
  {
    key: NozzleHubFacetOptionKey._360Coverage,
    ...defaultFacetOption,
    valueId: '',
    value: '360° Coverage',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '360° Coverage' }
        }
      ],
      sortIndex: 2
    }
  },
  {
    key: NozzleHubFacetOptionKey._360Coveragefor18NPTTip,
    ...defaultFacetOption,
    valueId: '',
    value: '360° Coverage, for 1/8&quot; NPT Tip',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: "360° Coverage, for 1/8' NPT Tip" }
        }
      ],
      sortIndex: 3
    }
  },
  {
    key: NozzleHubFacetOptionKey._360CoverageforWorWDTip,
    ...defaultFacetOption,
    valueId: '',
    value: '360° Coverage, for W or WD Tip', // 360° Coverage, for W or WD Tip
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '360° Coverage, for W or WD Tip' }
        }
      ],
      sortIndex: 4
    }
  },
  {
    key: NozzleHubFacetOptionKey._360CoverageSmallHead,
    ...defaultFacetOption,
    valueId: '',
    value: '360° Coverage, Small Head',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '360° Coverage, Small Head' }
        }
      ],
      sortIndex: 5
    }
  }
];

export const nozzleHubFacet: Facet<
  NozzleHubFacetOptionKey,
  FacetOption<NozzleHubFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.NozzleHub,
  attributeTypeCode: 'NozzleHub',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    displayName: '',
    description: '',
    isFacetingEnabled: true
  },
  options: nozzleHubFacetOptions
};
