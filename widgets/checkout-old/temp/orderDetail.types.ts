import {
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles
} from '@fluentui/react';
import { Order, OrderLine, Product } from '@services/portal-api';

export interface OrderDetailProps {
  orderId: string;
}
export interface OrderDetailUserInfoProps {
  order: Order;
}

export interface OrderDetailStyles {
  headerText: ITextStyles;
  summaryWrapper: IStackItemStyles;
  listWrapper: IStackItemStyles;
  subsectionHeader: ITextStyles;
  reorderButton: IButtonStyles;
}

export interface OrderDetailUserInfoStyles {
  boldText: ITextStyles;
  date: ITextStyles;
  orderDetailsColumns: IStackStyles;
  orderDetailsRow: IStackStyles;
  orderDetailInfoItem: IStackItemStyles;
  highlight: ITextStyles;
}

export type OrderItem = Partial<Product> & {
  orderLine: Partial<OrderLine>;
};

export interface OrderSummaryStyles {
  wrapper: IStackStyles;
  header: IStackStyles;
  headerText: ITextStyles;
  request: IStackStyles;
}

export interface OrderSummaryDetailStyles {
  details: IStackStyles;
  headerText: IStackItemStyles;
  totalText: ITextStyles;
  total: IStackStyles;
}

export interface OrderSummaryProductStyles {
  root: IStackStyles;
  title: ITextStyles;
  imageContainer: IStackItemStyles;
}

export interface OrderSummaryAddressStyles {
  boldText: ITextStyles;
}
export interface OrderSummaryPriceStyles {
  totalText: ITextStyles;
  total: IStackStyles;
}
