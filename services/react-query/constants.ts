import { ReactQueryKeys } from './types';

/**
 * Object Constant that is used to provide as useQuery's key throughout the application.
 * These have to be unique.
 */
export const QUERYKEYS: ReactQueryKeys = {
  orderVerifyProducts: 'orderVerifyProducts',
  appBookmarkedProducts: 'appBookmarkedProducts',
  searchVerifyProduct: 'searchVerifyProduct',
  appBookmarkedProductsSetting: 'appBookmarkedProductsSetting',
  appAudienceSetting: 'appAudienceSetting',
  appCartItemsOld: 'appCartItemsOld',
  appCartItems: 'appCartItems',
  appMainMenu: 'appMainMenu',
  appMe: 'appMe',
  appProductPriceBreak: 'appProductPriceBreak',
  appProductsPriceBreaks: 'appProductsPriceBreaks',
  appRecentlyViewedProducts: 'appRecentlyViewedProducts',
  appRecentlyViewedProductsSetting: 'appRecentlyViewedProductsSetting',
  appRecentySearchedSetting: 'appRecentySearchedSetting',
  appSearchCategories: 'appSearchCategories',
  appSearchProducts: 'appSearchProducts',
  appSiteMenu: 'appSiteMenu',
  cartMergeProducts: 'cartMergeProducts',
  category: 'category',
  categorySubCategories: 'categorySubCategoryPages',
  checkoutOrderTaxAmount: 'checkoutOrderTaxAmount',
  checkoutShippingOptions: 'checkoutShippingOptions',
  compareProducts: 'compareProducts',
  designBase: 'designBase',
  designAccesories: 'designAccesories',
  designAllSpecifications: 'designAllSpecifications',
  designCadenasIdentifier: 'designCadenasIdentifier',
  designConfigurations: 'designConfigurations',
  designKeySpecifications: 'designKeySpecifications',
  designResources: 'designResources',
  globalAttributeGroups: 'globalAttributeGroups',
  globalAttributeTypes: 'globalAttributeTypes',
  globalModels: 'globalModels',
  globalSeries: 'globalSeries',
  homeCategoryPages: 'homeCategoryPages',
  matchEmailToCustomer: 'matchEmailToCustomer',
  modelKeySpecifications: 'modelKeySpecifications',
  modelResources: 'modelResources',
  orderDetail: 'orderDetail',
  orderLineProducts: 'orderLineProducts',
  orders: 'orders',
  quoteRequestDetail: 'quoteRequestDetail',
  quoteRequestLineProducts: 'quoteRequestLineProducts',
  quoteRequests: 'quoteRequests',

  productFinderGridViewItems: 'productFinderGridViewItems',
  productFinderListViewItems: 'productFinderListViewItems',
  productFinderLiquidsWithRelativeDensity:
    'productFinderLiquidsWithRelativeDensity',
  productFinderPredictedResults: 'productFinderPredictedResults',
  productFinderTableHierarchy: 'productFinderTableHierarchy',
  productFinderTableViewDesignsForModel:
    'productFinderTableViewDesignsForModel',
  productFinderTableViewProductListItem:
    'productFinderTableViewProductListItem',
  seriesResources: 'seriesResources'
};
