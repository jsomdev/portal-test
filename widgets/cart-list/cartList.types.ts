import { PriceBreak } from '@services/portal-api/base/types';

export type CartItemProductViewModel = {
  id?: string;
  number: string;
  url?: string;
  title: string;
  description: string;
  image: {
    url?: string;
  };
};

export type CartItemViewModel = {
  quantity: number;
  priceBreaks?: PriceBreak[];
  product: CartItemProductViewModel;
};

export type CartListItemProps = {
  item: CartItemViewModel;
  readOnly: boolean;
};
