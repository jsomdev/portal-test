import {
  IButtonStyles,
  IShimmerStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
} from '@fluentui/react';
import { CartItem } from '../../../providers/cart/cartContext';

export interface CheckoutSummaryStyles {
  submitButton: IButtonStyles;
}

export interface CheckoutSummaryDetailStyles {
  headerText: IStackItemStyles;
  totalText: ITextStyles;
  total: IStackStyles;
  totalShimmer: IShimmerStyles;
}

export interface CheckoutSummaryProductStyles {
  root: IStackStyles;
  title: ITextStyles;
  imageContainer: IStackItemStyles;
  productName: IStackItemStyles;
  pricingContainer: IStackStyles;
}

export interface CheckoutSummaryProductProps {
  item: CartItem;
}

export interface CheckoutSummaryProductListStyles {
  listItem: IStackItemStyles;
  shimmer: IShimmerStyles;
  list: IStackStyles;
}
