import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';
import { MultilingualStringHelper } from '@utilities/multilingualStringHelper';

import { getAudience } from '..';
import { FlaggedEnum } from './flaggedEnum';
import { Audience } from './models/AudienceFlags';
import { Category } from './models/Category';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { CategoriesResource } from './resources/CategoriesResource';

const CATEGORIES_CACHE_PATH = path.resolve('./data-cache/categories.json');
const categoriesDataCacheManager: DataCacheManager<Category[]> =
  new DataCacheManager<Category[]>('Categories', CATEGORIES_CACHE_PATH);

/**
 * Function that retrieves all necessary infromation about the categories that are displayed on the homepage
 * @returns Collection of Categories that are displayed on the homepage
 */
export async function fetchCategoriesForHomePage(
  locale: string | undefined
): Promise<Category[]> {
  const audience = getAudience(locale);
  const categoriesResource: CategoriesResource = new CategoriesResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,name,description,settings,slug,audience',
    expandQuery:
      'image($select=url,caption),children($select=id,name,settings,slug;$expand=image($select=url,caption);$orderby=sortIndex asc)',
    filterQuery: `parentId eq null and audience has '${FlaggedEnum.toString(
      Audience,
      audience
    )}'`,
    orderbyQuery: 'sortIndex asc'
  };

  const data = await categoriesResource.getEntities(queryOptions);
  const optimizedData: Category[] = data.value.map(category => {
    return {
      ...category,
      name: MultilingualStringHelper.strip(category.name, locale),
      description: MultilingualStringHelper.strip(category.description, locale),
      slug: MultilingualStringHelper.strip(category.slug, locale) || undefined,
      children: category.children?.map(child => ({
        ...child,
        slug: MultilingualStringHelper.strip(child.slug, locale) || undefined,
        name: MultilingualStringHelper.strip(child.name, locale)
      }))
    };
  });

  return optimizedData;
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
export async function fetchAllCategories(
  locale: string | undefined
): Promise<Category[]> {
  const cachedData: Category[] | undefined =
    await categoriesDataCacheManager.get();

  function optimize(categories: Category[]) {
    return categories.map(category => {
      return {
        ...category,
        name: MultilingualStringHelper.strip(category.name, locale),
        description: MultilingualStringHelper.strip(
          category.description,
          locale
        ),
        parent: category.parent
          ? {
              ...category.parent,
              slug:
                MultilingualStringHelper.strip(category.parent.slug, locale) ||
                undefined,
              name: MultilingualStringHelper.strip(
                category.parent.name,
                locale
              ),
              parent: category.parent.parent
                ? {
                    ...category.parent.parent,
                    slug:
                      MultilingualStringHelper.strip(
                        category.parent.parent.slug,
                        locale
                      ) || undefined,
                    name: MultilingualStringHelper.strip(
                      category.parent.parent.name,
                      locale
                    )
                  }
                : null
            }
          : null
      };
    });
  }
  if (cachedData) {
    return optimize(cachedData);
  }
  const categoriesResource: CategoriesResource = new CategoriesResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,number,name,description,slug,settings,image,parentId`,
    expandQuery:
      'settings,image($select=thumbnail,caption,url),parent($select=id,name,settings,slug;$expand=parent($select=id,settings,name,slug))&$format=application/json;odata.metadata=none'
  };
  const data: OdataCollection<Category> = await categoriesResource.getEntities(
    queryOptions
  );
  categoriesDataCacheManager.set(data.value);
  return optimize(data.value);
}
