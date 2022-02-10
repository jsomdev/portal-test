import React, { useCallback, useMemo } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';

import { fetchBaseDesignsByIds } from '../../services/portal-api/designs';
import { Setting } from '../../services/portal-api/models/Setting';
import {
  addProductBookmarkToSetting,
  clearProductBookmarksSetting,
  fetchProductBookmarksSetting,
  removeProductBookmarkFromSetting
} from '../../services/portal-api/settings';
import { QUERYKEYS } from '../../services/react-query/constants';
import { ProductBookmark } from './models';
import { ProductBookmarksContext } from './productBookmarksContext';
import {
  addProductToBookmarksArray,
  removeProductFromBookmarksArray
} from './productBookmarksHelpers';

export const ProductBookmarksProvider: React.FC = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const {
    data: setting,
    status: settingStatus,
    error: settingError
  } = useQuery(
    [QUERYKEYS.appBookmarkedProductsSetting, isAuthenticated],
    () => fetchProductBookmarksSetting(isAuthenticated),
    { enabled: isAuthenticated }
  );
  const productIds = useMemo(() => {
    if (!isAuthenticated) {
      return undefined;
    }
    return (
      setting?.value?.productBookmarks as ProductBookmark[] | undefined
    )?.map(view => view.id || '');
  }, [isAuthenticated, setting?.value?.productBookmarks]);
  const {
    data: products,
    status: productsStatus,
    error: productsError
  } = useQuery(
    [QUERYKEYS.appBookmarkedProducts, productIds],
    () => fetchBaseDesignsByIds(productIds?.slice(0, 9) || []),
    { enabled: !!setting }
  );

  //on mutate update cache
  const queryClient = useQueryClient();
  const clearMutation = useMutation(
    () => clearProductBookmarksSetting(isAuthenticated, setting),
    {
      onMutate: () => {
        // Get the previous value so that it can be restored in case an error occurs.
        const previousValue: Setting | undefined = queryClient.getQueryData([
          QUERYKEYS.appBookmarkedProductsSetting,
          isAuthenticated
        ]) as Setting | undefined;
        // Create the expected data
        const newSetting: Setting | undefined = previousValue
          ? {
              ...previousValue,
              value: {
                productBookmarks: []
              }
            }
          : undefined;
        // Set the expected data inside the queryCache
        queryClient.setQueryData(
          [QUERYKEYS.appBookmarkedProductsSetting, isAuthenticated],
          newSetting
        );

        // return the 'previous' value
        return previousValue;
      },
      onSuccess: setting => {
        queryClient.setQueryData(
          [QUERYKEYS.appBookmarkedProductsSetting, isAuthenticated],
          setting
        );
      }
    }
  );

  const removeMutation = useMutation(
    (productIdToToggle: string) =>
      removeProductBookmarkFromSetting(
        productIdToToggle,
        isAuthenticated,
        setting
      ),
    {
      onMutate: (productIdToToggle: string) => {
        // Get the previous value so that it can be restored in case an error occurs.
        const previousValue: Setting | undefined = queryClient.getQueryData([
          QUERYKEYS.appBookmarkedProductsSetting,
          isAuthenticated
        ]) as Setting | undefined;
        // Create the expected data
        const newSetting: Setting | undefined = previousValue
          ? {
              ...previousValue,
              value: {
                productBookmarks: removeProductFromBookmarksArray(
                  productIdToToggle,
                  previousValue?.value?.productBookmarks || []
                )
              }
            }
          : undefined;
        // Set the expected data inside the queryCache
        queryClient.setQueryData(
          [QUERYKEYS.appBookmarkedProductsSetting, isAuthenticated],
          newSetting
        );
        // return the 'previous' value
        return previousValue;
      },
      onSettled: () => {
        queryClient.refetchQueries([
          QUERYKEYS.appBookmarkedProductsSetting,
          isAuthenticated
        ]);
      }
    }
  );
  const addMutation = useMutation(
    (productIdToToggle: string) =>
      addProductBookmarkToSetting(productIdToToggle, isAuthenticated, setting),
    {
      onMutate: (productIdToToggle: string) => {
        // Get the previous value so that it can be restored in case an error occurs.
        const previousValue: Setting | undefined = queryClient.getQueryData([
          QUERYKEYS.appBookmarkedProductsSetting,
          isAuthenticated
        ]) as Setting | undefined;
        // Create the expected data
        const newSetting: Setting | undefined = previousValue
          ? {
              ...previousValue,
              value: {
                productBookmarks: addProductToBookmarksArray(
                  productIdToToggle,
                  previousValue?.value?.productBookmarks || []
                )
              }
            }
          : undefined;
        // Set the expected data inside the queryCache
        queryClient.setQueryData(
          [QUERYKEYS.appBookmarkedProductsSetting, isAuthenticated],
          newSetting
        );
        // return the 'previous' value
        return previousValue;
      },

      onSettled: setting =>
        queryClient.refetchQueries([
          (QUERYKEYS.appBookmarkedProductsSetting, isAuthenticated)
        ])
    }
  );
  function refreshSetting() {
    queryClient.refetchQueries([
      QUERYKEYS.appBookmarkedProductsSetting,
      isAuthenticated
    ]);
  }

  const clearBookmarks = useCallback(() => {
    clearMutation.mutateAsync();
  }, [clearMutation]);

  return (
    <ProductBookmarksContext.Provider
      value={{
        setting,
        settingError: settingError as Error | undefined,
        settingStatus,
        products: products?.value,
        productsError: productsError as Error | undefined,
        productsStatus,
        refresh: refreshSetting,
        clear: clearBookmarks,
        addBookmark: addMutation.mutate,
        removeBookmark: removeMutation.mutate
      }}
    >
      {children}
    </ProductBookmarksContext.Provider>
  );
};
