import { LinkedEntity } from './LinkedEntity';
import { MultilingualString } from './MultilingualString';
import { Product } from './Product';

export type QuoteLine = LinkedEntity & {
  productId?: string | null;
  currencyCode?: string;
  productNumber?: string | null;
  productName?: MultilingualString | null;
  quantity?: number;
  totalAmount?: number;
  unitAmount?: number;
  product?: Product | null;
};
