/**
 * ReactQueryKeys Naming:
 * 1. Use a 'app location' Prefix:
 *     - 'global': Used in multiple parts of the application.
 *       This data is 'static' and will 'never' change so it should only be loaded once!
 *       Example: 'globalAttributeTypes' is used to load the information about all AttributeTypes just once.
 *     - 'app': Used in multiple parts of the application or in a application wide component (menu)
 *       This data cannot be considered 'static' because depending on its parameters it will load other data.
 *       Example 1 (Menu): 'appMainMenu' is used by one of the applications root components. Menu Items can be dynamic based on parameters such as user, claims,...
 *       Example 2 (Multiple Parts): 'appProductPriceBreak' is used throughout the application but will return different data based on the product id parameter.
 *     - 'page' : Used when query applies to a specific page in the application.
 *       Example:'categorySubCategories' is used on the category page only.
 *     - 'feature': 'Used when query applies to an important feature used in multiple parts of the application, and 'app' prefix isn't sufficient.
 *       Example: 'productFinder' is used in many parts of the application but it's such an important feature that 'app' is not needed.
 *
 * 2. Append with meaningful 'identifying name'
 *
 */

export type ReactQueryStatus = 'idle' | 'loading' | 'error' | 'success';

export interface ReactQueryKeys {
  searchVerifyProduct: string;
  orderVerifyProducts: string;
  appBookmarkedProducts: string;
  appBookmarkedProductsSetting: string;
  appCartItemsOld: string;
  appCartItems: string;
  appMainMenu: string;
  appMe: string;
  appProductPriceBreak: string;
  appProductsPriceBreaks: string;
  appRecentlyViewedProducts: string;
  appRecentlyViewedProductsSetting: string;
  appRecentySearchedSetting: string;
  appAudienceSetting: string;
  appSearchCategories: string;
  appSearchProducts: string;
  appSiteMenu: string;
  cartMergeProducts: string;
  category: string;
  categorySubCategories: string;
  checkoutOrderTaxAmount: string;
  checkoutShippingOptions: string;
  compareProducts: string;
  designAccesories: string;
  designAllSpecifications: string;
  designBase: string;
  designCadenasIdentifier: string;
  designConfigurations: string;
  designKeySpecifications: string;
  designResources: string;
  globalAttributeGroups: string;
  globalAttributeTypes: string;
  globalModels: string;
  globalSeries: string;
  homeCategoryPages: string;
  matchEmailToCustomer: string;
  modelKeySpecifications: string;
  modelResources: string;
  orderDetail: string;
  orderLineProducts: string;
  orders: string;
  quoteRequests: string;
  quoteRequestDetail: string;
  quoteRequestLineProducts: string;
  productFinderGridViewItems: string;
  productFinderLiquidsWithRelativeDensity: string;
  productFinderListViewItems: string;
  productFinderPredictedResults: string;
  productFinderTableHierarchy: string;
  productFinderTableViewDesignsForModel: string;
  productFinderTableViewProductListItem: string;
  seriesResources: string;
}
