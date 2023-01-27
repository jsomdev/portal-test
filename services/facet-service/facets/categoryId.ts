import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum CategoryIdFacetOptionKey {
  Accessories = 'Accessories',
  AdjustableBallFittings = 'AdjustableBallFittings',
  AirActuatedAirAtomizing = 'AirActuatedAirAtomizing',
  AirActuatedHydraulicAtomizing = 'AirActuatedHydraulicAtomizing',
  AirAtomizingNozzles = 'AirAtomizingNozzles',
  AirDryingBlowOff = 'AirDryingBlowOff',
  AirNozzles = 'AirNozzles',
  AngleTypeHollowConeNozzles = 'AngleTypeHollowConeNozzles',
  Applications = 'Applications',
  ApplyingReleaseAgents = 'ApplyingReleaseAgents',
  AutomaticNozzles = 'AutomaticNozzles',
  Cleaning = 'Cleaning',
  Coating = 'Coating',
  CoatingAutomaticNozzles = 'CoatingAutomaticNozzles',
  CoatingHydraulicNozzles = 'CoatingHydraulicNozzles',
  Cooling = 'Cooling',
  CoolingAndConditioningOfGas = 'CoolingAndConditioningOfGas',
  CoolingSolids = 'CoolingSolids',
  DeflectedFlatSprayNozzles = 'DeflectedFlatSprayNozzles',
  DieLube = 'DieLube',
  Distribojet = 'Distribojet',
  DustControl = 'DustControl',
  ElectricallyActuatedAirAtomizing = 'ElectricallyActuatedAirAtomizing',
  ElectricallyActuatedHydraulicAtomizing = 'ElectricallyActuatedHydraulicAtomizing',
  EvaporativeCoolingOfLiquids = 'EvaporativeCoolingOfLiquids',
  FineSprayNozzles = 'FineSprayNozzles',
  FireProtection = 'FireProtection',
  FlatSpray = 'FlatSpray',
  FlatSprayNozzles = 'FlatSprayNozzles',
  Flatjet = 'Flatjet',
  Floodjet = 'Floodjet',
  Fogjet = 'Fogjet',
  FullConeNozzles = 'FullConeNozzles',
  Fulljet = 'Fulljet',
  HandHeldSprayGuns = 'HandHeldSprayGuns',
  HighPressure = 'HighPressure',
  HighPressureCleaning = 'HighPressureCleaning',
  HighPressureFlatSprayNozzles = 'HighPressureFlatSprayNozzles',
  HighPressureSolidStreamNozzles = 'HighPressureSolidStreamNozzles',
  HollowConeNozzles = 'HollowConeNozzles',
  Humidification = 'Humidification',
  HumidifyingAndMoistening = 'HumidifyingAndMoistening',
  HumidifyingGases = 'HumidifyingGases',
  HydraulicNozzles = 'HydraulicNozzles',
  InLineHollowConeNozzles = 'InLineHollowConeNozzles',
  LargeFreePassageFullConeNozzles = 'LargeFreePassageFullConeNozzles',
  LargeFreePassageHollowConeNozzles = 'LargeFreePassageHollowConeNozzles',
  LowPressure = 'LowPressure',
  LowPressureRinsing = 'LowPressureRinsing',
  Lubrication = 'Lubrication',
  Marking = 'Marking',
  MediumPressure = 'MediumPressure',
  MiniQuickjetNozzleBodies = 'MiniQuickjetNozzleBodies',
  MoisteningSurfaces = 'MoisteningSurfaces',
  MultiOrificeFineSprayNozzles = 'MultiOrificeFineSprayNozzles',
  NarrowAngleFullConeNozzles = 'NarrowAngleFullConeNozzles',
  NozzleBodies = 'NozzleBodies',
  PromaxQuickjet = 'PromaxQuickjet',
  Quickjet = 'Quickjet',
  QuickjetFlatSprayNozzles = 'QuickjetFlatSprayNozzles',
  QuickjetFullConeNozzles = 'QuickjetFullConeNozzles',
  QuickjetNozzleBodies = 'QuickjetNozzleBodies',
  QuickjetSolidStreamNozzles = 'QuickjetSolidStreamNozzles',
  QuickmistQuickConnectAirAtomizingNozzles = 'QuickmistQuickConnectAirAtomizingNozzles',
  RoundSpray = 'RoundSpray',
  SingleOrificeFineSprayNozzles = 'SingleOrificeFineSprayNozzles',
  SolidStreamNozzles = 'SolidStreamNozzles',
  Spiraljet = 'Spiraljet',
  SplitEyeletConnectors = 'SplitEyeletConnectors',
  SprayGuns = 'SprayGuns',
  SprayingSystemsCoBrands = 'SprayingSystemsCoBrands',
  SquareOvalSprayFullConeNozzles = 'SquareOvalSprayFullConeNozzles',
  StandardAirAtomizingNozzles = 'StandardAirAtomizingNozzles',
  StandardFlatSprayNozzles = 'StandardFlatSprayNozzles',
  StandardFullConeNozzles = 'StandardFullConeNozzles',
  StandardSolidStreamNozzles = 'StandardSolidStreamNozzles',
  Strainers = 'Strainers',
  TankCleaning = 'TankCleaning',
  TankCleaningNozzles = 'TankCleaningNozzles',
  ThrottlingAndPressureReliefRegulatingValves = 'ThrottlingAndPressureReliefRegulatingValves',
  UltraHighPressureNozzles = 'UltraHighPressureNozzles',
  Unijet = 'Unijet',
  UnijetFlatSprayNozzles = 'UnijetFlatSprayNozzles',
  UnijetFullConeNozzles = 'UnijetFullConeNozzles',
  UnijetHollowConeNozzles = 'UnijetHollowConeNozzles',
  UnijetNozzleBodies = 'UnijetNozzleBodies',
  UnijetSolidStreamNozzles = 'UnijetSolidStreamNozzles',
  UpTo100FtDiameter = 'UpTo100FtDiameter',
  UpTo10FtDiameter = 'UpTo10FtDiameter',
  UpTo20FtDiameter = 'UpTo20FtDiameter',
  UpTo45FtDiameter = 'UpTo45FtDiameter',
  UpTo5FtDiameter = 'UpTo5FtDiameter',
  VariableSprayNozzles = 'VariableSprayNozzles',
  Veejet = 'Veejet',
  Washjet = 'Washjet',
  Whirljet = 'Whirljet',
  WideAngleFullConeNozzles = 'WideAngleFullConeNozzles'
}

export const categoryIdFacetOptions: FacetOption<
  CategoryIdFacetOptionKey,
  { slug?: string }
