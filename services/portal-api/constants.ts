import { Environment } from './base/environment';
import { AttributeTypeCodes, ListIds, SettingKeys } from './base/types';

/**
 * Function the returns the digital-highway Enviroment based on the window.location.origin url
 */
export const getDigitalhighwayEnvironment = (): Environment => {
  const overrideParameter: string | null = new URLSearchParams(
    window.location.search
  ).get('apiEnvironment');

  const allowedParameters: string[] = [
    'dev',
    'develop',
    'test',
    'stage',
    'prod',
    'production'
  ];
  if (
    !!overrideParameter &&
    allowedParameters.includes(overrideParameter.toLowerCase())
  ) {
    switch (overrideParameter.toLowerCase()) {
      case 'develop':
      case 'dev':
        return Environment.Develop;
      case 'test':
        return Environment.Test;
      case 'stage':
        return Environment.Stage;
      case 'prod':
      case 'production':
        return Environment.Production;
      default:
        return Environment.Test;
    }
  }
  switch (window.location.origin) {
    case 'https://ssco-sprayportal-as-usnc-dev.azurewebsites.net':
    case 'https://ssco-sprayportal-as-usnc-test.azurewebsites.net':
    case 'https://dev-portal.spray.com':
    case 'https://test-portal.spray.com':
      return Environment.Test;

    case 'https://ssco-sprayportal-as-usnc-stage.azurewebsites.net':
    case 'https://stage-portal.spray.com':
      return Environment.Stage;

    case 'https://ssco-sprayportal-as-usnc.azurewebsites.net':
    case 'https://portal.spray.com':
      return Environment.Production;

    default:
      return Environment.Test;
  }
};

export const LISTIDS: ListIds = {
  liquidSpecificGravity: '90c57f4f-bdcf-4a5c-9375-7f9f9eba180a'
};
export function shouldDisableCache(): boolean {
  const defaultValue: boolean = false;
  const overrideParameter: string | null = new URLSearchParams(
    window.location.search
  ).get('disableCache');
  const allowedValues: string[] = ['yes', 'true'];
  if (
    !!overrideParameter &&
    allowedValues.includes(overrideParameter.toLowerCase())
  ) {
    return true;
  }
  return defaultValue;
}

export const SPRAYPORTALAPPLICATIONID = 'e2def0bf-0225-4b77-b363-08d800aaae12';

export const SETTINGKEYS: SettingKeys = {
  productBookmarks: 'ProductBookmarks',
  recentlyViewedProducts: 'RecentlyViewedProducts',
  recentlySearchedQueries: 'RecentlySearchedQueries'
};

