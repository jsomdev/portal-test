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
  HoseBarb = 'HoseBarb',
  QuickConnect = 'QuickConnect',
  SanitaryCIP182 = 'SanitaryCIP182',
  SanitaryCIP192 = 'SanitaryCIP192',
  SanitaryCIP252 = 'SanitaryCIP252',
  SanitaryCIP257 = 'SanitaryCIP257',
  SlipCollarPinConnection = 'SlipCollarPinConnection',
  Slipfit = 'Slipfit',
  Threaded_FemaleBSPT = 'Threaded_FemaleBSPT',
  Threaded_FemaleBSPTMountingLugs = 'Threaded_FemaleBSPTMountingLugs',
  Threaded_FemaleNPS = 'Threaded_FemaleNPS',
  Threaded_FemaleNPT = 'Threaded_FemaleNPT',
  Threaded_FemaleNPTMountingLugs = 'Threaded_FemaleNPTMountingLugs',
  Threaded_MaleBSPT = 'Threaded_MaleBSPT',
  Threaded_MaleNPS = 'Threaded_MaleNPS',
  Threaded_MaleNPT = 'Threaded_MaleNPT',
  ThreadedFemaleBSPTQuickConnect = 'ThreadedFemaleBSPTQuickConnect',
  ThreadedFemaleBSPTQuickDisconnectMale = 'ThreadedFemaleBSPTQuickDisconnectMale',
  ThreadedFemaleNPTHoseThreadMaleNST = 'ThreadedFemaleNPTHoseThreadMaleNST',
  ThreadedFemaleNPTQuickConnect = 'ThreadedFemaleNPTQuickConnect',
  ThreadedFemaleNPTQuickDisconnectMale = 'ThreadedFemaleNPTQuickDisconnectMale',
  ThreadedMaleBSPTQuickConnect = 'ThreadedMaleBSPTQuickConnect',
  ThreadedMaleNPTQuickConnect = 'ThreadedMaleNPTQuickConnect',
  Tube = 'Tube',
  Welded = 'Welded'
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
      key: InletConnectionTypeFacetOptionKey.HoseBarb,
      ...defaultFacetOption,
      valueId: 'fa2f7ac6-f4d2-4103-883e-8992f032c751',
      value: 'HoseBarb',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Hose Barb' } }
        ],
        sortIndex: 2
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
        sortIndex: 3
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.SanitaryCIP182,
      ...defaultFacetOption,
      valueId: '8bbbbeed-dcfd-4508-856c-55055f9ca40f',
      value: 'SanitaryCIP182',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Sanitary (CIP 182)' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.SanitaryCIP192,
      ...defaultFacetOption,
      valueId: '9d0628ac-adf4-4acd-9899-71d70eed2fd9',
      value: 'SanitaryCIP192',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Sanitary (CIP 192)' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.SanitaryCIP252,
      ...defaultFacetOption,
      valueId: '838a6374-8854-4c1c-b124-5d36b9465d0c',
      value: 'SanitaryCIP252',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Sanitary (CIP 252)' }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.SanitaryCIP257,
      ...defaultFacetOption,
      valueId: '91dd6b3d-c94f-4194-8255-ef1ce309bc3a',
      value: 'SanitaryCIP257',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Sanitary (CIP 257)' }
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.SlipCollarPinConnection,
      ...defaultFacetOption,
      valueId: '791cdf1c-d915-4441-9776-cbec1b5be463',
      value: 'SlipCollarPinConnection',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Slip Collar Pin Connection' }
          }
        ],
        sortIndex: 8
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Slipfit,
      ...defaultFacetOption,
      valueId: '7c06f160-e5d7-4849-a837-34a14baa0a23',
      value: 'Slipfit',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Slip-fit' } }
        ],
        sortIndex: 9
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_FemaleBSPT,
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
        sortIndex: 10
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_FemaleBSPTMountingLugs,
      ...defaultFacetOption,
      valueId: '563fec54-9142-46e1-94cd-cbc801c75448',
      value: 'Threaded.FemaleBSPT+MountingLugs',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female BSPT) + Mounting Lugs' }
          }
        ],
        sortIndex: 11
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_FemaleNPS,
      ...defaultFacetOption,
      valueId: '557c1a1c-0bda-4dac-9023-ba34f04cb48f',
      value: 'Threaded.FemaleNPS',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female NPS)' }
          }
        ],
        sortIndex: 12
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_FemaleNPT,
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
        sortIndex: 13
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_FemaleNPTMountingLugs,
      ...defaultFacetOption,
      valueId: '0d3945e6-4994-4fe5-9ba5-787a3da473af',
      value: 'Threaded.FemaleNPT+MountingLugs',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female NPT) + Mounting Lugs' }
          }
        ],
        sortIndex: 14
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_MaleBSPT,
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
        sortIndex: 15
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_MaleNPS,
      ...defaultFacetOption,
      valueId: '28ef5ec8-f4e5-47a7-9a8f-93807d69b947',
      value: 'Threaded.MaleNPS',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Male NPS)' }
          }
        ],
        sortIndex: 16
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_MaleNPT,
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
        sortIndex: 17
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
        sortIndex: 18
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedFemaleBSPTQuickDisconnectMale,
      ...defaultFacetOption,
      valueId: '6dbba3c0-ef17-4ec4-b751-8b353dc79612',
      value: 'ThreadedFemaleBSPT+QuickDisconnectMale',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female BSPT) + Quick-Disconnect (Male)' }
          }
        ],
        sortIndex: 19
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedFemaleNPTHoseThreadMaleNST,
      ...defaultFacetOption,
      valueId: '80113e2f-e090-4100-9206-6bf7997e881d',
      value: 'ThreadedFemaleNPT+HoseThreadMaleNST',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female NPT) + Hose Thread (Male NST)' }
          }
        ],
        sortIndex: 20
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
        sortIndex: 21
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.ThreadedFemaleNPTQuickDisconnectMale,
      ...defaultFacetOption,
      valueId: '2161bee8-ad43-4e48-8a0e-54089b226d1c',
      value: 'ThreadedFemaleNPT+QuickDisconnectMale',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Female NPT) + Quick-Disconnect (Male)' }
          }
        ],
        sortIndex: 22
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
        sortIndex: 23
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
        sortIndex: 24
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Tube,
      ...defaultFacetOption,
      valueId: '235d6b69-9098-4f68-a4c3-464491fa0aa6',
      value: 'Tube',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Tube' } }
        ],
        sortIndex: 25
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Welded,
      ...defaultFacetOption,
      valueId: '06c0a40d-e81e-450a-8c61-235a286f84f5',
      value: 'Welded',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Welded' } }
        ],
        sortIndex: 26
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
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: inletConnectionTypeFacetOptions
};
