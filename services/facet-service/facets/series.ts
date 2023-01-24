import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum SeriesFacetOptionKey {
  _12j = '_12j',
  _14j = '_14j',
  _18jj = '_18jj',
  _1j = '_1j',
  AdjustableBallFittings = 'AdjustableBallFittings',
  AirActuatedAirAtomizing = 'AirActuatedAirAtomizing',
  AirActuatedHydraulic = 'AirActuatedHydraulic',
  ElectricallyActuatedAirAtomizing = 'ElectricallyActuatedAirAtomizing',
  ElectricallyActuatedHydraulic = 'ElectricallyActuatedHydraulic',
  FlatFan = 'FlatFan',
  ForTanksUpTo10Ft = 'ForTanksUpTo10Ft',
  ForTanksUpTo100Ft = 'ForTanksUpTo100Ft',
  ForTanksUpTo20Ft = 'ForTanksUpTo20Ft',
  ForTanksUpTo45Ft = 'ForTanksUpTo45Ft',
  ForTanksUpTo5Ft = 'ForTanksUpTo5Ft',
  HighImpactFlatSpray = 'HighImpactFlatSpray',
  HighImpactSolidStream = 'HighImpactSolidStream',
  HighPressureGunjetSprayGuns = 'HighPressureGunjetSprayGuns',
  SprayHollowCone = 'SprayHollowCone',
  LargeFreePassageFullCone = 'LargeFreePassageFullCone',
  LargeFreePassageHollowCone = 'LargeFreePassageHollowCone',
  LowPressureGunjetSprayGuns = 'LowPressureGunjetSprayGuns',
  MediumPressureGunjetSprayGuns = 'MediumPressureGunjetSprayGuns',
  MiniQuickVeejetFlatSprayQuickConnect = 'MiniQuickVeejetFlatSprayQuickConnect',
  MiniQuickVeejetSolidStreamQuickConnect = 'MiniQuickVeejetSolidStreamQuickConnect',
  MultiOrificeHydraulicFineSpray = 'MultiOrificeHydraulicFineSpray',
  NarrowAngleDeflectedFlatSpray = 'NarrowAngleDeflectedFlatSpray',
  NarrowAngleFullCone = 'NarrowAngleFullCone',
  PromaxQuickFulljetQuickConnect = 'PromaxQuickFulljetQuickConnect',
  PromaxQuickveejetQuickConnect = 'PromaxQuickveejetQuickConnect',
  PromaxQuickjetQuickConnect = 'PromaxQuickjetQuickConnect',
  Qmj = 'Qmj',
  QuickFloodjetQuickConnect = 'QuickFloodjetQuickConnect',
  QuickFulljetQuickConnect = 'QuickFulljetQuickConnect',
  QuickVeejetFlatSprayQuickConnect = 'QuickVeejetFlatSprayQuickConnect',
  QuickVeejetSolidStreamQuickConnect = 'QuickVeejetSolidStreamQuickConnect',
  QuickjetQuickConnectNozzleBodies = 'QuickjetQuickConnectNozzleBodies',
  RoundSpray = 'RoundSpray',
  SingleOrificeHydraulicFineSpray = 'SingleOrificeHydraulicFineSpray',
  SplitEyeletConnectors = 'SplitEyeletConnectors',
  SquareOvalVanelessSprayFullCone = 'SquareOvalVanelessSprayFullCone',
  StandardAngleFullCone = 'StandardAngleFullCone',
  StandardAngleHollowCone = 'StandardAngleHollowCone',
  StandardFlatSpray = 'StandardFlatSpray',
  StandardSolidStream = 'StandardSolidStream',
  Strainers = 'Strainers',
  ThrottlingAndPressureReliefRegulatingValves = 'ThrottlingAndPressureReliefRegulatingValves',
  UltraHighPressureFlatSpray = 'UltraHighPressureFlatSpray',
  UltraHighPressureNozzleBodies = 'UltraHighPressureNozzleBodies',
  UltraHighPressureSolidStream = 'UltraHighPressureSolidStream',
  UnijetFlatSpray = 'UnijetFlatSpray',
  UnijetFullCone = 'UnijetFullCone',
  UnijetHollowCone = 'UnijetHollowCone',
  UnijetNozzleBodies = 'UnijetNozzleBodies',
  UnijetSolidStream = 'UnijetSolidStream',
  UnspecifiedSeries = 'UnspecifiedSeries',
  VaaVau = 'VaaVau',
  Vmau = 'Vmau',
  WideAngleDeflectedFlatSpray = 'WideAngleDeflectedFlatSpray',
  WideAngleFullCone = 'WideAngleFullCone',
  WideAngleHollowCone = 'WideAngleHollowCone'
}

