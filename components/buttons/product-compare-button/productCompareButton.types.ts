import { ICheckboxStyles } from '@fluentui/react';
import { Product } from '@services/portal-api';

export type ProductCompareButtonProps = {
  product: Product;
  displayAsDefaultButton?: boolean;
};

export type ProductCompareButtonStyles = {
  checkbox: ICheckboxStyles;
};
