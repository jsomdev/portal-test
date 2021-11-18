import { Category } from './models/Category';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { CategoriesResource } from './resources/CategoriesResource';
/**
 * Function that retrieves the info of a category to be displayed on a category page (Title & Breadcrumb)
 * @param id Guid of the Category that needs to be retrieved
 * @returns Category
 */
export async function fetchCategory(id: string): Promise<Category> {
  try {
    const listItemsResource: CategoriesResource = new CategoriesResource();
    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id,number,name,description,seoPath,settings,image`,
      expandQuery:
        'parent($select=id,name,settings,seoPath;$expand=parent($select=id,settings,name,seoPath;$expand=parent($select=id,settings,name,seoPath)))&$format=application/json;odata.metadata=none',
    };
    return listItemsResource.getEntity(id, queryOptions);
  } catch (e) {
    throw e;
  }
}

/**
 * Function that retrieves the basic information about the root categories that are displayed on the home page.
 * @returns Collection of Categories that represent the root categories
 */
export async function fetchHomepageCategories(): Promise<
  OdataCollection<Category>
> {
  try {
    const categoriesResource: CategoriesResource = new CategoriesResource();
    const queryOptions: Partial<QueryOptions> = {
      selectQuery: 'id,name,description,settings,seoPath',
      expandQuery: 'image($select=url)',
      filterQuery: `parentId eq null`,
      orderbyQuery: 'sortIndex asc',
    };
    const data = await categoriesResource.getEntities(queryOptions);
    return data;
  } catch (e) {
    throw e;
  }
}
/**
 * Function that retrieves the basic information about the sub categories of a category.
 * @param parentId Guid of the parent Category
 * @returns Collection of the children Categories
 */
export async function fetchSubCategories(
  language: string,
  parentId?: string
): Promise<OdataCollection<Category>> {
  try {
    const categoriesResource: CategoriesResource = new CategoriesResource();
    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id,name,settings,seoPath`,
      expandQuery: 'image($select=url)',
      filterQuery: `parentId eq ${parentId || 'null'}`,
      orderbyQuery: `sortIndex asc, name/${language} asc`,
    };
    const data = await categoriesResource.getEntities(queryOptions);

    return data;
  } catch (e) {
    throw e;
  }
}

/**
 * Function that calls /Categories/Search and gets the basic information about categories that match the searchQuery.(Search Bar Suggestions)
 * @param searchQuery search 'search' parameter that is passed to the /Search fucntion
 * @returns
 */
export const fetchSearchedCategoriesSuggestions = async (
  searchQuery: string
): Promise<OdataCollection<Category>> => {
  try {
    const categoriesResource: CategoriesResource = new CategoriesResource();
    const queryOptions: Partial<QueryOptions> = {
      selectQuery: 'id,name,seoPath,settings',
      orderbyQuery: 'sortIndex asc',
      expandQuery: 'image($select=url)',
      top: 10,
    };
    const result = await categoriesResource.searchEntities(
      queryOptions,
      searchQuery
    );
    return result;
  } catch (ex) {
    throw ex;
  }
};
