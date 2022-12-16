import {
  IButtonStyles,
  IShimmerStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles
} from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';

export interface RequestForQuoteSummaryStyles {
  submitButton: IButtonStyles;
}

export interface RequestForQuoteSummaryDetailStyles {
  headerText: IStackItemStyles;
  totalText: ITextStyles;
  total: IStackStyles;
  totalShimmer: IShimmerStyles;
}

export interface RequestForQuoteSummaryProductStyles {
  root: IStackStyles;
  title: ITextStyles;
  imageContainer: IStackItemStyles;
  productName: IStackItemStyles;
  pricingContainer: IStackStyles;
}

export interface RequestForQuoteSummaryProductProps {
  item: CartItem;
}

export interface RequestForQuoteSummaryProductListStyles {
  listItem: IStackItemStyles;
  shimmer: IShimmerStyles;
  list: IStackStyles;
}
