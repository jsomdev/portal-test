import { MultilingualStringHelper } from '@utilities/multilingualStringHelper';

import { PriceBreak } from './base/types';
import { Product } from './models/Product';
import { OdataCollection, OdataEntity } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { ProductsResource } from './resources/ProductsResource';

/**
 * Function that retrieves basic information of Products for the passed ids. (RecentlyViewed, Bookmarks,...)
 * @param ids Guids of the Products that need to retrieved
 * @returns Collection of Products
 */
export const fetchBaseDesignsByIds = async (
  ids: string[]
): Promise<Product[]> => {
  const filteredIds: string[] = ids.filter(id => !!id);
  if (filteredIds.length === 0) {
    return [] as Product[];
  }
  const productsResource: ProductsResource = new ProductsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,name,description,number,slug',
    expandQuery: `image`,
    filterQuery:
      filteredIds.length > 0
        ? filteredIds.map(id => `id eq ${id}`).join(' or ')
        : undefined,
    includeCount: true
  };
  const data = await productsResource.getEntities(queryOptions);
  return data.value;
};

/**
 * Function that retrieves Pricing information of a Product.
 * @param productNumber Product Number identifier
 * @returns Array of PriceBreaks with relevant Pricing Information about the Product
 */
export const fetchProductPriceBreaksByNumber = async (
  productNumber: string,
  isAuthenticated: boolean,
  isCustomer: boolean,
  isEmployee: boolean
): Promise<PriceBreak[]> => {
  if (!isAuthenticated || (!isCustomer && !isEmployee)) {
    return [];
  }

  const productsResource: ProductsResource = new ProductsResource();

  let priceFunction: string = '/standardPrice';

  if (isCustomer) {
    priceFunction = '/customerPrice';
  }
  const data: OdataCollection<PriceBreak & OdataEntity> | Response | undefined =
    await productsResource.fetch(
      `/products(number=@number)${priceFunction}?@number='${encodeURIComponent(
        productNumber
      )}'`,
      {},
      {},
      true
    );
  if ((data as Response | undefined)?.status === 204) {
    // if there's no prices then we show "Quoted Price" to the user
    return [];
  }
  if ((data as Response | undefined)?.status === 403) {
    // if user isn't authorized to fetch the prices then we show "Quote Price" to the user
    // TODO: once B2C tokens are used, backend checks for presence of the "VerifiedCustomer" value in the "extension_Roles" claim to authorize the request, the frontend should do the same (in case of B2C tokens) and not fetch the function but instead return "[]" immediately to avoid making unneeded API calls
    return [];
  }
  return (
    (data as OdataCollection<PriceBreak & OdataEntity> | undefined)?.value || []
  );
};

/**
 * Function that retrieves Pricing information for each Product (id).
 * @param productNumbers Product number identifiers
 * @returns Array of an Array of PriceBreaks with their linked product id.
 */
export async function fetchAllPriceBreaksByNumber(
  productNumbers: string[],
  isAuthenticated: boolean,
  isVerified: boolean,
  isEmployee: boolean
): Promise<
  | {
      productNumber: string;
      priceBreaks: PriceBreak[];
    }[]
  | undefined
> {
  if (!isAuthenticated || (!isVerified && !isEmployee)) {
    return productNumbers.map(productNumber => ({
      productNumber,
      priceBreaks: []
    }));
  }

  const priceBreaksPromises: Promise<PriceBreak[]>[] = productNumbers.map(
    productNumber => {
      return fetchProductPriceBreaksByNumber(
        productNumber,
        isAuthenticated,
        isVerified,
        isEmployee
      );
    }
  );

  const priceBreaksResponses: PriceBreak[][] = await Promise.all(
    priceBreaksPromises
  );

  const mappedResponses: {
    productNumber: string;
    priceBreaks: PriceBreak[];
  }[] = priceBreaksResponses.map((response, index) => ({
    productNumber: productNumbers[index],
    priceBreaks: response
  }));

  return mappedResponses;
}

/**
 * Function that retrieves all necessary information about Product that are being displayed on the compare page.
 * @param numbers numbers of Products that are being compared
 * @returns Collection of Products
 */
