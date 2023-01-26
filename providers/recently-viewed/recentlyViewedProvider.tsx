import React, { useCallback, useMemo, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { Product, Setting } from '@services/portal-api';
import { fetchBaseDesignsByIds } from '@services/portal-api/products';
import {
  addProductViewToSessionProductIds,
  addViewToRecentlyViewedProductsSetting,
  clearRecentlyViewedProductsSetting,
  fetchRecentlyViewedProductsSettings
} from '@services/portal-api/settings';
import { QUERYKEYS } from '@services/react-query/constants';

import { ProductView } from './models';
import { RecentlyViewedContext } from './recentlyViewedContext';

export const RecentlyViewedProvider: React.FC = ({ children }) => {
  const [sessionProductViews, setSessionProductViews] = useState<ProductView[]>(
    []
  );
  const isAuthenticated = useIsAuthenticated();
  const queryClient = useQueryClient();
  const {
    status: settingStatus,
    data: setting,
    error: settingError
  } = useQuery(
    [QUERYKEYS.appRecentlyViewedProductsSetting, isAuthenticated],
    () => fetchRecentlyViewedProductsSettings(isAuthenticated),
    { enabled: isAuthenticated }
  );
  const productIds = useMemo(() => {
    if (!isAuthenticated) {
      return sessionProductViews.map(view => view.id);
    }
    return (setting?.value?.productViews as ProductView[] | undefined)?.map(
      view => view.id
    );
  }, [isAuthenticated, sessionProductViews, setting?.value?.productViews]);

  const {
    status: productsStatus,
    data: products,
    error: productsError
  } = useQuery(
    [QUERYKEYS.appRecentlyViewedProducts, productIds],
    (): Promise<Product[]> =>
      fetchBaseDesignsByIds(
        (productIds?.filter(id => !!id) as Array<string>) || []
      )
  );

  const sortedProducts: Product[] | undefined = useMemo(() => {
    const productViews = isAuthenticated
      ? (setting?.value?.productViews as ProductView[] | undefined) || []
      : sessionProductViews;

    if (!products) {
      return undefined;
    }

    return productViews
      .map(view => products?.find(product => product.id === view.id))
      .filter(product => !!product) as Product[];
  }, [
    isAuthenticated,
    products,
    sessionProductViews,
    setting?.value?.productViews
  ]);

  const clearMutation = useMutation(
    () => {
      setSessionProductViews([]);
      return clearRecentlyViewedProductsSetting(isAuthenticated, setting);
    },
    {
      onMutate: () => {
        // Get the previous value so that it can be restored in case an error occurs.
        const previousValue: Setting | undefined = queryClient.getQueryData(
          QUERYKEYS.appRecentlyViewedProductsSetting
        ) as Setting | undefined;

        // Create the expected data
        const newSetting: Setting | undefined = previousValue
          ? {
              ...previousValue,
              value: {
                productViews: []
              }
            }
          : undefined;

        // Set the expected data inside the queryCache
        queryClient.setQueryData(
          QUERYKEYS.appRecentlyViewedProductsSetting,
          newSetting
        );

        // Return the 'previous value'
        return previousValue;
      },
      onSettled: () =>
        queryClient.refetchQueries(QUERYKEYS.appRecentlyViewedProductsSetting)
    }
  );
  const addMutation = useMutation(
    (productView: ProductView) => {
      setSessionProductViews(currentViews =>
        addProductViewToSessionProductIds(productView, currentViews)
      );
      return addViewToRecentlyViewedProductsSetting(
        productView,
        isAuthenticated,
        setting
      );
    },
    {
      onSettled: () =>
        queryClient.refetchQueries(QUERYKEYS.appRecentlyViewedProductsSetting)
    }
  );
  function refreshSetting() {
    queryClient.refetchQueries(QUERYKEYS.appRecentlyViewedProductsSetting);
  }

  const clearViews = useCallback(() => {
    clearMutation.mutateAsync();
  }, [clearMutation]);

  const registerView = (productView: ProductView) => {
    addMutation.mutateAsync(productView);
  };

  return (
    <RecentlyViewedContext.Provider
      value={{
        setting,
        sessionProductViews,
        settingStatus,
        settingError: settingError as Error | undefined,
        products: sortedProducts,
        productsError: productsError as Error | undefined,
        productsStatus,
        refresh: refreshSetting,
        clear: clearViews,
        registerView
      }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  );
};
