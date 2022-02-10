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
  SquareOvalSprayFullConeNozzles = 'SquareOvalSprayFullConeNozzles',
  UniJetFullConeNozzles = 'UniJetFullConeNozzles',
  QuickJetFullConeNozzles = 'QuickJetFullConeNozzles',
  FlatSprayNozzles = 'FlatSprayNozzles',
  StandardFlatSprayNozzles = 'StandardFlatSprayNozzles',
  DeflectedFlatSprayNozzles = 'DeflectedFlatSprayNozzles',
  HighPressureFlatSprayNozzles = 'HighPressureFlatSprayNozzles',
  UniJetFlatSprayNozzles = 'UniJetFlatSprayNozzles',
  QuickJetFlatSprayNozzles = 'QuickJetFlatSprayNozzles',
  MiniQuickJetFlatSprayNozzles = 'MiniQuickJetFlatSprayNozzles',
  SolidStreamNozzles = 'SolidStreamNozzles',
  StandardSolidStreamNozzles = 'StandardSolidStreamNozzles',
  HighPressureSolidStreamNozzles = 'HighPressureSolidStreamNozzles',
  UltraHighPressureNozzles = 'UltraHighPressureNozzles',
  UniJetSolidStreamNozzles = 'UniJetSolidStreamNozzles',
  QuickJetSolidStreamNozzles = 'QuickJetSolidStreamNozzles',
  MiniQuickJetSolidStreamNozzles = 'MiniQuickJetSolidStreamNozzles',
  HollowConeNozzles = 'HollowConeNozzles',
  AngleTypeHollowConeNozzles = 'AngleTypeHollowConeNozzles',
  InLineHollowConeNozzles = 'InLineHollowConeNozzles',
  LargeFreePassageHollowConeNozzles = 'LargeFreePassageHollowConeNozzles',
  UniJetHollowConeNozzles = 'UniJetHollowConeNozzles',
  FineSprayNozzles = 'FineSprayNozzles',
  SingleOrificeFineSprayNozzles = 'SingleOrificeFineSprayNozzles',
  MultiOrificeFineSprayNozzles = 'MultiOrificeFineSprayNozzles',
  ElectricallyActuatedNozzles = 'ElectricallyActuatedNozzles',
  AirActuatedNozzles = 'AirActuatedNozzles',
  QuickConnectNozzleSystems = 'QuickConnectNozzleSystems',
  SelfCleaningNozzles = 'SelfCleaningNozzles',
  FoodGradedNozzles = 'FoodGradedNozzles',
  ExplosionProofATEXNozzles = 'ExplosionProofATEXNozzles',
  AirDryingBlowOffNozzles = 'AirDryingBlowOffNozzles',
  AA707 = 'AA707',
  AA727 = 'AA727',
  Y767 = 'Y767',
  AirAtomizingNozzles = 'AirAtomizingNozzles',
  AutomaticNozzles = 'AutomaticNozzles',
  TankCleaningNozzles = 'TankCleaningNozzles',
  Upto100ft305m = 'Upto100ft305m',
  Upto45ft137m = 'Upto45ft137m',
  Upto20ft6m = 'Upto20ft6m',
  Upto10ft3m = 'Upto10ft3m',
  Upto5ft15m = 'Upto5ft15m',
  HandHeldSprayGuns = 'HandHeldSprayGuns',
  LowPressureSprayGuns = 'LowPressureSprayGuns',
  MediumPressureSprayGuns = 'MediumPressureSprayGuns',
  HighPressureSprayGuns = 'HighPressureSprayGuns',
  Accessories = 'Accessories',
  NozzleBodies = 'NozzleBodies',
  UniJetNozzleBodies = 'UniJetNozzleBodies',
  QuickJetNozzleBodies = 'QuickJetNozzleBodies',
  MiniQuickJetNozzleBodies = 'MiniQuickJetNozzleBodies',
  GaugesSwitchesRegulators = 'GaugesSwitchesRegulators',
  LiquidPressureRegulators = 'LiquidPressureRegulators',
  StrainersFilters = 'StrainersFilters',
  Strainers = 'Strainers',
  TankCleaningAccessories = 'TankCleaningAccessories',
  SprayGunAccessories = 'SprayGunAccessories',
  FabricatedProducts = 'FabricatedProducts',
  InjectorsQuills = 'InjectorsQuills',
  Lances = 'Lances',
  HeadersManifoldsShowers = 'HeadersManifoldsShowers',
  AutomatedSystems = 'AutomatedSystems',
  AutoJetE1850SpraySystems = 'AutoJetE1850SpraySystems',
  AccuCoatHeatedSystems = 'AccuCoatHeatedSystems',
  AccuCoatBenchtopHeatedSpraySystem = 'AccuCoatBenchtopHeatedSpraySystem',
  AccuCoatFullyJacketedHeatedSpraySystem = 'AccuCoatFullyJacketedHeatedSpraySystem',
  AccuCoatGlazingSpraySystem = 'AccuCoatGlazingSpraySystem',
  AccuCoatInLineHeatedSystem = 'AccuCoatInLineHeatedSystem',
  AccuCoatMiniHeatedSpraySystem = 'AccuCoatMiniHeatedSpraySystem',
  AccuCoatModularHeatedSpraySystem = 'AccuCoatModularHeatedSpraySystem',
  AccuCoatPanSprayingSystem = 'AccuCoatPanSprayingSystem',
  AccuCoatSpraySystem = 'AccuCoatSpraySystem',
  AccuCoatTemperatureControlledPanningSystem = 'AccuCoatTemperatureControlledPanningSystem',
  AccuJetSystems = 'AccuJetSystems',
  AccuJetElectrostaticChainOilerSystem = 'AccuJetElectrostaticChainOilerSystem',
  AccuJetElectrostaticSpraySystems = 'AccuJetElectrostaticSpraySystems',
  AccuJetUltrasonicSpraySystems = 'AccuJetUltrasonicSpraySystems',
  AccuOilSystem = 'AccuOilSystem',
  AlcoholSpraySystem = 'AlcoholSpraySystem',
  AutoJet2008PrecisionSprayControlSystem = 'AutoJet2008PrecisionSprayControlSystem',
  AutoJetDustControlSystem = 'AutoJetDustControlSystem',
  AutoJetFloorandCarpetCoatingSpraySystem = 'AutoJetFloorandCarpetCoatingSpraySystem',
  AutoJetFoodSafetySystems = 'AutoJetFoodSafetySystems',
  AutoJetFoodSafetySystemforCheese = 'AutoJetFoodSafetySystemforCheese',
  AutoJetFoodSafetySystemsforBakedGoods = 'AutoJetFoodSafetySystemsforBakedGoods',
  AutoJetFoodSafetySystemforMeatPoultry = 'AutoJetFoodSafetySystemforMeatPoultry',
  AutoJetFoodSafetySystemsforBaggedWholeMuscleProductsandHotDogs = 'AutoJetFoodSafetySystemsforBaggedWholeMuscleProductsandHotDogs',
  AutoJetFoodSafetySystemsforConveyorsandFreshMeats = 'AutoJetFoodSafetySystemsforConveyorsandFreshMeats',
  AutoJetFoodSafetySystemsforSlicedProducts = 'AutoJetFoodSafetySystemsforSlicedProducts',
  AutoJetFoodSafetySystemsforTumblersMixersandBlenders = 'AutoJetFoodSafetySystemsforTumblersMixersandBlenders',
  AutoJetPrecisionSprayControlSystems = 'AutoJetPrecisionSprayControlSystems',
  AutoJet2008Controllerwith20LiterTank = 'AutoJet2008Controllerwith20LiterTank',
  AutoJet2008Controllerwith50LiterTank = 'AutoJet2008Controllerwith50LiterTank',
  AutoJet2250ControllerwithPressureTank = 'AutoJet2250ControllerwithPressureTank',
  AutoJetConcolateSpraySystemforPanCoating = 'AutoJetConcolateSpraySystemforPanCoating',
  AutoJetMicroHeatedSpraySystem = 'AutoJetMicroHeatedSpraySystem',
  AutoJetMiniHeatedSpraySystemManual = 'AutoJetMiniHeatedSpraySystemManual',
  AutoJetModularSystemSprayNozzles = 'AutoJetModularSystemSprayNozzles',
  BAV20AccuGlazeAutonomousGlazingSystemwithPressureTankandConveyorforBakeries = 'BAV20AccuGlazeAutonomousGlazingSystemwithPressureTankandConveyorforBakeries',
  DiaphragmPumpwithAutoJet2008Controller = 'DiaphragmPumpwithAutoJet2008Controller',
  DiaphragmPumpwithAutoJet2250Controller = 'DiaphragmPumpwithAutoJet2250Controller',
  DiaphragmPumpwithManualControl = 'DiaphragmPumpwithManualControl',
  ScrewPumpwithAutoJet2250Controller = 'ScrewPumpwithAutoJet2250Controller',
  AutoJetGasCoolingSystem = 'AutoJetGasCoolingSystem',
  AutoJetLiquidDeliveryModule = 'AutoJetLiquidDeliveryModule',
  AutoJetLubricationSystems = 'AutoJetLubricationSystems',
  AutoJetHP170HeatedLubricationSystemforHighPressureSprayingonCoils = 'AutoJetHP170HeatedLubricationSystemforHighPressureSprayingonCoils',
  AutoJetL210HydraulicLubricationSystem = 'AutoJetL210HydraulicLubricationSystem',
  AutoJetP400LubricationSystem = 'AutoJetP400LubricationSystem',
  AutoJetModularSpraySystem = 'AutoJetModularSpraySystem',
  AutoJetNOxControlSystem = 'AutoJetNOxControlSystem',
  FlatGlassCoatingAntiStainSolution = 'FlatGlassCoatingAntiStainSolution',
  GranumillSizeReductionSystems = 'GranumillSizeReductionSystems',
  PilotScaleSizeReductionGranumill007System = 'PilotScaleSizeReductionGranumill007System',
  ProductionScaleSizeReductionGranumill014System = 'ProductionScaleSizeReductionGranumill014System',
  RDScaleSizeGranumillJrSystem = 'RDScaleSizeGranumillJrSystem',
  HumidiJetSpraySystem = 'HumidiJetSpraySystem',
  KlarionCleaningandSanitizingSystem = 'KlarionCleaningandSanitizingSystem',
  MagnafloandMagnacoaterFluidBedSystems = 'MagnafloandMagnacoaterFluidBedSystems',
  PilotScaleFluidBedSystemModels00100120 = 'PilotScaleFluidBedSystemModels00100120',
  ProductionScaleFluidBedSystemsModels03001200 = 'ProductionScaleFluidBedSystemsModels03001200',
  RDScaleFluidBedSystemModels00020005 = 'RDScaleFluidBedSystemModels00020005',
  MagnaliftBinBowlElevators = 'MagnaliftBinBowlElevators',
  OxideDustControlSystem = 'OxideDustControlSystem',
  PanelSpraySystems = 'PanelSpraySystems',
  PanelSprayMSSystem = 'PanelSprayMSSystem',
  PanelSprayNMSystem = 'PanelSprayNMSystem',
  PanelSprayRASystem = 'PanelSprayRASystem',
  PanelSprayRSSystem = 'PanelSprayRSSystem',
  PanelSprayWXSystem = 'PanelSprayWXSystem',
  PharmxHighShearGranulators = 'PharmxHighShearGranulators',
  PharmxPilotScaleHighShearGranulatorsPX25PX150 = 'PharmxPilotScaleHighShearGranulatorsPX25PX150',
  PharmxProductionScaleHighShearGranulatorsPX250PX1250 = 'PharmxProductionScaleHighShearGranulatorsPX250PX1250',
  PharmxRDScaleHighShearGranulatorsPX1 = 'PharmxRDScaleHighShearGranulatorsPX1',
  PlyAbleTissueLaminationSystem = 'PlyAbleTissueLaminationSystem',
  PolardryElectrostaticSprayDrySystems = 'PolardryElectrostaticSprayDrySystems',
  PolardryElectrostaticSprayDryModel01System = 'PolardryElectrostaticSprayDryModel01System',
  PolardryFeasibilityScaleElectrostaticSprayDryModel001System = 'PolardryFeasibilityScaleElectrostaticSprayDryModel001System',
  PolardryPilotScaleElectrostaticSprayDryModel032and050System = 'PolardryPilotScaleElectrostaticSprayDryModel032and050System',
  PolardryRDScaleElectrostaticSprayDryModel004System = 'PolardryRDScaleElectrostaticSprayDryModel004System',
  RoboticSprayNozzleTechnology = 'RoboticSprayNozzleTechnology',
  TabcoaterTabletCoatingOptimizationSystem = 'TabcoaterTabletCoatingOptimizationSystem',
  VacuRollCleaningandDryingSystem = 'VacuRollCleaningandDryingSystem',
  AutoJet1008Controller = 'AutoJet1008Controller',
  AutoJet1550SprayController = 'AutoJet1550SprayController',
  AutoJet2008SprayController = 'AutoJet2008SprayController',
  AutoJet2250SprayController = 'AutoJet2250SprayController',
  AutoJetZoneControlPanels = 'AutoJetZoneControlPanels',
  IndustrialSprayApplications = 'IndustrialSprayApplications',
  AirDryingBlowOff = 'AirDryingBlowOff',
  ChemicalProcessingRefineries = 'ChemicalProcessingRefineries',
  ChemicalReactionConversionInjection = 'ChemicalReactionConversionInjection',
  SulfurBurning = 'SulfurBurning',
  Cleaning = 'Cleaning',
  HandheldPressureWashing = 'HandheldPressureWashing',
  LowPressureRinsing = 'LowPressureRinsing',
  HighPressureWashing = 'HighPressureWashing',
  SanitizingDisinfecting = 'SanitizingDisinfecting',
  TankCleaning = 'TankCleaning',
  Coating = 'Coating',
  AdhesiveBinderCoating = 'AdhesiveBinderCoating',
  GeneralPreservativeCoatingNonfood = 'GeneralPreservativeCoatingNonfood',
  Painting = 'Painting',
  ProtectiveCoating = 'ProtectiveCoating',
  ViscousMaterialCoating = 'ViscousMaterialCoating',
  Cooling = 'Cooling',
  CoolingSolids = 'CoolingSolids',
  EvaporativeCoolingofLiquids = 'EvaporativeCoolingofLiquids',
  CoolingConditioningofGas = 'CoolingConditioningofGas',
  QuenchingDeluge = 'QuenchingDeluge',
  HumidifyingMoisturizing = 'HumidifyingMoisturizing',
  GasHumidification = 'GasHumidification',
  SurfaceProductMoistening = 'SurfaceProductMoistening',
  SpatialHumidification = 'SpatialHumidification',
  Lubrication = 'Lubrication',
  DieLubrication = 'DieLubrication',
  ReleaseAgents = 'ReleaseAgents',
  ElectrostaticLubrication = 'ElectrostaticLubrication',
  Marking = 'Marking',
  SprayDrying = 'SprayDrying',
  TrimmingCutting = 'TrimmingCutting',
  PaperTrimming = 'PaperTrimming',
  WaterJetCutting = 'WaterJetCutting',
  AgitationMixingorBlending = 'AgitationMixingorBlending',
  FoodPlantCleanup = 'FoodPlantCleanup',
  SnowMaking = 'SnowMaking',
  SprayPonds = 'SprayPonds',
  Electronics = 'Electronics',
  EtchingStripping = 'EtchingStripping',
  FlatPanelProduction = 'FlatPanelProduction',
  FireProtection = 'FireProtection',
  FoodSafety = 'FoodSafety',
  Antimicrobial = 'Antimicrobial',
  Antimold = 'Antimold',
  PharmaceuticalProcessingBiologics = 'PharmaceuticalProcessingBiologics',
  BatchControls = 'BatchControls',
  BulkSolidsProcessingHandling = 'BulkSolidsProcessingHandling',
  LiquidDelivery = 'LiquidDelivery',
  SolidDosage = 'SolidDosage',
  PollutionEnvironmentalControl = 'PollutionEnvironmentalControl',
  DustControl = 'DustControl',
  AirPollutionControl = 'AirPollutionControl',
  NOxControl = 'NOxControl',
  OxideSuppression = 'OxideSuppression',
  SewageWastewaterTreatmentOdorControl = 'SewageWastewaterTreatmentOdorControl',
  PrimaryMetals = 'PrimaryMetals',
  BOFDedusting = 'BOFDedusting',
  ContinuousCasting = 'ContinuousCasting',
  Descaling = 'Descaling',
  Pickling = 'Pickling',
  RollCooling = 'RollCooling',
  Brands = 'Brands',
  DeflectoJet = 'DeflectoJet',
  DistriboJet = 'DistriboJet',
  FlatJet = 'FlatJet',
  FogJet = 'FogJet',
  FloodJet = 'FloodJet',
  FullJet = 'FullJet',
  GunJet = 'GunJet',
  ProMaxQuickJet = 'ProMaxQuickJet',
  QuickJet = 'QuickJet',
  SpiralJet = 'SpiralJet',
  TankJet = 'TankJet',
  UniJet = 'UniJet',
  VeeJet = 'VeeJet',
  WashJet = 'WashJet',
  WhirlJet = 'WhirlJet',
  WindJet = 'WindJet',
  ThrotthlingAndPressureReliefRegulatingValves = 'ThrotthlingAndPressureReliefRegulatingValves',
  SplitEyeletConnectors = 'SplitEyeletConnectors',
  AdjustableBallFittings = 'AdjustableBallFittings'
}

