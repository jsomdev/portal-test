import { createContext } from 'react';

import { Product, Setting } from '@services/portal-api';
import { ReactQueryStatus } from '@services/react-query/types';

import { ProductView } from './models';

export interface RecentlyViewedContextProps {
  // Remove the productViews from the setting
  clear: () => void;
  // Register a new productView
  registerView: (productView: ProductView) => void;
  // Refresh the setting
  refresh: () => void;
  sessionProductViews: ProductView[] | undefined;
  setting: Setting | undefined;
  settingStatus: ReactQueryStatus;
  settingError: Error | undefined;
  products: Product[] | undefined;
  productsStatus: ReactQueryStatus;
  productsError: Error | undefined;
}

const initialContextProps: RecentlyViewedContextProps = {
  clear: () => {
    throw new Error('Not implemented');
  },
  refresh: () => {
    throw new Error('Not implemented');
  },
  registerView: () => {
    throw new Error('Not implemented');
  },
  setting: undefined,
  settingStatus: 'idle',
  settingError: undefined,
  sessionProductViews: [],
  products: undefined,
  productsError: undefined,
  productsStatus: 'idle'
};

export const RecentlyViewedContext =
  createContext<RecentlyViewedContextProps>(initialContextProps);
