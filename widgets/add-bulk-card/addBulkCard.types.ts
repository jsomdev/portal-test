import { ITextStyles } from '@fluentui/react';
import { BaseCartItem } from '@providers/cart/cartModels';

export interface AddBulkCardStyles {
  title: ITextStyles;
  description: ITextStyles;
}

export interface AddBulkFormValues {
  items: BaseCartItem[];
}
export type AddBulkItem = Pick<BaseCartItem, 'productNumber' | 'quantity'>;
