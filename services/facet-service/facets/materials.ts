import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum MaterialsFacetOptionKey {
  _303StainlessSteel = '_303StainlessSteel',
  _309StainlessSteel = '_309StainlessSteel',
  _316StainlessSteel = '_316StainlessSteel',
  A4 = 'A4',
  A4P = 'A4P',
  Aluminum = 'Aluminum',
  BlackRubber = 'BlackRubber',
  Brass = 'Brass',
  CastIron = 'CastIron',
  DuctileIron = 'DuctileIron',
  HardenedStainlessSteel = 'HardenedStainlessSteel',
  MildSteel = 'MildSteel',
  NickelPlatedSteel = 'NickelPlatedSteel',
  Nylon = 'Nylon',
  Polypropylene = 'Polypropylene',
  PolyvinylChloride = 'PolyvinylChloride',
  ProMax = 'ProMax',
  PTFE = 'PTFE',
  PVDF = 'PVDF',
  Sapphire = 'Sapphire',
  StainlessSteel = 'StainlessSteel',
  TungstenCarbide = 'TungstenCarbide',
  WhiteRubber = 'WhiteRubber',
  ZincPlatedSteel = 'ZincPlatedSteel'
}

export const materialsFacetOptions: FacetOption<MaterialsFacetOptionKey>[] = [
  {
    key: MaterialsFacetOptionKey._303StainlessSteel,
    ...defaultFacetOption,
    valueId: '405f5d63-1255-4124-b973-cd551417021e',
    value: '303StainlessSteel',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '303 Stainless Steel' }
        }
      ],
      sortIndex: 1
    }
  },
  {
    key: MaterialsFacetOptionKey._309StainlessSteel,
    ...defaultFacetOption,
    valueId: '5fb2f21d-a878-41ee-ae08-a89651dc8813',
    value: '309StainlessSteel',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '309 Stainless Steel' }
        }
      ],
      sortIndex: 2
    }
  },
  {
    key: MaterialsFacetOptionKey._316StainlessSteel,
    ...defaultFacetOption,
    valueId: '7ffc88ed-5091-4c0c-a45a-efea3b5df402',
    value: '316StainlessSteel',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: '316 Stainless Steel' }
        }
      ],
      sortIndex: 3
    }
  },
  {
    key: MaterialsFacetOptionKey.A4,
    ...defaultFacetOption,
    valueId: '65a1630e-b8fb-4737-894d-7fd396dc4e9b',
    value: 'A4',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Stainless steel 1.4404', de: 'Edelstahl 1.4404' }
        }
      ],
      sortIndex: 4
    }
  },
  {
    key: MaterialsFacetOptionKey.A4P,
    ...defaultFacetOption,
    valueId: '11506940-c9c2-4337-aca4-980b8760c049',
    value: 'A4/P',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: {
            en: 'Stainless steel 1.4404 / PEEK bearings (glued)',
            de: 'Edelstahl 1.4404 / PEEK Lager (geklebt)'
          }
        }
      ],
      sortIndex: 5
    }
  },
  {
    key: MaterialsFacetOptionKey.Aluminum,
    ...defaultFacetOption,
    valueId: '7b5c8768-49c5-4af9-93d4-0c1684863d38',
    value: 'Aluminum',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'Aluminum' } }
      ],
      sortIndex: 6
    }
  },
  {
    key: MaterialsFacetOptionKey.BlackRubber,
    ...defaultFacetOption,
    valueId: '733e0b1e-67c1-47c0-86cf-dc200a080ed7',
    value: 'BlackRubber',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Black Rubber' }
        }
      ],
      sortIndex: 7
    }
  },
  {
    key: MaterialsFacetOptionKey.Brass,
    ...defaultFacetOption,
    valueId: 'f6ccc938-d3ae-4f07-afb6-8d615e29f289',
    value: 'Brass',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'Brass' } }
      ],
      sortIndex: 8
    }
  },
  {
    key: MaterialsFacetOptionKey.CastIron,
    ...defaultFacetOption,
    valueId: 'd0d028eb-948c-49e6-a2da-c0b0c3192aae',
    value: 'CastIron',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'Cast Iron' } }
      ],
      sortIndex: 9
    }
  },
  {
    key: MaterialsFacetOptionKey.DuctileIron,
    ...defaultFacetOption,
    valueId: 'e1919569-bb0a-4f25-8c49-57d37545c115',
    value: 'DuctileIron',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Ductile Iron' }
        }
      ],
      sortIndex: 10
    }
  },
  {
    key: MaterialsFacetOptionKey.HardenedStainlessSteel,
    ...defaultFacetOption,
    valueId: 'da54b801-1507-4587-85e5-43266567282e',
    value: 'HardenedStainlessSteel',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Hardened Stainless Steel' }
        }
      ],
      sortIndex: 11
    }
  },
  {
    key: MaterialsFacetOptionKey.MildSteel,
    ...defaultFacetOption,
    valueId: '6a9a037d-8a7b-4b2f-9aa1-80dadc80ba39',
    value: 'MildSteel',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'Mild Steel' } }
      ],
      sortIndex: 12
    }
  },
  {
    key: MaterialsFacetOptionKey.NickelPlatedSteel,
    ...defaultFacetOption,
    valueId: 'b0765a34-c653-4a97-bd75-cce5a129cc43',
    value: 'Nickel-PlatedSteel',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Nickel-Plated Steel' }
        }
      ],
      sortIndex: 13
    }
  },
  {
    key: MaterialsFacetOptionKey.Nylon,
    ...defaultFacetOption,
    valueId: 'acd452c9-23e9-4d00-b8df-acd0be8f38ec',
    value: 'Nylon',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'Nylon' } }
      ],
      sortIndex: 14
    }
  },
  {
    key: MaterialsFacetOptionKey.Polypropylene,
    ...defaultFacetOption,
    valueId: 'f943c093-8dc1-4b10-a7b3-f9b17d95d25e',
    value: 'Polypropylene',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Polypropylene' }
        }
      ],
      sortIndex: 15
    }
  },
  {
    key: MaterialsFacetOptionKey.PolyvinylChloride,
    ...defaultFacetOption,
    valueId: 'b17f534c-32ba-4e39-8c02-a6c07c077d2b',
    value: 'PolyvinylChloride',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Polyvinyl Chloride' }
        }
      ],
      sortIndex: 16
    }
  },
  {
    key: MaterialsFacetOptionKey.ProMax,
    ...defaultFacetOption,
    valueId: 'aca26be8-b67c-4cf5-8fcb-c0e26b6112ba',
    value: 'ProMax',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'Pro Max' } }
      ],
      sortIndex: 17
    }
  },
  {
    key: MaterialsFacetOptionKey.PTFE,
    ...defaultFacetOption,
    valueId: '660e1a91-b9ed-4504-b7e6-b3564b1efb7f',
    value: 'PTFE',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'PTFE' } }
      ],
      sortIndex: 18
    }
  },
  {
    key: MaterialsFacetOptionKey.PVDF,
    ...defaultFacetOption,
    valueId: 'a1b611e7-a42b-4a10-915e-f37f7b57744c',
    value: 'PVDF',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'PVDF' } }
      ],
      sortIndex: 19
    }
  },
  {
    key: MaterialsFacetOptionKey.Sapphire,
    ...defaultFacetOption,
    valueId: '07c44967-f2ae-482a-9672-1369197f4761',
    value: 'Sapphire',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'Sapphire' } }
      ],
      sortIndex: 20
    }
  },
  {
    key: MaterialsFacetOptionKey.StainlessSteel,
    ...defaultFacetOption,
    valueId: '07ce6bed-757c-4703-8022-af6c3505c8a8',
    value: 'StainlessSteel',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Stainless Steel' }
        }
      ],
      sortIndex: 21
    }
  },
  {
    key: MaterialsFacetOptionKey.TungstenCarbide,
    ...defaultFacetOption,
    valueId: '58280149-ffcd-45b7-9fcc-1f48dbe9a5c9',
    value: 'TungstenCarbide',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Tungsten Carbide' }
        }
      ],
      sortIndex: 22
    }
  },
  {
    key: MaterialsFacetOptionKey.WhiteRubber,
    ...defaultFacetOption,
    valueId: '8058a22d-4e78-4e8f-aed9-9128a93b9b7b',
    value: 'WhiteRubber',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'White Rubber' }
        }
      ],
      sortIndex: 23
    }
  },
  {
    key: MaterialsFacetOptionKey.ZincPlatedSteel,
    ...defaultFacetOption,
    valueId: '2e4fefb7-f11c-4098-a48a-e2f4d3ae4340',
    value: 'Zinc-PlatedSteel',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Zinc-Plated Steel' }
        }
      ],
      sortIndex: 24
    }
  }
];

export const materialsFacet: Facet<
  MaterialsFacetOptionKey,
  FacetOption<MaterialsFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.Materials,
  attributeTypeCode: 'Materials',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: materialsFacetOptions
};
