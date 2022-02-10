import { createContext } from 'react';

import { Product } from '../../services/portal-api/models/Product';
import { Setting } from '../../services/portal-api/models/Setting';
import { ReactQueryStatus } from '../../services/react-query/types';

export interface ProductBookmarksContextProps {
  // Removes the bookmarks from the setting
  clear: () => void;
  // Refreshes the setting
  refresh: () => void;
  // Adds a bookmark the existing bookmarks
  addBookmark: (productId: string) => void;
  // Removes a bookmark from the existing bookmarks
  removeBookmark: (productId: string) => void;
  setting: Setting | undefined;
  settingStatus: ReactQueryStatus;
  settingError: Error | undefined;
  products: Product[] | undefined;
  productsStatus: ReactQueryStatus;
  productsError: Error | undefined;
}

const initialContextProps: ProductBookmarksContextProps = {
  clear: () => {
    throw new Error('Not implemented');
  },
  refresh: () => {
    throw new Error('Not implemented');
  },

  addBookmark: (productId: string) => {
    throw new Error('Not implemented');
  },
  removeBookmark: (productId: string) => {
    throw new Error('Not implemented');
  },
  setting: undefined,
  settingStatus: 'idle',
  settingError: undefined,
  products: undefined,
  productsError: undefined,
  productsStatus: 'idle'
};

export const ProductBookmarksContext =
  createContext<ProductBookmarksContextProps>(initialContextProps);
