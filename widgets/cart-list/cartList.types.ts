import {
  IButtonStyles,
  IDetailsListStyles,
  IIconStyles,
  IMessageBarStyles,
  IModalStyles,
  ISpinnerStyles,
  IStackItemStyles
} from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';
import { ReactQueryStatus } from '@services/react-query/types';

export interface CartListProps {
  readOnly: boolean;
  items: CartItem[] | undefined;
  status?: ReactQueryStatus;
  showPricingColumns: boolean;
}
export interface CartListStyles {
  messageBar: IMessageBarStyles;
  detailsList: Partial<IDetailsListStyles>;
  spinner: ISpinnerStyles;
}

export interface CartListConfirmationProps {
  lastAddedItems: CartItem[] | undefined;
  setLastAddedItems: (value: undefined) => void;
}

export interface CartListConfirmationStyles {
  modalContent: Partial<IModalStyles>;
  modalContinueButton: IButtonStyles;
  modalCartButton: IButtonStyles;
  listWrapperStyles: IStackItemStyles;
}

export interface CartListColumnProps {
  item: CartItem;
  readOnly: boolean;
}

export interface CartListActionStyles {
  icon: IIconStyles;
}