>[] = [
  {
    key: CategoryIdFacetOptionKey.HydraulicNozzles,
    ...defaultFacetOption,
    valueId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
    value: 'Hydraulic Nozzles',
    parentId: '',
    children: [
      'e41acecc-5491-4fa1-ae55-1bf880305962',
      '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
      '9b282e61-a940-4c4c-900f-dc057905d2a8',
      '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
      'f682ad13-4ea3-4bff-b0ff-8cd2fc500007'
    ],
    slug: 'hydraulic-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Hydraulic Nozzles',
            de: 'Hydraulische Düsen',
            fr: 'Buses hydrauliques',
            nl: 'Hydraulische nozzles'
          }
        }
      ],
      sortIndex: 0,
      seoPath: 'hydraulic-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.FullConeNozzles,
    ...defaultFacetOption,
    valueId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
    value: 'Full Cone Nozzles',
    parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
    children: [
      '2498dfc7-3295-403b-97fa-28a19f748306',
      'c67479be-9af0-434a-97c2-da8c26357b7f',
      '9856253a-0db7-4723-93d6-8a82e485c1a8',
      'd944e101-27ba-48b2-b8be-b864e9ebee39',
      '59e49512-3759-4eba-903d-dccd30798b38',
      '7e6211ba-add0-4e77-aa3e-820a6d6d0ade',
      '211aed31-3e85-4cfb-9b6b-ec7a301a7acb'
    ],
    slug: 'full-cone-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Full Cone Nozzles',
            de: 'Volle Kegeldüsen',
            fr: 'Buses à cône complet',
            nl: 'Volledige conussproeiers'
          }
        }
      ],
      sortIndex: 1,
      seoPath: 'full-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.StandardFullConeNozzles,
    ...defaultFacetOption,
    valueId: '2498dfc7-3295-403b-97fa-28a19f748306',
    value: 'Standard Full Cone Nozzles',
    parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
    children: [],
    slug: 'standard-full-cone-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Standard Full Cone Nozzles',
            de: 'Standard Vollkegeldüsen',
            fr: 'Buses à cône complet standard',
            nl: 'Standaard Full Cone Nozzles'
          }
        }
      ],
      sortIndex: 2,
      seoPath: 'standard-full-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.WideAngleFullConeNozzles,
    ...defaultFacetOption,
    valueId: 'c67479be-9af0-434a-97c2-da8c26357b7f',
    value: 'Wide Angle Full Cone Nozzles',
    parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
    children: [],
    slug: 'wide-angle-full-cone-nozzles',
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
      sortIndex: 3,
      seoPath: 'wide-angle-full-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.NarrowAngleFullConeNozzles,
    ...defaultFacetOption,
    valueId: '9856253a-0db7-4723-93d6-8a82e485c1a8',
    value: 'Narrow Angle Full Cone Nozzles',
    parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
    children: [],
    slug: 'narrow-angle-full-cone-nozzles',
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
      sortIndex: 4,
      seoPath: 'narrow-angle-full-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.LargeFreePassageFullConeNozzles,
    ...defaultFacetOption,
    valueId: 'd944e101-27ba-48b2-b8be-b864e9ebee39',
    value: 'Large Free Passage Full Cone Nozzles',
    parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
    children: [],
    slug: 'large-free-passage-full-cone-nozzles',
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
      sortIndex: 5,
      seoPath: 'large-free-passage-full-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.SquareOvalSprayFullConeNozzles,
    ...defaultFacetOption,
    valueId: '59e49512-3759-4eba-903d-dccd30798b38',
    value: 'Square/Oval Spray Full Cone Nozzles',
    parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
    children: [],
    slug: 'square-oval-spray-full-cone-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Square/Oval Spray Full Cone Nozzles',
            de: 'Quadratische/ovale Spray Full Cone Düsen',
            fr: 'Buses carrées / ovales à cône complet',
            nl: 'Vierkante /Ovale Spray Full Cone Nozzles'
          }
        }
      ],
      sortIndex: 6,
      seoPath: 'square-or-oval-spray-full-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UnijetFullConeNozzles,
    ...defaultFacetOption,
    valueId: '7e6211ba-add0-4e77-aa3e-820a6d6d0ade',
    value: 'UniJet® Full Cone Nozzles',
    parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
    children: [],
    slug: 'unijet-full-cone-nozzles',
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
      sortIndex: 7,
      seoPath: 'unijet-full-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.QuickjetFullConeNozzles,
    ...defaultFacetOption,
    valueId: '211aed31-3e85-4cfb-9b6b-ec7a301a7acb',
    value: 'QuickJet® Full Cone Nozzles',
    parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
    children: [],
    slug: 'quickjet-full-cone-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet® Full Cone Nozzles',
            de: 'QuickJet® Full Cone Düsen',
            fr: 'Buses à cône complet QuickJet®',
            nl: 'QuickJet® Full Cone Nozzles'
          }
        }
      ],
      sortIndex: 8,
      seoPath: 'quickjet-full-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.FlatSprayNozzles,
    ...defaultFacetOption,
    valueId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
    value: 'Flat Spray Nozzles',
    parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
    children: [
      'c3b1d7e1-3eee-4235-8469-0f376867113f',
      '8ca385c7-2dc6-49da-b4d1-2928fd2de172',
      '16a8ac8d-98d5-4985-a487-2317588ef025',
      '54c46a98-3f97-4793-b754-0a8316918394',
      '0f4da1bc-5133-46da-a2a4-f2b41098f191'
    ],
    slug: 'flat-spray-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Flat Spray Nozzles',
            de: 'Flachsprühdüsen',
            fr: 'Buses de pulvérisation plates',
            nl: 'Platte sproeikoppen'
          }
        }
      ],
      sortIndex: 9,
      seoPath: 'flat-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.StandardFlatSprayNozzles,
    ...defaultFacetOption,
    valueId: 'c3b1d7e1-3eee-4235-8469-0f376867113f',
    value: 'Standard Flat Spray Nozzles',
    parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
    children: [],
    slug: 'standard-flat-spray-nozzles',
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
      sortIndex: 10,
      seoPath: 'standard-flat-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.DeflectedFlatSprayNozzles,
    ...defaultFacetOption,
    valueId: '8ca385c7-2dc6-49da-b4d1-2928fd2de172',
    value: 'Deflected Flat Spray Nozzles',
    parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
    children: [],
    slug: 'deflected-flat-spray-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Deflected Flat Spray Nozzles',
            de: 'Abgelenkte Flachsprühdüsen',
            fr: 'Buses de pulvérisation plates déviées',
            nl: 'Afgebogen platte sproeikoppen'
          }
        }
      ],
      sortIndex: 11,
      seoPath: 'deflected-flat-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.HighPressureFlatSprayNozzles,
    ...defaultFacetOption,
    valueId: '16a8ac8d-98d5-4985-a487-2317588ef025',
    value: 'High Pressure Flat Spray Nozzles',
    parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
    children: [],
    slug: 'high-pressure-flat-spray-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'High Pressure Flat Spray Nozzles',
            de: 'Hochdruck-Flachsprühdüsen',
            fr: 'Buses de pulvérisation plates haute pression',
            nl: 'Hoge druk platte sproeikoppen'
          }
        }
      ],
      sortIndex: 12,
      seoPath: 'high-pressure-flat-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UnijetFlatSprayNozzles,
    ...defaultFacetOption,
    valueId: '54c46a98-3f97-4793-b754-0a8316918394',
    value: 'UniJet® Flat Spray Nozzles',
    parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
    children: [],
    slug: 'unijet-flat-spray-nozzles',
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
      sortIndex: 13,
      seoPath: 'unijet-flat-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.QuickjetFlatSprayNozzles,
    ...defaultFacetOption,
    valueId: '0f4da1bc-5133-46da-a2a4-f2b41098f191',
    value: 'QuickJet® Flat Spray Nozzles',
    parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
    children: [],
    slug: 'quickjet-flat-spray-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet® Flat Spray Nozzles',
            de: 'QuickJet® Flachsprühdüsen',
            fr: 'Buses de pulvérisation plates QuickJet®',
            nl: 'QuickJet® platte sproeikoppen'
          }
        }
      ],
      sortIndex: 14,
      seoPath: 'quickjet-flat-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.SolidStreamNozzles,
    ...defaultFacetOption,
    valueId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
    value: 'Solid Stream Nozzles',
    parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
    children: [
      '5b65134d-6260-47dc-aa75-0ce9422d631a',
      '349cce28-562d-48c4-be92-29e79fe08385',
      '164e4414-7eb9-4404-baf0-d6e2b3e43c73',
      'fa6700aa-f174-4fd5-a0a0-7821e056f59f',
      'eae1f2f7-f707-4a8c-974e-36c201cb5e1a'
    ],
    slug: 'solid-stream-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Solid Stream Nozzles',
            de: 'Vollstromdüsen',
            fr: 'Buses Solid Stream',
            nl: 'Solid Stream Nozzles'
          }
        }
      ],
      sortIndex: 15,
      seoPath: 'solid-stream-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.StandardSolidStreamNozzles,
    ...defaultFacetOption,
    valueId: '5b65134d-6260-47dc-aa75-0ce9422d631a',
    value: 'Standard Solid Stream Nozzles',
    parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
    children: [],
    slug: 'standard-solid-stream-nozzles',
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
      sortIndex: 16,
      seoPath: 'standard-solid-stream-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.HighPressureSolidStreamNozzles,
    ...defaultFacetOption,
    valueId: '349cce28-562d-48c4-be92-29e79fe08385',
    value: 'High Pressure Solid Stream Nozzles',
    parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
    children: [],
    slug: 'high-pressure-solid-stream-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'High Pressure Solid Stream Nozzles',
            de: 'Hochdruck-Feststoffstromdüsen',
            fr: 'Buses à flux solide haute pression',
            nl: 'Hoge druk vaste stroom nozzles'
          }
        }
      ],
      sortIndex: 17,
      seoPath: 'high-pressure-solid-stream-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UltraHighPressureNozzles,
    ...defaultFacetOption,
    valueId: '164e4414-7eb9-4404-baf0-d6e2b3e43c73',
    value: 'Ultra High Pressure Nozzles',
    parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
    children: [],
    slug: 'ultra-high-pressure-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Ultra High Pressure Nozzles',
            de: 'Ultrahochdruckdüsen',
            fr: 'Buses ultra haute pression',
            nl: 'Ultra hoge druk nozzles'
          }
        }
      ],
      sortIndex: 18,
      seoPath: 'ultra-high-pressure-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UnijetSolidStreamNozzles,
    ...defaultFacetOption,
    valueId: 'fa6700aa-f174-4fd5-a0a0-7821e056f59f',
    value: 'UniJet® Solid Stream Nozzles',
    parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
    children: [],
    slug: 'unijet-solid-stream-nozzles',
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
      sortIndex: 19,
      seoPath: 'unijet-solid-stream-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.QuickjetSolidStreamNozzles,
    ...defaultFacetOption,
    valueId: 'eae1f2f7-f707-4a8c-974e-36c201cb5e1a',
    value: 'QuickJet® Solid Stream Nozzles',
    parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
    children: [],
    slug: 'quickjet-solid-stream-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet® Solid Stream Nozzles',
            de: 'QuickJet® Solid Stream Düsen',
            fr: 'Buses QuickJet® Solid Stream',
            nl: 'QuickJet® Solid Stream Nozzles'
          }
        }
      ],
      sortIndex: 20,
      seoPath: 'quickjet-solid-stream-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.HollowConeNozzles,
    ...defaultFacetOption,
    valueId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
    value: 'Hollow Cone Nozzles',
    parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
    children: [
      'dd8ecdf4-b4da-49de-bee4-a136fdfd0c57',
      'efcbeb55-bf89-4298-b006-83bc6af9a3dc',
      'b360dc4b-0cf9-4e84-953b-791453d7e293',
      '09b345e8-de33-43ab-90ea-a81c636a553d'
    ],
    slug: 'hollow-cone-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Hollow Cone Nozzles',
            de: 'Hohlkegeldüsen',
            fr: 'Buses à cône creux',
            nl: 'Holle Kegel Nozzles'
          }
        }
      ],
      sortIndex: 21,
      seoPath: 'hollow-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.AngleTypeHollowConeNozzles,
    ...defaultFacetOption,
    valueId: 'dd8ecdf4-b4da-49de-bee4-a136fdfd0c57',
    value: 'Angle-Type Hollow Cone Nozzles',
    parentId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
    children: [],
    slug: 'angle-type-hollow-cone-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Angle-Type Hollow Cone Nozzles',
            de: 'Winkelförmige Hohlkegeldüsen',
            fr: 'Buses à cône creux de type angle',
            nl: 'Angle-Type Holle Conus Nozzles'
          }
        }
      ],
      sortIndex: 22,
      seoPath: 'angle-type-hollow-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.InLineHollowConeNozzles,
    ...defaultFacetOption,
    valueId: 'efcbeb55-bf89-4298-b006-83bc6af9a3dc',
    value: 'In-Line Hollow Cone Nozzles',
    parentId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
    children: [],
    slug: 'in-line-hollow-cone-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'In-Line Hollow Cone Nozzles',
            de: 'Inline-Hohlkegeldüsen',
            fr: 'Buses à cône creux en ligne',
            nl: 'In-Line Holle Conus Nozzles'
          }
        }
      ],
      sortIndex: 23,
      seoPath: 'in-line-hollow-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.LargeFreePassageHollowConeNozzles,
    ...defaultFacetOption,
    valueId: 'b360dc4b-0cf9-4e84-953b-791453d7e293',
    value: 'Large Free Passage Hollow Cone Nozzles',
    parentId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
    children: [],
    slug: 'large-free-passage-hollow-cone-nozzles',
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
      sortIndex: 24,
      seoPath: 'large-free-passage-hollow-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UnijetHollowConeNozzles,
    ...defaultFacetOption,
    valueId: '09b345e8-de33-43ab-90ea-a81c636a553d',
    value: 'UniJet® Hollow Cone Nozzles',
    parentId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
    children: [],
    slug: 'unijet-hollow-cone-nozzles',
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
      sortIndex: 25,
      seoPath: 'unijet-hollow-cone-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.FineSprayNozzles,
    ...defaultFacetOption,
    valueId: 'f682ad13-4ea3-4bff-b0ff-8cd2fc500007',
    value: 'Fine Spray Nozzles',
    parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
    children: [
      '1c3a59c0-decb-44dd-9c3f-c5dc6d91fea1',
      '20bc051a-0842-4557-910e-06a261e01135'
    ],
    slug: 'fine-spray-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Fine Spray Nozzles',
            de: 'Feine Sprühdüsen',
            fr: 'Buses de pulvérisation fines',
            nl: 'Fijne sproeikoppen'
          }
        }
      ],
      sortIndex: 26,
      seoPath: 'fine-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.SingleOrificeFineSprayNozzles,
    ...defaultFacetOption,
    valueId: '1c3a59c0-decb-44dd-9c3f-c5dc6d91fea1',
    value: 'Single-Orifice Fine Spray Nozzles',
    parentId: 'f682ad13-4ea3-4bff-b0ff-8cd2fc500007',
    children: [],
    slug: 'single-orifice-fine-spray-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Single-Orifice Fine Spray Nozzles',
            de: 'Einzelblendige Feinsprühdüsen',
            fr: 'Buses de pulvérisation fine à orifice unique',
            nl: 'Single-Orifice Fijne Sproeikoppen'
          }
        }
      ],
      sortIndex: 27,
      seoPath: 'single-orifice-fine-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.MultiOrificeFineSprayNozzles,
    ...defaultFacetOption,
    valueId: '20bc051a-0842-4557-910e-06a261e01135',
    value: 'Multi-Orifice Fine Spray Nozzles',
    parentId: 'f682ad13-4ea3-4bff-b0ff-8cd2fc500007',
    children: [],
    slug: 'multi-orifice-fine-spray-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Multi-Orifice Fine Spray Nozzles',
            de: 'Multi-Blenden-Feinsprühdüsen',
            fr: 'Buses de pulvérisation fine multi-orifices',
            nl: 'Multi-Orifice Fijne Sproeikoppen'
          }
        }
      ],
      sortIndex: 28,
      seoPath: 'multi-orifice-fine-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.TankCleaningNozzles,
    ...defaultFacetOption,
    valueId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
    value: 'Tank Cleaning Nozzles',
    parentId: '',
    children: [
      '1d20c410-cae8-4bff-8c4f-c820af51766e',
      'e2114c73-1ded-4317-a2d5-fe7133d96035',
      '144ffa16-8495-42e8-8435-64b38b266197',
      'a24d14a1-71e8-4335-970a-e19e07ac6f1c',
      '67a0148f-82b9-4e38-baa7-f1509d6b8b5d'
    ],
    slug: 'tank-cleaning-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Tank Cleaning Nozzles',
            de: 'Tankreinigungsdüsen',
            fr: 'Buses de nettoyage de réservoir',
            nl: 'Tankreinigingssproeiers'
          }
        }
      ],
      sortIndex: 29,
      seoPath: 'tank-cleaning-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UpTo100FtDiameter,
    ...defaultFacetOption,
    valueId: '1d20c410-cae8-4bff-8c4f-c820af51766e',
    value: 'Up to 100 ft. (30.5 m) diameter',
    parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
    children: [],
    slug: 'up-to-100-ft-diameter',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Up to 100 ft. (30.5 m) diameter',
            de: 'Bis zu 30,5 m (100 ft.) Durchmesser',
            fr: 'Jusqu’à 100 pi (30,5 m) de diamètre',
            nl: 'Tot 100 ft. (30,5 m) diameter'
          }
        }
      ],
      sortIndex: 30,
      seoPath: 'up-to-100-ft-tank-cleaning-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UpTo45FtDiameter,
    ...defaultFacetOption,
    valueId: 'e2114c73-1ded-4317-a2d5-fe7133d96035',
    value: 'Up to 45 ft. (13.7 m) diameter',
    parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
    children: [],
    slug: 'up-to-45-ft-diameter',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Up to 45 ft. (13.7 m) diameter',
            de: 'Bis zu 45 Fuß (13,7 m) Durchmesser',
            fr: 'Jusqu’à 45 pi (13,7 m) de diamètre',
            nl: 'Tot 45 ft. (13,7 m) diameter'
          }
        }
      ],
      sortIndex: 31,
      seoPath: 'up-to-45-ft-tank-cleaning-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UpTo20FtDiameter,
    ...defaultFacetOption,
    valueId: '144ffa16-8495-42e8-8435-64b38b266197',
    value: 'Up to 20 ft. (6 m) diameter',
    parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
    children: [],
    slug: 'up-to-20-ft-diameter',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Up to 20 ft. (6 m) diameter',
            de: 'Bis zu 6 m (20 ft.) Durchmesser',
            fr: 'Jusqu’à 20 pi (6 m) de diamètre',
            nl: 'Tot 20 ft. (6 m) diameter'
          }
        }
      ],
      sortIndex: 32,
      seoPath: 'up-to-20-ft-tank-cleaning-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UpTo10FtDiameter,
    ...defaultFacetOption,
    valueId: 'a24d14a1-71e8-4335-970a-e19e07ac6f1c',
    value: 'Up to 10 ft. (3 m) diameter',
    parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
    children: [],
    slug: 'up-to-10-ft-diameter',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Up to 10 ft. (3 m) diameter',
            de: 'Bis zu 10 Fuß (3 m) Durchmesser',
            fr: 'Jusqu’à 10 pi (3 m) de diamètre',
            nl: 'Tot 10 ft. (3 m) diameter'
          }
        }
      ],
      sortIndex: 33,
      seoPath: 'up-to-10-ft-tank-cleaning-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UpTo5FtDiameter,
    ...defaultFacetOption,
    valueId: '67a0148f-82b9-4e38-baa7-f1509d6b8b5d',
    value: 'Up to 5 ft. (1.5 m) diameter',
    parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
    children: [],
    slug: 'up-to-5-ft-diameter',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Up to 5 ft. (1.5 m) diameter',
            de: 'Bis zu 1,5 m (5 ft) Durchmesser',
            fr: 'Jusqu’à 5 pi (1,5 m) de diamètre',
            nl: 'Tot 5 ft. (1,5 m) diameter'
          }
        }
      ],
      sortIndex: 34,
      seoPath: 'up-to-5-ft-tank-cleaning-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.AutomaticNozzles,
    ...defaultFacetOption,
    valueId: '43c4a35a-5621-4585-b291-d8481c00c83d',
    value: 'Automatic Spray Nozzles',
    parentId: '',
    children: [
      'cae0584c-8fbc-40bd-82ff-6e27b664513b',
      'aeb673dc-b0e0-419a-861d-691fd3b30989',
      'bf851fde-6525-4fa3-9ba1-7b76b4111fbe',
      '1f1f0459-20fe-4d4f-a4c5-afec9af36f05'
    ],
    slug: 'automatic-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Automatic Spray Nozzles' }
        }
      ],
      sortIndex: 35,
      seoPath: 'automatic-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.ElectricallyActuatedHydraulicAtomizing,
    ...defaultFacetOption,
    valueId: 'cae0584c-8fbc-40bd-82ff-6e27b664513b',
    value: 'Electrically-Actuated / Hydraulic Atomizing',
    parentId: '43c4a35a-5621-4585-b291-d8481c00c83d',
    children: [],
    slug: 'electrically-actuated-hydraulic-atomizing',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated / Hydraulic Atomizing',
            de: 'Elektrisch betätigt / Hydraulische Zerstäubung',
            fr: 'Atomisation électrique / hydraulique',
            nl: 'Elektrisch bediend / hydraulisch vernevelen'
          }
        }
      ],
      sortIndex: 36,
      seoPath: 'electrically-actuated-hydraulic-atomizing-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.ElectricallyActuatedAirAtomizing,
    ...defaultFacetOption,
    valueId: 'aeb673dc-b0e0-419a-861d-691fd3b30989',
    value: 'Electrically-Actuated / Air Atomizing',
    parentId: '43c4a35a-5621-4585-b291-d8481c00c83d',
    children: [],
    slug: 'electrically-actuated-air-atomizing',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Electrically-Actuated / Air Atomizing',
            de: 'Elektrisch betätigt / Luftzerstäubend',
            fr: 'Avitaillement électrique / Atomisation de l’air',
            nl: 'Elektrisch bediend / luchtverneveling'
          }
        }
      ],
      sortIndex: 37,
      seoPath: 'electrically-actuated-air-atomizing-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.AirActuatedHydraulicAtomizing,
    ...defaultFacetOption,
    valueId: 'bf851fde-6525-4fa3-9ba1-7b76b4111fbe',
    value: 'Air-Actuated / Hydraulic Atomizing',
    parentId: '43c4a35a-5621-4585-b291-d8481c00c83d',
    children: [],
    slug: 'air-actuated-hydraulic-atomizing',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated / Hydraulic Atomizing',
            de: 'Luftbetätigte / hydraulische Zerstäubung',
            fr: 'Atomisation hydraulique / actionnée à l’air',
            nl: 'Luchtbediend / Hydraulisch vernevelen'
          }
        }
      ],
      sortIndex: 38,
      seoPath: 'air-actuated-hydraulic-atomizing-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.AirActuatedAirAtomizing,
    ...defaultFacetOption,
    valueId: '1f1f0459-20fe-4d4f-a4c5-afec9af36f05',
    value: 'Air-Actuated / Air Atomizing',
    parentId: '43c4a35a-5621-4585-b291-d8481c00c83d',
    children: [],
    slug: 'air-actuated-air-atomizing',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air-Actuated / Air Atomizing',
            de: 'Luftbetätigt / Luftzerstäubung',
            fr: 'Air-Actuated / Atomizing d’air',
            nl: 'Luchtbediend / Luchtvernevelend'
          }
        }
      ],
      sortIndex: 39,
      seoPath: 'air-actuated-air-atomizing-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.SprayGuns,
    ...defaultFacetOption,
    valueId: '3ba9c6a1-43f5-4862-b64e-f7ff232fa691',
    value: 'Spray Guns',
    parentId: '',
    children: [
      'f25e9397-c3b5-4e5d-bb01-cdc14a98ac97',
      '6dd092be-3b4d-4e4a-bd2f-7f30e0da08d6',
      '4e9199f0-2b6e-42b7-a1e2-6592c9603cc1'
    ],
    slug: 'spray-guns',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Spray Guns',
            de: 'Spritzpistolen',
            fr: 'Pistolets',
            nl: 'Spuitpistolen'
          }
        }
      ],
      sortIndex: 40,
      seoPath: 'spray-guns'
    }
  },
  {
    key: CategoryIdFacetOptionKey.LowPressure,
    ...defaultFacetOption,
    valueId: 'f25e9397-c3b5-4e5d-bb01-cdc14a98ac97',
    value: 'Low Pressure',
    parentId: '3ba9c6a1-43f5-4862-b64e-f7ff232fa691',
    children: [],
    slug: 'low-pressure',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Low Pressure',
            de: 'Tiefdruck',
            fr: 'Basse pression',
            nl: 'Lage druk'
          }
        }
      ],
      sortIndex: 41,
      seoPath: 'low-pressure-spray-guns'
    }
  },
  {
    key: CategoryIdFacetOptionKey.MediumPressure,
    ...defaultFacetOption,
    valueId: '6dd092be-3b4d-4e4a-bd2f-7f30e0da08d6',
    value: 'Medium Pressure',
    parentId: '3ba9c6a1-43f5-4862-b64e-f7ff232fa691',
    children: [],
    slug: 'medium-pressure',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Medium Pressure',
            de: 'Mitteldruck',
            fr: 'Moyenne pression',
            nl: 'Gemiddelde druk'
          }
        }
      ],
      sortIndex: 42,
      seoPath: 'medium-pressure-spray-guns'
    }
  },
  {
    key: CategoryIdFacetOptionKey.HighPressure,
    ...defaultFacetOption,
    valueId: '4e9199f0-2b6e-42b7-a1e2-6592c9603cc1',
    value: 'High Pressure',
    parentId: '3ba9c6a1-43f5-4862-b64e-f7ff232fa691',
    children: [],
    slug: 'high-pressure',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'High Pressure',
            de: 'Hochdruck',
            fr: 'Haute pression',
            nl: 'Hoge druk'
          }
        }
      ],
      sortIndex: 43,
      seoPath: 'high-pressure-spray-guns'
    }
  },
  {
    key: CategoryIdFacetOptionKey.AirNozzles,
    ...defaultFacetOption,
    valueId: '4b39c56f-d0e6-4a64-b7ac-d3fcc15135a6',
    value: 'Air Nozzles',
    parentId: '',
    children: [
      '723cfc0e-8812-45fc-81f3-76490bed5b02',
      '9728a8a0-cd1c-418a-b2f9-c2ca28e96e6a'
    ],
    slug: 'air-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Air Nozzles',
            de: 'Luftdüsen',
            fr: 'Buses d’air',
            nl: 'Luchtsproeiers'
          }
        }
      ],
      sortIndex: 44,
      seoPath: 'air-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.FlatSpray,
    ...defaultFacetOption,
    valueId: '723cfc0e-8812-45fc-81f3-76490bed5b02',
    value: 'Flat Spray',
    parentId: '4b39c56f-d0e6-4a64-b7ac-d3fcc15135a6',
    children: [],
    slug: 'flat-spray',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Flat Spray',
            de: 'Flaches Spray',
            fr: 'Spray plat',
            nl: 'Platte Spray'
          }
        }
      ],
      sortIndex: 45,
      seoPath: 'flat-spray-air-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.RoundSpray,
    ...defaultFacetOption,
    valueId: '9728a8a0-cd1c-418a-b2f9-c2ca28e96e6a',
    value: 'Round Spray',
    parentId: '4b39c56f-d0e6-4a64-b7ac-d3fcc15135a6',
    children: [],
    slug: 'round-spray',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Round Spray',
            de: 'Rundes Spray',
            fr: 'Spray rond',
            nl: 'Ronde Spray'
          }
        }
      ],
      sortIndex: 46,
      seoPath: 'round-spray-air-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.AirAtomizingNozzles,
    ...defaultFacetOption,
    valueId: '3ff41a3f-935f-4fb9-a0e8-a6169a5c01c8',
    value: 'Air Atomizing Spray Nozzles',
    parentId: '',
    children: [
      '99845edd-d1fd-44fc-99d8-7a3d716922e3',
      '2b021a64-9287-498e-a895-185798bde18e',
      'b55953a6-a183-4e5e-a781-9d036cad38ac'
    ],
    slug: 'air-atomizing-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Air Atomizing Spray Nozzles' }
        }
      ],
      sortIndex: 47,
      seoPath: 'air-atomizing-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.StandardAirAtomizingNozzles,
    ...defaultFacetOption,
    valueId: '99845edd-d1fd-44fc-99d8-7a3d716922e3',
    value: 'Standard Air Atomizing Nozzles',
    parentId: '3ff41a3f-935f-4fb9-a0e8-a6169a5c01c8',
    children: [],
    slug: 'standard-air-atomizing-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Standard Air Atomizing Nozzles' }
        }
      ],
      sortIndex: 48,
      seoPath: 'standard-air-atomizing-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.QuickmistQuickConnectAirAtomizingNozzles,
    ...defaultFacetOption,
    valueId: '2b021a64-9287-498e-a895-185798bde18e',
    value: 'QuickMist® Quick Connect Air Atomizing Nozzles',
    parentId: '3ff41a3f-935f-4fb9-a0e8-a6169a5c01c8',
    children: [],
    slug: 'quickmist-quick-connect-air-atomizing-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'QuickMist® Quick Connect Air Atomizing Nozzles' }
        }
      ],
      sortIndex: 49,
      seoPath: 'quickmist-quick-connect-air-atomizing-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.VariableSprayNozzles,
    ...defaultFacetOption,
    valueId: 'b55953a6-a183-4e5e-a781-9d036cad38ac',
    value: 'Variable Spray Nozzles',
    parentId: '3ff41a3f-935f-4fb9-a0e8-a6169a5c01c8',
    children: [],
    slug: 'variable-spray-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Variable Spray Nozzles' }
        }
      ],
      sortIndex: 50,
      seoPath: 'variable-spray-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Accessories,
    ...defaultFacetOption,
    valueId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
    value: 'Accessories',
    parentId: '',
    children: [
      'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
      'fac8fd7b-d802-4472-9348-c9fd5420a8b7',
      'a9b332af-ca55-43f0-90ec-1742cb3abb63',
      '858cb720-d7e3-44f7-afe7-4478b93eb44d',
      '1354b0a8-d57c-4766-a7a6-78b103e11ba0'
    ],
    slug: 'accessories',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Accessories',
            de: 'Zubehör',
            fr: 'Accessoires',
            nl: 'Accessoires'
          }
        }
      ],
      sortIndex: 51,
      seoPath: 'accessories'
    }
  },
  {
    key: CategoryIdFacetOptionKey.NozzleBodies,
    ...defaultFacetOption,
    valueId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
    value: 'Nozzle Bodies',
    parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
    children: [
      '2af247ae-4676-4cc5-a935-c767c21f8ce4',
      '8606316f-39e9-47fd-9e5b-6df01ef45f4e',
      'd9509071-00ca-4a6a-ba7f-61a95365db7f'
    ],
    slug: 'nozzle-bodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Nozzle Bodies',
            de: 'Düsenkörper',
            fr: 'Corps de buse',
            nl: 'Nozzle Behuizingen'
          }
        }
      ],
      sortIndex: 52,
      seoPath: 'nozzle-bodies'
    }
  },
  {
    key: CategoryIdFacetOptionKey.UnijetNozzleBodies,
    ...defaultFacetOption,
    valueId: '2af247ae-4676-4cc5-a935-c767c21f8ce4',
    value: 'UniJet® Nozzle Bodies',
    parentId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
    children: [],
    slug: 'unijet-nozzle-bodies',
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
      seoPath: 'unijet-nozzle-bodies'
    }
  },
  {
    key: CategoryIdFacetOptionKey.QuickjetNozzleBodies,
    ...defaultFacetOption,
    valueId: '8606316f-39e9-47fd-9e5b-6df01ef45f4e',
    value: 'QuickJet® Nozzle Bodies',
    parentId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
    children: [],
    slug: 'quickjet-nozzle-bodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet® Nozzle Bodies',
            de: 'QuickJet® Düsenkörper',
            fr: 'Corps de buse QuickJet®',
            nl: 'QuickJet® Nozzle Behuizingen'
          }
        }
      ],
      sortIndex: 54,
      seoPath: 'quickjet-nozzle-bodies'
    }
  },
  {
    key: CategoryIdFacetOptionKey.MiniQuickjetNozzleBodies,
    ...defaultFacetOption,
    valueId: 'd9509071-00ca-4a6a-ba7f-61a95365db7f',
    value: 'Mini QuickJet® Nozzle Bodies',
    parentId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
    children: [],
    slug: 'mini-quickjet-nozzle-bodies',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Mini QuickJet® Nozzle Bodies',
            de: 'Mini QuickJet® Düsenkörper',
            fr: 'Mini corps de buse QuickJet®',
            nl: 'Mini QuickJet® Nozzle Behuizingen'
          }
        }
      ],
      sortIndex: 55,
      seoPath: 'mini-quickjet-nozzle-bodies'
    }
  },
  {
    key: CategoryIdFacetOptionKey.ThrottlingAndPressureReliefRegulatingValves,
    ...defaultFacetOption,
    valueId: 'fac8fd7b-d802-4472-9348-c9fd5420a8b7',
    value: 'Throttling and Pressure Relief/Regulating Valves',
    parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
    children: [],
    slug: 'throttling-and-pressure-relief-regulating-valves',
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
      sortIndex: 56,
      seoPath: 'throttling-and-pressure-relief-or-regulating-valves'
    }
  },
  {
    key: CategoryIdFacetOptionKey.SplitEyeletConnectors,
    ...defaultFacetOption,
    valueId: 'a9b332af-ca55-43f0-90ec-1742cb3abb63',
    value: 'Split-Eyelet Connectors',
    parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
    children: [],
    slug: 'split-eyelet-connectors',
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
      sortIndex: 57,
      seoPath: 'split-eyelet-connectors'
    }
  },
  {
    key: CategoryIdFacetOptionKey.AdjustableBallFittings,
    ...defaultFacetOption,
    valueId: '858cb720-d7e3-44f7-afe7-4478b93eb44d',
    value: 'Adjustable Ball Fittings',
    parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
    children: [],
    slug: 'adjustable-ball-fittings',
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
      sortIndex: 58,
      seoPath: 'adjustable-ball-fittings'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Strainers,
    ...defaultFacetOption,
    valueId: '1354b0a8-d57c-4766-a7a6-78b103e11ba0',
    value: 'Strainers',
    parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
    children: [],
    slug: 'strainers',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Strainers', de: 'Siebe', fr: 'Crépines', nl: 'Zeven' }
        }
      ],
      sortIndex: 59,
      seoPath: 'strainers'
    }
  },
  {
    key: CategoryIdFacetOptionKey.SprayingSystemsCoBrands,
    ...defaultFacetOption,
    valueId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    value: 'Spraying Systems Co. Brands',
    parentId: '',
    children: [
      '604d510f-163a-41f5-9f62-cc1ce8c764e8',
      '5669bb6a-9276-4d9d-b42a-ebea2d94875f',
      'f4d08770-2d60-455e-a050-4f29e1370de3',
      '3abac18a-3a35-4cbc-8fcf-e0af11f48a0d',
      '5c6ec0f4-5f37-4ed1-9671-af576ceaefb9',
      '01f4977d-291f-4410-b8e8-648b5ebc5ec8',
      '7455bee5-6901-4db6-a6df-744088154633',
      'b808217a-291d-47c3-a73c-bfd85b0be67f',
      '42dad403-3b56-42b1-aa7d-f0c606141274',
      '9f445e6e-09c8-4935-a91a-77806bc76e05',
      '9be19c11-4139-4a09-aeb7-a3b66913a507',
      'd38cd84f-64ae-41fd-ae1d-dd5c6a38930e'
    ],
    slug: 'spraying-systems-co-brands',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'Spraying Systems Co. Brands',
            de: 'Spraying Systems Co. Marken',
            fr: 'Spraying Systems Co. Marques',
            nl: 'Spraying Systems Co Merken'
          }
        }
      ],
      sortIndex: 60,
      seoPath: 'spraying-systems-co.-brands'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Distribojet,
    ...defaultFacetOption,
    valueId: '604d510f-163a-41f5-9f62-cc1ce8c764e8',
    value: 'DistriboJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'distribojet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'DistriboJet®',
            de: 'DistriboJet®',
            fr: 'DistriboJet®',
            nl: 'DistriboJet®'
          }
        }
      ],
      sortIndex: 61,
      seoPath: 'distribojet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Flatjet,
    ...defaultFacetOption,
    valueId: '5669bb6a-9276-4d9d-b42a-ebea2d94875f',
    value: 'FlatJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'flatjet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FlatJet®',
            de: 'FlatJet®',
            fr: 'FlatJet®',
            nl: 'Flatjet®'
          }
        }
      ],
      sortIndex: 62,
      seoPath: 'flatjet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Fogjet,
    ...defaultFacetOption,
    valueId: 'f4d08770-2d60-455e-a050-4f29e1370de3',
    value: 'FogJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'fogjet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'FogJet®', de: 'FogJet®', fr: 'FogJet®', nl: 'FogJet®' }
        }
      ],
      sortIndex: 63,
      seoPath: 'fogjet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Floodjet,
    ...defaultFacetOption,
    valueId: '3abac18a-3a35-4cbc-8fcf-e0af11f48a0d',
    value: 'FloodJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'floodjet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FloodJet®',
            de: 'FloodJet®',
            fr: 'FloodJet®',
            nl: 'Overstromingsjet®'
          }
        }
      ],
      sortIndex: 64,
      seoPath: 'floodjet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Fulljet,
    ...defaultFacetOption,
    valueId: '5c6ec0f4-5f37-4ed1-9671-af576ceaefb9',
    value: 'FullJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'fulljet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'FullJet®',
            de: 'FullJet®',
            fr: 'FullJet®',
            nl: 'FullJet®'
          }
        }
      ],
      sortIndex: 65,
      seoPath: 'fulljet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.PromaxQuickjet,
    ...defaultFacetOption,
    valueId: '01f4977d-291f-4410-b8e8-648b5ebc5ec8',
    value: 'ProMax® QuickJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'promax-quickjet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'ProMax® QuickJet®',
            de: 'ProMax® QuickJet®',
            fr: 'ProMax® QuickJet®',
            nl: 'ProMax® QuickJet®'
          }
        }
      ],
      sortIndex: 66,
      seoPath: 'promax-quickjet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Quickjet,
    ...defaultFacetOption,
    valueId: '7455bee5-6901-4db6-a6df-744088154633',
    value: 'QuickJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'quickjet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'QuickJet®',
            de: 'QuickJet®',
            fr: 'QuickJet®',
            nl: 'QuickJet®'
          }
        }
      ],
      sortIndex: 67,
      seoPath: 'quickjet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Spiraljet,
    ...defaultFacetOption,
    valueId: 'b808217a-291d-47c3-a73c-bfd85b0be67f',
    value: 'SpiralJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'spiraljet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'SpiralJet®',
            de: 'SpiralJet®',
            fr: 'SpiralJet®',
            nl: 'SpiralJet®'
          }
        }
      ],
      sortIndex: 68,
      seoPath: 'spiraljet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Unijet,
    ...defaultFacetOption,
    valueId: '42dad403-3b56-42b1-aa7d-f0c606141274',
    value: 'UniJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'unijet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'UniJet®', de: 'UniJet®', fr: 'UniJet®', nl: 'UniJet®' }
        }
      ],
      sortIndex: 69,
      seoPath: 'unijet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Veejet,
    ...defaultFacetOption,
    valueId: '9f445e6e-09c8-4935-a91a-77806bc76e05',
    value: 'VeeJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'veejet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'VeeJet®', de: 'VeeJet®', fr: 'VeeJet®', nl: 'VeeJet®' }
        }
      ],
      sortIndex: 70,
      seoPath: 'veejet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Washjet,
    ...defaultFacetOption,
    valueId: '9be19c11-4139-4a09-aeb7-a3b66913a507',
    value: 'WashJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'washjet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WashJet®',
            de: 'WashJet®',
            fr: 'WashJet®',
            nl: 'WashJet®'
          }
        }
      ],
      sortIndex: 71,
      seoPath: 'washjet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Whirljet,
    ...defaultFacetOption,
    valueId: 'd38cd84f-64ae-41fd-ae1d-dd5c6a38930e',
    value: 'WhirlJet®',
    parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
    children: [],
    slug: 'whirljet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: {
            en: 'WhirlJet®',
            de: 'WhirlJet®',
            fr: 'WhirlJet®',
            nl: 'Wervelende®'
          }
        }
      ],
      sortIndex: 72,
      seoPath: 'whirljet'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Applications,
    ...defaultFacetOption,
    valueId: '99b89989-636a-4869-918a-1cc9ba755944',
    value: 'Applications',
    parentId: '',
    children: [
      '03bd9261-d6df-45ba-b283-764e7062fd11',
      'c85d6be3-5dd9-4c40-99bd-af660d486522',
      '7345e417-7fa1-4c2c-93e2-499d701ade17',
      'b146fbae-1cb7-44d3-a2b3-5afce739f25e',
      '663f39d0-be3a-4a46-9634-825520f9001f',
      '41ee919b-7753-4059-a58b-bc649b47a94b',
      '808b463f-4683-4583-a538-0b880fb5d8fb',
      '67be7924-a2f5-451d-8526-ad7539826b7e',
      '14b21e18-908d-45d7-940d-433e15ee1285',
      'aa730c2c-fb95-4c54-ad27-58bbda953d16'
    ],
    slug: 'applications',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Applications' }
        }
      ],
      sortIndex: 73,
      seoPath: 'applications'
    }
  },
  {
    key: CategoryIdFacetOptionKey.AirDryingBlowOff,
    ...defaultFacetOption,
    valueId: '03bd9261-d6df-45ba-b283-764e7062fd11',
    value: 'Air Drying / Blow-Off',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [],
    slug: 'air-drying-blow-off',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Air Drying / Blow-Off' }
        }
      ],
      sortIndex: 74,
      seoPath: 'air-drying-blow-off'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Cleaning,
    ...defaultFacetOption,
    valueId: 'c85d6be3-5dd9-4c40-99bd-af660d486522',
    value: 'Cleaning',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [
      '5c704b98-3ea1-4254-b889-57ee0dc7982c',
      '8b4dec78-b7e1-461d-97f9-03ceda4eba7c',
      '3bce75fb-8bd2-428f-aa0b-9c549620dcd1',
      '674b4cb7-2090-41db-8674-c9819b4a0972'
    ],
    slug: 'cleaning',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Cleaning' }
        }
      ],
      sortIndex: 75,
      seoPath: 'cleaning'
    }
  },
  {
    key: CategoryIdFacetOptionKey.HandHeldSprayGuns,
    ...defaultFacetOption,
    valueId: '5c704b98-3ea1-4254-b889-57ee0dc7982c',
    value: 'Hand-held Spray Guns',
    parentId: 'c85d6be3-5dd9-4c40-99bd-af660d486522',
    children: [],
    slug: 'hand-held-spray-guns',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Hand-held Spray Guns' }
        }
      ],
      sortIndex: 76,
      seoPath: 'hand-held-spray-guns'
    }
  },
  {
    key: CategoryIdFacetOptionKey.HighPressureCleaning,
    ...defaultFacetOption,
    valueId: '8b4dec78-b7e1-461d-97f9-03ceda4eba7c',
    value: 'High Pressure Cleaning',
    parentId: 'c85d6be3-5dd9-4c40-99bd-af660d486522',
    children: [],
    slug: 'high-pressure-cleaning',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'High Pressure Cleaning' }
        }
      ],
      sortIndex: 77,
      seoPath: 'high-pressure-cleaning'
    }
  },
  {
    key: CategoryIdFacetOptionKey.LowPressureRinsing,
    ...defaultFacetOption,
    valueId: '3bce75fb-8bd2-428f-aa0b-9c549620dcd1',
    value: 'Low Pressure Rinsing',
    parentId: 'c85d6be3-5dd9-4c40-99bd-af660d486522',
    children: [],
    slug: 'low-pressure-rinsing',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Low Pressure Rinsing' }
        }
      ],
      sortIndex: 78,
      seoPath: 'low-pressure-rinsing'
    }
  },
  {
    key: CategoryIdFacetOptionKey.TankCleaning,
    ...defaultFacetOption,
    valueId: '674b4cb7-2090-41db-8674-c9819b4a0972',
    value: 'Tank Cleaning',
    parentId: 'c85d6be3-5dd9-4c40-99bd-af660d486522',
    children: [],
    slug: 'tank-cleaning',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Tank Cleaning' }
        }
      ],
      sortIndex: 79,
      seoPath: 'tank-cleaning'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Coating,
    ...defaultFacetOption,
    valueId: '7345e417-7fa1-4c2c-93e2-499d701ade17',
    value: 'Coating',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [
      '895d913d-0f2e-46a0-bcf9-53cd97f117fe',
      'dc49369e-88e7-4766-b2eb-33427dc61d30'
    ],
    slug: 'coating',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Coating' }
        }
      ],
      sortIndex: 80,
      seoPath: 'coating'
    }
  },
  {
    key: CategoryIdFacetOptionKey.CoatingAutomaticNozzles,
    ...defaultFacetOption,
    valueId: '895d913d-0f2e-46a0-bcf9-53cd97f117fe',
    value: 'Automatic Nozzles',
    parentId: '7345e417-7fa1-4c2c-93e2-499d701ade17',
    children: [],
    slug: 'coating-automatic-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Automatic Nozzles' }
        }
      ],
      sortIndex: 81,
      seoPath: 'automatic-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.CoatingHydraulicNozzles,
    ...defaultFacetOption,
    valueId: 'dc49369e-88e7-4766-b2eb-33427dc61d30',
    value: 'Hydraulic Nozzles',
    parentId: '7345e417-7fa1-4c2c-93e2-499d701ade17',
    children: [],
    slug: 'coating-hydraulic-nozzles',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Hydraulic Nozzles' }
        }
      ],
      sortIndex: 82,
      seoPath: 'hydraulic-nozzles'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Cooling,
    ...defaultFacetOption,
    valueId: 'b146fbae-1cb7-44d3-a2b3-5afce739f25e',
    value: 'Cooling',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [
      '88806e55-bf33-4c1d-8a8a-b80766070312',
      'b7a29d1f-43e6-4a19-be37-1ba62c51d7a9',
      '8f82acf6-4a00-4e44-bcd5-0928fbe82e83'
    ],
    slug: 'cooling',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Cooling' }
        }
      ],
      sortIndex: 83,
      seoPath: 'cooling'
    }
  },
  {
    key: CategoryIdFacetOptionKey.CoolingSolids,
    ...defaultFacetOption,
    valueId: '88806e55-bf33-4c1d-8a8a-b80766070312',
    value: 'Cooling Solids',
    parentId: 'b146fbae-1cb7-44d3-a2b3-5afce739f25e',
    children: [],
    slug: 'cooling-solids',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Cooling Solids' }
        }
      ],
      sortIndex: 84,
      seoPath: 'cooling-solids'
    }
  },
  {
    key: CategoryIdFacetOptionKey.EvaporativeCoolingOfLiquids,
    ...defaultFacetOption,
    valueId: 'b7a29d1f-43e6-4a19-be37-1ba62c51d7a9',
    value: 'Evaporative Cooling of Liquids',
    parentId: 'b146fbae-1cb7-44d3-a2b3-5afce739f25e',
    children: [],
    slug: 'evaporative-cooling-of-liquids',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Evaporative Cooling of Liquids' }
        }
      ],
      sortIndex: 85,
      seoPath: 'evaporative-cooling-of-liquids'
    }
  },
  {
    key: CategoryIdFacetOptionKey.CoolingAndConditioningOfGas,
    ...defaultFacetOption,
    valueId: '8f82acf6-4a00-4e44-bcd5-0928fbe82e83',
    value: 'Cooling & Conditioning of Gas',
    parentId: 'b146fbae-1cb7-44d3-a2b3-5afce739f25e',
    children: [],
    slug: 'cooling-and-conditioning-of-gas',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Cooling & Conditioning of Gas' }
        }
      ],
      sortIndex: 86,
      seoPath: 'cooling-and-conditioning-of-gas'
    }
  },
  {
    key: CategoryIdFacetOptionKey.FireProtection,
    ...defaultFacetOption,
    valueId: '663f39d0-be3a-4a46-9634-825520f9001f',
    value: 'Fire Protection',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [],
    slug: 'fire-protection',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Fire Protection' }
        }
      ],
      sortIndex: 87,
      seoPath: 'fire-protection'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Humidification,
    ...defaultFacetOption,
    valueId: '41ee919b-7753-4059-a58b-bc649b47a94b',
    value: 'Humidification',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [],
    slug: 'humidification',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Humidification' }
        }
      ],
      sortIndex: 88,
      seoPath: 'humidification'
    }
  },
  {
    key: CategoryIdFacetOptionKey.HumidifyingAndMoistening,
    ...defaultFacetOption,
    valueId: '808b463f-4683-4583-a538-0b880fb5d8fb',
    value: 'Humidifying & Moistening',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [
      'b7303632-c2bd-43f4-adb3-5b2c13971ebd',
      'd64caa2a-0e6d-4110-a943-d102658f877a'
    ],
    slug: 'humidifying-and-moistening',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Humidifying & Moistening' }
        }
      ],
      sortIndex: 89,
      seoPath: 'humidifying-and-moistening'
    }
  },
  {
    key: CategoryIdFacetOptionKey.HumidifyingGases,
    ...defaultFacetOption,
    valueId: 'b7303632-c2bd-43f4-adb3-5b2c13971ebd',
    value: 'Humidifying Gases',
    parentId: '808b463f-4683-4583-a538-0b880fb5d8fb',
    children: [],
    slug: 'humidifying-gases',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Humidifying Gases' }
        }
      ],
      sortIndex: 90,
      seoPath: 'humidifying-gases'
    }
  },
  {
    key: CategoryIdFacetOptionKey.MoisteningSurfaces,
    ...defaultFacetOption,
    valueId: 'd64caa2a-0e6d-4110-a943-d102658f877a',
    value: 'Moistening Surfaces',
    parentId: '808b463f-4683-4583-a538-0b880fb5d8fb',
    children: [],
    slug: 'moistening-surfaces',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Moistening Surfaces' }
        }
      ],
      sortIndex: 91,
      seoPath: 'moistening-surfaces'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Lubrication,
    ...defaultFacetOption,
    valueId: '67be7924-a2f5-451d-8526-ad7539826b7e',
    value: 'Lubrication',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [
      'cf4a1a25-1388-4b78-8ccc-384000012e93',
      'a1b95372-6ebc-45f5-950d-fd0da399461c'
    ],
    slug: 'lubrication',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Lubrication' }
        }
      ],
      sortIndex: 92,
      seoPath: 'lubrication'
    }
  },
  {
    key: CategoryIdFacetOptionKey.DieLube,
    ...defaultFacetOption,
    valueId: 'cf4a1a25-1388-4b78-8ccc-384000012e93',
    value: 'Die Lube',
    parentId: '67be7924-a2f5-451d-8526-ad7539826b7e',
    children: [],
    slug: 'die-lube',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Die Lube' }
        }
      ],
      sortIndex: 93,
      seoPath: 'die-lube'
    }
  },
  {
    key: CategoryIdFacetOptionKey.ApplyingReleaseAgents,
    ...defaultFacetOption,
    valueId: 'a1b95372-6ebc-45f5-950d-fd0da399461c',
    value: 'Applying Release Agents',
    parentId: '67be7924-a2f5-451d-8526-ad7539826b7e',
    children: [],
    slug: 'applying-release-agents',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Applying Release Agents' }
        }
      ],
      sortIndex: 94,
      seoPath: 'applying-release-agents'
    }
  },
  {
    key: CategoryIdFacetOptionKey.Marking,
    ...defaultFacetOption,
    valueId: '14b21e18-908d-45d7-940d-433e15ee1285',
    value: 'Marking',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [],
    slug: 'marking',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Marking' }
        }
      ],
      sortIndex: 95,
      seoPath: 'marking'
    }
  },
  {
    key: CategoryIdFacetOptionKey.DustControl,
    ...defaultFacetOption,
    valueId: 'aa730c2c-fb95-4c54-ad27-58bbda953d16',
    value: 'Dust Control',
    parentId: '99b89989-636a-4869-918a-1cc9ba755944',
    children: [],
    slug: 'dust-control',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: null,
          value: { en: 'Dust Control' }
        }
      ],
      sortIndex: 96,
      seoPath: 'dust-control'
    }
  }
];

export const categoryIdFacet: Facet<
  CategoryIdFacetOptionKey,
  FacetOption<CategoryIdFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.CategoryId,
  attributeTypeCode: 'CategoryId',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Link,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: categoryIdFacetOptions
};
