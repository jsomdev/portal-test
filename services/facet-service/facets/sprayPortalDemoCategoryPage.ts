import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum SprayPortalDemoCategoryPageFacetOptionKey {
  HydraulicNozzles = 'HydraulicNozzles',
  FullConeNozzles = 'FullConeNozzles',
  StandardFullConeNozzles = 'StandardFullConeNozzles',
  WideAngleFullConeNozzles = 'WideAngleFullConeNozzles',
  NarrowAngleFullConeNozzles = 'NarrowAngleFullConeNozzles',
  WallMountFullConeNozzles = 'WallMountFullConeNozzles',
  LargeFreePassageFullConeNozzles = 'LargeFreePassageFullConeNozzles',
  SquareOrOvalSprayFullConeNozzles = 'SquareOrOvalSprayFullConeNozzles',
  UnijetFullConeNozzles = 'UnijetFullConeNozzles',
  QuickjetFullConeNozzles = 'QuickjetFullConeNozzles',
  FlatSprayNozzles = 'FlatSprayNozzles',
  StandardFlatSprayNozzles = 'StandardFlatSprayNozzles',
  DeflectedFlatSprayNozzles = 'DeflectedFlatSprayNozzles',
  HighPressureFlatSprayNozzles = 'HighPressureFlatSprayNozzles',
  UnijetFlatSprayNozzles = 'UnijetFlatSprayNozzles',
  QuickjetFlatSprayNozzles = 'QuickjetFlatSprayNozzles',
  MiniQuickjetFlatSprayNozzles = 'MiniQuickjetFlatSprayNozzles',
  SolidStreamNozzles = 'SolidStreamNozzles',
  StandardSolidStreamNozzles = 'StandardSolidStreamNozzles',
  HighPressureSolidStreamNozzles = 'HighPressureSolidStreamNozzles',
  UltraHighPressureNozzles = 'UltraHighPressureNozzles',
  UnijetSolidStreamNozzles = 'UnijetSolidStreamNozzles',
  QuickjetSolidStreamNozzles = 'QuickjetSolidStreamNozzles',
  MiniQuickjetSolidStreamNozzles = 'MiniQuickjetSolidStreamNozzles',
  HollowConeNozzles = 'HollowConeNozzles',
  AngleTypeHollowConeNozzles = 'AngleTypeHollowConeNozzles',
  InLineHollowConeNozzles = 'InLineHollowConeNozzles',
  LargeFreePassageHollowConeNozzles = 'LargeFreePassageHollowConeNozzles',
  UnijetHollowConeNozzles = 'UnijetHollowConeNozzles',
  FineSprayNozzles = 'FineSprayNozzles',
  SingleOrificeFineSprayNozzles = 'SingleOrificeFineSprayNozzles',
  MultiOrificeFineSprayNozzles = 'MultiOrificeFineSprayNozzles',
  TankCleaningNozzles = 'TankCleaningNozzles',
  UpTo100FtTankCleaningNozzles = 'UpTo100FtTankCleaningNozzles',
  UpTo45FtTankCleaningNozzles = 'UpTo45FtTankCleaningNozzles',
  UpTo20FtTankCleaningNozzles = 'UpTo20FtTankCleaningNozzles',
  UpTo10FtTankCleaningNozzles = 'UpTo10FtTankCleaningNozzles',
  UpTo5FtTankCleaningNozzles = 'UpTo5FtTankCleaningNozzles',
  AutomaticNozzles = 'AutomaticNozzles',
  ElectricallyActuatedHydraulicAtomizingNozzles = 'ElectricallyActuatedHydraulicAtomizingNozzles',
  ElectricallyActuatedAirAtomizingNozzles = 'ElectricallyActuatedAirAtomizingNozzles',
  AirActuatedHydraulicAtomizingNozzles = 'AirActuatedHydraulicAtomizingNozzles',
  AirActuatedAirAtomizingNozzles = 'AirActuatedAirAtomizingNozzles',
  SprayGuns = 'SprayGuns',
  LowPressureSprayGuns = 'LowPressureSprayGuns',
  MediumPressureSprayGuns = 'MediumPressureSprayGuns',
  HighPressureSprayGuns = 'HighPressureSprayGuns',
  AirNozzles = 'AirNozzles',
  FlatSprayAirNozzles = 'FlatSprayAirNozzles',
  RoundSprayAirNozzles = 'RoundSprayAirNozzles',
  Accessories = 'Accessories',
  NozzleBodies = 'NozzleBodies',
  UnijetNozzleBodies = 'UnijetNozzleBodies',
  QuickjetNozzleBodies = 'QuickjetNozzleBodies',
  MiniQuickjetNozzleBodies = 'MiniQuickjetNozzleBodies',
  ThrottlingAndPressureReliefOrRegulatingValves = 'ThrottlingAndPressureReliefOrRegulatingValves',
  SplitEyeletConnectors = 'SplitEyeletConnectors',
  AdjustableBallFittings = 'AdjustableBallFittings',
  Strainers = 'Strainers',
  SprayingSystemsCoBrands = 'SprayingSystemsCoBrands',
  Distribojet = 'Distribojet',
  Flatjet = 'Flatjet',
  Fogjet = 'Fogjet',
  Floodjet = 'Floodjet',
  Fulljet = 'Fulljet',
  PromaxQuickjet = 'PromaxQuickjet',
  Quickjet = 'Quickjet',
  Spiraljet = 'Spiraljet',
  Unijet = 'Unijet',
  Veejet = 'Veejet',
  Washjet = 'Washjet',
  Whirljet = 'Whirljet'
}

