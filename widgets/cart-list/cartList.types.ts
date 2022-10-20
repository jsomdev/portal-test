import { PriceBreak } from '@services/portal-api/base/types';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

export type CartItemViewModel = {
  id: string;
  quantity: number;
  priceBreaks?: PriceBreak[];
  product: ProductCardViewModel;
};
