import { Card } from '../models/Card';
import { ContactInfo } from '../models/ContactInfo';
import { PostalAddress } from '../models/PostalAddress';
import { ShippingMethod } from '../models/ShippingMethod';

export interface TaxAmount {
  amount: number;
  currencyCode: string;
}

export interface OrderPost {
  billingAddress: PostalAddress;
  card?: Card;
  cvv?: string;
  expectedAmount: number;
  shippingAddress: PostalAddress;
  shippingMethod: string;
  comment: string;
  emailAddresses: string[];
  shippingContactInfo: ContactInfo;
  billingContactInfo: ContactInfo;
  paymentMethod: string;
  referenceNumber?: string;
}

export interface UserContactInfoPut {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  emailAddresses: string[];
  phoneNumber: string;
  urls: string[];
}

export interface ContactDetailsPut {
  firstName: string;
  lastName: string;
  jobTitle: string;
  emailAddresses: string[];
  phoneNumber: string;
  urls: string[];
}
export interface PriceBreak {
  minimumQuantity: number;
  maximumQuantity: number;
  currencyCode: string;
  price: number;
  discountPercentage: number;
}

export interface ShippingCostAmount {
  shippingMethod: ShippingMethod;
  amount: number;
  currencyCode: string | null;
}

export type OrderPaymentInfo = {
  cvv: string;
  card: {
    firstName: string;
    lastName: string;
    number: string;
    validThru: string;
  };
};

// export interface ExternalFilter {
//   // facet key (camelCased)
//   key: string;
//   operator: 'eq' | 'in' | 'le' | 'ge';
//   // should be #Collection(String) if value is of type Array
//   'value@odata.type'?:
//     | '#Collection(String)'
//     | '#Collection(Decimal)'
//     | undefined;
//   value: number | string | Array<string> | Array<number>;
// }

export interface ListIds {
  liquidSpecificGravity: string;
}

export interface SettingKeys {
  productBookmarks: string;
  recentlySearchedQueries: string;
  recentlyViewedProducts: string;
}

export interface AttributeTypeCodes {
  relativeDropSizeRange: string;
  maximumTransverseSprayCoverageWidthHorizontalSpray: string;
  relativeDropSizeGroup: string;
  formula: string;
  equivalentOrificeDiameter: string;
  flats: string;
  hasGuideVane: string;
  capHexSize: string;
  liquidFlowRate: string;
  electricalSideSparePartKit: string;
  strainerScreenMeshSize: string;
  finishCoating: string;
  isRecirculation: string;
  isFoodContact: string;
  bodyMaterials: string;
  orificeDiscNumberAndCoreNumber: string;
  isTemperatureControlled: string;
  meshSize: string;
  orificeNumber: string;
  connectionGender: string;
  approximateSprayPatternDiameter: string;
  sprayCoverageDiameter: string;
  tipType: string;
  horizontalSprayCoverageLengthHorizontalSpray: string;
  denseSprayCoverageDiameter: string;
  nozzleCount: string;
  salesScore: string;
  overviewTitleTwo: string;
  tipStyleOrSetup: string;
  coreNumber: string;
  cableLength: string;
  bodySalesPartNumber: string;
  isCast: string;
  liquidPressureRange: string;
  impactGroup: string;
  liquidFlowRateRange: string;
  barSize: string;
  tipStyleNotes: string;
  inletConnectionSize: string;
  businessScore: string;
  flowDiagramCaptionTitle: string;
  isSelfCleaning: string;
  nozzleDiameter: string;
  orificeSize: string;
  liquidFlowRateAtRatedPressure: string;
  ratedPressure: string;
  maximumFreePassageDiameter: string;
  notesOnUseWithController: string;
  fluidNozzleSize: string;
  threadType: string;
  pressureGroup: string;
  catalogPageReference: string;
  formulaGroup: string;
  flowDiagramCaptionText: string;
  sprayAngleCatalogCode: string;
  imageGroup: string;
  materials: string;
  inletCenterlineToSprayOrificeHeight: string;
  isTipAlignment: string;
  nozzleWidth: string;
  overviewTextOne: string;
  budgetScore: string;
  overviewTextTwo: string;
  capacitySize: string;
  productType: string;
  designFeature: string;
  nozzleHeight: string;
  sprayAngle: string;
  materialComposition: string;
  nozzleLength: string;
  tipSalesPartNumber: string;
  approximateFreePassageDiameter: string;
  bodyType: string;
  sprayAngleAtRatedPressure: string;
  sprayAngleRange: string;
  maximumSprayDistanceHorizontalSpray: string;
  current: string;
  fluidSideSparePartKit: string;
  numberOfInletOpenings: string;
  nozzleBodyOrTip: string;
  nozzlePrefix: string;
  hasIntregralStrainer: string;
  model: string;
  sprayCenterlineOffsetFromInletCenterline: string;
  sealMaterial: string;
  connectionType: string;
  inletDiameterNominal: string;
  catalogSectionReference: string;
  engineeringScore: string;
  totalSprayCoverageDiameter: string;
  nozzleType: string;
  materialCode: string;
  inletToSprayOrificeLength: string;
  cableType: string;
  overviewTitleOne: string;
  standardExponentN: string;
  electricalConnection: string;
  bodyHexSize: string;
  maxOperatingSpeed: string;
  connectionOrientation: string;
  marketingScore: string;
  netWeight: string;
  brand: string;
  sprayPattern: string;
}
