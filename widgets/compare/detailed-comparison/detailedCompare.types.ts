import { DisplayValueType } from '@services/i18n/formatters/entity-formatters/displayFormatter';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

export type CompareGroup = {
  groupName: string; // Configuration
  attributes: CompareAttribute[]; // Materials, Model, Gender
};

export type CompareAttribute = {
  attributeTypeName: string; // Materials
  typeCode?: string;
  description: string;
  values: CompareAttributeValue[]; // Brass, PTFE
};

export type CompareAttributeValue = {
  productNumber: string;
  isPublic: boolean;
  sortIndex: number;
  text: string; // Brass;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  columnIndex: number;
  type: DisplayValueType;
  typeCode: string;
  alternativeValue: string;
};

export type CompareProductCardViewModel = ProductCardViewModel;
