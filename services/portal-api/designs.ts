import { PriceBreak } from './base/types';
import { FlaggedEnum } from './flaggedEnum';
import { Attribute } from './models/Attribute';
import { AttributeSettings } from './models/AttributeSettingsFlags';
import { Identifier } from './models/Identifier';
import { IdentifierType } from './models/IdentifierType';
import { Model } from './models/Model';
import { Option } from './models/Option';
import { Product } from './models/Product';
import { ProductAccessory } from './models/ProductAccessory';
import { Resource } from './models/Resource';
import { OdataCollection, OdataEntity } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { ProductsResource } from './resources/ProductsResource';

/**
 * Function that retrieves the basic information of a product
 * @param id Guid of the Product
 * @returns Product with basic information
 */
export async function fetchBaseDesign(id: string): Promise<Product> {
  try {
    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id,number,name,description,modelId`,
      expandQuery: `image,model($select=id,number,seoPath;$expand=series($select=id,name,seoPath))`,
    };

    const data: Product | undefined = await productsResource.getEntity(
      id,
      queryOptions
    );
    return data || [];
  } catch (e) {
    throw e;
  }
}

/**
 * Function that retrieves the visual resources of a product that will be displayed on the top section of a design page.
 * @param id Guid of the Product
 * @returns Array of Resource
 */
export async function fetchDesignResources(id: string): Promise<Resource[]> {
  try {
    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `resources($select=id,type,variation,caption,url,thumbnail)`,
    };

    const data: Model | undefined = await productsResource.getEntity(
      id,
      queryOptions
    );
    return data.resources || [];
  } catch (e) {
    throw e;
  }
}

export async function fetchDesignAccessories(
  id: string
): Promise<Array<ProductAccessory>> {
  try {
    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `accessories($select=id;$expand=accessory($select=id,name,number;$expand=image($select=url)))`,
    };

    const data: Product | undefined = await productsResource.getEntity(
      id,
      queryOptions
    );
    return data.accessories || [];
  } catch (e) {
    throw e;
  }
}

/**
 * Function that retrieves the cadenas identifier that will be used to get other cadenas relevant information. (Resource Downloads)
 * @param id Guid of The Product
 * @returns Identifier for the Cadenas functionality
 */
export async function fetchDesignsCadenasIdentifier(
  id: string
): Promise<Identifier | undefined> {
  try {
    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `identifiers`,
    };

    const data: Model | undefined = await productsResource.getEntity(
      id,
      queryOptions
    );
    return data.identifiers?.filter(
      (identifier) => identifier.type === IdentifierType.CADENAS_IDENTIFIER
    )?.[0];
  } catch (e) {
    throw e;
  }
}
/**
 * Function that retrieves basic information of Products for the passed ids. (RecentlyViewed, Bookmarks,...)
 * @param ids Guids of the Products that need to retrieved
 * @returns Collection of Products
 */
export const fetchBaseDesignsByIds = async (
  ids: string[]
): Promise<OdataCollection<Product>> => {
  try {
    const filteredIds: string[] = ids.filter((id) => !!id);
    if (filteredIds.length === 0) {
      return {
        '@odata.context': '',
        value: [] as Array<Product & OdataEntity>,
      };
    }
    const productsResource: ProductsResource = new ProductsResource();
    const queryOptions: Partial<QueryOptions> = {
      selectQuery: 'id,name,description,number',
      expandQuery: `image`,
      filterQuery:
        filteredIds.length > 0
          ? filteredIds.map((id) => `id eq ${id}`).join(' or ')
          : undefined,
      includeCount: true,
    };
    const data = await productsResource.getEntities(queryOptions);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function that retrieves the necessary attributes of a product that are to be displayed as (key) characteristics. (Specification Summary)
 * @param id Guid of the Product
 * @returns Array of Attributes that represent the Key Specifications of a Product Design
 */
export async function fetchDesignKeySpecifications(
  id: string
): Promise<Attribute[]> {
  try {
    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `attributes($select=sortIndex,typeCode,groupCode,settings,value,displays,conditions,sortIndex,id;$filter=settings has SSCo.DigitalHighway.Portal.Data.Enumerations.AttributeSettings'${FlaggedEnum.toString(
        AttributeSettings,
        AttributeSettings.DisplayOnProductCharacteristics
      )}')`,
    };

    const data: Product | undefined = await productsResource.getEntity(
      id,
      queryOptions
    );
    return data.attributes || [];
  } catch (e) {
    throw e;
  }
}

/**
 * Function that retrieves the confiugration options for a product. Used to display the different variation for a certain configuration option.
 * @param id Guid of the Product
 * @returns Array of Options that represent the Configurations of a Product
 */
