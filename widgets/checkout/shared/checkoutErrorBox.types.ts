import {
  IButtonStyles,
  IMessageBarStyles,
  IStackStyles,
  ITextStyles
} from '@fluentui/react';
import { CreateOrderError } from '@widgets/checkout/create-order/CreateOrderError';

export interface CheckoutErrorBoxStyles {
  title: ITextStyles;
  actionButton: IButtonStyles;
  actions: IStackStyles;
  messageBar: IMessageBarStyles;
}

export interface CheckoutErrorBoxProps {
  error: CreateOrderError | unknown;
}

export interface CheckoutErrorBoxText {
  title: string;
  description: string;
  subText?: string;
}
