import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum FlangeOptionsFacetOptionKey {
  _2_5SF = '_2_5SF',
  _2_5SFAJ = '_2_5SFAJ',
  _20PF = '_20PF',
  _2RF3AJ = '_2RF3AJ',
  _2RFAJ = '_2RFAJ',
  _2SF = '_2SF',
  _2SFAJ = '_2SFAJ',
  _3P = '_3P',
  _3PAJ = '_3PAJ',
  _3RF = '_3RF',
  _3RF3AJ = '_3RF3AJ',
  _3RFAJ = '_3RFAJ',
  _3SF = '_3SF',
  _3SFAJ = '_3SFAJ',
  _4RF = '_4RF',
  _4RF3AJ = '_4RF3AJ',
  _4RF3SAJ = '_4RF3SAJ',
  _4RFAJ = '_4RFAJ',
  _4RFSAJ = '_4RFSAJ',
  _4SF = '_4SF',
  _4SFAJ = '_4SFAJ',
  _4SFSAJ = '_4SFSAJ',
  _6RF = '_6RF',
  _6RF3SAJ = '_6RF3SAJ',
  _6RFAJ = '_6RFAJ',
  _6RFSAJ = '_6RFSAJ',
  _6SF = '_6SF',
  _6SFAJ = '_6SFAJ',
  _6SFSAJ = '_6SFSAJ',
  _80DRFAJ = '_80DRFAJ',
  _8SFAJ = '_8SFAJ',
  ASME_raised_face_flange = 'ASME_raised_face_flange',
  Contact = 'Contact',
  D125RF = 'D125RF',
  JIS = 'JIS',
  S05 = 'S05',
  S06 = 'S06',
  S07 = 'S07',
  Sanitary_Triclamp = 'Sanitary_Triclamp'
}

