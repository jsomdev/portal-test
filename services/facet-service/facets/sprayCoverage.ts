import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum SprayCoverageFacetOptionKey {
  _120down = '_120down',
  _180 = '_180',
  _180countercurrent = '_180countercurrent',
  _180down = '_180down',
  _180inflowdirection = '_180inflowdirection',
  _180up = '_180up',
  _240down = '_240down',
  _260down = '_260down',
  _260up = '_260up',
  _270countercurrent = '_270countercurrent',
  _270down = '_270down',
  _270inflowdirection = '_270inflowdirection',
  _270up = '_270up',
  _2x175 = '_2x175',
  _360 = '_360',
  _360andcustomsprayangles = '_360andcustomsprayangles',
  _360Smallsprayheadwithsmallclearanceonlywith3SF = '_360Smallsprayheadwithsmallclearanceonlywith3SF',
  _360Standard = '_360Standard',
  _65down = '_65down',
  SideSpray = 'SideSpray'
}

export const sprayCoverageFacetOptions: FacetOption<SprayCoverageFacetOptionKey>[] =
  [
    {
      key: SprayCoverageFacetOptionKey._120down,
      ...defaultFacetOption,
      valueId: '07f66cd1-0754-4b9e-9bc7-7e2ea006638a',
      value: '120° down',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '120° down' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: SprayCoverageFacetOptionKey._180,
      ...defaultFacetOption,
      valueId: 'f93ccc8c-9afe-4862-8798-a7429fb6dc3f',
      value: '180°',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '180°' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: SprayCoverageFacetOptionKey._180countercurrent,
      ...defaultFacetOption,
      valueId: '5a217bdb-f86b-47a6-bfcf-ce843bf4be52',
      value: '180° counter current',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '180° counter current' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: SprayCoverageFacetOptionKey._180down,
      ...defaultFacetOption,
      valueId: '13c4dc20-6572-4c64-b486-a72a89f490ee',
      value: '180° down',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '180° down' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: SprayCoverageFacetOptionKey._180inflowdirection,
      ...defaultFacetOption,
      valueId: 'f906736f-bcba-42cf-8c75-572ba06a75d1',
      value: '180° in flow direction',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '180° in flow direction' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: SprayCoverageFacetOptionKey._180up,
      ...defaultFacetOption,
      valueId: '08286fb2-3457-415f-b733-f8c8ba879132',
      value: '180° up',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '180° up' }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: SprayCoverageFacetOptionKey._240down,
      ...defaultFacetOption,
      valueId: '35707cdd-0b1f-41d3-b7a1-26f9a905a697',
      value: '240° down',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '240° down' }
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: SprayCoverageFacetOptionKey._260down,
      ...defaultFacetOption,
      valueId: 'dbfccbbb-4a3a-4bb4-ae90-4bdb86952978',
      value: '260° down',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '260° down' }
          }
        ],
        sortIndex: 8
      }
    },
    {
      key: SprayCoverageFacetOptionKey._260up,
      ...defaultFacetOption,
      valueId: '2a1a5f3b-442f-4038-809d-9e46d962c38f',
      value: '260° up',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '260° up' }
          }
        ],
        sortIndex: 9
      }
    },
    {
      key: SprayCoverageFacetOptionKey._270countercurrent,
      ...defaultFacetOption,
      valueId: 'fc68d78b-8c95-44f7-9913-fe0d2541299e',
      value: '270° counter current',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '270° counter current' }
          }
        ],
        sortIndex: 10
      }
    },
    {
      key: SprayCoverageFacetOptionKey._270down,
      ...defaultFacetOption,
      valueId: '07d88040-ded2-4645-84b0-f408812623fd',
      value: '270° down',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '270° down' }
          }
        ],
        sortIndex: 11
      }
    },
    {
      key: SprayCoverageFacetOptionKey._270inflowdirection,
      ...defaultFacetOption,
      valueId: '02b92c96-d349-4993-a559-722a3051e39e',
      value: '270° in flow direction',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '270° in flow direction' }
          }
        ],
        sortIndex: 12
      }
    },
    {
      key: SprayCoverageFacetOptionKey._270up,
      ...defaultFacetOption,
      valueId: '2461ae94-6832-40f1-a3eb-1e439a2226d8',
      value: '270° up',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '270° up' }
          }
        ],
        sortIndex: 13
      }
    },
    {
      key: SprayCoverageFacetOptionKey._2x175,
      ...defaultFacetOption,
      valueId: '51d576dc-ceed-4819-b1b3-c4ffcbb74a27',
      value: '2x175°',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '2x175°' }
          }
        ],
        sortIndex: 14
      }
    },
    {
      key: SprayCoverageFacetOptionKey._360,
      ...defaultFacetOption,
      valueId: '67b0a079-5064-42c1-99a2-9271038d26b8',
      value: '360°',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '360°' }
          }
        ],
        sortIndex: 15
      }
    },
    {
      key: SprayCoverageFacetOptionKey._360andcustomsprayangles,
      ...defaultFacetOption,
      valueId: 'a1ec5241-096f-4a53-80c5-a72b9a00f47f',
      value: '360° and custom spray angles',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '360° and custom spray angles' }
          }
        ],
        sortIndex: 16
      }
    },
    {
      key: SprayCoverageFacetOptionKey._360Smallsprayheadwithsmallclearanceonlywith3SF,
      ...defaultFacetOption,
      valueId: '3da9c688-898c-440f-a1bf-53e3a0e4d419',
      value: '360°, Small spray head with small clearance, only with 3SF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: '360°, Small spray head with small clearance, only with 3SF'
            }
          }
        ],
        sortIndex: 17
      }
    },
    {
      key: SprayCoverageFacetOptionKey._360Standard,
      ...defaultFacetOption,
      valueId: 'ad2f64ae-a584-4044-8253-4b1a2ab37bab',
      value: '360°, Standard',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '360°, Standard' }
          }
        ],
        sortIndex: 18
      }
    },
    {
      key: SprayCoverageFacetOptionKey._65down,
      ...defaultFacetOption,
      valueId: '59270324-e3c6-46fd-af56-5b3d60a172e2',
      value: '65° down',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '65° down' }
          }
        ],
        sortIndex: 19
      }
    },
    {
      key: SprayCoverageFacetOptionKey.SideSpray,
      ...defaultFacetOption,
      valueId: 'b04b0726-1063-4370-8194-13e950205d46',
      value: 'Side Spray',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Side Spray' }
          }
        ],
        sortIndex: 20
      }
    }
  ];

export const sprayCoverageFacet: Facet<
  SprayCoverageFacetOptionKey,
  FacetOption<SprayCoverageFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.SprayCoverage,
  attributeTypeCode: 'SprayCoverage',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: sprayCoverageFacetOptions
};
