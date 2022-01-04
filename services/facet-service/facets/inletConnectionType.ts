import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum InletConnectionTypeFacetOptionKey {
  Flange = 'Flange',
  QuickConnect = 'QuickConnect',
  ThreadedFemaleBSPT = 'ThreadedFemaleBSPT',
  ThreadedFemaleNPT = 'ThreadedFemaleNPT',
  ThreadedMaleBSPT = 'ThreadedMaleBSPT',
  ThreadedMaleNPT = 'ThreadedMaleNPT',
  ThreadedFemaleBSPTQuickConnect = 'ThreadedFemaleBSPTQuickConnect',
  ThreadedFemaleNPTQuickConnect = 'ThreadedFemaleNPTQuickConnect',
  ThreadedMaleBSPTQuickConnect = 'ThreadedMaleBSPTQuickConnect',
  ThreadedMaleNPTQuickConnect = 'ThreadedMaleNPTQuickConnect'
}

export const inletConnectionTypeFacetOptions: FacetOption<InletConnectionTypeFacetOptionKey>[] =
  [
    {
      key: InletConnectionTypeFacetOptionKey.Flange,
      ...defaultFacetOption,
      valueId: '8ff58648-1a7e-44c7-98fd-60d27af8dc05',
      value: 'Flange',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Flange' } }
        ],
        sortIndex: 1
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.QuickConnect,
      ...defaultFacetOption,
      valueId: 'fa645b58-55f7-41b9-845e-0b7b9799e7c9',
      value: 'QuickConnect',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Quick-connect' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedFemaleBSPT,
      ...defaultFacetOption,
      valueId: '0dea4964-79de-4e71-a9ef-503cfef6a0b9',
      value: 'Threaded.FemaleBSPT',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female BSPT)' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedFemaleNPT,
      ...defaultFacetOption,
      valueId: '49ad3d24-c863-4c05-838d-ed399494f7cd',
      value: 'Threaded.FemaleNPT',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female NPT)' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedMaleBSPT,
      ...defaultFacetOption,
      valueId: '5bd58805-f59c-459c-a482-665a55228a18',
      value: 'Threaded.MaleBSPT',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Male BSPT)' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedMaleNPT,
      ...defaultFacetOption,
      valueId: 'dad160db-01a5-484f-becc-201e01a38969',
      value: 'Threaded.MaleNPT',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Male NPT)' }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedFemaleBSPTQuickConnect,
      ...defaultFacetOption,
      valueId: 'bdffb087-5380-4b25-8789-e911eafa2ece',
      value: 'ThreadedFemaleBSPT+QuickConnect',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female BSPT) + Quick-Connect' }
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedFemaleNPTQuickConnect,
      ...defaultFacetOption,
      valueId: '338bc0a4-5de5-456f-aa61-c3ce063068c6',
      value: 'ThreadedFemaleNPT+QuickConnect',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female NPT) + Quick-Connect' }
          }
        ],
        sortIndex: 8
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedMaleBSPTQuickConnect,
      ...defaultFacetOption,
      valueId: 'c406ef9b-ed1d-4038-a23a-47d7d01d0e25',
      value: 'ThreadedMaleBSPT+QuickConnect',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Male BSPT) + Quick-Connect' }
          }
        ],
        sortIndex: 9
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedMaleNPTQuickConnect,
      ...defaultFacetOption,
      valueId: 'ba428e31-3b46-4e0d-ad16-7a1aece9f450',
      value: 'ThreadedMaleNPT+QuickConnect',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Male NPT) + Quick-Connect' }
          }
        ],
        sortIndex: 10
      }
    }
  ];

export const inletConnectionTypeFacet: Facet<
  InletConnectionTypeFacetOptionKey,
  FacetOption<InletConnectionTypeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.InletConnectionType,
  attributeTypeCode: 'InletConnectionType',
  configuration: {
    category: FacetCategory.Default,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: inletConnectionTypeFacetOptions
};
