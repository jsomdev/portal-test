import { Json } from '.';
import { combineRecentlySearchedQueries } from '../../scenes/shared/app-header/main-header/search/recentlySearchedHelper';
import { BaseResource } from './base/baseResource';
import { SETTINGKEYS } from './constants';
import { Setting } from './models/Setting';
import { QueryOptions } from './o-data/queryOptions';

/**
 * Function that fetches all the settings that match the RecentlySearchedKey, UserId and ApplicationId.
 * Should only return a collection with a single setting (or none).
 * At the time of writing userId + key has a unique constraint inside the database.
 */
export const fetchRecentlySearchedQueriesSettings = async (
  isAuthenticated: boolean
): Promise<Setting | undefined> => {
  try {
    if (!isAuthenticated) {
      return undefined;
    }
    const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
      '/Me/settings'
    );
    const queryOptions: Partial<QueryOptions> = {
      filterQuery: `key eq '${SETTINGKEYS.recentlySearchedQueries}'`,
    };
    const settings = await settingsResource.getEntities(queryOptions);

    if (settings.value.length > 1) {
      console.warn(
        "Found more than 1 setting for recently viewed. This shouldn't happen"
      );
    }
    return settings.value[0];
  } catch (e) {
    throw e;
  }
};

export const addSearchQueryToRecentlySearchedQueriesSetting = async (
  query: string,
  isAuthenticated: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  try {
    if (!isAuthenticated) {
      return undefined;
    }
    const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
      '/Me/settings'
    );
    if (!setting) {
      setting = await fetchRecentlySearchedQueriesSettings(isAuthenticated);
    }
    if (!!setting?.id) {
      return settingsResource.putEntity(
        setting.id,
        JSON.stringify({
          ...setting,
          value: {
            searchQueries: combineRecentlySearchedQueries(
              query,
              setting.value?.searchQueries
            ),
          },
        })
      );
    } else {
      setting = {
        key: SETTINGKEYS.recentlySearchedQueries,
        value: {
          searchQueries: combineRecentlySearchedQueries(query, []),
        } as Json,
      } as Setting;
      return settingsResource.postEntity(
        JSON.stringify({
          ...setting,
        })
      );
    }
  } catch (e) {
    throw e;
  }
};