export const sprayPortalDemoCategoryPageFacetOptions: FacetOption<SprayPortalDemoCategoryPageFacetOptionKey>[] =
  [
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HydraulicNozzles,
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
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Hydraulic Nozzles' }
          }
        ],
        sortIndex: 0,
        seoPath: 'hydraulic-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FullConeNozzles,
      ...defaultFacetOption,
      valueId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      value: 'Full Cone Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [
        '2498dfc7-3295-403b-97fa-28a19f748306',
        'c67479be-9af0-434a-97c2-da8c26357b7f',
        '9856253a-0db7-4723-93d6-8a82e485c1a8',
        '870dcf21-77dd-4d2b-9394-fa423d85f503',
        'd944e101-27ba-48b2-b8be-b864e9ebee39',
        '59e49512-3759-4eba-903d-dccd30798b38',
        '7e6211ba-add0-4e77-aa3e-820a6d6d0ade',
        '211aed31-3e85-4cfb-9b6b-ec7a301a7acb'
      ],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Full Cone Nozzles' }
          }
        ],
        sortIndex: 1,
        seoPath: 'full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.StandardFullConeNozzles,
      ...defaultFacetOption,
      valueId: '2498dfc7-3295-403b-97fa-28a19f748306',
      value: 'Standard Full Cone Nozzles',
      parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Standard Full Cone Nozzles' }
          }
        ],
        sortIndex: 2,
        seoPath: 'standard-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.WideAngleFullConeNozzles,
      ...defaultFacetOption,
      valueId: 'c67479be-9af0-434a-97c2-da8c26357b7f',
      value: 'Wide Angle Full Cone Nozzles',
      parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Wide Angle Full Cone Nozzles' }
          }
        ],
        sortIndex: 3,
        seoPath: 'wide-angle-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.NarrowAngleFullConeNozzles,
      ...defaultFacetOption,
      valueId: '9856253a-0db7-4723-93d6-8a82e485c1a8',
      value: 'Narrow Angle Full Cone Nozzles',
      parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Narrow Angle Full Cone Nozzles' }
          }
        ],
        sortIndex: 4,
        seoPath: 'narrow-angle-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.WallMountFullConeNozzles,
      ...defaultFacetOption,
      valueId: '870dcf21-77dd-4d2b-9394-fa423d85f503',
      value: 'Wall Mount Full Cone Nozzles',
      parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Wall Mount Full Cone Nozzles' }
          }
        ],
        sortIndex: 5,
        seoPath: 'wall-mount-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.LargeFreePassageFullConeNozzles,
      ...defaultFacetOption,
      valueId: 'd944e101-27ba-48b2-b8be-b864e9ebee39',
      value: 'Large Free Passage Full Cone Nozzles',
      parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Large Free Passage Full Cone Nozzles' }
          }
        ],
        sortIndex: 6,
        seoPath: 'large-free-passage-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SquareOrOvalSprayFullConeNozzles,
      ...defaultFacetOption,
      valueId: '59e49512-3759-4eba-903d-dccd30798b38',
      value: 'Square/Oval Spray Full Cone Nozzles',
      parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Square/Oval Spray Full Cone Nozzles' }
          }
        ],
        sortIndex: 7,
        seoPath: 'square-or-oval-spray-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UnijetFullConeNozzles,
      ...defaultFacetOption,
      valueId: '7e6211ba-add0-4e77-aa3e-820a6d6d0ade',
      value: 'UniJet® Full Cone Nozzles',
      parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'UniJet® Full Cone Nozzles' }
          }
        ],
        sortIndex: 8,
        seoPath: 'unijet-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickjetFullConeNozzles,
      ...defaultFacetOption,
      valueId: '211aed31-3e85-4cfb-9b6b-ec7a301a7acb',
      value: 'QuickJet® Full Cone Nozzles',
      parentId: 'e41acecc-5491-4fa1-ae55-1bf880305962',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'QuickJet® Full Cone Nozzles' }
          }
        ],
        sortIndex: 9,
        seoPath: 'quickjet-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FlatSprayNozzles,
      ...defaultFacetOption,
      valueId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
      value: 'Flat Spray Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [
        'c3b1d7e1-3eee-4235-8469-0f376867113f',
        '8ca385c7-2dc6-49da-b4d1-2928fd2de172',
        '16a8ac8d-98d5-4985-a487-2317588ef025',
        '54c46a98-3f97-4793-b754-0a8316918394',
        '0f4da1bc-5133-46da-a2a4-f2b41098f191',
        'bdaa6668-34d0-4826-b49d-987604e804b4'
      ],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Flat Spray Nozzles' }
          }
        ],
        sortIndex: 10,
        seoPath: 'flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.StandardFlatSprayNozzles,
      ...defaultFacetOption,
      valueId: 'c3b1d7e1-3eee-4235-8469-0f376867113f',
      value: 'Standard Flat Spray Nozzles',
      parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Standard Flat Spray Nozzles' }
          }
        ],
        sortIndex: 11,
        seoPath: 'standard-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.DeflectedFlatSprayNozzles,
      ...defaultFacetOption,
      valueId: '8ca385c7-2dc6-49da-b4d1-2928fd2de172',
      value: 'Deflected Flat Spray Nozzles',
      parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Deflected Flat Spray Nozzles' }
          }
        ],
        sortIndex: 12,
        seoPath: 'deflected-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HighPressureFlatSprayNozzles,
      ...defaultFacetOption,
      valueId: '16a8ac8d-98d5-4985-a487-2317588ef025',
      value: 'High Pressure Flat Spray Nozzles',
      parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'High Pressure Flat Spray Nozzles' }
          }
        ],
        sortIndex: 13,
        seoPath: 'high-pressure-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UnijetFlatSprayNozzles,
      ...defaultFacetOption,
      valueId: '54c46a98-3f97-4793-b754-0a8316918394',
      value: 'UniJet® Flat Spray Nozzles',
      parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'UniJet® Flat Spray Nozzles' }
          }
        ],
        sortIndex: 14,
        seoPath: 'unijet-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickjetFlatSprayNozzles,
      ...defaultFacetOption,
      valueId: '0f4da1bc-5133-46da-a2a4-f2b41098f191',
      value: 'QuickJet® Flat Spray Nozzles',
      parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'QuickJet® Flat Spray Nozzles' }
          }
        ],
        sortIndex: 15,
        seoPath: 'quickjet-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MiniQuickjetFlatSprayNozzles,
      ...defaultFacetOption,
      valueId: 'bdaa6668-34d0-4826-b49d-987604e804b4',
      value: 'Mini QuickJet® Flat Spray Nozzles',
      parentId: '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Mini QuickJet® Flat Spray Nozzles' }
          }
        ],
        sortIndex: 16,
        seoPath: 'mini-quickjet-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SolidStreamNozzles,
      ...defaultFacetOption,
      valueId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
      value: 'Solid Stream Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [
        '5b65134d-6260-47dc-aa75-0ce9422d631a',
        '349cce28-562d-48c4-be92-29e79fe08385',
        '164e4414-7eb9-4404-baf0-d6e2b3e43c73',
        'fa6700aa-f174-4fd5-a0a0-7821e056f59f',
        'eae1f2f7-f707-4a8c-974e-36c201cb5e1a',
        '4689c62c-26c8-407d-a962-80e089a07443'
      ],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Solid Stream Nozzles' }
          }
        ],
        sortIndex: 17,
        seoPath: 'solid-stream-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.StandardSolidStreamNozzles,
      ...defaultFacetOption,
      valueId: '5b65134d-6260-47dc-aa75-0ce9422d631a',
      value: 'Standard Solid Stream Nozzles',
      parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Standard Solid Stream Nozzles' }
          }
        ],
        sortIndex: 18,
        seoPath: 'standard-solid-stream-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HighPressureSolidStreamNozzles,
      ...defaultFacetOption,
      valueId: '349cce28-562d-48c4-be92-29e79fe08385',
      value: 'High Pressure Solid Stream Nozzles',
      parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'High Pressure Solid Stream Nozzles' }
          }
        ],
        sortIndex: 19,
        seoPath: 'high-pressure-solid-stream-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UltraHighPressureNozzles,
      ...defaultFacetOption,
      valueId: '164e4414-7eb9-4404-baf0-d6e2b3e43c73',
      value: 'Ultra High Pressure Nozzles',
      parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Ultra High Pressure Nozzles' }
          }
        ],
        sortIndex: 20,
        seoPath: 'ultra-high-pressure-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UnijetSolidStreamNozzles,
      ...defaultFacetOption,
      valueId: 'fa6700aa-f174-4fd5-a0a0-7821e056f59f',
      value: 'UniJet® Solid Stream Nozzles',
      parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'UniJet® Solid Stream Nozzles' }
          }
        ],
        sortIndex: 21,
        seoPath: 'unijet-solid-stream-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickjetSolidStreamNozzles,
      ...defaultFacetOption,
      valueId: 'eae1f2f7-f707-4a8c-974e-36c201cb5e1a',
      value: 'QuickJet® Solid Stream Nozzles',
      parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'QuickJet® Solid Stream Nozzles' }
          }
        ],
        sortIndex: 22,
        seoPath: 'quickjet-solid-stream-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MiniQuickjetSolidStreamNozzles,
      ...defaultFacetOption,
      valueId: '4689c62c-26c8-407d-a962-80e089a07443',
      value: 'Mini QuickJet® Solid Stream Nozzles',
      parentId: '9b282e61-a940-4c4c-900f-dc057905d2a8',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Mini QuickJet® Solid Stream Nozzles' }
          }
        ],
        sortIndex: 23,
        seoPath: 'mini-quickjet-solid-stream-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HollowConeNozzles,
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
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Hollow Cone Nozzles' }
          }
        ],
        sortIndex: 24,
        seoPath: 'hollow-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AngleTypeHollowConeNozzles,
      ...defaultFacetOption,
      valueId: 'dd8ecdf4-b4da-49de-bee4-a136fdfd0c57',
      value: 'Angle-Type Hollow Cone Nozzles',
      parentId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Angle-Type Hollow Cone Nozzles' }
          }
        ],
        sortIndex: 25,
        seoPath: 'angle-type-hollow-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.InLineHollowConeNozzles,
      ...defaultFacetOption,
      valueId: 'efcbeb55-bf89-4298-b006-83bc6af9a3dc',
      value: 'In-Line Hollow Cone Nozzles',
      parentId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'In-Line Hollow Cone Nozzles' }
          }
        ],
        sortIndex: 26,
        seoPath: 'in-line-hollow-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.LargeFreePassageHollowConeNozzles,
      ...defaultFacetOption,
      valueId: 'b360dc4b-0cf9-4e84-953b-791453d7e293',
      value: 'Large Free Passage Hollow Cone Nozzles',
      parentId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Large Free Passage Hollow Cone Nozzles' }
          }
        ],
        sortIndex: 27,
        seoPath: 'large-free-passage-hollow-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UnijetHollowConeNozzles,
      ...defaultFacetOption,
      valueId: '09b345e8-de33-43ab-90ea-a81c636a553d',
      value: 'UniJet® Hollow Cone Nozzles',
      parentId: '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'UniJet® Hollow Cone Nozzles' }
          }
        ],
        sortIndex: 28,
        seoPath: 'unijet-hollow-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FineSprayNozzles,
      ...defaultFacetOption,
      valueId: 'f682ad13-4ea3-4bff-b0ff-8cd2fc500007',
      value: 'Fine Spray Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [
        '1c3a59c0-decb-44dd-9c3f-c5dc6d91fea1',
        '20bc051a-0842-4557-910e-06a261e01135'
      ],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Fine Spray Nozzles' }
          }
        ],
        sortIndex: 29,
        seoPath: 'fine-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SingleOrificeFineSprayNozzles,
      ...defaultFacetOption,
      valueId: '1c3a59c0-decb-44dd-9c3f-c5dc6d91fea1',
      value: 'Single-Orifice Fine Spray Nozzles',
      parentId: 'f682ad13-4ea3-4bff-b0ff-8cd2fc500007',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Single-Orifice Fine Spray Nozzles' }
          }
        ],
        sortIndex: 30,
        seoPath: 'single-orifice-fine-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MultiOrificeFineSprayNozzles,
      ...defaultFacetOption,
      valueId: '20bc051a-0842-4557-910e-06a261e01135',
      value: 'Multi-Orifice Fine Spray Nozzles',
      parentId: 'f682ad13-4ea3-4bff-b0ff-8cd2fc500007',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Multi-Orifice Fine Spray Nozzles' }
          }
        ],
        sortIndex: 31,
        seoPath: 'multi-orifice-fine-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.TankCleaningNozzles,
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
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Tank Cleaning Nozzles' }
          }
        ],
        sortIndex: 32,
        seoPath: 'tank-cleaning-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UpTo100FtTankCleaningNozzles,
      ...defaultFacetOption,
      valueId: '1d20c410-cae8-4bff-8c4f-c820af51766e',
      value: 'Up to 100 ft. (30.5 m) diameter',
      parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 100 ft. (30.5 m) diameter' }
          }
        ],
        sortIndex: 33,
        seoPath: 'up-to-100-ft-tank-cleaning-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UpTo45FtTankCleaningNozzles,
      ...defaultFacetOption,
      valueId: 'e2114c73-1ded-4317-a2d5-fe7133d96035',
      value: 'Up to 45 ft. (13.7 m) diameter',
      parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 45 ft. (13.7 m) diameter' }
          }
        ],
        sortIndex: 34,
        seoPath: 'up-to-45-ft-tank-cleaning-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UpTo20FtTankCleaningNozzles,
      ...defaultFacetOption,
      valueId: '144ffa16-8495-42e8-8435-64b38b266197',
      value: 'Up to 20 ft. (6 m) diameter',
      parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 20 ft. (6 m) diameter' }
          }
        ],
        sortIndex: 35,
        seoPath: 'up-to-20-ft-tank-cleaning-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UpTo10FtTankCleaningNozzles,
      ...defaultFacetOption,
      valueId: 'a24d14a1-71e8-4335-970a-e19e07ac6f1c',
      value: 'Up to 10 ft. (3 m) diameter',
      parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 10 ft. (3 m) diameter' }
          }
        ],
        sortIndex: 36,
        seoPath: 'up-to-10-ft-tank-cleaning-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UpTo5FtTankCleaningNozzles,
      ...defaultFacetOption,
      valueId: '67a0148f-82b9-4e38-baa7-f1509d6b8b5d',
      value: 'Up to 5 ft. (1.5 m) diameter',
      parentId: '4e65f62e-3ef1-4b64-9d5b-cb96496a62c5',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 5 ft. (1.5 m) diameter' }
          }
        ],
        sortIndex: 37,
        seoPath: 'up-to-5-ft-tank-cleaning-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutomaticNozzles,
      ...defaultFacetOption,
      valueId: '43c4a35a-5621-4585-b291-d8481c00c83d',
      value: 'Automatic Nozzles',
      parentId: '',
      children: [
        'cae0584c-8fbc-40bd-82ff-6e27b664513b',
        'aeb673dc-b0e0-419a-861d-691fd3b30989',
        'bf851fde-6525-4fa3-9ba1-7b76b4111fbe',
        '1f1f0459-20fe-4d4f-a4c5-afec9af36f05'
      ],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Automatic Nozzles' }
          }
        ],
        sortIndex: 38,
        seoPath: 'automatic-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ElectricallyActuatedHydraulicAtomizingNozzles,
      ...defaultFacetOption,
      valueId: 'cae0584c-8fbc-40bd-82ff-6e27b664513b',
      value: 'Electrically-Actuated / Hydraulic Atomizing',
      parentId: '43c4a35a-5621-4585-b291-d8481c00c83d',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Electrically-Actuated / Hydraulic Atomizing' }
          }
        ],
        sortIndex: 39,
        seoPath: 'electrically-actuated-hydraulic-atomizing-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ElectricallyActuatedAirAtomizingNozzles,
      ...defaultFacetOption,
      valueId: 'aeb673dc-b0e0-419a-861d-691fd3b30989',
      value: 'Electrically-Actuated / Air Atomizing',
      parentId: '43c4a35a-5621-4585-b291-d8481c00c83d',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Electrically-Actuated / Air Atomizing' }
          }
        ],
        sortIndex: 40,
        seoPath: 'electrically-actuated-air-atomizing-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AirActuatedHydraulicAtomizingNozzles,
      ...defaultFacetOption,
      valueId: 'bf851fde-6525-4fa3-9ba1-7b76b4111fbe',
      value: 'Air-Actuated / Hydraulic Atomizing',
      parentId: '43c4a35a-5621-4585-b291-d8481c00c83d',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Air-Actuated / Hydraulic Atomizing' }
          }
        ],
        sortIndex: 41,
        seoPath: 'air-actuated-hydraulic-atomizing-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AirActuatedAirAtomizingNozzles,
      ...defaultFacetOption,
      valueId: '1f1f0459-20fe-4d4f-a4c5-afec9af36f05',
      value: 'Air-Actuated / Air Atomizing',
      parentId: '43c4a35a-5621-4585-b291-d8481c00c83d',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Air-Actuated / Air Atomizing' }
          }
        ],
        sortIndex: 42,
        seoPath: 'air-actuated-air-atomizing-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SprayGuns,
      ...defaultFacetOption,
      valueId: '3ba9c6a1-43f5-4862-b64e-f7ff232fa691',
      value: 'Spray Guns',
      parentId: '',
      children: [
        'f25e9397-c3b5-4e5d-bb01-cdc14a98ac97',
        '6dd092be-3b4d-4e4a-bd2f-7f30e0da08d6',
        '4e9199f0-2b6e-42b7-a1e2-6592c9603cc1'
      ],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Spray Guns' }
          }
        ],
        sortIndex: 43,
        seoPath: 'spray-guns'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.LowPressureSprayGuns,
      ...defaultFacetOption,
      valueId: 'f25e9397-c3b5-4e5d-bb01-cdc14a98ac97',
      value: 'Low Pressure',
      parentId: '3ba9c6a1-43f5-4862-b64e-f7ff232fa691',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Low Pressure' }
          }
        ],
        sortIndex: 44,
        seoPath: 'low-pressure-spray-guns'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MediumPressureSprayGuns,
      ...defaultFacetOption,
      valueId: '6dd092be-3b4d-4e4a-bd2f-7f30e0da08d6',
      value: 'Medium Pressure',
      parentId: '3ba9c6a1-43f5-4862-b64e-f7ff232fa691',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Medium Pressure' }
          }
        ],
        sortIndex: 45,
        seoPath: 'medium-pressure-spray-guns'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HighPressureSprayGuns,
      ...defaultFacetOption,
      valueId: '4e9199f0-2b6e-42b7-a1e2-6592c9603cc1',
      value: 'High Pressure',
      parentId: '3ba9c6a1-43f5-4862-b64e-f7ff232fa691',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'High Pressure' }
          }
        ],
        sortIndex: 46,
        seoPath: 'high-pressure-spray-guns'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AirNozzles,
      ...defaultFacetOption,
      valueId: '4b39c56f-d0e6-4a64-b7ac-d3fcc15135a6',
      value: 'Air Nozzles',
      parentId: '',
      children: [
        '723cfc0e-8812-45fc-81f3-76490bed5b02',
        '9728a8a0-cd1c-418a-b2f9-c2ca28e96e6a'
      ],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Air Nozzles' }
          }
        ],
        sortIndex: 47,
        seoPath: 'air-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FlatSprayAirNozzles,
      ...defaultFacetOption,
      valueId: '723cfc0e-8812-45fc-81f3-76490bed5b02',
      value: 'Flat Spray',
      parentId: '4b39c56f-d0e6-4a64-b7ac-d3fcc15135a6',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Flat Spray' }
          }
        ],
        sortIndex: 48,
        seoPath: 'flat-spray-air-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.RoundSprayAirNozzles,
      ...defaultFacetOption,
      valueId: '9728a8a0-cd1c-418a-b2f9-c2ca28e96e6a',
      value: 'Round Spray',
      parentId: '4b39c56f-d0e6-4a64-b7ac-d3fcc15135a6',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Round Spray' }
          }
        ],
        sortIndex: 49,
        seoPath: 'round-spray-air-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Accessories,
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
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Accessories' }
          }
        ],
        sortIndex: 50,
        seoPath: 'accessories'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.NozzleBodies,
      ...defaultFacetOption,
      valueId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
      value: 'Nozzle Bodies',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: [
        '2af247ae-4676-4cc5-a935-c767c21f8ce4',
        '8606316f-39e9-47fd-9e5b-6df01ef45f4e',
        'd9509071-00ca-4a6a-ba7f-61a95365db7f'
      ],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Nozzle Bodies' }
          }
        ],
        sortIndex: 51,
        seoPath: 'nozzle-bodies'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UnijetNozzleBodies,
      ...defaultFacetOption,
      valueId: '2af247ae-4676-4cc5-a935-c767c21f8ce4',
      value: 'UniJet® Nozzle Bodies',
      parentId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'UniJet® Nozzle Bodies' }
          }
        ],
        sortIndex: 52,
        seoPath: 'unijet-nozzle-bodies'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickjetNozzleBodies,
      ...defaultFacetOption,
      valueId: '8606316f-39e9-47fd-9e5b-6df01ef45f4e',
      value: 'QuickJet® Nozzle Bodies',
      parentId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'QuickJet® Nozzle Bodies' }
          }
        ],
        sortIndex: 53,
        seoPath: 'quickjet-nozzle-bodies'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MiniQuickjetNozzleBodies,
      ...defaultFacetOption,
      valueId: 'd9509071-00ca-4a6a-ba7f-61a95365db7f',
      value: 'Mini QuickJet® Nozzle Bodies',
      parentId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Mini QuickJet® Nozzle Bodies' }
          }
        ],
        sortIndex: 54,
        seoPath: 'mini-quickjet-nozzle-bodies'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ThrottlingAndPressureReliefOrRegulatingValves,
      ...defaultFacetOption,
      valueId: 'fac8fd7b-d802-4472-9348-c9fd5420a8b7',
      value: 'Throttling and Pressure Relief/Regulating Valves',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Throttling and Pressure Relief/Regulating Valves' }
          }
        ],
        sortIndex: 55,
        seoPath: 'throttling-and-pressure-relief-or-regulating-valves'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SplitEyeletConnectors,
      ...defaultFacetOption,
      valueId: 'a9b332af-ca55-43f0-90ec-1742cb3abb63',
      value: 'Split-Eyelet Connectors',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Split-Eyelet Connectors' }
          }
        ],
        sortIndex: 56,
        seoPath: 'split-eyelet-connectors'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AdjustableBallFittings,
      ...defaultFacetOption,
      valueId: '858cb720-d7e3-44f7-afe7-4478b93eb44d',
      value: 'Adjustable Ball Fittings',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Adjustable Ball Fittings' }
          }
        ],
        sortIndex: 57,
        seoPath: 'adjustable-ball-fittings'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Strainers,
      ...defaultFacetOption,
      valueId: '1354b0a8-d57c-4766-a7a6-78b103e11ba0',
      value: 'Strainers',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Strainers' }
          }
        ],
        sortIndex: 58,
        seoPath: 'strainers'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SprayingSystemsCoBrands,
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
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Spraying Systems Co. Brands' }
          }
        ],
        sortIndex: 59,
        seoPath: 'spraying-systems-co.-brands'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Distribojet,
      ...defaultFacetOption,
      valueId: '604d510f-163a-41f5-9f62-cc1ce8c764e8',
      value: 'DistriboJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'DistriboJet®' }
          }
        ],
        sortIndex: 60,
        seoPath: 'distribojet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Flatjet,
      ...defaultFacetOption,
      valueId: '5669bb6a-9276-4d9d-b42a-ebea2d94875f',
      value: 'FlatJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'FlatJet®' }
          }
        ],
        sortIndex: 61,
        seoPath: 'flatjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Fogjet,
      ...defaultFacetOption,
      valueId: 'f4d08770-2d60-455e-a050-4f29e1370de3',
      value: 'FogJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'FogJet®' }
          }
        ],
        sortIndex: 62,
        seoPath: 'fogjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Floodjet,
      ...defaultFacetOption,
      valueId: '3abac18a-3a35-4cbc-8fcf-e0af11f48a0d',
      value: 'FloodJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'FloodJet®' }
          }
        ],
        sortIndex: 63,
        seoPath: 'floodjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Fulljet,
      ...defaultFacetOption,
      valueId: '5c6ec0f4-5f37-4ed1-9671-af576ceaefb9',
      value: 'FullJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'FullJet®' }
          }
        ],
        sortIndex: 64,
        seoPath: 'fulljet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PromaxQuickjet,
      ...defaultFacetOption,
      valueId: '01f4977d-291f-4410-b8e8-648b5ebc5ec8',
      value: 'ProMax® QuickJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'ProMax® QuickJet®' }
          }
        ],
        sortIndex: 65,
        seoPath: 'promax-quickjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Quickjet,
      ...defaultFacetOption,
      valueId: '7455bee5-6901-4db6-a6df-744088154633',
      value: 'QuickJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'QuickJet®' }
          }
        ],
        sortIndex: 66,
        seoPath: 'quickjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Spiraljet,
      ...defaultFacetOption,
      valueId: 'b808217a-291d-47c3-a73c-bfd85b0be67f',
      value: 'SpiralJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'SpiralJet®' }
          }
        ],
        sortIndex: 67,
        seoPath: 'spiraljet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Unijet,
      ...defaultFacetOption,
      valueId: '42dad403-3b56-42b1-aa7d-f0c606141274',
      value: 'UniJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'UniJet®' }
          }
        ],
        sortIndex: 68,
        seoPath: 'unijet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Veejet,
      ...defaultFacetOption,
      valueId: '9f445e6e-09c8-4935-a91a-77806bc76e05',
      value: 'VeeJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'VeeJet®' }
          }
        ],
        sortIndex: 69,
        seoPath: 'veejet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Washjet,
      ...defaultFacetOption,
      valueId: '9be19c11-4139-4a09-aeb7-a3b66913a507',
      value: 'WashJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'WashJet®' }
          }
        ],
        sortIndex: 70,
        seoPath: 'washjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Whirljet,
      ...defaultFacetOption,
      valueId: 'd38cd84f-64ae-41fd-ae1d-dd5c6a38930e',
      value: 'WhirlJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'WhirlJet®' }
          }
        ],
        sortIndex: 71,
        seoPath: 'whirljet'
      }
    }
  ];

export const sprayPortalDemoCategoryPageFacet: Facet<
  SprayPortalDemoCategoryPageFacetOptionKey,
  FacetOption<SprayPortalDemoCategoryPageFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.SprayPortalDemoCategoryPage,
  attributeTypeCode: 'SprayPortalDemoCategoryPage',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Link,
    selectType: FacetSelectType.Default,
    displayName: 'Category',
    description: 'Category',
    isFacetingEnabled: true
  },
  options: sprayPortalDemoCategoryPageFacetOptions
};