export async function getDesignsForDetailedCompare(
  numbers: string[]
): Promise<OdataCollection<Product>> {
  try {
    if (numbers.length === 0) {
      return {
        '@odata.context': 'Products with attributes',
        value: []
      };
    }

    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      filterQuery: `${numbers
        // The + signs in the product number do not get encoded for some strange reason.
        .map(number => `number eq '${encodeURIComponent(number)}'`)
        .join(' or ')}`,
      selectQuery: 'id,name,description,number,slug',
      expandQuery: `image($select=url),attributes($select=id,typeCode,groupCode,conditions($orderby=typeCode asc),sortIndex,value,displays,settings)`
    };

    const products: OdataCollection<Product> =
      await productsResource.getEntities(queryOptions);

    return products;
  } catch (e) {
    throw new Error('Could not get the product previews');
  }
}

/**
 * Function that retrieves information about the Products that need to be statically optimized
 */
export async function fetchProductsForStaticPaths(): Promise<Product[]> {
  const productsResource: ProductsResource = new ProductsResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,slug`,
    top: 0
  };

  const data: OdataCollection<Product> | undefined =
    await productsResource.getEntities(queryOptions);
  return data.value;
}
/**
 * Async function that retrieves the product with the necessary data to display on the page of a product.
 * @param slug Product slug (url identifier)
 * @returns Promise of a Product or null (if product not found)
 */
export async function fetchProductForProductPage(
  slug: string,
  locale: string | undefined
): Promise<Product | null> {
  const productsResource: ProductsResource = new ProductsResource();
  function optimize(product: Product): Product {
    return {
      ...product,
      name: MultilingualStringHelper.strip(product.name, locale),
      description: MultilingualStringHelper.strip(product.description, locale)
    };
  }
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,number,name,description,modelId,slug,audience`,
    // 20/10/2022, assumption made by Jan & Francis that product slugs will always have the same english version
    filterQuery: `code eq '${slug}'`,
    expandQuery: `identifiers($select=type,value),image($select=id,audience,thumbnail,type,url)`
  };
  const queryOptionsAttributes: Partial<QueryOptions> = {
    selectQuery: 'id',
    filterQuery: `code eq '${slug}'`,
    expandQuery: `attributes($select=typeCode,groupCode,unitSymbol,settings,value,groupCode,displays,conditions($orderby=typeCode asc),sortIndex,id)`
  };
  const queryOptionsOptions: Partial<QueryOptions> = {
    selectQuery: 'id',
    filterQuery: `code eq '${slug}'`,
    expandQuery: `options($orderby=typeCode asc)`
  };
  const queryOptionsAccessories: Partial<QueryOptions> = {
    selectQuery: 'id',
    filterQuery: `code eq '${slug}'`,
    expandQuery: `accessories($select=accessory;$expand=accessory($select=name,number,slug;$expand=image($select=url)))`
  };
  const queryOptionsResources: Partial<QueryOptions> = {
    selectQuery: 'id',
    filterQuery: `code eq '${slug}'`,
    expandQuery: `resources($select=id,type,variation,caption,url,thumbnail;$orderby=type)`
  };
  const getAttributes = async () =>
    productsResource.getEntities(queryOptionsAttributes);
  const getProductData = async () => productsResource.getEntities(queryOptions);
  const getOptions = async () =>
    productsResource.getEntities(queryOptionsOptions);
  const getResources = async () =>
    productsResource.getEntities(queryOptionsResources);
  const getAccessories = async () =>
    productsResource.getEntities(queryOptionsAccessories);
  const [
    attributesData,
    productData,
    optionsData,
    resourcesData,
    accessoriesData
  ] = await Promise.all([
    getAttributes(),
    getProductData(),
    getOptions(),
    getResources(),
    getAccessories()
  ]);

  if (!productData.value[0]) {
    return null;
  }
  const data: Product = {
    ...productData.value[0],
    attributes: attributesData.value[0]?.attributes,
    options: optionsData.value[0]?.options,
    resources: resourcesData.value[0]?.resources,
    accessories: accessoriesData.value[0]?.accessories
  };

  return optimize(data);
}
