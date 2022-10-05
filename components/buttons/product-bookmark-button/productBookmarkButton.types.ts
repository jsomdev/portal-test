import { Product } from '@services/portal-api';

export type ProductBookmarkButtonProps = {
  product: Product;
  displayAsDefaultButton?: boolean;
};

export enum ProductBookmarkButtonIcons {
  SingleBookmark = 'SingleBookmark',
  SingleBookmarkSolid = 'SingleBookmarkSolid'
}