export const flangeOptionsFacetOptions: FacetOption<FlangeOptionsFacetOptionKey>[] =
  [
    {
      key: FlangeOptionsFacetOptionKey._2_5SF,
      ...defaultFacetOption,
      valueId: '0f366554-3ae1-40d7-a90a-e2c0909961c8',
      value: '2.5SF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "2.5' Sanitary Tri-Clover Flange" }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._2_5SFAJ,
      ...defaultFacetOption,
      valueId: 'b9b0a407-1626-406e-acac-3c0e8768395a',
      value: '2.5SFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "2.5' Sanitary Tri-Clover Flange, Adjustable" }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._20PF,
      ...defaultFacetOption,
      valueId: '2dc185c0-dc12-4743-a06f-c8ea4637081e',
      value: '20PF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "20' ASME Plate Flange, Thin" }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._2RF3AJ,
      ...defaultFacetOption,
      valueId: '43a184b1-2442-4cbd-8610-89f2b2297fb2',
      value: '2RF3AJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "2' ASME, 300# Raised Face Flange, Adjustable" }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._2RFAJ,
      ...defaultFacetOption,
      valueId: '2c062118-e25f-46f6-869b-d6f70ae88bca',
      value: '2RFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "2' ASME, 150# Raised Face Flange, Adjustable" }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._2SF,
      ...defaultFacetOption,
      valueId: '17204c97-9c26-4f56-b6a1-181d58a73741',
      value: '2SF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "2' Sanitary Tri-Clover Flange" }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._2SFAJ,
      ...defaultFacetOption,
      valueId: '8d8d6969-04f0-455a-aca7-5c4705876877',
      value: '2SFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "2' Sanitary Tri-Clover Flange, Adjustable" }
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._3P,
      ...defaultFacetOption,
      valueId: '5e1ecd36-0c29-44dc-842b-7a06fc800355',
      value: '3P',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Three Prong Flange' }
          }
        ],
        sortIndex: 8
      }
    },

    {
      key: FlangeOptionsFacetOptionKey._3PAJ,
      ...defaultFacetOption,
      valueId: '5cc63ab7-56e0-47ab-9e9d-ecd6b52a82a2',
      value: '3PAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Three Prong Flange, Adjustable' }
          }
        ],
        sortIndex: 10
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._3RF,
      ...defaultFacetOption,
      valueId: 'addcd72a-3024-485d-a62c-ae07b8c49765',
      value: '3RF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "3' ASME, 150# Raised Face Flange" }
          }
        ],
        sortIndex: 11
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._3RF3AJ,
      ...defaultFacetOption,
      valueId: 'ae923299-3d54-4670-9ded-f85aaa70e936',
      value: '3RF3AJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "3' ASME, 300# Raised Face Flange, Adjustable" }
          }
        ],
        sortIndex: 12
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._3RFAJ,
      ...defaultFacetOption,
      valueId: '0d1ce519-dcae-4f25-ab6c-a118a7e338ae',
      value: '3RFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "3' ASME, 150# Raised Face Flange, Adjustable" }
          }
        ],
        sortIndex: 13
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._3SF,
      ...defaultFacetOption,
      valueId: 'e365733d-5c7b-47f4-9d9d-71f779710e30',
      value: '3SF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "3' Sanitary Tri-Clover Flange" }
          }
        ],
        sortIndex: 14
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._3SFAJ,
      ...defaultFacetOption,
      valueId: '2901ebb4-e77e-40cf-9784-0cd9b6aa3406',
      value: '3SFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "3' Sanitary Tri-Clover Flange, Adjustable" }
          }
        ],
        sortIndex: 15
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._4RF,
      ...defaultFacetOption,
      valueId: 'db49a4ed-2778-4198-8395-edceebab1c7a',
      value: '4RF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "4' ASME, 150# Raised Face Flange" }
          }
        ],
        sortIndex: 16
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._4RF3AJ,
      ...defaultFacetOption,
      valueId: 'da068da0-33cb-4605-9a12-2160b00565c2',
      value: '4RF3AJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "4' ASME, 300# Raised Face Flange, Adjustable" }
          }
        ],
        sortIndex: 17
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._4RF3SAJ,
      ...defaultFacetOption,
      valueId: '33d5ebc6-5889-4b06-afc2-529535a6e159',
      value: '4RF3SAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: "Ball Swivel 4' ASME, 300# Raised Face Flange, Adjustable"
            }
          }
        ],
        sortIndex: 18
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._4RFAJ,
      ...defaultFacetOption,
      valueId: 'c02e6beb-0f24-4478-9543-f28e94e6b15a',
      value: '4RFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "4' ASME, 150# Raised Face Flange, Adjustable" }
          }
        ],
        sortIndex: 19
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._4RFSAJ,
      ...defaultFacetOption,
      valueId: '709c0ef9-b980-4fb6-9994-2f4cafe714d7',
      value: '4RFSAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: "Ball Swivel 4' ASME, 150# Raised Face Flange, Adjustable"
            }
          }
        ],
        sortIndex: 20
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._4SF,
      ...defaultFacetOption,
      valueId: '9ea2f58d-fb41-4346-8ad3-b8303e763e84',
      value: '4SF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "4' Sanitary Tri-Clover Flange" }
          }
        ],
        sortIndex: 21
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._4SFAJ,
      ...defaultFacetOption,
      valueId: '6c968b3a-caa9-4d45-9e2c-d169f58dc044',
      value: '4SFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "4' Sanitary Tri-Clover Flange, Adjustable" }
          }
        ],
        sortIndex: 22
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._4SFSAJ,
      ...defaultFacetOption,
      valueId: '0dd3ac95-eeba-494d-a415-457006bb437b',
      value: '4SFSAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: "Ball Swivel 4' Sanitary Tri-Clover Flange, Adjustable"
            }
          }
        ],
        sortIndex: 23
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._6RF,
      ...defaultFacetOption,
      valueId: 'a09d66cb-a043-4e1f-a9d6-b756a0fa3e3d',
      value: '6RF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "6' ASME, 150# Raised Face Flange" }
          }
        ],
        sortIndex: 24
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._6RF3SAJ,
      ...defaultFacetOption,
      valueId: 'e05a7d71-4dfc-4e93-8d6c-2c538822e985',
      value: '6RF3SAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: "Ball Swivel 6' ASME, 300# Raised Face Flange, Adjustable"
            }
          }
        ],
        sortIndex: 25
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._6RFAJ,
      ...defaultFacetOption,
      valueId: '15b24697-7dfe-44ba-8dbb-31ec0138f187',
      value: '6RFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "6' ASME, 150# Raised Face Flange, Adjustable" }
          }
        ],
        sortIndex: 26
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._6RFSAJ,
      ...defaultFacetOption,
      valueId: '1a6080ff-824e-4e23-bdbd-eb8e56b016c9',
      value: '6RFSAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: "Ball Swivel 6' ASME, 150# Raised Face Flange, Adjustable"
            }
          }
        ],
        sortIndex: 27
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._6SF,
      ...defaultFacetOption,
      valueId: '66d5ae01-97b8-42d3-94b0-d24561dbaa60',
      value: '6SF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "6' Sanitary Tri-Clover Flange" }
          }
        ],
        sortIndex: 28
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._6SFAJ,
      ...defaultFacetOption,
      valueId: '7509f927-b689-4293-920b-6b3549a97e0c',
      value: '6SFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "6' Sanitary Tri-Clover Flange, Adjustable" }
          }
        ],
        sortIndex: 29
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._6SFSAJ,
      ...defaultFacetOption,
      valueId: 'd47bc6a8-5cb3-4f5e-a915-b0a2939d6117',
      value: '6SFSAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: "Ball Swivel 6' Sanitary Tri-Clover Flange, Adjustable"
            }
          }
        ],
        sortIndex: 30
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._80DRFAJ,
      ...defaultFacetOption,
      valueId: '1f3e072f-42ed-433b-800a-30c7381fcbeb',
      value: '80DRFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '80mm DIN, PN10 Raised Face Flange, Adjustable' }
          }
        ],
        sortIndex: 31
      }
    },
    {
      key: FlangeOptionsFacetOptionKey._8SFAJ,
      ...defaultFacetOption,
      valueId: '513cfd20-ebbd-4f17-87a9-211414e2879c',
      value: '8SFAJ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: "8' Sanitary Tri-Clover Flange, Adjustable" }
          }
        ],
        sortIndex: 32
      }
    },
    {
      key: FlangeOptionsFacetOptionKey.ASME_raised_face_flange,
      ...defaultFacetOption,
      valueId: '0195ad83-e2a7-472c-90b1-24e06bfad8bb',
      value: 'ASME_raised_face_flange',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'ASME Raised Face Flange' }
          }
        ],
        sortIndex: 33
      }
    },
    {
      key: FlangeOptionsFacetOptionKey.Contact,
      ...defaultFacetOption,
      valueId: 'aac9d2f6-d2c5-48ae-8806-70ebfdc5c360',
      value: 'Contact',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Contact Spraying Systems Co. for details on flange options'
            }
          }
        ],
        sortIndex: 34
      }
    },
    {
      key: FlangeOptionsFacetOptionKey.D125RF,
      ...defaultFacetOption,
      valueId: 'e645fbce-8a47-4276-bfa9-c0eb3d182830',
      value: 'D125RF',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '125mm DIN, PN6 Raised Face Flange' }
          }
        ],
        sortIndex: 35
      }
    },
    {
      key: FlangeOptionsFacetOptionKey.JIS,
      ...defaultFacetOption,
      valueId: '50ce20f1-a557-41b8-ba13-7c1180019e68',
      value: 'JIS',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'JIS' } }
        ],
        sortIndex: 36
      }
    },
    {
      key: FlangeOptionsFacetOptionKey.S05,
      ...defaultFacetOption,
      valueId: 'e233b04a-cedf-4e49-b3bb-349f102efdff',
      value: 'S05',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'EN 1092-1 / 05A / DN 100 / PN 16 / 1.4571',
              de: 'EN 1092-1 / 05A / DN 100 / PN 16 / 1.4571'
            }
          }
        ],
        sortIndex: 37
      }
    },
    {
      key: FlangeOptionsFacetOptionKey.S06,
      ...defaultFacetOption,
      valueId: '47c12c3a-43f2-4070-a9af-11388db30945',
      value: 'S06',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'EN 1092-1 / 05A / DN 65 / PN 6 / 1.4571',
              de: 'EN 1092-1 / 05A / DN 65 / PN 6 / 1.4571'
            }
          }
        ],
        sortIndex: 38
      }
    },
    {
      key: FlangeOptionsFacetOptionKey.S07,
      ...defaultFacetOption,
      valueId: 'b0ab5d93-8e8b-49c4-b29c-ea599d9e219a',
      value: 'S07',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'EN 1092-1 / 05A / DN 125 / PN 6 / 1.4571',
              de: 'EN 1092-1 / 05A / DN 125 / PN 6 / 1.4571'
            }
          }
        ],
        sortIndex: 39
      }
    },
    {
      key: FlangeOptionsFacetOptionKey.Sanitary_Triclamp,
      ...defaultFacetOption,
      valueId: '184d1d1a-d256-46ef-be95-a1a12545fd38',
      value: 'Sanitary_Tri-clamp',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Sanitary Tri-Clamp' }
          }
        ],
        sortIndex: 40
      }
    }
  ];

export const flangeOptionsFacet: Facet<
  FlangeOptionsFacetOptionKey,
  FacetOption<FlangeOptionsFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.FlangeOptions,
  attributeTypeCode: 'FlangeOptions',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    displayName: '',
    description: '',
    isFacetingEnabled: true
  },
  options: flangeOptionsFacetOptions
};