export async function fetchDesignConfigurations(id: string): Promise<Option[]> {
  try {
    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `options($orderby=typeCode asc)`,
    };

    const data: Product | undefined = await productsResource.getEntity(
      id,
      queryOptions
    );
    return data?.options || [];
  } catch (e) {
    throw e;
  }
}

/**
 * Function that retrieves all attribtues of a Product
 * @param id Guid of the product
 * @returns Array of all Attributes of a Product
 */
export async function fetchDesignSpecifications(
  id: string
): Promise<Attribute[]> {
  try {
    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `attributes($select=typeCode,groupCode,unitSymbol,settings,value,groupCode,displays,conditions,sortIndex,id)`,
    };

    const data: Model | undefined = await productsResource.getEntity(
      id,
      queryOptions
    );
    return data.attributes || [];
  } catch (e) {
    throw e;
  }
}

/**
 * Function that calls the /Products/Search and gets the basic information about products that match the searchQuery (Search Bar Suggestions)
 * @param searchQuery
 * @returns Collection of Products that match the search criteria
 */
export const fetchSearchedProductsSuggestions = async (
  searchQuery: string
): Promise<OdataCollection<Product>> => {
  try {
    const productsResource: ProductsResource = new ProductsResource();
    const queryOptions: Partial<QueryOptions> = {
      selectQuery: 'id,number',
      orderbyQuery: 'number asc',
      top: 10,
    };
    const data = await productsResource.searchEntities(
      queryOptions,
      searchQuery
    );
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function that retrieves Pricing information of a Product.
 * @param productNumber Product Number identifier
 * @returns Array of PriceBreaks with relevant Pricing Information about the Product
 */
export const fetchProductPriceBreaksByNumber = async (
  productNumber: string,
  isAuthenticated: boolean,
  isVerified: boolean,
  isEmployee: boolean
): Promise<PriceBreak[]> => {
  try {
    if (!isAuthenticated || (!isVerified && !isEmployee)) {
      return [];
    }

    const productsResource: ProductsResource = new ProductsResource();

    let priceFunction: string = '/StandardPrice';

    if (isVerified) {
      priceFunction = '/CustomerPrice';
    }
    const data:
      | OdataCollection<PriceBreak & OdataEntity>
      | Response
      | undefined = await productsResource.fetch(
      `/Products(number='${productNumber}')${priceFunction}`,
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
      (data as OdataCollection<PriceBreak & OdataEntity> | undefined)?.value ||
      []
    );
  } catch (error) {
    throw error;
  }
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
    return productNumbers.map((productNumber) => ({
      productNumber,
      priceBreaks: [],
    }));
  }
  try {
    const priceBreaksPromises: Promise<PriceBreak[]>[] = productNumbers.map(
      (productNumber) => {
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
      priceBreaks: response,
    }));

    return mappedResponses;
  } catch (e) {}
}
/**
 * Function that fetches the bookmarked products
 * @param productIds Product ids that are bookmarked.
 * @returns Collection of Products
 */
export const fetchBookmarks = async (
  productIds: string[]
): Promise<OdataCollection<Product>> => {
  if (productIds.length === 0) {
    return {
      '@odata.context': '',
      value: [],
    };
  }
  try {
    const productsResource: ProductsResource = new ProductsResource();
    const queryOptions: Partial<QueryOptions> = {
      selectQuery: 'id,name,description,number',
      expandQuery: `image`,
      filterQuery:
        // productIds.length > 0 ? `id in (${productIds.join(', ')})` : undefined,s
        productIds.length > 0
          ? productIds.map((id) => `id eq ${id}`).join(' or ')
          : undefined,
      includeCount: true,
    };
    const data = await productsResource.getEntities(queryOptions);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function that retrieves all necessary information about Product that are being displayed on the compare page.
 * @param ids guids of Products that are being compared
 * @returns Collection of Products
 */
export async function getDesignsForDetailedCompare(
  ids: string[]
): Promise<OdataCollection<Product>> {
  try {
    if (ids.length === 0) {
      return {
        '@odata.context': 'Products with attributes',
        value: [],
      };
    }

    const productsResource: ProductsResource = new ProductsResource();

    const queryOptions: Partial<QueryOptions> = {
      filterQuery: `id in (${ids.join(', ')})`,
      selectQuery: 'id,name,description,number',
      expandQuery: `image($select=url),attributes($select=id,typeCode,groupCode,conditions,sortIndex,value,displays,settings;$orderby=sortIndex asc)`,
    };

    // eslint-disable-next-line max-len
    const products: OdataCollection<Product> = await productsResource.getEntities(
      queryOptions
    );
    return products;
  } catch (e) {
    throw new Error('Could not get the product previews');
  }
}
