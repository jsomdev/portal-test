import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';

import { Category } from './models/Category';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { CategoriesResource } from './resources/CategoriesResource';
import { FlaggedEnum } from './flaggedEnum';
import { Audience } from './models/AudienceFlags';

const CATEGORIES_CACHE_PATH = path.resolve('./data-cache/categories.json');
const categoriesDataCacheManager: DataCacheManager<Category[]> =
  new DataCacheManager<Category[]>('Categories', CATEGORIES_CACHE_PATH);

/**
 * Function that retrieves all necessary infromation about the categories that are displayed on the homepage
 * @returns Collection of Categories that are displayed on the homepage
 */
export async function fetchCategoriesForHomePage(
  audience: Audience
): Promise<OdataCollection<Category>> {
  const categoriesResource: CategoriesResource = new CategoriesResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,name,description,settings,seoPath,audience',
    expandQuery:
      'image($select=url),children($select=id,name,settings,seoPath;$expand=image($select=url);$orderby=sortIndex asc)',
    filterQuery: `parentId eq null and audience has SSCo.DigitalHighway.Portal.Data.Enumerations.Audience'${FlaggedEnum.toString(
      Audience,
      audience
    )}'`,
    orderbyQuery: 'sortIndex asc'
  };
  const data = await categoriesResource.getEntities(queryOptions);

  return data;
}

/**
 * Function that calls /Categories/Search and gets the basic information about categories that match the searchQuery.(Search Bar Suggestions)
 * @param searchQuery search 'search' parameter that is passed to the /Search fucntion
 * @returns
 */
export const fetchSearchedCategoriesSuggestions = async (
  searchQuery: string
): Promise<OdataCollection<Category>> => {
  const categoriesResource: CategoriesResource = new CategoriesResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,name,seoPath,settings',
    orderbyQuery: 'sortIndex asc',
    expandQuery: 'image($select=url)',
    top: 10
  };
  const result = await categoriesResource.searchEntities(
    queryOptions,
    searchQuery
  );
  return result;
};

/**
 * Function that will retrieve all Categories with their relevant information included.
 * @returns Array of Categories that will be referenced throughout the pages (e.g. BreadCrumbs, Title & Description, Navigation)
 */
export async function fetchAllCategories(): Promise<Category[]> {
  const cachedData: Category[] | undefined =
    await categoriesDataCacheManager.get();
  if (cachedData) {
    return cachedData;
  }
  const categoriesResource: CategoriesResource = new CategoriesResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,number,name,description,slug,settings,image`,
    expandQuery:
      'parent($select=id,name,settings,slug;$expand=parent($select=id,settings,name,slug;$expand=parent($select=id,settings,name,seoPath)))&$format=application/json;odata.metadata=none'
  };
  const data: OdataCollection<Category> = await categoriesResource.getEntities(
    queryOptions
  );
  console.log(data);
  categoriesDataCacheManager.set(data.value);
  return data.value;
}
