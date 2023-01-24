import { BaseCartItem } from '@providers/cart/cartModels';
import { Product } from '@services/portal-api';
import { OdataCollection, QueryOptions } from '@services/portal-api/o-data';
import { ProductsResource } from '@services/portal-api/resources/ProductsResource';

import { AddBulkFormValues } from './addBulkCard.types';

const initialFormItem: BaseCartItem = {
  productNumber: '',
  quantity: 1
};
export const initialAddBulkFormValues: AddBulkFormValues = {
  items: Array(5).fill(initialFormItem)
};

export function mergeProductsWithBulkFormValues(
  products: Product[],
  items: BaseCartItem[]
): BaseCartItem[] {
  const trimmedItems: BaseCartItem[] = items.map(item => ({
    ...item,
    productNumber: item.productNumber?.trim() || ''
  }));
  return trimmedItems
    .filter(
      item =>
        !!products.find(
          product =>
            product.number?.toLowerCase() === item.productNumber?.toLowerCase()
        )
    )
    .map((item: BaseCartItem): BaseCartItem => {
      const product: Product | undefined = products.find(
        product =>
          product.number?.toLowerCase() === item.productNumber?.toLowerCase()
      );

      return {
        productNumber: product?.number || '',
        // Important to cast the quantity input value to type number!!
        quantity: item?.quantity ? Number(item.quantity) : 1,
        productId: product?.id,
        productName: product?.name
      };
    });
}
/**
 * Function that retrieves Products for the validated product numbers.
 * Note: Expanding the QueryOptions (adding more selects) may impact
 * @param productNumbers Array of product numbers that will be validated
 * @returns {validProducts, invalidProductNumbers} Returns a collection of Products that match with a product number and the ones that don't
 */
export async function validateProductNumbers(
  productNumbers: string[]
): Promise<{
  validProducts: Pick<Product, 'id' | 'number' | 'name'>[];
  validProductNumbers: string[];
  invalidProductNumbers: string[];
}> {
  // Trim the productNumbers
  const trimmedProductNumbers: string[] = productNumbers.map(productNumber =>
    productNumber.trim()
  );
  // Filter out the productNumbers that are empty
  const filteredProductNumbers: string[] = trimmedProductNumbers
    .map(productNumber => productNumber.trim())
    .filter(productNumber => !!productNumber);

  // If there are no filteredProductNumbers, we can terminate the function early
  if (filteredProductNumbers.length === 0) {
    return {
      validProducts: [],
      validProductNumbers: [],
      invalidProductNumbers: trimmedProductNumbers
    };
  }

  const productsResource: ProductsResource = new ProductsResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,number,name',
    filterQuery: `number in (${filteredProductNumbers
      .map(productNumber => `'${productNumber}'`)
      .join(',')})`
  };

  // Verify all added products
  const verifiedProducts: OdataCollection<Product> =
    await productsResource.getEntities(queryOptions);

  // The valid product numbers are the ones that are found within the result value of the api call
  const validProductNumbers: string[] = filteredProductNumbers.filter(
    productNumber => {
      const matchedProduct: Product | undefined = verifiedProducts?.value.find(
        product =>
          product.number
            ?.toLowerCase()
            .localeCompare(productNumber.toLowerCase()) === 0
      );
      return matchedProduct;
    }
  );
  // The invalid product numbers are the ones that are not found within the result value of the api call
  const invalidProductNumbers: string[] = filteredProductNumbers.filter(
    productNumber => {
      const matchedProduct: Product | undefined = verifiedProducts?.value.find(
        product =>
          product.number
            ?.toLowerCase()
            .localeCompare(productNumber.toLowerCase()) === 0
      );
      return !matchedProduct;
    }
  );

  return {
    validProducts: verifiedProducts?.value || [],
    validProductNumbers,
    invalidProductNumbers
  };
}