export const productSeriesFacetOptions: FacetOption<SeriesFacetOptionKey>[] = [
  {
    key: SeriesFacetOptionKey._12j,
    ...defaultFacetOption,
    valueId: 'd52f0cb2-4d5e-4779-a105-2dd161bf13f0',
    value: '1/2J',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/2J' }
        }
      ],
      sortIndex: 0,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey._14j,
    ...defaultFacetOption,
    valueId: '37648a83-4702-4454-a416-4c80912c8dc2',
    value: '1/4J',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/4J' }
        }
      ],
      sortIndex: 1,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey._18jj,
    ...defaultFacetOption,
    valueId: '4c2ff055-8b93-4a0d-8d9c-859c0f61baae',
    value: '1/8JJ',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1/8JJ' }
        }
      ],
      sortIndex: 2,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey._1j,
    ...defaultFacetOption,
    valueId: 'f158e215-41f7-4cde-a804-2208a9d7fe12',
    value: '1J',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: '1J' }
        }
      ],
      sortIndex: 3,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.AdjustableBallFittings,
    ...defaultFacetOption,
    valueId: '1ab986ba-6482-408e-b02e-cf63b2711d32',
    value: 'Adjustable Ball Fittings',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Adjustable Ball Fittings',
            de: 'Verstellbare Kugelbeschläge',
            fr: 'Raccords à billes réglables',
            nl: 'Verstelbare kogelfittingen'
          }
        }
      ],
      sortIndex: 4,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.AirActuatedAirAtomizing,
    ...defaultFacetOption,
    valueId: '73f04b86-538e-4636-977f-0f89c58938a8',
    value: 'Air-Actuated Air Atomizing Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Air Atomizing Nozzles',
            de: 'Luftbetätigte Luftzerstäubungsdüsen',
            fr: 'Buses d’atomisation d’air actionnées par air',
            nl: 'Luchtaangedreven luchtvernevelingssproeiers'
          }
        }
      ],
      sortIndex: 5,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.AirActuatedHydraulic,
    ...defaultFacetOption,
    valueId: 'd36d1d6e-8b54-4b0e-93b4-b182bc613c14',
    value: 'Air-Actuated Hydraulic Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated Hydraulic Nozzles',
            de: 'Druckluftbetätigte Hydraulikdüsen',
            fr: 'Buses hydrauliques actionnées par air',
            nl: 'Hydraulische nozzles met luchtbediening'
          }
        }
      ],
      sortIndex: 6,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.ElectricallyActuatedAirAtomizing,
    ...defaultFacetOption,
    valueId: '763c1c27-e594-4a85-a766-66d82fe1ec09',
    value: 'Electrically-Actuated Air Atomizing Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Air Atomizing Nozzles',
            de: 'Elektrisch betätigte Luftzerstäubungsdüsen',
            fr: 'Buses d’atomisation d’air actionnées électriquement',
            nl: 'Elektrisch bediende luchtvernevelingssproeiers'
          }
        }
      ],
      sortIndex: 7,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.ElectricallyActuatedHydraulic,
    ...defaultFacetOption,
    valueId: '01cc69c1-361e-4d48-8714-b7287552dfbf',
    value: 'Electrically-Actuated Hydraulic Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated Hydraulic Nozzles',
            de: 'Elektrisch betätigte Hydraulikdüsen',
            fr: 'Buses hydrauliques actionnées électriquement',
            nl: 'Elektrisch bediende hydraulische nozzles'
          }
        }
      ],
      sortIndex: 8,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.FlatFan,
    ...defaultFacetOption,
    valueId: 'f9c38734-549c-4e32-8f19-2b563e4be194',
    value: 'Flat Fan Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Flat Fan Nozzles',
            de: 'Flachlüfterdüsen',
            fr: 'Buses de ventilateur plates',
            nl: 'Platte ventilatorsproeiers'
          }
        }
      ],
      sortIndex: 9,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.ForTanksUpTo10Ft,
    ...defaultFacetOption,
    valueId: '3358dc2e-ec20-442a-8ec8-f7bc0d5bfbae',
    value: 'For tanks up to 10 ft. (3 m)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'For tanks up to 10 ft. (3 m)',
            de: 'Für Tanks bis zu 3 m (10 ft)',
            fr: 'Pour les réservoirs jusqu’à 10 pi (3 m)',
            nl: 'Voor tanks tot 10 ft. (3 m)'
          }
        }
      ],
      sortIndex: 10,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.ForTanksUpTo100Ft,
    ...defaultFacetOption,
    valueId: '797f81e3-ae16-46c4-9a4a-1d03e4c10f77',
    value: 'For tanks up to 100 ft. (30.5 m)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'For tanks up to 100 ft. (30.5 m)',
            de: 'Für Tanks bis zu 30,5 m (100 ft)',
            fr: 'Pour les réservoirs jusqu’à 100 pi (30,5 m)',
            nl: 'Voor tanks tot 30,5 m (100 ft.)'
          }
        }
      ],
      sortIndex: 11,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.ForTanksUpTo20Ft,
    ...defaultFacetOption,
    valueId: 'ca63ccda-89f8-4614-8391-9c95d89edf21',
    value: 'For tanks up to 20 ft. (6 m)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'For tanks up to 20 ft. (6 m)',
            de: 'Für Tanks bis zu 6 m (20 ft.)',
            fr: 'Pour les réservoirs jusqu’à 20 pi (6 m)',
            nl: 'Voor tanks tot 20 ft. (6 m)'
          }
        }
      ],
      sortIndex: 12,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.ForTanksUpTo45Ft,
    ...defaultFacetOption,
    valueId: '5bb27f68-0fd5-46f8-8428-fc7eb8eea2ac',
    value: 'For tanks up to 45 ft. (13.7 m)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'For tanks up to 45 ft. (13.7 m)',
            de: 'Für Tanks bis zu 13,7 m (45 ft)',
            fr: 'Pour les réservoirs jusqu’à 45 pi (13,7 m)',
            nl: 'Voor tanks tot 45 ft. (13,7 m)'
          }
        }
      ],
      sortIndex: 13,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.ForTanksUpTo5Ft,
    ...defaultFacetOption,
    valueId: 'f0d611ca-0f16-41a0-9d7c-042d40ec43dc',
    value: 'For tanks up to 5 ft. (1.5 m)',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'For tanks up to 5 ft. (1.5 m)',
            nl: 'Voor tanks tot 5 ft. (1,5 m)',
            fr: 'Pour les réservoirs jusqu’à 1,5 m (5 pi)',
            de: 'Für Tanks bis zu 1,5 m (5 ft)'
          }
        }
      ],
      sortIndex: 14,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.HighImpactFlatSpray,
    ...defaultFacetOption,
    valueId: '0b93e45c-3535-4125-ba3e-a9ae91873170',
    value: 'High Impact Flat Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'High Impact Flat Spray Nozzles',
            de: 'Flachspritzdüsen mit hoher Schlagkraft',
            fr: 'Buses de pulvérisation plates à fort impact',
            nl: 'High Impact Platte Sproeikoppen'
          }
        }
      ],
      sortIndex: 15,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.HighImpactSolidStream,
    ...defaultFacetOption,
    valueId: 'd0fa88b4-0117-4fa3-92fb-cf5f8978e0d3',
    value: 'High Impact Solid Stream Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'High Impact Solid Stream Nozzles',
            de: 'Massive Stream-Düsen mit hoher Schlagkraft',
            fr: 'Buses à flux solide à fort impact',
            nl: 'High Impact Solid Stream Nozzles'
          }
        }
      ],
      sortIndex: 16,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.HighPressureGunjetSprayGuns,
    ...defaultFacetOption,
    valueId: '079343ae-b870-4272-9916-b18e78c64283',
    value: 'High Pressure GunJet® Spray Guns',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'High Pressure GunJet® Spray Guns',
            de: 'Hochdruck-GunJet-Spritzpistolen®',
            fr: 'Pistolets de pulvérisation à jet à haute® pression',
            nl: 'Hoge druk GunJet® Spuitpistolen'
          }
        }
      ],
      sortIndex: 17,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.SprayHollowCone,
    ...defaultFacetOption,
    valueId: 'e67ff13b-8f69-4c51-8e79-650785065b9c',
    value: 'Inline, Offset & Deflected Spray Hollow Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Inline, Offset & Deflected Spray Hollow Cone Nozzles',
            de: 'Inline-, Offset- und umgelenkte Sprüh-Hohlkegeldüsen',
            fr: 'Buses à cône creux de pulvérisation en ligne, décalées et déviées',
            nl: 'Inline, Offset & Deflected Spray Hollow Cone Nozzles'
          }
        }
      ],
      sortIndex: 18,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.LargeFreePassageFullCone,
    ...defaultFacetOption,
    valueId: '5a72a946-7b7c-4cf8-8bae-d98e5614d502',
    value: 'Large Free Passage Full Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Large Free Passage Full Cone Nozzles',
            de: 'Große freie Passage Volle Kegeldüsen',
            fr: 'Grandes buses à cône plein passage libre',
            nl: 'Grote vrije doorgang volledige kegel nozzles'
          }
        }
      ],
      sortIndex: 19,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.LargeFreePassageHollowCone,
    ...defaultFacetOption,
    valueId: 'ece54068-7e85-4cae-a101-35fd8d39f1cd',
    value: 'Large Free Passage Hollow Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Large Free Passage Hollow Cone Nozzles',
            de: 'Große Freidurchlässige Hohlkegeldüsen',
            fr: 'Grandes buses à cône creux à passage libre',
            nl: 'Grote holle kegelsproeiers met vrije doorgang'
          }
        }
      ],
      sortIndex: 20,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.LowPressureGunjetSprayGuns,
    ...defaultFacetOption,
    valueId: '6ed0e6d0-4efe-4784-ab7e-6eece1d1ce93',
    value: 'Low Pressure GunJet® Spray Guns',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure GunJet® Spray Guns',
            de: 'Niederdruck-GunJet-Spritzpistolen®',
            fr: 'Pistolets de pulvérisation à jet® à basse pression',
            nl: 'Lage druk GunJet® Spuitpistolen'
          }
        }
      ],
      sortIndex: 21,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.MediumPressureGunjetSprayGuns,
    ...defaultFacetOption,
    valueId: '02af44f3-f3dd-458e-ad7e-e63f1becdcb5',
    value: 'Medium Pressure GunJet® Spray Guns',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Medium Pressure GunJet® Spray Guns',
            de: 'MitteldruckpistoleJet-Spritzpistolen®',
            fr: 'Pistolet à réaction à® moyenne pression',
            nl: 'Gemiddelde druk GunJet® Spuitpistolen'
          }
        }
      ],
      sortIndex: 22,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.MiniQuickVeejetFlatSprayQuickConnect,
    ...defaultFacetOption,
    valueId: '842907f7-d611-462a-bc66-a46074589ba5',
    value:
      'Mini Quick VeeJet® Flat Spray Quick-Connect Spray Tips and Nozzles Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Mini Quick VeeJet® Flat Spray Quick-Connect Spray Tips and Nozzles Assemblies',
            de: 'Mini Quick VeeJet® Flat Spray Quick-Connect Spray Spitzen und Düsen Baugruppen',
            fr: 'Mini Quick VeeJet® Flat Spray Quick-Connect Embouts de pulvérisation et ensembles de buses',
            nl: 'Mini Quick VeeJet® Flat Spray Quick-Connect Spuittips en Nozzles Assemblages'
          }
        }
      ],
      sortIndex: 23,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.MiniQuickVeejetSolidStreamQuickConnect,
    ...defaultFacetOption,
    valueId: '0d914d38-339f-48f5-a694-bc098c23e08c',
    value:
      'Mini Quick VeeJet® Solid Stream Quick-Connect Spray Tips and Nozzles Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Mini Quick VeeJet® Solid Stream Quick-Connect Spray Tips and Nozzles Assemblies',
            de: 'Mini Quick VeeJet® Solid Stream Quick-Connect Sprühspitzen und Düsenbaugruppen',
            fr: 'Mini Quick VeeJet® Solid Stream Quick-Connect Embouts de pulvérisation et ensembles de buses',
            nl: 'Mini Quick VeeJet® Solid Stream Quick-Connect spuittips en nozzles assemblages'
          }
        }
      ],
      sortIndex: 24,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.MultiOrificeHydraulicFineSpray,
    ...defaultFacetOption,
    valueId: 'ce5aefd1-4a29-4635-ad79-885668271ce9',
    value: 'Multi-Orifice Hydraulic Fine Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Multi-Orifice Hydraulic Fine Spray Nozzles',
            de: 'Hydraulische Multi-Blenden-Feinsprühdüsen',
            fr: 'Buses de pulvérisation fine hydrauliques multi-orifices',
            nl: 'Multi-Orifice Hydraulische Fijne Sproeikoppen'
          }
        }
      ],
      sortIndex: 25,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.NarrowAngleDeflectedFlatSpray,
    ...defaultFacetOption,
    valueId: '420a0806-00a1-4ccf-a14f-40ca57d595fe',
    value: 'Narrow Angle Deflected Flat Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Narrow Angle Deflected Flat Spray Nozzles',
            de: 'Eng abgelenkte flache Sprühdüsen',
            fr: 'Buses de pulvérisation plates déviées à angle étroit',
            nl: 'Smalle hoek afgebogen platte sproeikoppen'
          }
        }
      ],
      sortIndex: 26,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.NarrowAngleFullCone,
    ...defaultFacetOption,
    valueId: '9c715343-38fd-4786-9a29-9a66d3f65310',
    value: 'Narrow Angle Full Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Narrow Angle Full Cone Nozzles',
            de: 'Schmalwinkelige Vollkegeldüsen',
            fr: 'Buses à cône complet à angle étroit',
            nl: 'Narrow Angle Full Cone Nozzles'
          }
        }
      ],
      sortIndex: 27,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.PromaxQuickFulljetQuickConnect,
    ...defaultFacetOption,
    valueId: '0e658f6f-c684-42b0-b243-e45278a299a8',
    value:
      'ProMax® Quick FullJet® Quick-Connect Spray Tips and Nozzle Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'ProMax® Quick FullJet® Quick-Connect Spray Tips and Nozzle Assemblies',
            de: 'ProMax® Quick FullJet® Quick-Connect Sprühspitzen und Düsenbaugruppen',
            fr: 'ProMax® Quick FullJet® Quick-Connect Embouts de pulvérisation et ensembles de buses',
            nl: 'ProMax® Quick FullJet® Quick-Connect spuittips en nozzle-assemblages'
          }
        }
      ],
      sortIndex: 28,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.PromaxQuickveejetQuickConnect,
    ...defaultFacetOption,
    valueId: '1852ee3f-aa44-45ec-a7c9-9724f658d552',
    value:
      'ProMax® Quick VeeJet® Quick-Connect Spray Tips and Nozzle Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'ProMax® Quick VeeJet® Quick-Connect Spray Tips and Nozzle Assemblies',
            de: 'ProMax® Quick VeeJet® Quick-Connect Sprühspitzen und Düsenbaugruppen',
            fr: 'ProMax® Quick VeeJet® Quick-Connect Embouts de pulvérisation et ensembles de buses',
            nl: 'ProMax® Quick VeeJet® Quick-Connect spuittips en nozzleassemblages'
          }
        }
      ],
      sortIndex: 29,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.PromaxQuickjetQuickConnect,
    ...defaultFacetOption,
    valueId: '60442979-5b09-45d4-90d2-968d1378dcd8',
    value: 'ProMax® QuickJet® Quick-Connect Nozzle Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'ProMax® QuickJet® Quick-Connect Nozzle Bodies',
            de: 'ProMax® QuickJet Quick-Connect® Düsenkörper',
            fr: 'Corps de buse ProMax® QuickJet® Quick-Connect',
            nl: 'ProMax® QuickJet® Quick-Connect nozzlebehuizingen'
          }
        }
      ],
      sortIndex: 30,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.Qmj,
    ...defaultFacetOption,
    valueId: '6a87aa56-4a60-451e-a241-011315411b72',
    value: 'QMJ',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QMJ' }
        }
      ],
      sortIndex: 31,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.QuickFloodjetQuickConnect,
    ...defaultFacetOption,
    valueId: '940e3151-be0a-440f-a256-cff6e7b86d80',
    value: 'Quick FloodJet® Quick-Connect Spray Tips and Nozzle Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FloodJet® Quick-Connect Spray Tips and Nozzle Assemblies',
            de: 'Quick FloodJet® Quick-Connect Sprühspitzen und Düsenbaugruppen',
            fr: 'Embouts de pulvérisation et ensembles de buses Rapides FloodJet® Quick-Connect',
            nl: 'Snelle FloodJet® Quick-Connect spuittips en nozzle-assemblages'
          }
        }
      ],
      sortIndex: 32,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.QuickFulljetQuickConnect,
    ...defaultFacetOption,
    valueId: 'cbe79b49-8d0b-44ca-8629-72db1068d7e4',
    value: 'Quick FullJet® Quick-Connect Spray Tips and Nozzle Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick FullJet® Quick-Connect Spray Tips and Nozzle Assemblies',
            de: 'Quick FullJet® Quick-Connect Sprühspitzen und Düsenbaugruppen',
            fr: 'Embouts de pulvérisation et ensembles de buses Quick-Connect Quick FullJet® Quick-Connect',
            nl: 'Snelle FullJet® Quick-Connect spuittips en nozzle-assemblages'
          }
        }
      ],
      sortIndex: 33,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.QuickVeejetFlatSprayQuickConnect,
    ...defaultFacetOption,
    valueId: '47ea5c8f-9923-4996-a88f-f1422b887fe8',
    value:
      'Quick VeeJet® Flat Spray Quick-Connect Spray Tips and Nozzle Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick VeeJet® Flat Spray Quick-Connect Spray Tips and Nozzle Assemblies',
            de: 'Quick VeeJet® Flat Spray Schnellverschluss-Sprühspitzen und Düsenbaugruppen',
            fr: 'Quick VeeJet® Flat Spray Quick-Connect Embouts de pulvérisation et ensembles de buses',
            nl: 'Snelle VeeJet® Flat Spray Quick-Connect spuittips en nozzleassemblages'
          }
        }
      ],
      sortIndex: 34,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.QuickVeejetSolidStreamQuickConnect,
    ...defaultFacetOption,
    valueId: '37340601-be1c-4167-afd5-84ad0d495693',
    value:
      'Quick VeeJet® Solid Stream Quick-Connect Spray Tips and Nozzle Assemblies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Quick VeeJet® Solid Stream Quick-Connect Spray Tips and Nozzle Assemblies',
            de: 'Quick VeeJet® Solid Stream Quick-Connect Sprühspitzen und Düsenbaugruppen',
            fr: 'Quick VeeJet® Solid Stream Quick-Connect Embouts de pulvérisation et ensembles de buses',
            nl: 'Snelle VeeJet® Solid Stream Quick-Connect spuittips en nozzleassemblages'
          }
        }
      ],
      sortIndex: 35,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.QuickjetQuickConnectNozzleBodies,
    ...defaultFacetOption,
    valueId: 'f0e0afaa-7322-4ef2-8d85-12f34b06247f',
    value: 'QuickJet® Quick-Connect Nozzle Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet® Quick-Connect Nozzle Bodies',
            de: 'QuickJet Quick-Connect® Düsenkörper',
            fr: 'Corps de buse QuickJet® Quick-Connect',
            nl: 'QuickJet® Quick-Connect nozzlebehuizingen'
          }
        }
      ],
      sortIndex: 36,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.RoundSpray,
    ...defaultFacetOption,
    valueId: 'c047dd79-f6bb-446c-bfed-bd5c7c9c7686',
    value: 'Round Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Round Spray Nozzles',
            de: 'Runde Sprühdüsen',
            fr: 'Buses de pulvérisation rondes',
            nl: 'Ronde sproeikoppen'
          }
        }
      ],
      sortIndex: 37,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.SingleOrificeHydraulicFineSpray,
    ...defaultFacetOption,
    valueId: '7b2db722-ec3d-42c7-8d6d-ad7bfd28f997',
    value: 'Single Orifice Hydraulic Fine Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Single Orifice Hydraulic Fine Spray Nozzles',
            de: 'Hydraulische Feinsprühdüsen mit einer einzigen Blende',
            fr: 'Buses de pulvérisation fine hydrauliques à orifice unique',
            nl: 'Enkele opening hydraulische fijne sproeikoppen'
          }
        }
      ],
      sortIndex: 38,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.SplitEyeletConnectors,
    ...defaultFacetOption,
    valueId: '86dc468f-8158-4153-8b66-74af9fcc5298',
    value: 'Split-Eyelet Connectors',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Split-Eyelet Connectors',
            de: 'Split-Eyelet-Steckverbinder',
            fr: 'Connecteurs Split-Eyelet',
            nl: 'Connectoren met split-eyelet'
          }
        }
      ],
      sortIndex: 39,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.SquareOvalVanelessSprayFullCone,
    ...defaultFacetOption,
    valueId: '09db7b15-b198-449b-9880-9afb00854886',
    value: 'Square/Oval Spray Full Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Square/Oval Spray Full Cone Nozzles' }
        }
      ],
      sortIndex: 40,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.StandardAngleFullCone,
    ...defaultFacetOption,
    valueId: 'e2092191-faa9-460f-b2f2-80e6fce054bd',
    value: 'Standard Angle Full Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Standard Angle Full Cone Nozzles',
            de: 'Standardwinkel-Vollkegeldüsen',
            fr: 'Buses à cône complet à angle standard',
            nl: 'Standaard hoek volledige conus nozzles'
          }
        }
      ],
      sortIndex: 41,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.StandardAngleHollowCone,
    ...defaultFacetOption,
    valueId: '11796522-fdc7-415e-bf9f-1e3109d5ddc4',
    value: 'Standard Angle Hollow Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Standard Angle Hollow Cone Nozzles',
            de: 'Standardwinkel-Hohlkegeldüsen',
            fr: 'Buses à cône creux à angle standard',
            nl: 'Standaard hoek holle kegel nozzles'
          }
        }
      ],
      sortIndex: 42,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.StandardFlatSpray,
    ...defaultFacetOption,
    valueId: 'eb4cb534-dc38-4f76-b2b0-f32c276cfa9e',
    value: 'Standard Flat Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Standard Flat Spray Nozzles',
            de: 'Standard-Flachsprühdüsen',
            fr: 'Buses de pulvérisation plates standard',
            nl: 'Standaard platte sproeikoppen'
          }
        }
      ],
      sortIndex: 43,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.StandardSolidStream,
    ...defaultFacetOption,
    valueId: 'b1e104e4-b156-4386-8df8-d81fb4941895',
    value: 'Standard Solid Stream Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Standard Solid Stream Nozzles',
            de: 'Standard-Vollstromdüsen',
            fr: 'Buses à flux solide standard',
            nl: 'Standaard Solid Stream Nozzles'
          }
        }
      ],
      sortIndex: 44,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.Strainers,
    ...defaultFacetOption,
    valueId: '61aac3d6-a30f-4d44-ae56-d7e0014b2758',
    value: 'Strainers',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Strainers', de: 'Siebe', fr: 'Crépines', nl: 'Zeven' }
        }
      ],
      sortIndex: 45,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves,
    ...defaultFacetOption,
    valueId: '7f7ca173-42b9-4809-a2e4-5624c28e27bf',
    value: 'Throttling and Pressure Relief/Regulating Valves',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Throttling and Pressure Relief/Regulating Valves',
            de: 'Drosselungs- und Druckentlastungs-/Regelventile',
            fr: 'Vannes d’étranglement et de surpression/régulation',
            nl: 'Throttling en drukontlastings-/regelkleppen'
          }
        }
      ],
      sortIndex: 46,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UltraHighPressureFlatSpray,
    ...defaultFacetOption,
    valueId: '0f35834a-55aa-428e-b064-514e4dc60099',
    value: 'Ultra-High Pressure Flat Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Flat Spray Nozzles',
            de: 'Ultrahochdruck-Flachsprühdüsen',
            fr: 'Buses de pulvérisation plates ultra-haute pression',
            nl: 'Ultrahoge druk platte sproeikoppen'
          }
        }
      ],
      sortIndex: 47,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UltraHighPressureNozzleBodies,
    ...defaultFacetOption,
    valueId: 'feab5f27-0a28-4d0e-b90f-48dccbafa747',
    value: 'Ultra-High Pressure Nozzle Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Nozzle Bodies',
            de: 'Ultrahochdruck-Düsenkörper',
            fr: 'Corps de buse ultra-haute pression',
            nl: 'Ultrahogedrukmondhuizen'
          }
        }
      ],
      sortIndex: 48,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UltraHighPressureSolidStream,
    ...defaultFacetOption,
    valueId: '6478f148-8332-4d9e-bd97-f5091d2569d6',
    value: 'Ultra-High Pressure Solid Stream Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra-High Pressure Solid Stream Nozzles',
            de: 'Ultrahochdruck-Feststoffstromdüsen',
            fr: 'Buses à flux solide ultra-haute pression',
            nl: 'Ultrahoge druk massieve stroomsproeiers'
          }
        }
      ],
      sortIndex: 49,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UnijetFlatSpray,
    ...defaultFacetOption,
    valueId: '5aab2c11-a2d5-4a0c-a5a2-6d9a344efe75',
    value: 'UniJet® Flat Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet® Flat Spray Nozzles',
            de: 'UniJet® Flachsprühdüsen',
            fr: 'Buses de pulvérisation plates UniJet®',
            nl: 'UniJet® platte sproeikoppen'
          }
        }
      ],
      sortIndex: 50,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UnijetFullCone,
    ...defaultFacetOption,
    valueId: 'f05b4606-7452-4861-969c-6f02414cc364',
    value: 'UniJet® Full Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet® Full Cone Nozzles',
            de: 'UniJet® Vollkegeldüsen',
            fr: 'Buses UniJet® Full Cone',
            nl: 'UniJet® Full Cone Nozzles'
          }
        }
      ],
      sortIndex: 51,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UnijetHollowCone,
    ...defaultFacetOption,
    valueId: 'e24c4d64-14ef-4ee5-a0bb-f32af880ef16',
    value: 'UniJet® Hollow Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet® Hollow Cone Nozzles',
            de: 'UniJet® Hohlkegeldüsen',
            fr: 'Buses à cône creux UniJet®',
            nl: 'UniJet® Holle Conus Nozzles'
          }
        }
      ],
      sortIndex: 52,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UnijetNozzleBodies,
    ...defaultFacetOption,
    valueId: 'd04eb415-54f6-4e98-a781-b4ba6046a210',
    value: 'UniJet® Nozzle Bodies',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet® Nozzle Bodies',
            de: 'UniJet® Düsengehäuse',
            fr: 'Corps de buse UniJet®',
            nl: 'UniJet® Nozzle Behuizingen'
          }
        }
      ],
      sortIndex: 53,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UnijetSolidStream,
    ...defaultFacetOption,
    valueId: 'cea3b906-28f3-4c1c-989a-a9e9a85a0ac2',
    value: 'UniJet® Solid Stream Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'UniJet® Solid Stream Nozzles',
            de: 'UniJet® Solid Stream Düsen',
            fr: 'Buses UniJet® Solid Stream',
            nl: 'UniJet® Solid Stream Nozzles'
          }
        }
      ],
      sortIndex: 54,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.UnspecifiedSeries,
    ...defaultFacetOption,
    valueId: '9c58413d-a53e-42b3-b904-ff3e5002489d',
    value: 'Unspecified Series',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Unspecified Series' }
        }
      ],
      sortIndex: 55,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.VaaVau,
    ...defaultFacetOption,
    valueId: '086fe2d0-3802-4c96-9fbe-0e97cd54df68',
    value: 'VAA, VAU',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VAA, VAU' }
        }
      ],
      sortIndex: 56,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.Vmau,
    ...defaultFacetOption,
    valueId: 'ea39602d-847c-4c84-b563-73d04c7b94be',
    value: 'VMAU',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VMAU' }
        }
      ],
      sortIndex: 57,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.WideAngleDeflectedFlatSpray,
    ...defaultFacetOption,
    valueId: '21b8a5e1-e528-45c6-80d9-13845b7ec479',
    value: 'Wide Angle Deflected Flat Spray Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Wide Angle Deflected Flat Spray Nozzles',
            de: 'Weitwinkelabgelenkte flache Sprühdüsen',
            fr: 'Buses de pulvérisation plates déviées grand angle',
            nl: 'Groothoek afgebogen platte sproeikoppen'
          }
        }
      ],
      sortIndex: 58,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.WideAngleFullCone,
    ...defaultFacetOption,
    valueId: '7db68204-1983-4010-8d45-9d50bb423c98',
    value: 'Wide Angle Full Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Wide Angle Full Cone Nozzles',
            de: 'Weitwinkel-Vollkegeldüsen',
            fr: 'Buses à cône plein angle grand angle',
            nl: 'Groothoek full conus nozzles'
          }
        }
      ],
      sortIndex: 59,
      seoPath: ''
    }
  },
  {
    key: SeriesFacetOptionKey.WideAngleHollowCone,
    ...defaultFacetOption,
    valueId: 'b0151373-5e72-4e6e-af53-ada063e10c16',
    value: 'Wide Angle Hollow Cone Nozzles',
    parentId: '',
    children: [],
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Wide Angle Hollow Cone Nozzles',
            de: 'Weitwinkel-Hohlkegeldüsen',
            fr: 'Buses à cône creux grand angle',
            nl: 'Groothoek holle kegel nozzles'
          }
        }
      ],
      sortIndex: 60,
      seoPath: ''
    }
  }
];

export const productSeriesFacet: Facet<
  SeriesFacetOptionKey,
  FacetOption<SeriesFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.ProductSeries,
  attributeTypeCode: 'ProductSeries',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: productSeriesFacetOptions
};
