import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum InletConnectionTypeFacetOptionKey {
  _12_NTP_Inner_Thread = '_12_NTP_Inner_Thread',
  _38_NTP_Inner_Thread = '_38_NTP_Inner_Thread',
  B12_BSPT_Inner_Thread = 'B12_BSPT_Inner_Thread',
  B38_BSPT_Inner_Thread = 'B38_BSPT_Inner_Thread',
  Flange = 'Flange',
  G38_ISO228_Inner_Thread = 'G38_ISO228_Inner_Thread',
  HoseBarb = 'HoseBarb',
  QuickConnect = 'QuickConnect',
  Rp38EN102261_Inner_Thread = 'Rp38EN102261_Inner_Thread',
  SanitaryCIP122 = 'SanitaryCIP122',
  SanitaryCIP182 = 'SanitaryCIP182',
  SanitaryCIP190 = 'SanitaryCIP190',
  SanitaryCIP191 = 'SanitaryCIP191',
  SanitaryCIP192 = 'SanitaryCIP192',
  SanitaryCIP252 = 'SanitaryCIP252',
  SanitaryCIP257 = 'SanitaryCIP257',
  SlipCollarPinConnection = 'SlipCollarPinConnection',
  Threaded_FemaleBSPT = 'Threaded_FemaleBSPT',
  Threaded_FemaleBSPTMountingLugs = 'Threaded_FemaleBSPTMountingLugs',
  Threaded_FemaleNPS = 'Threaded_FemaleNPS',
  Threaded_FemaleNPT = 'Threaded_FemaleNPT',
  Threaded_FemaleNPTMountingLugs = 'Threaded_FemaleNPTMountingLugs',
  Threaded_MaleBSPP = 'Threaded_MaleBSPP',
  Threaded_MaleBSPT = 'Threaded_MaleBSPT',
  Threaded_MaleNPS = 'Threaded_MaleNPS',
  Threaded_MaleNPT = 'Threaded_MaleNPT',
  Threaded1220JIC = 'Threaded1220JIC',
  ThreadedFemaleBSPTQuickConnect = 'ThreadedFemaleBSPTQuickConnect',
  ThreadedFemaleBSPTQuickDisconnectMale = 'ThreadedFemaleBSPTQuickDisconnectMale',
  ThreadedFemaleNPTHoseThreadMaleNST = 'ThreadedFemaleNPTHoseThreadMaleNST',
  ThreadedFemaleNPTQuickConnect = 'ThreadedFemaleNPTQuickConnect',
  ThreadedFemaleNPTQuickDisconnectMale = 'ThreadedFemaleNPTQuickDisconnectMale',
  ThreadedMaleBSPTQuickConnect = 'ThreadedMaleBSPTQuickConnect',
  ThreadedMaleNPTQuickConnect = 'ThreadedMaleNPTQuickConnect',
  Tube = 'Tube',
  W19 = 'W19',
  Welded = 'Welded'
}
export const inletConnectionTypeFacetOptions: FacetOption<InletConnectionTypeFacetOptionKey>[] =
  [
    {
      key: InletConnectionTypeFacetOptionKey._12_NTP_Inner_Thread,
      ...defaultFacetOption,
      valueId: '1de29874-a035-4e3a-9590-acfd31fb197b',
      value: '1/2_NTP_Inner_Thread',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '1/2 NTP Inner Thread' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey._38_NTP_Inner_Thread,
      ...defaultFacetOption,
      valueId: 'd6fce0b8-8792-4ee2-a986-df66bb774cc7',
      value: '3/8_NTP_Inner_Thread',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '3/8 NTP Inner Thread' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.B12_BSPT_Inner_Thread,
      ...defaultFacetOption,
      valueId: '9b34ccb4-f367-4bd9-97df-9306bd8a3602',
      value: 'B1/2_BSPT_Inner_Thread',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '1/2 BSPT Inner Thread' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.B38_BSPT_Inner_Thread,
      ...defaultFacetOption,
      valueId: 'bb4fd054-748a-4a48-8994-50f368a41e29',
      value: 'B3/8_BSPT_Inner_Thread',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '3/8 BSPT Inner Thread' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Flange,
      ...defaultFacetOption,
      valueId: '8ff58648-1a7e-44c7-98fd-60d27af8dc05',
      value: 'Flange',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Flange' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.G38_ISO228_Inner_Thread,
      ...defaultFacetOption,
      valueId: 'ecba0990-59b5-4bbe-ac2b-b6cdfbd3232a',
      value: 'G3/8_ISO228_Inner_Thread',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'G3/8 ISO228 Inner Thread' }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.HoseBarb,
      ...defaultFacetOption,
      valueId: 'fa2f7ac6-f4d2-4103-883e-8992f032c751',
      value: 'HoseBarb',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Hose Barb' }
          }
        ],
        sortIndex: 7
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
        sortIndex: 8
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Rp38EN102261_Inner_Thread,
      ...defaultFacetOption,
      valueId: '4c271624-c8c6-459f-a62e-f87765ccf78a',
      value: 'Rp3/8EN10226-1_Inner_Thread',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Rp3/8 EN10226-1 Inner Thread' }
          }
        ],
        sortIndex: 9
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.SanitaryCIP122,
      ...defaultFacetOption,
      valueId: '8a42e3dd-16d0-4ade-9698-e327d09a756f',
      value: 'SanitaryCIP122',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Sanitary (CIP 122)' }
          }
        ],
        sortIndex: 10
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
        sortIndex: 11
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.SanitaryCIP190,
      ...defaultFacetOption,
      valueId: 'ae597b06-e4eb-4278-85a6-01a72023b5ab',
      value: 'SanitaryCIP190',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Sanitary (CIP 190)' }
          }
        ],
        sortIndex: 12
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.SanitaryCIP191,
      ...defaultFacetOption,
      valueId: '540bc83b-b1d3-47ac-bb78-351fcdb8d7ad',
      value: 'SanitaryCIP191',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Sanitary (CIP 191)' }
          }
        ],
        sortIndex: 13
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
        sortIndex: 14
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
        sortIndex: 15
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
        sortIndex: 16
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
        sortIndex: 17
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
        sortIndex: 18
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
        sortIndex: 19
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
        sortIndex: 20
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
        sortIndex: 21
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
        sortIndex: 22
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded_MaleBSPP,
      ...defaultFacetOption,
      valueId: '77169f60-9fa0-43db-91b1-d2fccd61ca3d',
      value: 'Threaded.MaleBSPP',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (Male BSPP)' }
          }
        ],
        sortIndex: 23
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
        sortIndex: 24
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
        sortIndex: 25
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
        sortIndex: 26
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Threaded1220JIC,
      ...defaultFacetOption,
      valueId: '8b633c93-2c91-41a1-89b4-1e00b9a70f17',
      value: 'Threaded1/2-20JIC)',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Threaded (1/2-20 JIC)' }
          }
        ],
        sortIndex: 27
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
        sortIndex: 28
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
        sortIndex: 29
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
        sortIndex: 30
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
        sortIndex: 31
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
        sortIndex: 32
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
        sortIndex: 33
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
        sortIndex: 34
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Tube,
      ...defaultFacetOption,
      valueId: '235d6b69-9098-4f68-a4c3-464491fa0aa6',
      value: 'Tube',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Tube' }
          }
        ],
        sortIndex: 35
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.W19,
      ...defaultFacetOption,
      valueId: '849d53b1-a9b5-4ebf-9b90-a289cc44fe96',
      value: 'W19',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Welding adapter diameter 19,2 mm without cotter pin bore'
            }
          }
        ],
        sortIndex: 36
      }
    },
    {
      key: InletConnectionTypeFacetOptionKey.Welded,
      ...defaultFacetOption,
      valueId: '06c0a40d-e81e-450a-8c61-235a286f84f5',
      value: 'Welded',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Welded' }
          }
        ],
        sortIndex: 37
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
