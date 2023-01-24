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
  if (!isAuthenticated) {
    return undefined;
  }
  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/me/settings'
  );
  const queryOptions: Partial<QueryOptions> = {
    filterQuery: `key eq '${SETTINGKEYS.recentlySearchedQueries}'`
  };
  const settings = await settingsResource.getEntities(queryOptions);

  if (settings.value.length > 1) {
    console.warn(
      "Found more than 1 setting for recently viewed. This shouldn't happen"
    );
  }
  return settings.value[0];
};