export const ATTRIBUTETYPECODES: AttributeTypeCodes = {
  relativeDropSizeRange: 'RelativeDropSizeRange',
  maximumTransverseSprayCoverageWidthHorizontalSpray:
    'MaximumTransverseSprayCoverageWidthHorizontalSpray',
  relativeDropSizeGroup: 'RelativeDropSizeGroup',
  formula: 'Formula',
  equivalentOrificeDiameter: 'EquivalentOrificeDiameter',
  flats: 'Flats',
  hasGuideVane: 'HasGuideVane',
  capHexSize: 'CapHexSize',
  liquidFlowRate: 'LiquidFlowRate',
  electricalSideSparePartKit: 'ElectricalSideSparePartKit',
  strainerScreenMeshSize: 'StrainerScreenMeshSize',
  finishCoating: 'FinishCoating',
  isRecirculation: 'IsRecirculation',
  isFoodContact: 'IsFoodContact',
  bodyMaterials: 'BodyMaterials',
  orificeDiscNumberAndCoreNumber: 'OrificeDiscNumberAndCoreNumber',
  isTemperatureControlled: 'IsTemperatureControlled',
  meshSize: 'MeshSize',
  orificeNumber: 'OrificeNumber',
  connectionGender: 'ConnectionGender',
  approximateSprayPatternDiameter: 'ApproximateSprayPatternDiameter',
  sprayCoverageDiameter: 'SprayCoverageDiameter',
  tipType: 'TipType',
  horizontalSprayCoverageLengthHorizontalSpray:
    'HorizontalSprayCoverageLengthHorizontalSpray',
  denseSprayCoverageDiameter: 'DenseSprayCoverageDiameter',
  nozzleCount: 'NozzleCount',
  salesScore: 'SalesScore',
  overviewTitleTwo: 'OverviewTitleTwo',
  tipStyleOrSetup: 'TipStyleOrSetup',
  coreNumber: 'CoreNumber',
  cableLength: 'CableLength',
  bodySalesPartNumber: 'BodySalesPartNumber',
  isCast: 'IsCast',
  liquidPressureRange: 'LiquidPressureRange',
  impactGroup: 'ImpactGroup',
  liquidFlowRateRange: 'LiquidFlowRateRange',
  barSize: 'BarSize',
  tipStyleNotes: 'TipStyleNotes',
  inletConnectionSize: 'InletConnectionSize',
  businessScore: 'BusinessScore',
  flowDiagramCaptionTitle: 'FlowDiagramCaptionTitle',
  isSelfCleaning: 'IsSelfCleaning',
  nozzleDiameter: 'NozzleDiameter',
  orificeSize: 'OrificeSize',
  liquidFlowRateAtRatedPressure: 'LiquidFlowRateAtRatedPressure',
  ratedPressure: 'RatedPressure',
  maximumFreePassageDiameter: 'MaximumFreePassageDiameter',
  notesOnUseWithController: 'NotesOnUseWithController',
  fluidNozzleSize: 'FluidNozzleSize',
  threadType: 'ThreadType',
  pressureGroup: 'PressureGroup',
  catalogPageReference: 'CatalogPageReference',
  formulaGroup: 'FormulaGroup',
  flowDiagramCaptionText: 'FlowDiagramCaptionText',
  sprayAngleCatalogCode: 'SprayAngleCatalogCode',
  imageGroup: 'ImageGroup',
  materials: 'Materials',
  inletCenterlineToSprayOrificeHeight: 'InletCenterlineToSprayOrificeHeight',
  isTipAlignment: 'IsTipAlignment',
  nozzleWidth: 'NozzleWidth',
  overviewTextOne: 'OverviewTextOne',
  budgetScore: 'BudgetScore',
  overviewTextTwo: 'OverviewTextTwo',
  capacitySize: 'CapacitySize',
  productType: 'ProductType',
  designFeature: 'DesignFeature',
  nozzleHeight: 'NozzleHeight',
  sprayAngle: 'SprayAngle',
  materialComposition: 'MaterialComposition',
  nozzleLength: 'NozzleLength',
  tipSalesPartNumber: 'TipSalesPartNumber',
  approximateFreePassageDiameter: 'ApproximateFreePassageDiameter',
  bodyType: 'BodyType',
  sprayAngleAtRatedPressure: 'SprayAngleAtRatedPressure',
  sprayAngleRange: 'SprayAngleRange',
  maximumSprayDistanceHorizontalSpray: 'MaximumSprayDistanceHorizontalSpray',
  current: 'Current',
  fluidSideSparePartKit: 'FluidSideSparePartKit',
  numberOfInletOpenings: 'NumberOfInletOpenings',
  nozzleBodyOrTip: 'NozzleBodyOrTip',
  nozzlePrefix: 'NozzlePrefix',
  hasIntregralStrainer: 'HasIntregralStrainer',
  model: 'Model',
  sprayCenterlineOffsetFromInletCenterline:
    'SprayCenterlineOffsetFromInletCenterline',
  sealMaterial: 'SealMaterial',
  connectionType: 'ConnectionType',
  inletDiameterNominal: 'InletDiameterNominal',
  catalogSectionReference: 'CatalogSectionReference',
  engineeringScore: 'EngineeringScore',
  totalSprayCoverageDiameter: 'TotalSprayCoverageDiameter',
  nozzleType: 'NozzleType',
  materialCode: 'MaterialCode',
  inletToSprayOrificeLength: 'InletToSprayOrificeLength',
  cableType: 'CableType',
  overviewTitleOne: 'OverviewTitleOne',
  standardExponentN: 'StandardExponentN',
  electricalConnection: 'ElectricalConnection',
  bodyHexSize: 'BodyHexSize',
  maxOperatingSpeed: 'MaxOperatingSpeed',
  connectionOrientation: 'ConnectionOrientation',
  marketingScore: 'MarketingScore',
  netWeight: 'NetWeight',
  brand: 'Brand',
  sprayPattern: 'SprayPattern'
};

export const CATEGORY_IDS = {
  applications: '99b89989-636a-4869-918a-1cc9ba755944',
  brands: 'f46db9bb-6f07-4a74-97b1-11c76ce7a82b'
};