export const sprayPortalDemoCategoryPageFacetOptions: FacetOption<SprayPortalDemoCategoryPageFacetOptionKey>[] =
  [
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HydraulicNozzles,
      ...defaultFacetOption,
      valueId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      value: 'Hydraulic  Nozzles',
      parentId: '',
      children: [
        'e41acecc-5491-4fa1-ae55-1bf880305962',
        '29825a97-1a4d-47b1-8de9-27f1d8b15447',
        '450fd9b1-e6ac-4e89-98d8-4341a35150c5',
        '424cc984-32c3-4bc3-8b27-475d1fe32080',
        '3cb5851b-dec4-4e4c-9efb-599bca2fb27c',
        '276392ff-5f76-4fba-b28d-60484f6cb2e2',
        '06d1ad77-2663-453c-a53c-60bec49d5f96',
        'f682ad13-4ea3-4bff-b0ff-8cd2fc500007',
        'c618ebc7-a702-413b-96ce-a8c03489806c',
        '9b282e61-a940-4c4c-900f-dc057905d2a8',
        'e48fc63d-9fce-4de4-a1fe-e007e0b9158a'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Hydraulic Nozzles' }
          }
        ],
        sortIndex: 1,

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
        '7e6211ba-add0-4e77-aa3e-820a6d6d0ade',
        '9856253a-0db7-4723-93d6-8a82e485c1a8',
        'd944e101-27ba-48b2-b8be-b864e9ebee39',
        'c67479be-9af0-434a-97c2-da8c26357b7f',
        '59e49512-3759-4eba-903d-dccd30798b38',
        '211aed31-3e85-4cfb-9b6b-ec7a301a7acb',
        '870dcf21-77dd-4d2b-9394-fa423d85f503'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Full Cone Nozzles' }
          }
        ],
        sortIndex: 2,

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
        sortIndex: 3,

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
        sortIndex: 7,

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
        sortIndex: 11,

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
        sortIndex: 15,

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
        sortIndex: 18,

        seoPath: 'large-free-passage-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SquareOvalSprayFullConeNozzles,
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
        sortIndex: 23,

        seoPath: 'square-or-oval-spray-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UniJetFullConeNozzles,
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
        sortIndex: 27,

        seoPath: 'unijet-full-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickJetFullConeNozzles,
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
        sortIndex: 32,

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
        '54c46a98-3f97-4793-b754-0a8316918394',
        'c3b1d7e1-3eee-4235-8469-0f376867113f',
        '16a8ac8d-98d5-4985-a487-2317588ef025',
        '8ca385c7-2dc6-49da-b4d1-2928fd2de172',
        'bdaa6668-34d0-4826-b49d-987604e804b4',
        '0f4da1bc-5133-46da-a2a4-f2b41098f191'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Flat Spray Nozzles' }
          }
        ],
        sortIndex: 38,

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
        sortIndex: 39,

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
        sortIndex: 43,

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
        sortIndex: 47,

        seoPath: 'high-pressure-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UniJetFlatSprayNozzles,
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
        sortIndex: 50,

        seoPath: 'unijet-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickJetFlatSprayNozzles,
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
        sortIndex: 55,

        seoPath: 'quickjet-flat-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MiniQuickJetFlatSprayNozzles,
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
        sortIndex: 60,

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
        'eae1f2f7-f707-4a8c-974e-36c201cb5e1a',
        'fa6700aa-f174-4fd5-a0a0-7821e056f59f',
        '4689c62c-26c8-407d-a962-80e089a07443',
        '164e4414-7eb9-4404-baf0-d6e2b3e43c73'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Solid Stream Nozzles' }
          }
        ],
        sortIndex: 64,

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
        sortIndex: 65,

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
        sortIndex: 68,

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
        sortIndex: 72,

        seoPath: 'ultra-high-pressure-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UniJetSolidStreamNozzles,
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
        sortIndex: 75,

        seoPath: 'unijet-solid-stream-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickJetSolidStreamNozzles,
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
        sortIndex: 79,

        seoPath: 'quickjet-solid-stream-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MiniQuickJetSolidStreamNozzles,
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
        sortIndex: 81,

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
        'b360dc4b-0cf9-4e84-953b-791453d7e293',
        'efcbeb55-bf89-4298-b006-83bc6af9a3dc',
        'dd8ecdf4-b4da-49de-bee4-a136fdfd0c57',
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
        sortIndex: 83,

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
        sortIndex: 84,

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
        sortIndex: 88,

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
        sortIndex: 92,

        seoPath: 'large-free-passage-hollow-cone-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UniJetHollowConeNozzles,
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
        sortIndex: 94,

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
        '20bc051a-0842-4557-910e-06a261e01135',
        '1c3a59c0-decb-44dd-9c3f-c5dc6d91fea1'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Fine Spray Nozzles' }
          }
        ],
        sortIndex: 99,

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
        sortIndex: 100,

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
        sortIndex: 104,

        seoPath: 'multi-orifice-fine-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ElectricallyActuatedNozzles,
      ...defaultFacetOption,
      valueId: '424cc984-32c3-4bc3-8b27-475d1fe32080',
      value: 'Electrically-Actuated Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Electrically-Actuated Nozzles' }
          }
        ],
        sortIndex: 108,

        seoPath: 'electrically-actuated-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AirActuatedNozzles,
      ...defaultFacetOption,
      valueId: '29825a97-1a4d-47b1-8de9-27f1d8b15447',
      value: 'Air-Actuated Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Air-Actuated Nozzles' }
          }
        ],
        sortIndex: 109,

        seoPath: 'air-actuated-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickConnectNozzleSystems,
      ...defaultFacetOption,
      valueId: 'c618ebc7-a702-413b-96ce-a8c03489806c',
      value: 'Quick-Connect Nozzle Systems',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Quick-Connect Nozzle Systems' }
          }
        ],
        sortIndex: 110,

        seoPath: 'quick-connect-nozzle-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SelfCleaningNozzles,
      ...defaultFacetOption,
      valueId: '06d1ad77-2663-453c-a53c-60bec49d5f96',
      value: 'Self-Cleaning Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Self-Cleaning Nozzles' }
          }
        ],
        sortIndex: 111,

        seoPath: 'self-cleaning-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FoodGradedNozzles,
      ...defaultFacetOption,
      valueId: '276392ff-5f76-4fba-b28d-60484f6cb2e2',
      value: 'Food Graded Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Food Graded Nozzles' }
          }
        ],
        sortIndex: 112,

        seoPath: 'food-graded-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ExplosionProofATEXNozzles,
      ...defaultFacetOption,
      valueId: 'e48fc63d-9fce-4de4-a1fe-e007e0b9158a',
      value: 'Explosion Proof (ATEX) Nozzles',
      parentId: '7250a6cf-5474-4f4c-8678-9fafaaea7619',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Explosion Proof (ATEX) Nozzles' }
          }
        ],
        sortIndex: 113,

        seoPath: 'explosion-proof-atex-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AirDryingBlowOffNozzles,
      ...defaultFacetOption,
      valueId: '03f5a0dd-2071-47bd-bcc7-e3ade6387931',
      value: 'Air Drying \u0026 Blow-Off Nozzles',
      parentId: '',
      children: [
        'ce296648-2307-4a54-9ff1-271517823986',
        'f2f40f51-ae6c-48f3-826a-515b4fe9075e',
        '9000e56d-5d6c-427c-a8d3-5e23f6223378'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Air Drying & Blow-Off Nozzles' }
          }
        ],
        sortIndex: 114,

        seoPath: 'air-drying-and-blow-off-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AA707,
      ...defaultFacetOption,
      valueId: '9000e56d-5d6c-427c-a8d3-5e23f6223378',
      value: 'AA707',
      parentId: '03f5a0dd-2071-47bd-bcc7-e3ade6387931',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'AA707' } }
        ],
        sortIndex: 115,

        seoPath: 'aa707'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AA727,
      ...defaultFacetOption,
      valueId: 'ce296648-2307-4a54-9ff1-271517823986',
      value: 'AA727',
      parentId: '03f5a0dd-2071-47bd-bcc7-e3ade6387931',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'AA727' } }
        ],
        sortIndex: 116,

        seoPath: 'aa727'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Y767,
      ...defaultFacetOption,
      valueId: 'f2f40f51-ae6c-48f3-826a-515b4fe9075e',
      value: 'Y767',
      parentId: '03f5a0dd-2071-47bd-bcc7-e3ade6387931',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'Y767' } }
        ],
        sortIndex: 117,

        seoPath: 'y767'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AirAtomizingNozzles,
      ...defaultFacetOption,
      valueId: '30dc846a-591f-48a2-9471-f102ab71544f',
      value: 'Air Atomizing Nozzles',
      parentId: '',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Air Atomizing Nozzles' }
          }
        ],
        sortIndex: 118,

        seoPath: 'air-atomizing-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutomaticNozzles,
      ...defaultFacetOption,
      valueId: '41828aa7-b7dd-45f7-8e55-4dbb45b9bbc8',
      value: 'Automatic Nozzles',
      parentId: '',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Automatic Nozzles' }
          }
        ],
        sortIndex: 119,

        seoPath: 'automatic-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.TankCleaningNozzles,
      ...defaultFacetOption,
      valueId: '42bec2b5-0235-4375-a79c-588c37e65639',
      value: 'Tank Cleaning Nozzles',
      parentId: '',
      children: [
        'fd6231c6-8a49-4a08-8d38-228eb2961723',
        'fd70c69f-c6f7-4eba-8889-6a3347a6c557',
        '06aeaa19-2d92-472a-a625-76161b9fd7eb',
        'acc0c196-7deb-4f32-9182-7de30a538859',
        '3632ef26-5cee-4d12-b465-88418ad857d8'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Tank Cleaning Nozzles' }
          }
        ],
        sortIndex: 120,

        seoPath: 'tank-cleaning-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Upto100ft305m,
      ...defaultFacetOption,
      valueId: 'acc0c196-7deb-4f32-9182-7de30a538859',
      value: 'Up to 100 ft. (30.5 m)',
      parentId: '42bec2b5-0235-4375-a79c-588c37e65639',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 100 ft. (30.5 m)' }
          }
        ],
        sortIndex: 121,

        seoPath: 'up-to-100-ft.-30.5-m'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Upto45ft137m,
      ...defaultFacetOption,
      valueId: '3632ef26-5cee-4d12-b465-88418ad857d8',
      value: 'Up to 45 ft. (13.7 m)',
      parentId: '42bec2b5-0235-4375-a79c-588c37e65639',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 45 ft. (13.7 m)' }
          }
        ],
        sortIndex: 122,

        seoPath: 'up-to-45-ft.-13.7-m'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Upto20ft6m,
      ...defaultFacetOption,
      valueId: 'fd70c69f-c6f7-4eba-8889-6a3347a6c557',
      value: 'Up to 20 ft. (6 m)',
      parentId: '42bec2b5-0235-4375-a79c-588c37e65639',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 20 ft. (6 m)' }
          }
        ],
        sortIndex: 123,

        seoPath: 'up-to-20-ft.-6-m'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Upto10ft3m,
      ...defaultFacetOption,
      valueId: 'fd6231c6-8a49-4a08-8d38-228eb2961723',
      value: 'Up to 10 ft. (3 m)',
      parentId: '42bec2b5-0235-4375-a79c-588c37e65639',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 10 ft. (3 m)' }
          }
        ],
        sortIndex: 124,

        seoPath: 'up-to-10-ft.-3-m'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Upto5ft15m,
      ...defaultFacetOption,
      valueId: '06aeaa19-2d92-472a-a625-76161b9fd7eb',
      value: 'Up to 5 ft. (1.5 m)',
      parentId: '42bec2b5-0235-4375-a79c-588c37e65639',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Up to 5 ft. (1.5 m)' }
          }
        ],
        sortIndex: 125,

        seoPath: 'up-to-5-ft.-1.5-m'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HandHeldSprayGuns,
      ...defaultFacetOption,
      valueId: '06eb51f9-b98d-436b-bd7c-fe76fcfeae1b',
      value: 'Hand-Held Spray Guns',
      parentId: '',
      children: [
        '69307f3a-38b4-490e-b877-24b14f5d5da2',
        '496931ac-f51f-44bf-9ec4-326ee08bd5c8',
        '6ff5879a-fa1e-4fc5-a818-4ba8946e6c77'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Hand-Held Spray Guns' }
          }
        ],
        sortIndex: 126,

        seoPath: 'hand-held-spray-guns'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.LowPressureSprayGuns,
      ...defaultFacetOption,
      valueId: '69307f3a-38b4-490e-b877-24b14f5d5da2',
      value: 'Low Pressure Spray Guns',
      parentId: '06eb51f9-b98d-436b-bd7c-fe76fcfeae1b',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Low Pressure Spray Guns' }
          }
        ],
        sortIndex: 127,

        seoPath: 'low-pressure-spray-guns'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MediumPressureSprayGuns,
      ...defaultFacetOption,
      valueId: '6ff5879a-fa1e-4fc5-a818-4ba8946e6c77',
      value: 'Medium Pressure Spray Guns',
      parentId: '06eb51f9-b98d-436b-bd7c-fe76fcfeae1b',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Medium Pressure Spray Guns' }
          }
        ],
        sortIndex: 128,

        seoPath: 'medium-pressure-spray-guns'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HighPressureSprayGuns,
      ...defaultFacetOption,
      valueId: '496931ac-f51f-44bf-9ec4-326ee08bd5c8',
      value: 'High Pressure Spray Guns',
      parentId: '06eb51f9-b98d-436b-bd7c-fe76fcfeae1b',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'High Pressure Spray Guns' }
          }
        ],
        sortIndex: 129,

        seoPath: 'high-pressure-spray-guns'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Accessories,
      ...defaultFacetOption,
      valueId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      value: 'Accessories',
      parentId: '',
      children: [
        '2e9d8872-0e4a-4360-afc9-15660a1d195e',
        'af5f56ef-732a-4199-b389-2d522d5a45a9',
        'a6aae5b9-fa41-49d9-858f-926d9c97bf6d',
        'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
        'b9184c00-921d-47d1-adaa-f6eb754da71a'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Accessories' }
          }
        ],
        sortIndex: 130,

        seoPath: 'accessories'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ThrotthlingAndPressureReliefRegulatingValves,
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
        sortIndex: 200,

        seoPath: 'throttling-and-pressure-relief-regulating-valves'
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
        sortIndex: 201,

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
        sortIndex: 202,

        seoPath: 'adjustable-ball-fittings'
      }
    },

    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.NozzleBodies,
      ...defaultFacetOption,
      valueId: 'a00c0390-eae3-4a0a-85c4-b2cfd5af8b7a',
      value: 'Nozzle Bodies',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: [
        'd9509071-00ca-4a6a-ba7f-61a95365db7f',
        '8606316f-39e9-47fd-9e5b-6df01ef45f4e',
        '2af247ae-4676-4cc5-a935-c767c21f8ce4'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Nozzle Bodies' }
          }
        ],
        sortIndex: 131,

        seoPath: 'nozzle-bodies'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UniJetNozzleBodies,
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
        sortIndex: 132,

        seoPath: 'unijet-nozzle-bodies'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickJetNozzleBodies,
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
        sortIndex: 135,

        seoPath: 'quickjet-nozzle-bodies'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MiniQuickJetNozzleBodies,
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
        sortIndex: 138,

        seoPath: 'mini-quickjet-nozzle-bodies'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.GaugesSwitchesRegulators,
      ...defaultFacetOption,
      valueId: 'b9184c00-921d-47d1-adaa-f6eb754da71a',
      value: 'Gauges, Switches \u0026 Regulators',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: ['f5d0c8e5-a348-4bd8-a912-e072259936ec'],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Gauges, Switches & Regulators' }
          }
        ],
        sortIndex: 146,

        seoPath: 'gauges-switches-and-regulators'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.LiquidPressureRegulators,
      ...defaultFacetOption,
      valueId: 'f5d0c8e5-a348-4bd8-a912-e072259936ec',
      value: 'Liquid Pressure Regulators',
      parentId: 'b9184c00-921d-47d1-adaa-f6eb754da71a',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Liquid Pressure Regulators' }
          }
        ],
        sortIndex: 147,

        seoPath: 'liquid-pressure-regulators'
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
        sortIndex: 162,

        seoPath: 'strainers'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.TankCleaningAccessories,
      ...defaultFacetOption,
      valueId: '2e9d8872-0e4a-4360-afc9-15660a1d195e',
      value: 'Tank Cleaning Accessories',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Tank Cleaning Accessories' }
          }
        ],
        sortIndex: 176,

        seoPath: 'tank-cleaning-accessories'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SprayGunAccessories,
      ...defaultFacetOption,
      valueId: 'af5f56ef-732a-4199-b389-2d522d5a45a9',
      value: 'Spray Gun Accessories',
      parentId: '7915b20c-1bf0-4626-b980-a83fe5991f43',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Spray Gun Accessories' }
          }
        ],
        sortIndex: 177,

        seoPath: 'spray-gun-accessories'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FabricatedProducts,
      ...defaultFacetOption,
      valueId: 'a82e548f-c8b6-4f8f-bf74-6d68a84c82a4',
      value: 'Fabricated Products',
      parentId: '',
      children: [
        '9e25a4dc-b6ad-404e-8dcb-1d330880ea6a',
        'ba24279b-540e-45ba-9d72-2d1ed4dee771',
        'c0de7625-0b70-49cf-83a1-b22dfd5501f4'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Fabricated Products' }
          }
        ],
        sortIndex: 178,

        seoPath: 'fabricated-products'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.InjectorsQuills,
      ...defaultFacetOption,
      valueId: 'c0de7625-0b70-49cf-83a1-b22dfd5501f4',
      value: 'Injectors \u0026 Quills',
      parentId: 'a82e548f-c8b6-4f8f-bf74-6d68a84c82a4',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Injectors & Quills' }
          }
        ],
        sortIndex: 179,

        seoPath: 'injectors-and-quills'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Lances,
      ...defaultFacetOption,
      valueId: '9e25a4dc-b6ad-404e-8dcb-1d330880ea6a',
      value: 'Lances',
      parentId: 'a82e548f-c8b6-4f8f-bf74-6d68a84c82a4',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'Lances' } }
        ],
        sortIndex: 180,

        seoPath: 'lances'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HeadersManifoldsShowers,
      ...defaultFacetOption,
      valueId: 'ba24279b-540e-45ba-9d72-2d1ed4dee771',
      value: 'Headers, Manifolds \u0026 Showers',
      parentId: 'a82e548f-c8b6-4f8f-bf74-6d68a84c82a4',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Headers, Manifolds & Showers' }
          }
        ],
        sortIndex: 182,

        seoPath: 'headers-manifolds-and-showers'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutomatedSystems,
      ...defaultFacetOption,
      valueId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      value: 'Automated Systems',
      parentId: '',
      children: [
        'ba1b2cb9-c50d-4225-8976-01e3a69a9211',
        '904c0b3d-e728-46ab-8e05-049fb6c7797a',
        'f8244a89-389a-475c-898c-07265a36e178',
        'fb581014-d613-47e2-8c28-0a0f47c06211',
        '25def52d-4067-4e60-ab8e-18c11292086c',
        '94e34743-6158-4352-b847-18e1fac3a4ba',
        'e7ee1e4e-b3d4-4d94-9378-19bad6b32e9e',
        '50ede002-3ac3-417e-b3e3-259b48b1108d',
        'cd863c9a-6659-42fc-9477-2bf9b7956220',
        'cac027c5-40db-40bf-b569-32e52589c947',
        'b19d01e5-e985-46af-9d60-34856d7bbeaf',
        '6e0602cb-e95b-4c58-a83a-47ca123a1ffa',
        'd4912864-3bc6-49ab-8f79-4c55ccadfe66',
        'fff08f1d-9f36-471a-963b-512763bfafcd',
        'c0d73b04-8233-433c-992d-56ec454de9d6',
        '4dd994d5-3e9b-4878-97c7-682da331893a',
        '13a07bd4-38d4-4e8d-8a91-689f4f2a56ea',
        'de7503e8-78e0-4182-967d-6ce7d9f75efb',
        'f9ab23bc-70b3-429a-86f7-8285c58c92c2',
        '4bbacf6f-8072-4140-940e-89dcb0a1f08c',
        'a1147b8b-d2a4-4735-afcb-8d51793c1948',
        'aa3e06da-12b6-4bbf-ae89-8dff58e9c592',
        'a976bb2b-4758-41f2-9e93-93c085d7aa6c',
        '6ce5f220-8221-4870-9e65-9407b4f6bcc0',
        '7c247f6c-38e0-452f-aeb1-95fa5ce9fd31',
        'b282a25a-1388-475b-9ec7-98dd90a6d67a',
        'f7a7dfa1-1d14-45ab-9e86-9d8c043d99b9',
        '7dd05717-c484-4919-9257-a22e56406317',
        '4cd14824-2181-4c65-b4f2-a6d06acea8b9',
        '4ac31640-ca01-4809-9964-e06791a5e20d',
        '679c8c90-5bb5-4a04-9d35-e0b3d08413ce',
        '864d621e-1d0a-462b-8338-e0e7d2247d30',
        '97aa0a32-9208-473e-87d2-ecd8166be509',
        'fb43855f-4a53-42ec-ab18-f972ef1fde8b'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Automated Systems' }
          }
        ],
        sortIndex: 185,

        seoPath: 'automated-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetE1850SpraySystems,
      ...defaultFacetOption,
      valueId: 'f9ab23bc-70b3-429a-86f7-8285c58c92c2',
      value: 'AutoJet® E1850\u002B Spray Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® E1850+ Spray Systems' }
          }
        ],
        sortIndex: 186,

        seoPath: 'autojet-e1850-spray-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatHeatedSystems,
      ...defaultFacetOption,
      valueId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      value: 'AccuCoat® Heated Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '6742ed76-7b50-4711-ac5c-1289ae6085d3',
        'd26b8561-fdae-444e-9484-1368c31a3609',
        '3bafb3d5-6d55-49bf-9d3f-452a0b1453c2',
        '823b71a6-ac3e-4a56-8060-4558ac924223',
        '1e87af5f-339d-44ae-9de5-7c1e23886582',
        'e51f374b-479c-46fc-9faa-82aad778080f',
        '783b379f-af85-4337-8207-8a99760cfd9a',
        'a9577a53-c7ab-43bb-a8cc-9337d0c68ef2',
        '3887ff5c-3b90-496a-a208-bfecbf91fffa'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Heated Systems' }
          }
        ],
        sortIndex: 187,

        seoPath: 'accucoat-heated-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatBenchtopHeatedSpraySystem,
      ...defaultFacetOption,
      valueId: '1e87af5f-339d-44ae-9de5-7c1e23886582',
      value: 'AccuCoat® Benchtop Heated Spray System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Benchtop Heated Spray System' }
          }
        ],
        sortIndex: 188,

        seoPath: 'accucoat-benchtop-heated-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatFullyJacketedHeatedSpraySystem,
      ...defaultFacetOption,
      valueId: '3887ff5c-3b90-496a-a208-bfecbf91fffa',
      value: 'AccuCoat® Fully-Jacketed Heated Spray System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Fully-Jacketed Heated Spray System' }
          }
        ],
        sortIndex: 189,

        seoPath: 'accucoat-fully-jacketed-heated-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatGlazingSpraySystem,
      ...defaultFacetOption,
      valueId: '6742ed76-7b50-4711-ac5c-1289ae6085d3',
      value: 'AccuCoat® Glazing Spray System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Glazing Spray System' }
          }
        ],
        sortIndex: 190,

        seoPath: 'accucoat-glazing-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatInLineHeatedSystem,
      ...defaultFacetOption,
      valueId: '783b379f-af85-4337-8207-8a99760cfd9a',
      value: 'AccuCoat® In-Line Heated System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® In-Line Heated System' }
          }
        ],
        sortIndex: 191,

        seoPath: 'accucoat-in-line-heated-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatMiniHeatedSpraySystem,
      ...defaultFacetOption,
      valueId: 'e51f374b-479c-46fc-9faa-82aad778080f',
      value: 'AccuCoat® Mini Heated Spray System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Mini Heated Spray System' }
          }
        ],
        sortIndex: 192,

        seoPath: 'accucoat-mini-heated-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatModularHeatedSpraySystem,
      ...defaultFacetOption,
      valueId: '3bafb3d5-6d55-49bf-9d3f-452a0b1453c2',
      value: 'AccuCoat® Modular Heated Spray System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Modular Heated Spray System' }
          }
        ],
        sortIndex: 193,

        seoPath: 'accucoat-modular-heated-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatPanSprayingSystem,
      ...defaultFacetOption,
      valueId: 'a9577a53-c7ab-43bb-a8cc-9337d0c68ef2',
      value: 'AccuCoat® Pan Spraying System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Pan Spraying System' }
          }
        ],
        sortIndex: 194,

        seoPath: 'accucoat-pan-spraying-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatSpraySystem,
      ...defaultFacetOption,
      valueId: 'd26b8561-fdae-444e-9484-1368c31a3609',
      value: 'AccuCoat® Spray System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Spray System' }
          }
        ],
        sortIndex: 195,

        seoPath: 'accucoat-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuCoatTemperatureControlledPanningSystem,
      ...defaultFacetOption,
      valueId: '823b71a6-ac3e-4a56-8060-4558ac924223',
      value: 'AccuCoat® Temperature-Controlled Panning System',
      parentId: '4ac31640-ca01-4809-9964-e06791a5e20d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuCoat® Temperature-Controlled Panning System' }
          }
        ],
        sortIndex: 196,

        seoPath: 'accucoat-temperature-controlled-panning-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuJetSystems,
      ...defaultFacetOption,
      valueId: '97aa0a32-9208-473e-87d2-ecd8166be509',
      value: 'AccuJet® Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '82d3d26e-6c4b-4fce-8584-1c2bd5794818',
        'eb3cd8df-dfbc-424c-bc42-bf46dda9a18c',
        '60257b0d-e50e-41ba-95fe-c9188c4cba20'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuJet® Systems' }
          }
        ],
        sortIndex: 197,

        seoPath: 'accujet-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuJetElectrostaticChainOilerSystem,
      ...defaultFacetOption,
      valueId: 'eb3cd8df-dfbc-424c-bc42-bf46dda9a18c',
      value: 'AccuJet® Electrostatic Chain Oiler System',
      parentId: '97aa0a32-9208-473e-87d2-ecd8166be509',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuJet® Electrostatic Chain Oiler System' }
          }
        ],
        sortIndex: 198,

        seoPath: 'accujet-electrostatic-chain-oiler-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuJetElectrostaticSpraySystems,
      ...defaultFacetOption,
      valueId: '82d3d26e-6c4b-4fce-8584-1c2bd5794818',
      value: 'AccuJet® Electrostatic Spray Systems',
      parentId: '97aa0a32-9208-473e-87d2-ecd8166be509',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuJet® Electrostatic Spray Systems' }
          }
        ],
        sortIndex: 199,

        seoPath: 'accujet-electrostatic-spray-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuJetUltrasonicSpraySystems,
      ...defaultFacetOption,
      valueId: '60257b0d-e50e-41ba-95fe-c9188c4cba20',
      value: 'AccuJet® Ultrasonic Spray Systems',
      parentId: '97aa0a32-9208-473e-87d2-ecd8166be509',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuJet® Ultrasonic Spray Systems' }
          }
        ],
        sortIndex: 200,

        seoPath: 'accujet-ultrasonic-spray-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AccuOilSystem,
      ...defaultFacetOption,
      valueId: 'a1147b8b-d2a4-4735-afcb-8d51793c1948',
      value: 'AccuOil™ System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AccuOil™ System' }
          }
        ],
        sortIndex: 201,

        seoPath: 'accuoil-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AlcoholSpraySystem,
      ...defaultFacetOption,
      valueId: 'b282a25a-1388-475b-9ec7-98dd90a6d67a',
      value: 'Alcohol Spray System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Alcohol Spray System' }
          }
        ],
        sortIndex: 202,

        seoPath: 'alcohol-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJet2008PrecisionSprayControlSystem,
      ...defaultFacetOption,
      valueId: '4cd14824-2181-4c65-b4f2-a6d06acea8b9',
      value: 'AutoJet® 2008\u002B Precision Spray Control System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® 2008+ Precision Spray Control System' }
          }
        ],
        sortIndex: 203,

        seoPath: 'autojet-2008-precision-spray-control-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetDustControlSystem,
      ...defaultFacetOption,
      valueId: '4dd994d5-3e9b-4878-97c7-682da331893a',
      value: 'AutoJet® Dust Control System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Dust Control System' }
          }
        ],
        sortIndex: 204,

        seoPath: 'autojet-dust-control-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFloorandCarpetCoatingSpraySystem,
      ...defaultFacetOption,
      valueId: '13a07bd4-38d4-4e8d-8a91-689f4f2a56ea',
      value: 'AutoJet® Floor and Carpet Coating Spray System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Floor and Carpet Coating Spray System' }
          }
        ],
        sortIndex: 205,

        seoPath: 'autojet-floor-and-carpet-coating-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFoodSafetySystems,
      ...defaultFacetOption,
      valueId: '904c0b3d-e728-46ab-8e05-049fb6c7797a',
      value: 'AutoJet® Food Safety Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '2e20596a-8cfd-4594-ae51-04b6103b9168',
        'b4b1d8ee-d9fb-4162-91a4-31ce0d835cde',
        'c6139998-ea10-4fe9-a37a-78518c8e9266'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Food Safety Systems' }
          }
        ],
        sortIndex: 206,

        seoPath: 'autojet-food-safety-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFoodSafetySystemforCheese,
      ...defaultFacetOption,
      valueId: '2e20596a-8cfd-4594-ae51-04b6103b9168',
      value: 'AutoJet® Food Safety System for Cheese',
      parentId: '904c0b3d-e728-46ab-8e05-049fb6c7797a',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Food Safety System for Cheese' }
          }
        ],
        sortIndex: 207,

        seoPath: 'autojet-food-safety-system-for-cheese'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFoodSafetySystemsforBakedGoods,
      ...defaultFacetOption,
      valueId: 'b4b1d8ee-d9fb-4162-91a4-31ce0d835cde',
      value: 'AutoJet® Food Safety Systems for Baked Goods',
      parentId: '904c0b3d-e728-46ab-8e05-049fb6c7797a',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Food Safety Systems for Baked Goods' }
          }
        ],
        sortIndex: 208,

        seoPath: 'autojet-food-safety-systems-for-baked-goods'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFoodSafetySystemforMeatPoultry,
      ...defaultFacetOption,
      valueId: 'c6139998-ea10-4fe9-a37a-78518c8e9266',
      value: 'AutoJet® Food Safety System for Meat \u0026 Poultry',
      parentId: '904c0b3d-e728-46ab-8e05-049fb6c7797a',
      children: [
        'c0928203-b57f-46d2-b18b-1f537bf0fabc',
        'ceb0581e-44d9-445f-9baf-71477b92eeb5',
        '8f978579-e975-412b-a9f6-ae2b17ec7691',
        '607e7864-ab4f-41be-9485-f93618f870fb'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Food Safety System for Meat & Poultry' }
          }
        ],
        sortIndex: 209,

        seoPath: 'autojet-food-safety-system-for-meat-and-poultry'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFoodSafetySystemsforBaggedWholeMuscleProductsandHotDogs,
      ...defaultFacetOption,
      valueId: '607e7864-ab4f-41be-9485-f93618f870fb',
      value:
        'AutoJet® Food Safety Systems for Bagged Whole Muscle Products and Hot Dogs',
      parentId: 'c6139998-ea10-4fe9-a37a-78518c8e9266',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'AutoJet® Food Safety Systems for Bagged Whole Muscle Products and Hot Dogs'
            }
          }
        ],
        sortIndex: 210,

        seoPath:
          'autojet-food-safety-systems-for-bagged-whole-muscle-products-and-hot-dogs'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFoodSafetySystemsforConveyorsandFreshMeats,
      ...defaultFacetOption,
      valueId: 'c0928203-b57f-46d2-b18b-1f537bf0fabc',
      value: 'AutoJet® Food Safety Systems for Conveyors and Fresh Meats',
      parentId: 'c6139998-ea10-4fe9-a37a-78518c8e9266',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'AutoJet® Food Safety Systems for Conveyors and Fresh Meats'
            }
          }
        ],
        sortIndex: 211,

        seoPath: 'autojet-food-safety-systems-for-conveyors-and-fresh-meats'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFoodSafetySystemsforSlicedProducts,
      ...defaultFacetOption,
      valueId: 'ceb0581e-44d9-445f-9baf-71477b92eeb5',
      value: 'AutoJet® Food Safety Systems for Sliced Products',
      parentId: 'c6139998-ea10-4fe9-a37a-78518c8e9266',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Food Safety Systems for Sliced Products' }
          }
        ],
        sortIndex: 212,

        seoPath: 'autojet-food-safety-systems-for-sliced-products'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetFoodSafetySystemsforTumblersMixersandBlenders,
      ...defaultFacetOption,
      valueId: '8f978579-e975-412b-a9f6-ae2b17ec7691',
      value: 'AutoJet® Food Safety Systems for Tumblers, Mixers and Blenders',
      parentId: 'c6139998-ea10-4fe9-a37a-78518c8e9266',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'AutoJet® Food Safety Systems for Tumblers, Mixers and Blenders'
            }
          }
        ],
        sortIndex: 213,

        seoPath: 'autojet-food-safety-systems-for-tumblers-mixers-and-blenders'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetPrecisionSprayControlSystems,
      ...defaultFacetOption,
      valueId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      value: 'AutoJet® Precision Spray Control Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '98726db7-f398-4074-8b66-174033736891',
        'ae87db42-0115-43db-a403-1d7ab10eccc6',
        '3f2c642f-0fd8-43c3-b99a-2a2f091df06c',
        '78170027-0ea1-4235-85bf-2e98fa262eef',
        '2ffb803e-2507-4b4d-94f0-3f746900cb10',
        'c586c505-c737-4c66-aaff-559f3a146e2d',
        'e6dca8bb-991f-4c11-bed5-656ab553e679',
        'fa383f88-13b8-4eb8-b3ab-8193a58b317f',
        'b20c4fdf-ad7b-48d1-a33d-865599d20742',
        'dbbb989d-33dd-4085-806f-c7796824d8d8',
        '0cafa651-2bc5-41d7-a55f-efed95064772',
        'b0f7c409-6727-427d-bdcb-f155d0d986a0'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Precision Spray Control Systems' }
          }
        ],
        sortIndex: 214,

        seoPath: 'autojet-precision-spray-control-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJet2008Controllerwith20LiterTank,
      ...defaultFacetOption,
      valueId: 'b0f7c409-6727-427d-bdcb-f155d0d986a0',
      value: 'AutoJet® 2008\u002B Controller with 20 Liter Tank',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® 2008+ Controller with 20 Liter Tank' }
          }
        ],
        sortIndex: 215,

        seoPath: 'autojet-2008-controller-with-20-liter-tank'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJet2008Controllerwith50LiterTank,
      ...defaultFacetOption,
      valueId: 'b20c4fdf-ad7b-48d1-a33d-865599d20742',
      value: 'AutoJet® 2008\u002B Controller with 50 Liter Tank',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® 2008+ Controller with 50 Liter Tank' }
          }
        ],
        sortIndex: 216,

        seoPath: 'autojet-2008-controller-with-50-liter-tank'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJet2250ControllerwithPressureTank,
      ...defaultFacetOption,
      valueId: 'fa383f88-13b8-4eb8-b3ab-8193a58b317f',
      value: 'AutoJet® 2250\u002B Controller with Pressure Tank',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® 2250+ Controller with Pressure Tank' }
          }
        ],
        sortIndex: 217,

        seoPath: 'autojet-2250-controller-with-pressure-tank'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetConcolateSpraySystemforPanCoating,
      ...defaultFacetOption,
      valueId: 'c586c505-c737-4c66-aaff-559f3a146e2d',
      value: 'AutoJet® Concolate Spray System for Pan Coating',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Concolate Spray System for Pan Coating' }
          }
        ],
        sortIndex: 218,

        seoPath: 'autojet-concolate-spray-system-for-pan-coating'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetMicroHeatedSpraySystem,
      ...defaultFacetOption,
      valueId: 'ae87db42-0115-43db-a403-1d7ab10eccc6',
      value: 'AutoJet® Micro Heated Spray System',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Micro Heated Spray System' }
          }
        ],
        sortIndex: 219,

        seoPath: 'autojet-micro-heated-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetMiniHeatedSpraySystemManual,
      ...defaultFacetOption,
      valueId: '2ffb803e-2507-4b4d-94f0-3f746900cb10',
      value: 'AutoJet® Mini Heated Spray System (Manual)',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Mini Heated Spray System (Manual)' }
          }
        ],
        sortIndex: 220,

        seoPath: 'autojet-mini-heated-spray-system-manual'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetModularSystemSprayNozzles,
      ...defaultFacetOption,
      valueId: '98726db7-f398-4074-8b66-174033736891',
      value: 'AutoJet® Modular System Spray Nozzles',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Modular System Spray Nozzles' }
          }
        ],
        sortIndex: 221,

        seoPath: 'autojet-modular-system-spray-nozzles'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.BAV20AccuGlazeAutonomousGlazingSystemwithPressureTankandConveyorforBakeries,
      ...defaultFacetOption,
      valueId: 'e6dca8bb-991f-4c11-bed5-656ab553e679',
      value:
        'BAV-20 AccuGlaze Autonomous Glazing System with Pressure Tank and Conveyor for Bakeries',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'BAV-20 AccuGlaze Autonomous Glazing System with Pressure Tank and Conveyor for Bakeries'
            }
          }
        ],
        sortIndex: 222,

        seoPath:
          'bav-20-accuglaze-autonomous-glazing-system-with-pressure-tank-and-conveyor-for-bakeries'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.DiaphragmPumpwithAutoJet2008Controller,
      ...defaultFacetOption,
      valueId: '78170027-0ea1-4235-85bf-2e98fa262eef',
      value: 'Diaphragm Pump with AutoJet® 2008\u002B Controller',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Diaphragm Pump with AutoJet® 2008+ Controller' }
          }
        ],
        sortIndex: 223,

        seoPath: 'diaphragm-pump-with-autojet-2008-controller'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.DiaphragmPumpwithAutoJet2250Controller,
      ...defaultFacetOption,
      valueId: '0cafa651-2bc5-41d7-a55f-efed95064772',
      value: 'Diaphragm Pump with AutoJet® 2250\u002B Controller',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Diaphragm Pump with AutoJet® 2250+ Controller' }
          }
        ],
        sortIndex: 224,

        seoPath: 'diaphragm-pump-with-autojet-2250-controller'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.DiaphragmPumpwithManualControl,
      ...defaultFacetOption,
      valueId: '3f2c642f-0fd8-43c3-b99a-2a2f091df06c',
      value: 'Diaphragm Pump with Manual Control',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Diaphragm Pump with Manual Control' }
          }
        ],
        sortIndex: 225,

        seoPath: 'diaphragm-pump-with-manual-control'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ScrewPumpwithAutoJet2250Controller,
      ...defaultFacetOption,
      valueId: 'dbbb989d-33dd-4085-806f-c7796824d8d8',
      value: 'Screw Pump with AutoJet® 2250\u002B Controller',
      parentId: '94e34743-6158-4352-b847-18e1fac3a4ba',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Screw Pump with AutoJet® 2250+ Controller' }
          }
        ],
        sortIndex: 226,

        seoPath: 'screw-pump-with-autojet-2250-controller'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetGasCoolingSystem,
      ...defaultFacetOption,
      valueId: 'cd863c9a-6659-42fc-9477-2bf9b7956220',
      value: 'AutoJet® Gas Cooling System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Gas Cooling System' }
          }
        ],
        sortIndex: 227,

        seoPath: 'autojet-gas-cooling-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetLiquidDeliveryModule,
      ...defaultFacetOption,
      valueId: '25def52d-4067-4e60-ab8e-18c11292086c',
      value: 'AutoJet® Liquid Delivery Module',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Liquid Delivery Module' }
          }
        ],
        sortIndex: 228,

        seoPath: 'autojet-liquid-delivery-module'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetLubricationSystems,
      ...defaultFacetOption,
      valueId: 'b19d01e5-e985-46af-9d60-34856d7bbeaf',
      value: 'AutoJet® Lubrication Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '16f6967e-7b29-4724-b290-1a0405238e88',
        '23d6e194-92b8-4606-9c5d-42f90393ad19',
        'ef6f686d-feba-4032-a791-be85a5432949'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Lubrication Systems' }
          }
        ],
        sortIndex: 229,

        seoPath: 'autojet-lubrication-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetHP170HeatedLubricationSystemforHighPressureSprayingonCoils,
      ...defaultFacetOption,
      valueId: '23d6e194-92b8-4606-9c5d-42f90393ad19',
      value:
        'AutoJet® HP170 Heated Lubrication System for High Pressure Spraying on Coils',
      parentId: 'b19d01e5-e985-46af-9d60-34856d7bbeaf',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'AutoJet® HP170 Heated Lubrication System for High Pressure Spraying on Coils'
            }
          }
        ],
        sortIndex: 230,

        seoPath:
          'autojet-hp170-heated-lubrication-system-for-high-pressure-spraying-on-coils'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetL210HydraulicLubricationSystem,
      ...defaultFacetOption,
      valueId: '16f6967e-7b29-4724-b290-1a0405238e88',
      value: 'AutoJet® L210 Hydraulic Lubrication System',
      parentId: 'b19d01e5-e985-46af-9d60-34856d7bbeaf',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® L210 Hydraulic Lubrication System' }
          }
        ],
        sortIndex: 231,

        seoPath: 'autojet-l210-hydraulic-lubrication-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetP400LubricationSystem,
      ...defaultFacetOption,
      valueId: 'ef6f686d-feba-4032-a791-be85a5432949',
      value: 'AutoJet® P400 Lubrication System',
      parentId: 'b19d01e5-e985-46af-9d60-34856d7bbeaf',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® P400 Lubrication System' }
          }
        ],
        sortIndex: 232,

        seoPath: 'autojet-p400-lubrication-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetModularSpraySystem,
      ...defaultFacetOption,
      valueId: 'aa3e06da-12b6-4bbf-ae89-8dff58e9c592',
      value: 'AutoJet® Modular Spray System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Modular Spray System' }
          }
        ],
        sortIndex: 233,

        seoPath: 'autojet-modular-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetNOxControlSystem,
      ...defaultFacetOption,
      valueId: 'cac027c5-40db-40bf-b569-32e52589c947',
      value: 'AutoJet® NOx Control System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® NOx Control System' }
          }
        ],
        sortIndex: 234,

        seoPath: 'autojet-nox-control-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FlatGlassCoatingAntiStainSolution,
      ...defaultFacetOption,
      valueId: 'fb43855f-4a53-42ec-ab18-f972ef1fde8b',
      value: 'Flat Glass Coating Anti-Stain Solution',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Flat Glass Coating Anti-Stain Solution' }
          }
        ],
        sortIndex: 235,

        seoPath: 'flat-glass-coating-anti-stain-solution'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.GranumillSizeReductionSystems,
      ...defaultFacetOption,
      valueId: 'fff08f1d-9f36-471a-963b-512763bfafcd',
      value: 'Granumill® Size Reduction Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '8cb359b5-6ca3-4dfe-b890-7b7838a10689',
        '37124aaa-5e80-43c4-a010-c9788385b906',
        '0df85f61-a41b-41ad-b257-e9b55695c474'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Granumill® Size Reduction Systems' }
          }
        ],
        sortIndex: 236,

        seoPath: 'granumill-size-reduction-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PilotScaleSizeReductionGranumill007System,
      ...defaultFacetOption,
      valueId: '0df85f61-a41b-41ad-b257-e9b55695c474',
      value: 'Pilot Scale Size Reduction Granumill® 007 System',
      parentId: 'fff08f1d-9f36-471a-963b-512763bfafcd',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Pilot Scale Size Reduction Granumill® 007 System' }
          }
        ],
        sortIndex: 237,

        seoPath: 'pilot-scale-size-reduction-granumill-007-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ProductionScaleSizeReductionGranumill014System,
      ...defaultFacetOption,
      valueId: '8cb359b5-6ca3-4dfe-b890-7b7838a10689',
      value: 'Production Scale Size Reduction Granumill® 014 System',
      parentId: 'fff08f1d-9f36-471a-963b-512763bfafcd',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'Production Scale Size Reduction Granumill® 014 System'
            }
          }
        ],
        sortIndex: 238,

        seoPath: 'production-scale-size-reduction-granumill-014-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.RDScaleSizeGranumillJrSystem,
      ...defaultFacetOption,
      valueId: '37124aaa-5e80-43c4-a010-c9788385b906',
      value: 'R\u0026D Scale Size Granumill® Jr. System',
      parentId: 'fff08f1d-9f36-471a-963b-512763bfafcd',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'R&D Scale Size Granumill® Jr. System' }
          }
        ],
        sortIndex: 239,

        seoPath: 'research-and-development-scale-size-granumill-jr.-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HumidiJetSpraySystem,
      ...defaultFacetOption,
      valueId: '7c247f6c-38e0-452f-aeb1-95fa5ce9fd31',
      value: 'HumidiJet Spray System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'HumidiJet Spray System' }
          }
        ],
        sortIndex: 240,

        seoPath: 'humidijet-spray-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.KlarionCleaningandSanitizingSystem,
      ...defaultFacetOption,
      valueId: 'e7ee1e4e-b3d4-4d94-9378-19bad6b32e9e',
      value: 'Klarion™ Cleaning and Sanitizing System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Klarion™ Cleaning and Sanitizing System' }
          }
        ],
        sortIndex: 241,

        seoPath: 'klarion-cleaning-and-sanitizing-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MagnafloandMagnacoaterFluidBedSystems,
      ...defaultFacetOption,
      valueId: 'de7503e8-78e0-4182-967d-6ce7d9f75efb',
      value: 'Magnaflo® and Magnacoater® Fluid Bed Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        'a77a8ee9-69d3-4ba6-9490-05393aaa3f16',
        '68373d8a-3e08-42ac-9b47-357c77503ec0',
        '386f33d5-2b52-4bf2-9929-88d446860b1e'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Magnaflo® and Magnacoater® Fluid Bed Systems' }
          }
        ],
        sortIndex: 242,

        seoPath: 'magnaflo-and-magnacoater-fluid-bed-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PilotScaleFluidBedSystemModels00100120,
      ...defaultFacetOption,
      valueId: '68373d8a-3e08-42ac-9b47-357c77503ec0',
      value: 'Pilot Scale Fluid Bed System Models 0010 - 0120',
      parentId: 'de7503e8-78e0-4182-967d-6ce7d9f75efb',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Pilot Scale Fluid Bed System Models 0010 - 0120' }
          }
        ],
        sortIndex: 243,

        seoPath: 'pilot-scale-fluid-bed-system-models-0010-0120'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ProductionScaleFluidBedSystemsModels03001200,
      ...defaultFacetOption,
      valueId: 'a77a8ee9-69d3-4ba6-9490-05393aaa3f16',
      value: 'Production Scale Fluid Bed Systems Models 0300 - 1200',
      parentId: 'de7503e8-78e0-4182-967d-6ce7d9f75efb',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'Production Scale Fluid Bed Systems Models 0300 - 1200'
            }
          }
        ],
        sortIndex: 244,

        seoPath: 'production-scale-fluid-bed-systems-models-0300-1200'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.RDScaleFluidBedSystemModels00020005,
      ...defaultFacetOption,
      valueId: '386f33d5-2b52-4bf2-9929-88d446860b1e',
      value: 'R\u0026D Scale Fluid Bed System Models 0002, 0005',
      parentId: 'de7503e8-78e0-4182-967d-6ce7d9f75efb',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'R&D Scale Fluid Bed System Models 0002, 0005' }
          }
        ],
        sortIndex: 245,

        seoPath:
          'research-and-development-scale-fluid-bed-system-models-0002-0005'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.MagnaliftBinBowlElevators,
      ...defaultFacetOption,
      valueId: '864d621e-1d0a-462b-8338-e0e7d2247d30',
      value: 'Magnalift® Bin \u0026 Bowl Elevators',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Magnalift® Bin & Bowl Elevators' }
          }
        ],
        sortIndex: 246,

        seoPath: 'magnalift-bin-and-bowl-elevators'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.OxideDustControlSystem,
      ...defaultFacetOption,
      valueId: 'ba1b2cb9-c50d-4225-8976-01e3a69a9211',
      value: 'Oxide Dust Control System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Oxide Dust Control System' }
          }
        ],
        sortIndex: 247,

        seoPath: 'oxide-dust-control-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PanelSpraySystems,
      ...defaultFacetOption,
      valueId: 'a976bb2b-4758-41f2-9e93-93c085d7aa6c',
      value: 'PanelSpray® Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '65b17cf4-25c6-45a4-9a85-1bbf3a13ba07',
        '0a90062f-0863-4089-9a21-5e463cec6f30',
        'a1a5e730-5019-43b6-ade5-9da3f6d621fd',
        '1e7ad325-9c87-4b20-8f4f-c92d6ba67ec7',
        'ea6da047-cca7-48b7-85c9-f3b3ae16aa0c'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'PanelSpray® Systems' }
          }
        ],
        sortIndex: 248,

        seoPath: 'panelspray-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PanelSprayMSSystem,
      ...defaultFacetOption,
      valueId: 'a1a5e730-5019-43b6-ade5-9da3f6d621fd',
      value: 'PanelSpray®-MS System',
      parentId: 'a976bb2b-4758-41f2-9e93-93c085d7aa6c',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'PanelSpray®-MS System' }
          }
        ],
        sortIndex: 249,

        seoPath: 'panelspray-ms-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PanelSprayNMSystem,
      ...defaultFacetOption,
      valueId: 'ea6da047-cca7-48b7-85c9-f3b3ae16aa0c',
      value: 'PanelSpray®-NM System',
      parentId: 'a976bb2b-4758-41f2-9e93-93c085d7aa6c',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'PanelSpray®-NM System' }
          }
        ],
        sortIndex: 250,

        seoPath: 'panelspray-nm-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PanelSprayRASystem,
      ...defaultFacetOption,
      valueId: '0a90062f-0863-4089-9a21-5e463cec6f30',
      value: 'PanelSpray®-RA System',
      parentId: 'a976bb2b-4758-41f2-9e93-93c085d7aa6c',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'PanelSpray®-RA System' }
          }
        ],
        sortIndex: 251,

        seoPath: 'panelspray-ra-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PanelSprayRSSystem,
      ...defaultFacetOption,
      valueId: '65b17cf4-25c6-45a4-9a85-1bbf3a13ba07',
      value: 'PanelSpray®-RS System',
      parentId: 'a976bb2b-4758-41f2-9e93-93c085d7aa6c',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'PanelSpray®-RS System' }
          }
        ],
        sortIndex: 252,

        seoPath: 'panelspray-rs-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PanelSprayWXSystem,
      ...defaultFacetOption,
      valueId: '1e7ad325-9c87-4b20-8f4f-c92d6ba67ec7',
      value: 'PanelSpray®-WX System',
      parentId: 'a976bb2b-4758-41f2-9e93-93c085d7aa6c',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'PanelSpray®-WX System' }
          }
        ],
        sortIndex: 253,

        seoPath: 'panelspray-wx-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PharmxHighShearGranulators,
      ...defaultFacetOption,
      valueId: 'd4912864-3bc6-49ab-8f79-4c55ccadfe66',
      value: 'Pharmx® High-Shear Granulators',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '7bd3edfa-0825-4a77-9ca5-1f55899bd803',
        'cb75c58c-e5b0-465c-a7da-4e1a391b7cc2',
        '03c108e9-b48f-4ce5-a679-a3da3a9a5d24'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Pharmx® High-Shear Granulators' }
          }
        ],
        sortIndex: 254,

        seoPath: 'pharmx-high-shear-granulators'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PharmxPilotScaleHighShearGranulatorsPX25PX150,
      ...defaultFacetOption,
      valueId: '03c108e9-b48f-4ce5-a679-a3da3a9a5d24',
      value: 'Pharmx® Pilot Scale High-Shear GranulatorsPX25 - PX150',
      parentId: 'd4912864-3bc6-49ab-8f79-4c55ccadfe66',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'Pharmx® Pilot Scale High-Shear GranulatorsPX25 - PX150'
            }
          }
        ],
        sortIndex: 255,

        seoPath: 'pharmx-pilot-scale-high-shear-granulatorspx25-px150'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PharmxProductionScaleHighShearGranulatorsPX250PX1250,
      ...defaultFacetOption,
      valueId: '7bd3edfa-0825-4a77-9ca5-1f55899bd803',
      value: 'Pharmx® Production Scale High-Shear Granulators PX250 - PX1250',
      parentId: 'd4912864-3bc6-49ab-8f79-4c55ccadfe66',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'Pharmx® Production Scale High-Shear Granulators PX250 - PX1250'
            }
          }
        ],
        sortIndex: 256,

        seoPath: 'pharmx-production-scale-high-shear-granulators-px250-px1250'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PharmxRDScaleHighShearGranulatorsPX1,
      ...defaultFacetOption,
      valueId: 'cb75c58c-e5b0-465c-a7da-4e1a391b7cc2',
      value: 'Pharmx® R\u0026D Scale High-Shear Granulators PX1',
      parentId: 'd4912864-3bc6-49ab-8f79-4c55ccadfe66',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Pharmx® R&D Scale High-Shear Granulators PX1' }
          }
        ],
        sortIndex: 257,

        seoPath:
          'pharmx-research-and-development-scale-high-shear-granulators-px1'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PlyAbleTissueLaminationSystem,
      ...defaultFacetOption,
      valueId: 'f7a7dfa1-1d14-45ab-9e86-9d8c043d99b9',
      value: 'PlyAble® Tissue Lamination System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'PlyAble® Tissue Lamination System' }
          }
        ],
        sortIndex: 258,

        seoPath: 'plyable-tissue-lamination-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PolardryElectrostaticSprayDrySystems,
      ...defaultFacetOption,
      valueId: 'f8244a89-389a-475c-898c-07265a36e178',
      value: 'Polardry® Electrostatic Spray Dry Systems',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [
        '8a4af815-f6c0-46d5-8529-1693154c4f17',
        '0bb9b696-5202-470c-9cee-40a45f224f1d',
        '05c5c01a-36a4-4399-9bf9-9c984b9db266',
        'c9e3fdec-0436-46da-a9cc-d036c3398447'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Polardry® Electrostatic Spray Dry Systems' }
          }
        ],
        sortIndex: 259,

        seoPath: 'polardry-electrostatic-spray-dry-systems'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PolardryElectrostaticSprayDryModel01System,
      ...defaultFacetOption,
      valueId: 'c9e3fdec-0436-46da-a9cc-d036c3398447',
      value: 'Polardry® Electrostatic Spray Dry Model 0.1 System',
      parentId: 'f8244a89-389a-475c-898c-07265a36e178',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Polardry® Electrostatic Spray Dry Model 0.1 System' }
          }
        ],
        sortIndex: 260,

        seoPath: 'polardry-electrostatic-spray-dry-model-0.1-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PolardryFeasibilityScaleElectrostaticSprayDryModel001System,
      ...defaultFacetOption,
      valueId: '8a4af815-f6c0-46d5-8529-1693154c4f17',
      value:
        'Polardry® Feasibility Scale Electrostatic Spray Dry Model 001 System',
      parentId: 'f8244a89-389a-475c-898c-07265a36e178',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'Polardry® Feasibility Scale Electrostatic Spray Dry Model 001 System'
            }
          }
        ],
        sortIndex: 261,

        seoPath:
          'polardry-feasibility-scale-electrostatic-spray-dry-model-001-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PolardryPilotScaleElectrostaticSprayDryModel032and050System,
      ...defaultFacetOption,
      valueId: '0bb9b696-5202-470c-9cee-40a45f224f1d',
      value:
        'Polardry® Pilot Scale Electrostatic Spray Dry Model 032 and 050\u002B System',
      parentId: 'f8244a89-389a-475c-898c-07265a36e178',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'Polardry® Pilot Scale Electrostatic Spray Dry Model 032 and 050+ System'
            }
          }
        ],
        sortIndex: 262,

        seoPath:
          'polardry-pilot-scale-electrostatic-spray-dry-model-032-and-050-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PolardryRDScaleElectrostaticSprayDryModel004System,
      ...defaultFacetOption,
      valueId: '05c5c01a-36a4-4399-9bf9-9c984b9db266',
      value:
        'Polardry® R\u0026D Scale Electrostatic Spray Dry Model 004 System',
      parentId: 'f8244a89-389a-475c-898c-07265a36e178',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: {
              en: 'Polardry® R&D Scale Electrostatic Spray Dry Model 004 System'
            }
          }
        ],
        sortIndex: 263,

        seoPath:
          'polardry-research-and-development-scale-electrostatic-spray-dry-model-004-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.RoboticSprayNozzleTechnology,
      ...defaultFacetOption,
      valueId: 'fb581014-d613-47e2-8c28-0a0f47c06211',
      value: 'Robotic Spray Nozzle Technology',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Robotic Spray Nozzle Technology' }
          }
        ],
        sortIndex: 264,

        seoPath: 'robotic-spray-nozzle-technology'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.TabcoaterTabletCoatingOptimizationSystem,
      ...defaultFacetOption,
      valueId: '679c8c90-5bb5-4a04-9d35-e0b3d08413ce',
      value: 'Tabcoater® Tablet Coating Optimization System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Tabcoater® Tablet Coating Optimization System' }
          }
        ],
        sortIndex: 265,

        seoPath: 'tabcoater-tablet-coating-optimization-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.VacuRollCleaningandDryingSystem,
      ...defaultFacetOption,
      valueId: '7dd05717-c484-4919-9257-a22e56406317',
      value: 'VacuRoll Cleaning and Drying System',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'VacuRoll Cleaning and Drying System' }
          }
        ],
        sortIndex: 266,

        seoPath: 'vacuroll-cleaning-and-drying-system'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJet1008Controller,
      ...defaultFacetOption,
      valueId: '6ce5f220-8221-4870-9e65-9407b4f6bcc0',
      value: 'AutoJet® 1008\u002B Controller',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® 1008+ Controller' }
          }
        ],
        sortIndex: 268,

        seoPath: 'autojet-1008-controller'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJet1550SprayController,
      ...defaultFacetOption,
      valueId: '6e0602cb-e95b-4c58-a83a-47ca123a1ffa',
      value: 'AutoJet® 1550\u002B Spray Controller',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® 1550+ Spray Controller' }
          }
        ],
        sortIndex: 269,

        seoPath: 'autojet-1550-spray-controller'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJet2008SprayController,
      ...defaultFacetOption,
      valueId: '50ede002-3ac3-417e-b3e3-259b48b1108d',
      value: 'AutoJet® 2008\u002B Spray Controller',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® 2008+ Spray Controller' }
          }
        ],
        sortIndex: 270,

        seoPath: 'autojet-2008-spray-controller'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJet2250SprayController,
      ...defaultFacetOption,
      valueId: 'c0d73b04-8233-433c-992d-56ec454de9d6',
      value: 'AutoJet® 2250\u002B Spray Controller',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® 2250+ Spray Controller' }
          }
        ],
        sortIndex: 271,

        seoPath: 'autojet-2250-spray-controller'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AutoJetZoneControlPanels,
      ...defaultFacetOption,
      valueId: '4bbacf6f-8072-4140-940e-89dcb0a1f08c',
      value: 'AutoJet® Zone Control Panels',
      parentId: 'ba22514a-29b4-4dfe-bc74-3447d3a44857',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'AutoJet® Zone Control Panels' }
          }
        ],
        sortIndex: 272,

        seoPath: 'autojet-zone-control-panels'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.IndustrialSprayApplications,
      ...defaultFacetOption,
      valueId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      value: 'Industrial Spray Applications',
      parentId: '',
      children: [
        'fca1b787-58f1-48b7-ad66-11f4a227c0af',
        'd91d6c16-8864-4837-97d8-1c6a64ff1c19',
        '51b1e5a0-cf7d-436b-9d9c-2bf78eb7337e',
        '9436d203-d419-4fec-adae-328b8173a164',
        'cbf96534-a76a-4312-9e20-520bcc2e6421',
        '2245ca25-a836-42aa-80ee-6935e60d738d',
        'ba47739c-4a40-42e1-b770-803e97ab7f5c',
        '2ad52a4a-8437-47c1-abee-8d1763b237d3',
        '0c762c68-9ea5-4926-902d-953d26986130',
        '69b6c71c-33b4-4120-83f3-a00e09c25d89',
        '0537c4de-6b69-44db-85e9-ac757c490676',
        '1c560bad-e8de-4c8f-ad47-bad9dcfc3ed2',
        'bf59243c-28ec-4147-b17a-c3359f2ae123',
        '77d85adc-a1c0-4cc7-b07a-c4a9c1d8b995',
        '023ca621-c1e3-440b-a42f-c840c9ac75d9',
        '650df179-1dea-496f-a856-cf62c831e9f9',
        '052648d0-72b2-4aad-b5b6-d33568a5604d',
        'b9f5e6e1-e331-4756-bf62-e716aff1c295',
        'fd875fef-77d3-48e7-8a09-ee74ca81306f',
        'a9571842-5e99-4553-81c5-efe534f7d777'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Industrial Spray Applications' }
          }
        ],
        sortIndex: 273,

        seoPath: 'industrial-spray-applications'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AirDryingBlowOff,
      ...defaultFacetOption,
      valueId: '2ad52a4a-8437-47c1-abee-8d1763b237d3',
      value: 'Air Drying / Blow-Off',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Air Drying / Blow-Off' }
          }
        ],
        sortIndex: 274,

        seoPath: 'air-drying-or-blow-off'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ChemicalProcessingRefineries,
      ...defaultFacetOption,
      valueId: 'bf59243c-28ec-4147-b17a-c3359f2ae123',
      value: 'Chemical Processing \u0026 Refineries',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '12585f12-7733-47c0-ba3a-60b2dd7a1b0d',
        '779b4041-2f2f-4a5e-849f-c363e138a800'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Chemical Processing & Refineries' }
          }
        ],
        sortIndex: 275,

        seoPath: 'chemical-processing-and-refineries'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ChemicalReactionConversionInjection,
      ...defaultFacetOption,
      valueId: '12585f12-7733-47c0-ba3a-60b2dd7a1b0d',
      value: 'Chemical Reaction, Conversion \u0026 Injection',
      parentId: 'bf59243c-28ec-4147-b17a-c3359f2ae123',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Chemical Reaction, Conversion & Injection' }
          }
        ],
        sortIndex: 276,

        seoPath: 'chemical-reaction-conversion-and-injection'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SulfurBurning,
      ...defaultFacetOption,
      valueId: '779b4041-2f2f-4a5e-849f-c363e138a800',
      value: 'Sulfur Burning',
      parentId: 'bf59243c-28ec-4147-b17a-c3359f2ae123',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Sulfur Burning' }
          }
        ],
        sortIndex: 277,

        seoPath: 'sulfur-burning'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Cleaning,
      ...defaultFacetOption,
      valueId: '51b1e5a0-cf7d-436b-9d9c-2bf78eb7337e',
      value: 'Cleaning',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '44a322b9-7537-4ba4-98ff-1fda0ebed902',
        'a875d153-769e-4a39-b4de-379bc4116d33',
        'f2ec19d1-d6e6-4032-8027-a1f90e3032ef',
        '947a5a5a-a25e-44b0-8306-b84fe48e7e8e',
        '65fc6ca8-ff9f-4aee-b8e7-e034ff7b39de'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Cleaning' }
          }
        ],
        sortIndex: 278,

        seoPath: 'cleaning'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HandheldPressureWashing,
      ...defaultFacetOption,
      valueId: '65fc6ca8-ff9f-4aee-b8e7-e034ff7b39de',
      value: 'Hand-held Pressure Washing',
      parentId: '51b1e5a0-cf7d-436b-9d9c-2bf78eb7337e',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Hand-held Pressure Washing' }
          }
        ],
        sortIndex: 279,

        seoPath: 'hand-held-pressure-washing'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.LowPressureRinsing,
      ...defaultFacetOption,
      valueId: 'f2ec19d1-d6e6-4032-8027-a1f90e3032ef',
      value: 'Low Pressure Rinsing',
      parentId: '51b1e5a0-cf7d-436b-9d9c-2bf78eb7337e',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Low Pressure Rinsing' }
          }
        ],
        sortIndex: 280,

        seoPath: 'low-pressure-rinsing'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HighPressureWashing,
      ...defaultFacetOption,
      valueId: '947a5a5a-a25e-44b0-8306-b84fe48e7e8e',
      value: 'High Pressure Washing',
      parentId: '51b1e5a0-cf7d-436b-9d9c-2bf78eb7337e',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'High Pressure Washing' }
          }
        ],
        sortIndex: 282,

        seoPath: 'high-pressure-washing'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SanitizingDisinfecting,
      ...defaultFacetOption,
      valueId: 'a875d153-769e-4a39-b4de-379bc4116d33',
      value: 'Sanitizing \u0026 Disinfecting',
      parentId: '51b1e5a0-cf7d-436b-9d9c-2bf78eb7337e',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Sanitizing & Disinfecting' }
          }
        ],
        sortIndex: 283,

        seoPath: 'sanitizing-and-disinfecting'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.TankCleaning,
      ...defaultFacetOption,
      valueId: '44a322b9-7537-4ba4-98ff-1fda0ebed902',
      value: 'Tank Cleaning',
      parentId: '51b1e5a0-cf7d-436b-9d9c-2bf78eb7337e',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Tank Cleaning' }
          }
        ],
        sortIndex: 284,

        seoPath: 'tank-cleaning'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Coating,
      ...defaultFacetOption,
      valueId: '2245ca25-a836-42aa-80ee-6935e60d738d',
      value: 'Coating',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '73447db2-4af4-499b-9602-163d1cbff503',
        '4704d3f0-a6ef-47c5-bd40-3e3a3a15bd84',
        '9c457274-20c0-459b-95f4-738d924df0f0',
        '0a8566d2-7dac-4788-bad4-a6e509b6872e',
        '31abc055-340c-4629-b5ad-b56e6499b279'
      ],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'Coating' } }
        ],
        sortIndex: 285,

        seoPath: 'coating'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AdhesiveBinderCoating,
      ...defaultFacetOption,
      valueId: '0a8566d2-7dac-4788-bad4-a6e509b6872e',
      value: 'Adhesive \u0026 Binder Coating',
      parentId: '2245ca25-a836-42aa-80ee-6935e60d738d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Adhesive & Binder Coating' }
          }
        ],
        sortIndex: 286,

        seoPath: 'adhesive-and-binder-coating'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.GeneralPreservativeCoatingNonfood,
      ...defaultFacetOption,
      valueId: '31abc055-340c-4629-b5ad-b56e6499b279',
      value: 'General Preservative Coating (Non-food)',
      parentId: '2245ca25-a836-42aa-80ee-6935e60d738d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'General Preservative Coating (Non-food)' }
          }
        ],
        sortIndex: 287,

        seoPath: 'general-preservative-coating-non-food'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Painting,
      ...defaultFacetOption,
      valueId: '9c457274-20c0-459b-95f4-738d924df0f0',
      value: 'Painting',
      parentId: '2245ca25-a836-42aa-80ee-6935e60d738d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Painting' }
          }
        ],
        sortIndex: 288,

        seoPath: 'painting'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ProtectiveCoating,
      ...defaultFacetOption,
      valueId: '73447db2-4af4-499b-9602-163d1cbff503',
      value: 'Protective Coating',
      parentId: '2245ca25-a836-42aa-80ee-6935e60d738d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Protective Coating' }
          }
        ],
        sortIndex: 289,

        seoPath: 'protective-coating'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ViscousMaterialCoating,
      ...defaultFacetOption,
      valueId: '4704d3f0-a6ef-47c5-bd40-3e3a3a15bd84',
      value: 'Viscous Material Coating',
      parentId: '2245ca25-a836-42aa-80ee-6935e60d738d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Viscous Material Coating' }
          }
        ],
        sortIndex: 290,

        seoPath: 'viscous-material-coating'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Cooling,
      ...defaultFacetOption,
      valueId: 'cbf96534-a76a-4312-9e20-520bcc2e6421',
      value: 'Cooling',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '67d4ef63-964c-4ba5-8729-071fa98188da',
        '18f04459-d195-4820-a082-7f3d0f195321',
        '8794f9ff-1f5e-4c10-9546-acf961ac7fbe',
        '1f72936d-ec16-44ff-905e-e0d95dd8d28b'
      ],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'Cooling' } }
        ],
        sortIndex: 291,

        seoPath: 'cooling'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.CoolingSolids,
      ...defaultFacetOption,
      valueId: '18f04459-d195-4820-a082-7f3d0f195321',
      value: 'Cooling Solids',
      parentId: 'cbf96534-a76a-4312-9e20-520bcc2e6421',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Cooling Solids' }
          }
        ],
        sortIndex: 292,

        seoPath: 'cooling-solids'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.EvaporativeCoolingofLiquids,
      ...defaultFacetOption,
      valueId: '8794f9ff-1f5e-4c10-9546-acf961ac7fbe',
      value: 'Evaporative Cooling of Liquids',
      parentId: 'cbf96534-a76a-4312-9e20-520bcc2e6421',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Evaporative Cooling of Liquids' }
          }
        ],
        sortIndex: 293,

        seoPath: 'evaporative-cooling-of-liquids'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.CoolingConditioningofGas,
      ...defaultFacetOption,
      valueId: '67d4ef63-964c-4ba5-8729-071fa98188da',
      value: 'Cooling \u0026 Conditioning of Gas',
      parentId: 'cbf96534-a76a-4312-9e20-520bcc2e6421',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Cooling & Conditioning of Gas' }
          }
        ],
        sortIndex: 294,

        seoPath: 'cooling-and-conditioning-of-gas'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuenchingDeluge,
      ...defaultFacetOption,
      valueId: '1f72936d-ec16-44ff-905e-e0d95dd8d28b',
      value: 'Quenching \u0026 Deluge',
      parentId: 'cbf96534-a76a-4312-9e20-520bcc2e6421',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Quenching & Deluge' }
          }
        ],
        sortIndex: 295,

        seoPath: 'quenching-and-deluge'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.HumidifyingMoisturizing,
      ...defaultFacetOption,
      valueId: '69b6c71c-33b4-4120-83f3-a00e09c25d89',
      value: 'Humidifying \u0026 Moisturizing',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        'b02f4169-4652-4774-93cc-3a85b800d3fc',
        '41319d78-d718-4f39-ad60-86be5b7c72c1',
        '1c474761-4db0-495d-809d-d62d3a39ccef'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Humidifying & Moisturizing' }
          }
        ],
        sortIndex: 296,

        seoPath: 'humidifying-and-moisturizing'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.GasHumidification,
      ...defaultFacetOption,
      valueId: 'b02f4169-4652-4774-93cc-3a85b800d3fc',
      value: 'Gas Humidification',
      parentId: '69b6c71c-33b4-4120-83f3-a00e09c25d89',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Gas Humidification' }
          }
        ],
        sortIndex: 297,

        seoPath: 'gas-humidification'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SurfaceProductMoistening,
      ...defaultFacetOption,
      valueId: '1c474761-4db0-495d-809d-d62d3a39ccef',
      value: 'Surface / Product Moistening',
      parentId: '69b6c71c-33b4-4120-83f3-a00e09c25d89',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Surface / Product Moistening' }
          }
        ],
        sortIndex: 298,

        seoPath: 'surface-or-product-moistening'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SpatialHumidification,
      ...defaultFacetOption,
      valueId: '41319d78-d718-4f39-ad60-86be5b7c72c1',
      value: 'Spatial Humidification',
      parentId: '69b6c71c-33b4-4120-83f3-a00e09c25d89',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Spatial Humidification' }
          }
        ],
        sortIndex: 299,

        seoPath: 'spatial-humidification'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Lubrication,
      ...defaultFacetOption,
      valueId: 'fd875fef-77d3-48e7-8a09-ee74ca81306f',
      value: 'Lubrication',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        'afc7ac5e-bb4d-441c-8bf8-08846720984f',
        '05102efd-c55d-42b7-85f6-121f5ccb5a01',
        '793a2d12-3793-4154-b93e-4a762c895692'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Lubrication' }
          }
        ],
        sortIndex: 300,

        seoPath: 'lubrication'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.DieLubrication,
      ...defaultFacetOption,
      valueId: '793a2d12-3793-4154-b93e-4a762c895692',
      value: 'Die Lubrication',
      parentId: 'fd875fef-77d3-48e7-8a09-ee74ca81306f',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Die Lubrication' }
          }
        ],
        sortIndex: 301,

        seoPath: 'die-lubrication'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ReleaseAgents,
      ...defaultFacetOption,
      valueId: '05102efd-c55d-42b7-85f6-121f5ccb5a01',
      value: 'Release Agents',
      parentId: 'fd875fef-77d3-48e7-8a09-ee74ca81306f',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Release Agents' }
          }
        ],
        sortIndex: 302,

        seoPath: 'release-agents'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ElectrostaticLubrication,
      ...defaultFacetOption,
      valueId: 'afc7ac5e-bb4d-441c-8bf8-08846720984f',
      value: 'Electrostatic Lubrication',
      parentId: 'fd875fef-77d3-48e7-8a09-ee74ca81306f',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Electrostatic Lubrication' }
          }
        ],
        sortIndex: 303,

        seoPath: 'electrostatic-lubrication'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Marking,
      ...defaultFacetOption,
      valueId: 'ba47739c-4a40-42e1-b770-803e97ab7f5c',
      value: 'Marking',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'Marking' } }
        ],
        sortIndex: 304,

        seoPath: 'marking'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SprayDrying,
      ...defaultFacetOption,
      valueId: '9436d203-d419-4fec-adae-328b8173a164',
      value: 'Spray Drying',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Spray Drying' }
          }
        ],
        sortIndex: 305,

        seoPath: 'spray-drying'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.TrimmingCutting,
      ...defaultFacetOption,
      valueId: '77d85adc-a1c0-4cc7-b07a-c4a9c1d8b995',
      value: 'Trimming \u0026 Cutting',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '37b39a79-b8e1-47ec-be7d-5f8e0f2e1bfe',
        'e2a0a33d-d543-42fa-9a9e-cc77b032c8a9'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Trimming & Cutting' }
          }
        ],
        sortIndex: 306,

        seoPath: 'trimming-and-cutting'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PaperTrimming,
      ...defaultFacetOption,
      valueId: 'e2a0a33d-d543-42fa-9a9e-cc77b032c8a9',
      value: 'Paper Trimming',
      parentId: '77d85adc-a1c0-4cc7-b07a-c4a9c1d8b995',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Paper Trimming' }
          }
        ],
        sortIndex: 307,

        seoPath: 'paper-trimming'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.WaterJetCutting,
      ...defaultFacetOption,
      valueId: '37b39a79-b8e1-47ec-be7d-5f8e0f2e1bfe',
      value: 'Water Jet Cutting',
      parentId: '77d85adc-a1c0-4cc7-b07a-c4a9c1d8b995',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Water Jet Cutting' }
          }
        ],
        sortIndex: 308,

        seoPath: 'water-jet-cutting'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AgitationMixingorBlending,
      ...defaultFacetOption,
      valueId: '0537c4de-6b69-44db-85e9-ac757c490676',
      value: 'Agitation, Mixing or Blending',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Agitation, Mixing or Blending' }
          }
        ],
        sortIndex: 310,

        seoPath: 'agitation-mixing-or-blending'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FoodPlantCleanup,
      ...defaultFacetOption,
      valueId: '0c762c68-9ea5-4926-902d-953d26986130',
      value: 'Food Plant Clean-up',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Food Plant Clean-up' }
          }
        ],
        sortIndex: 311,

        seoPath: 'food-plant-clean-up'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SnowMaking,
      ...defaultFacetOption,
      valueId: 'd91d6c16-8864-4837-97d8-1c6a64ff1c19',
      value: 'Snow Making',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Snow Making' }
          }
        ],
        sortIndex: 312,

        seoPath: 'snow-making'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SprayPonds,
      ...defaultFacetOption,
      valueId: '023ca621-c1e3-440b-a42f-c840c9ac75d9',
      value: 'Spray Ponds',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Spray Ponds' }
          }
        ],
        sortIndex: 313,

        seoPath: 'spray-ponds'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Electronics,
      ...defaultFacetOption,
      valueId: 'fca1b787-58f1-48b7-ad66-11f4a227c0af',
      value: 'Electronics',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '4c8ea15d-683a-4e07-8404-8027abf113ad',
        '5811e124-7196-4833-8572-c3ebcedaccd8'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Electronics' }
          }
        ],
        sortIndex: 315,

        seoPath: 'electronics'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.EtchingStripping,
      ...defaultFacetOption,
      valueId: '4c8ea15d-683a-4e07-8404-8027abf113ad',
      value: 'Etching \u0026 Stripping',
      parentId: 'fca1b787-58f1-48b7-ad66-11f4a227c0af',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Etching & Stripping' }
          }
        ],
        sortIndex: 316,

        seoPath: 'etching-and-stripping'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FlatPanelProduction,
      ...defaultFacetOption,
      valueId: '5811e124-7196-4833-8572-c3ebcedaccd8',
      value: 'Flat Panel Production',
      parentId: 'fca1b787-58f1-48b7-ad66-11f4a227c0af',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Flat Panel Production' }
          }
        ],
        sortIndex: 317,

        seoPath: 'flat-panel-production'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FireProtection,
      ...defaultFacetOption,
      valueId: 'a9571842-5e99-4553-81c5-efe534f7d777',
      value: 'Fire Protection',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Fire Protection' }
          }
        ],
        sortIndex: 318,

        seoPath: 'fire-protection'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FoodSafety,
      ...defaultFacetOption,
      valueId: 'b9f5e6e1-e331-4756-bf62-e716aff1c295',
      value: 'Food Safety',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '13e64700-74a8-460a-8fbb-17d791c97b19',
        'ec239ef3-0ec6-4ab2-9fdd-5909f8f831af'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Food Safety' }
          }
        ],
        sortIndex: 319,

        seoPath: 'food-safety'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Antimicrobial,
      ...defaultFacetOption,
      valueId: 'ec239ef3-0ec6-4ab2-9fdd-5909f8f831af',
      value: 'Antimicrobial',
      parentId: 'b9f5e6e1-e331-4756-bf62-e716aff1c295',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Antimicrobial' }
          }
        ],
        sortIndex: 320,

        seoPath: 'antimicrobial'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Antimold,
      ...defaultFacetOption,
      valueId: '13e64700-74a8-460a-8fbb-17d791c97b19',
      value: 'Antimold',
      parentId: 'b9f5e6e1-e331-4756-bf62-e716aff1c295',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Antimold' }
          }
        ],
        sortIndex: 321,

        seoPath: 'antimold'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PharmaceuticalProcessingBiologics,
      ...defaultFacetOption,
      valueId: '052648d0-72b2-4aad-b5b6-d33568a5604d',
      value: 'Pharmaceutical Processing \u0026 Biologics',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '8f0cfd83-9681-4ba1-afca-03082a924471',
        '1d85b3ae-4ec5-492d-a198-12021b3a46a5',
        '83064343-acc2-43ec-af6d-9e9a80289fe2',
        'e5756283-fb79-4206-9050-a1e2834e3443'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Pharmaceutical Processing & Biologics' }
          }
        ],
        sortIndex: 322,

        seoPath: 'pharmaceutical-processing-and-biologics'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.BatchControls,
      ...defaultFacetOption,
      valueId: '8f0cfd83-9681-4ba1-afca-03082a924471',
      value: 'Batch Controls',
      parentId: '052648d0-72b2-4aad-b5b6-d33568a5604d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Batch Controls' }
          }
        ],
        sortIndex: 323,

        seoPath: 'batch-controls'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.BulkSolidsProcessingHandling,
      ...defaultFacetOption,
      valueId: '83064343-acc2-43ec-af6d-9e9a80289fe2',
      value: 'Bulk Solids Processing \u0026 Handling',
      parentId: '052648d0-72b2-4aad-b5b6-d33568a5604d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Bulk Solids Processing & Handling' }
          }
        ],
        sortIndex: 324,

        seoPath: 'bulk-solids-processing-and-handling'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.LiquidDelivery,
      ...defaultFacetOption,
      valueId: '1d85b3ae-4ec5-492d-a198-12021b3a46a5',
      value: 'Liquid Delivery',
      parentId: '052648d0-72b2-4aad-b5b6-d33568a5604d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Liquid Delivery' }
          }
        ],
        sortIndex: 325,

        seoPath: 'liquid-delivery'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SolidDosage,
      ...defaultFacetOption,
      valueId: 'e5756283-fb79-4206-9050-a1e2834e3443',
      value: 'Solid Dosage',
      parentId: '052648d0-72b2-4aad-b5b6-d33568a5604d',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Solid Dosage' }
          }
        ],
        sortIndex: 326,

        seoPath: 'solid-dosage'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PollutionEnvironmentalControl,
      ...defaultFacetOption,
      valueId: '650df179-1dea-496f-a856-cf62c831e9f9',
      value: 'Pollution \u0026 Environmental Control',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '9fcacf8f-05b7-41da-8431-1609f2da9180',
        'ebb0cf63-00c9-4583-be4d-392f30c44b08',
        '0089274a-fbbc-4c9f-95d3-62b9d7e23123',
        'e6501464-49e3-4819-bd2b-c07f1a520623',
        'ff831b52-d151-4a18-ad7c-c6c65f785dec'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Pollution & Environmental Control' }
          }
        ],
        sortIndex: 327,

        seoPath: 'pollution-and-environmental-control'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.DustControl,
      ...defaultFacetOption,
      valueId: 'ebb0cf63-00c9-4583-be4d-392f30c44b08',
      value: 'Dust Control',
      parentId: '650df179-1dea-496f-a856-cf62c831e9f9',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Dust Control' }
          }
        ],
        sortIndex: 328,

        seoPath: 'dust-control'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.AirPollutionControl,
      ...defaultFacetOption,
      valueId: '0089274a-fbbc-4c9f-95d3-62b9d7e23123',
      value: 'Air Pollution Control',
      parentId: '650df179-1dea-496f-a856-cf62c831e9f9',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Air Pollution Control' }
          }
        ],
        sortIndex: 329,

        seoPath: 'air-pollution-control'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.NOxControl,
      ...defaultFacetOption,
      valueId: '9fcacf8f-05b7-41da-8431-1609f2da9180',
      value: 'NOx Control',
      parentId: '650df179-1dea-496f-a856-cf62c831e9f9',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'NOx Control' }
          }
        ],
        sortIndex: 330,

        seoPath: 'nox-control'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.OxideSuppression,
      ...defaultFacetOption,
      valueId: 'e6501464-49e3-4819-bd2b-c07f1a520623',
      value: 'Oxide Suppression',
      parentId: '650df179-1dea-496f-a856-cf62c831e9f9',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Oxide Suppression' }
          }
        ],
        sortIndex: 331,

        seoPath: 'oxide-suppression'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SewageWastewaterTreatmentOdorControl,
      ...defaultFacetOption,
      valueId: 'ff831b52-d151-4a18-ad7c-c6c65f785dec',
      value: 'Sewage, Wastewater Treatment \u0026 Odor Control',
      parentId: '650df179-1dea-496f-a856-cf62c831e9f9',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Sewage, Wastewater Treatment & Odor Control' }
          }
        ],
        sortIndex: 332,

        seoPath: 'sewage-wastewater-treatment-and-odor-control'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.PrimaryMetals,
      ...defaultFacetOption,
      valueId: '1c560bad-e8de-4c8f-ad47-bad9dcfc3ed2',
      value: 'Primary Metals',
      parentId: 'c988b35c-c60b-4cab-b773-4890908dad18',
      children: [
        '9376f78d-c1fe-4fea-a981-81f85e9056bb',
        'bcedc5e3-8943-4e21-90fb-a9e61dd69a5e',
        '7b109039-1497-4fb6-97c6-d10e5e89d7c6',
        '94b9aa75-f6c7-4b04-804c-d8cda3f3b5d5',
        '250be94a-1ec8-40f0-8ffe-e019ac982080'
      ],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Primary Metals' }
          }
        ],
        sortIndex: 333,

        seoPath: 'primary-metals'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.BOFDedusting,
      ...defaultFacetOption,
      valueId: '9376f78d-c1fe-4fea-a981-81f85e9056bb',
      value: 'BOF Dedusting',
      parentId: '1c560bad-e8de-4c8f-ad47-bad9dcfc3ed2',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'BOF Dedusting' }
          }
        ],
        sortIndex: 334,

        seoPath: 'bof-dedusting'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ContinuousCasting,
      ...defaultFacetOption,
      valueId: '7b109039-1497-4fb6-97c6-d10e5e89d7c6',
      value: 'Continuous Casting',
      parentId: '1c560bad-e8de-4c8f-ad47-bad9dcfc3ed2',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Continuous Casting' }
          }
        ],
        sortIndex: 335,

        seoPath: 'continuous-casting'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Descaling,
      ...defaultFacetOption,
      valueId: '94b9aa75-f6c7-4b04-804c-d8cda3f3b5d5',
      value: 'Descaling',
      parentId: '1c560bad-e8de-4c8f-ad47-bad9dcfc3ed2',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Descaling' }
          }
        ],
        sortIndex: 336,

        seoPath: 'descaling'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Pickling,
      ...defaultFacetOption,
      valueId: '250be94a-1ec8-40f0-8ffe-e019ac982080',
      value: 'Pickling',
      parentId: '1c560bad-e8de-4c8f-ad47-bad9dcfc3ed2',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Pickling' }
          }
        ],
        sortIndex: 337,

        seoPath: 'pickling'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.RollCooling,
      ...defaultFacetOption,
      valueId: 'bcedc5e3-8943-4e21-90fb-a9e61dd69a5e',
      value: 'Roll Cooling',
      parentId: '1c560bad-e8de-4c8f-ad47-bad9dcfc3ed2',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'Roll Cooling' }
          }
        ],
        sortIndex: 338,

        seoPath: 'roll-cooling'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.Brands,
      ...defaultFacetOption,
      valueId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      value: 'Brands',
      parentId: '',
      children: [
        '3c75c555-be43-4269-be46-2db1360c3a20',
        '366ffb8f-683f-4f58-aa40-4cb53b99fd37',
        'f4d08770-2d60-455e-a050-4f29e1370de3',
        '01f4977d-291f-4410-b8e8-648b5ebc5ec8',
        '7455bee5-6901-4db6-a6df-744088154633',
        '9f445e6e-09c8-4935-a91a-77806bc76e05',
        'de0bc7db-8128-422b-897c-83fb50fe59f7',
        '9be19c11-4139-4a09-aeb7-a3b66913a507',
        '5c6ec0f4-5f37-4ed1-9671-af576ceaefb9',
        'b808217a-291d-47c3-a73c-bfd85b0be67f',
        '604d510f-163a-41f5-9f62-cc1ce8c764e8',
        '4ca862e9-691e-458d-aefa-d888a7141750',
        'd38cd84f-64ae-41fd-ae1d-dd5c6a38930e',
        '3abac18a-3a35-4cbc-8fcf-e0af11f48a0d',
        '5669bb6a-9276-4d9d-b42a-ebea2d94875f',
        '42dad403-3b56-42b1-aa7d-f0c606141274'
      ],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'Brands' } }
        ],
        sortIndex: 339,

        seoPath: 'brands'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.DeflectoJet,
      ...defaultFacetOption,
      valueId: '4ca862e9-691e-458d-aefa-d888a7141750',
      value: 'DeflectoJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'DeflectoJet®' }
          }
        ],
        sortIndex: 340,

        seoPath: 'deflectojet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.DistriboJet,
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
        sortIndex: 341,

        seoPath: 'distribojet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FlatJet,
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
        sortIndex: 342,

        seoPath: 'flatjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FogJet,
      ...defaultFacetOption,
      valueId: 'f4d08770-2d60-455e-a050-4f29e1370de3',
      value: 'FogJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'FogJet®' } }
        ],
        sortIndex: 343,

        seoPath: 'fogjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FloodJet,
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
        sortIndex: 344,

        seoPath: 'floodjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.FullJet,
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
        sortIndex: 345,

        seoPath: 'fulljet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.GunJet,
      ...defaultFacetOption,
      valueId: 'de0bc7db-8128-422b-897c-83fb50fe59f7',
      value: 'GunJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'GunJet®' } }
        ],
        sortIndex: 346,

        seoPath: 'gunjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.ProMaxQuickJet,
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
        sortIndex: 347,

        seoPath: 'promax-quickjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.QuickJet,
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
        sortIndex: 348,

        seoPath: 'quickjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.SpiralJet,
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
        sortIndex: 349,

        seoPath: 'spiraljet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.TankJet,
      ...defaultFacetOption,
      valueId: '366ffb8f-683f-4f58-aa40-4cb53b99fd37',
      value: 'TankJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'TankJet®' }
          }
        ],
        sortIndex: 350,

        seoPath: 'tankjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.UniJet,
      ...defaultFacetOption,
      valueId: '42dad403-3b56-42b1-aa7d-f0c606141274',
      value: 'UniJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'UniJet®' } }
        ],
        sortIndex: 351,

        seoPath: 'unijet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.VeeJet,
      ...defaultFacetOption,
      valueId: '9f445e6e-09c8-4935-a91a-77806bc76e05',
      value: 'VeeJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],

      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: null, value: { en: 'VeeJet®' } }
        ],
        sortIndex: 352,

        seoPath: 'veejet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.WashJet,
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
        sortIndex: 353,

        seoPath: 'washjet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.WhirlJet,
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
        sortIndex: 354,

        seoPath: 'whirljet'
      }
    },
    {
      key: SprayPortalDemoCategoryPageFacetOptionKey.WindJet,
      ...defaultFacetOption,
      valueId: '3c75c555-be43-4269-be46-2db1360c3a20',
      value: 'WindJet®',
      parentId: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b',
      children: [],

      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: null,
            value: { en: 'WindJet®' }
          }
        ],
        sortIndex: 355,

        seoPath: 'windjet'
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
    category: FacetCategory.Default,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    displayName: 'Category',
    description: 'Category',
    isFacetingEnabled: true
  },
  options: sprayPortalDemoCategoryPageFacetOptions
};
