import { createContext } from 'react';

import { Product } from '@services/portal-api';
import { ReactQueryStatus } from '@services/react-query/types';

type ProductCompareContextProps = {
  products: Product[];
  productsDetailsStatus: ReactQueryStatus;
  setBaseProduct: (productId: string | undefined) => void;
  baseProductId: string | undefined;
  isFetchingDetails: boolean;
  productsDetailsError: Error | undefined;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearProducts: () => void;
  goToProductComparePage: () => void;
  showIdenticalValues: boolean;
  showPrivateValues: boolean;
  toggleIdenticalValues: () => void;
  togglePrivateValues: () => void;
  loadDetails: (productIds: string[]) => void;
};

const initialContextProps: ProductCompareContextProps = {
  addProduct: () => {
    throw new Error('Not implemented');
  },
  removeProduct: () => {
    throw new Error('Not implemented');
  },

  clearProducts: () => {
    throw new Error('Not implemented');
  },
  goToProductComparePage: () => {
    throw new Error('Not implemented');
  },
  products: [],
  productsDetailsError: undefined,
  productsDetailsStatus: 'idle',
  isFetchingDetails: false,
  showIdenticalValues: false,
  showPrivateValues: false,
  baseProductId: undefined,
  loadDetails: () => {
    throw new Error('Not implemented');
  },
  toggleIdenticalValues: () => {
    throw new Error('Not implemented');
  },
  togglePrivateValues: () => {
    throw new Error('Not implemented');
  },
  setBaseProduct: () => {
    throw new Error('Not Implemented');
  }
};

export const ProductCompareContext =
  createContext<ProductCompareContextProps>(initialContextProps);
