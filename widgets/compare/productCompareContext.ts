import { createContext, useContext } from 'react';

import { Url } from 'url';

import { Product } from '@services/portal-api';
import { ReactQueryStatus } from '@services/react-query/types';

type ProductCompareContextProps = {
  products: Product[];
  visibleProducts: number;
  visibleIndex: number;
  setVisibleIndex: (index: number) => void;
  productsDetailsStatus: ReactQueryStatus;
  setBaseProduct: (productNumber: string | undefined) => void;
  baseProductNumber: string | undefined;
  isFetchingDetails: boolean;
  productsDetailsError: Error | undefined;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearProducts: () => void;
  showIdenticalValues: boolean;
  showPrivateValues: boolean;
  toggleIdenticalValues: () => void;
  togglePrivateValues: () => void;
  loadDetails: (productNumbers: string[]) => void;
  getUrl: () => Partial<Url>;
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

  products: [],
  productsDetailsError: undefined,
  productsDetailsStatus: 'idle',
  isFetchingDetails: false,
  showIdenticalValues: false,
  showPrivateValues: false,
  baseProductNumber: undefined,
  setVisibleIndex: () => {
    throw new Error('Not implemented');
  },
  visibleIndex: 0,
  visibleProducts: 1,
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
  },
  getUrl: () => {
    throw new Error('Not Implemented');
  }
};

export const ProductCompareContext =
  createContext<ProductCompareContextProps>(initialContextProps);

export const useProductCompare = (): ProductCompareContextProps =>
  useContext(ProductCompareContext);
