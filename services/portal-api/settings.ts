import {
  addProductToBookmarksArray,
  removeProductFromBookmarksArray
} from '@providers/product-bookmarks/productBookmarksHelpers';
import { ProductView } from '@providers/recently-viewed/models';
import { combineProductViews } from '@providers/recently-viewed/recentlyViewedHelpers';

import { BaseResource } from './base/baseResource';
import { SETTINGKEYS } from './constants';
import { Json } from './models/Json';
import { Setting } from './models/Setting';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';

/**
 * Function that fetches all the settings that match the ProductBookmarksKey, UserId and ApplicationId.
 * Should only return a collection with a single setting (or none).
 * At the time of writing userId + key has a unique constraint inside the database.
 */
export const fetchProductBookmarksSetting = async (
  isAuthenticated: boolean
): Promise<Setting | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }
  const baseResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/Me/settings'
  );
  const queryOptions: Partial<QueryOptions> = {
    filterQuery: `key eq '${SETTINGKEYS.productBookmarks}'`
  };
  const settings: OdataCollection<Setting> | undefined =
    await baseResource.getEntities(queryOptions);

  if (settings.value.length > 1) {
    console.warn(
      "Found more than 1 setting for product bookmarks. This shouldn't happen"
    );
  }
  return settings.value[0];
};

/**
 * Async function that will remove all productBookmarks from the product bookmarks setting
 * @param setting current setting
 */
export const clearProductBookmarksSetting = async (
  isAuthenticated: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/Me/settings'
  );
  if (!setting) {
    setting = await fetchProductBookmarksSetting(isAuthenticated);
  }
  if (setting?.id) {
    return settingsResource.putEntity(
      setting.id,
      JSON.stringify({
        ...setting,

        value: {
          productBookmarks: []
        }
      })
    );
  }
  return undefined;
};

/**
 * Async function that attempts to remove the productBookmark from the setting.
 * @param productIdToToggle productId that identifies the ProductBookmark that needs to be removed
 * @param setting current setting
 */
export const removeProductBookmarkFromSetting = async (
  productIdToToggle: string,
  isAuthenticated: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/Me/settings'
  );
  if (!setting) {
    setting = await fetchProductBookmarksSetting(isAuthenticated);
  }

  if (setting?.id) {
    return settingsResource.putEntity(
      setting.id,
      JSON.stringify({
        ...setting,
        value: {
          productBookmarks: removeProductFromBookmarksArray(
            productIdToToggle,
            setting.value?.productBookmarks || []
          )
        }
      })
    );
  }
  return undefined;
};
/**
 * Async function that attempts to add the productBookmark from the setting.
 * @param productIdToToggle productId that identifies the ProductBookmark that needs to be added
 * @param setting current setting
 */
export const addProductBookmarkToSetting = async (
  productIdToToggle: string,
  isAuthenticated: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/Me/settings'
  );
  if (!setting) {
    setting = await fetchProductBookmarksSetting(isAuthenticated);
  }

  if (setting?.id) {
    setting = {
      ...setting,

      value: {
        productBookmarks: addProductToBookmarksArray(
          productIdToToggle,
          setting.value?.productBookmarks || []
        )
      }
    };
    return settingsResource.putEntity(
      setting.id || '',
      JSON.stringify({
        ...setting
      })
    );
  } else {
    setting = {
      key: SETTINGKEYS.productBookmarks,
      value: {
        productBookmarks: addProductToBookmarksArray(productIdToToggle, [])
      } as Json
    } as Setting;
    return settingsResource.postEntity(
      JSON.stringify({
        ...setting
      })
    );
  }
};

/**
 * Function that fetches all the settings that match the RecentlyViewedProductsKey, UserId and ApplicationId.
 * Should only return a collection with a single setting (or none).
 * At the time of writing userId + key has a unique constraint inside the database.
 */
export const fetchRecentlyViewedProductsSettings = async (
  isAuthenticated: boolean
): Promise<Setting | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }

  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/Me/settings'
  );
  const queryOptions: Partial<QueryOptions> = {
    filterQuery: `key eq '${SETTINGKEYS.recentlyViewedProducts}'`
  };
  const settings = await settingsResource.getEntities(queryOptions);

  if (settings.value.length > 1) {
    console.warn(
      "Found more than 1 setting for recently viewed. This shouldn't happen"
    );
  }
  return settings.value[0];
};

export const addProductViewToSessionProductIds = (
  productView: ProductView,
  currentViews: ProductView[]
): ProductView[] => {
  return combineProductViews(productView, currentViews);
};
/**
 * Async function that will add a productView to the recentlyViewedProductSetting if a
 * setting exists. If it doesn't exist (even after trying to fetch it) it will create the
 * setting with the productViews inside the value of the setting
 * @param productView the view that needs to be added
 * @param setting current setting
 */
export const addViewToRecentlyViewedProductsSetting = async (
  productView: ProductView,
  isAuthenticated: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }
  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/Me/settings'
  );

  if (!setting) {
    setting = await fetchRecentlyViewedProductsSettings(isAuthenticated);
  }
  if (setting?.id) {
    return settingsResource.putEntity(
      setting.id,
      JSON.stringify({
        ...setting,
        value: {
          productViews: combineProductViews(
            productView,
            setting?.value?.productViews || []
          )
        }
      })
    );
  } else {
    setting = {
      key: SETTINGKEYS.recentlyViewedProducts,
      value: {
        productViews: combineProductViews(productView, [])
      } as Json
    } as Setting;
    return settingsResource.postEntity(
      JSON.stringify({
        ...setting
      })
    );
  }
};
/**
 * Async function that will remove all productViews from the recently viewed products setting
 * @param setting current setting
 */
export const clearRecentlyViewedProductsSetting = async (
  isAuthenticated: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }

  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/Me/settings'
  );

  if (!setting) {
    setting = await fetchRecentlyViewedProductsSettings(isAuthenticated);
  }
  if (setting?.id) {
    return settingsResource.putEntity(
      setting.id,
      JSON.stringify({
        ...setting,
        value: {
          productViews: []
        }
      })
    );
  }
  return undefined;
};
