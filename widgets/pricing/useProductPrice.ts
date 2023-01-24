import { useCallback, useMemo } from 'react';

import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { useClaims } from '@services/authentication/claims';
import { PriceBreak } from '@services/portal-api/base/types';
import { fetchProductPriceBreaksByNumber } from '@services/portal-api/products';
import { QUERYKEYS } from '@services/react-query/constants';
import { ReactQueryStatus } from '@services/react-query/types';

/**
 * Pricing data and functionality for a specific Product.
 * Fetches the price information and exposes stateful functionality.
 */
export interface ProductPricing {
  /**
   * Identifier of a Product.
   */
  productNumber: string;
  /**
   * Code of the currency of the BasePriceBreak.
   * NOTE: We assume this code is unique.
   */
  currencyCode: string | undefined;
  /**
   * Array of PriceBreaks for a particular product,
   * that is used to determine the prices of the product.
   */
  priceBreaks: PriceBreak[] | undefined;
  /**
   * Status of the pricebreak data. (react-query)
   */
  status: ReactQueryStatus;
  /**
   * Function that returns the Price for a single unit, based on the quantity.
   * @param quantity Value that is used to get the PriceBreak
   */
  getUnitPrice: (quantity: number) => number | undefined;
  /**
   * Function that returns the total price of the product.
   * @param quantity Value that will be multiplied with the unit price.
   */
  getTotalPrice: (quantity: number) => number | undefined;

  /**
   * Function that returns the unitPrice for a base quantity.
   */
  getBasePrice: () => number | undefined;
  /**
   * Function that returns the PriceBreak for a specific quantity.
   * @param quantity Value for which the PriceBreak is needed.
   */
  getPriceBreak: (quantity: number) => PriceBreak | undefined;
  /**
   * Function that checks if there is a reduced price for the quantity.
   * Returns undefined if not known.
   * @param quantity Value that needs to be checked.
   */
  isBulkDiscountApplied: (quantity: number) => boolean | undefined;
  /**
   * Function that checks if there are any bulk discounts possible.
   * Returns undefined if not known.
   */
  isBulkDiscountAvailable: () => boolean | undefined;
}

const BASE_QUANTITY = 1;

/**
 * Hook that provides stateful pricing data and functionality for a Product.
 * @param productNumber Identifier for the product.
 * If the presetPriceBreaks are not defined, this product number will be used
 * to retrieve the PriceBreaks information from the api.
 * @param presetPriceBreaks Array of PriceBreaks.
 * If defined, this array will be used instead of making another api call
 * to retrieve the PriceBreak information.
 * @returns ProductPricing stateful functionality for the product with that product number.
 */
export const useProductPricing = (
  productNumber: string,
  presetPriceBreaks?: PriceBreak[] | undefined
): ProductPricing => {
  const isAuthenticated = useIsAuthenticated();
  const { isCustomer, isEmployee } = useClaims();

  // NOTE: status will remain idle if a preset has been passed to the hook.
  const { data: priceBreaks, status } = useQuery(
    [
      QUERYKEYS.appProductPriceBreak,
      productNumber,
      isAuthenticated,
      isCustomer,
      isEmployee
    ],
    () =>
      fetchProductPriceBreaksByNumber(
        productNumber,
        isAuthenticated,
        isCustomer,
        isEmployee
      ),
    {
      enabled:
        !!productNumber &&
        isAuthenticated &&
        (isCustomer || isEmployee) &&
        presetPriceBreaks === undefined,
      initialData: presetPriceBreaks
    }
  );

  const getPriceBreak = useCallback(
    (quantity: number): PriceBreak | undefined => {
      return priceBreaks?.find(priceBreaks => {
        return (
          quantity >= priceBreaks.minimumQuantity &&
          quantity <= priceBreaks.maximumQuantity
        );
      });
    },
    [priceBreaks]
  );

  const currencyCode: string | undefined = useMemo(
    () => getPriceBreak(BASE_QUANTITY)?.currencyCode,
    [getPriceBreak]
  );

  const getUnitPrice = useCallback(
    (quantity: number): number | undefined => {
      const priceBreak: PriceBreak | undefined = getPriceBreak(quantity);
      return priceBreak?.price || undefined;
    },
    [getPriceBreak]
  );

  const getTotalPrice = useCallback(
    (quantity: number): number | undefined => {
      const unitPrice: number | undefined = getUnitPrice(quantity);
      if (unitPrice !== undefined) {
        return unitPrice * quantity;
      }
      return undefined;
    },
    [getUnitPrice]
  );

  const getBasePrice = useCallback((): number | undefined => {
    return getUnitPrice(BASE_QUANTITY) || undefined;
  }, [getUnitPrice]);

  const isBulkDiscountApplied = useCallback(
    (quantity: number): boolean | undefined => {
      if (status === 'success') {
        const basePrice: number | undefined = getBasePrice();
        const unitPrice: number | undefined = getUnitPrice(quantity);
        if (basePrice !== undefined && unitPrice !== undefined) {
          return basePrice > unitPrice;
        }
      }
      return undefined;
    },
    [getBasePrice, getUnitPrice, status]
  );

  const isBulkDiscountAvailable = useCallback((): boolean | undefined => {
    if (status === 'success' && priceBreaks !== undefined) {
      return priceBreaks.length > 0;
    }
    return undefined;
  }, [priceBreaks, status]);

  return {
    priceBreaks,
    currencyCode,
    status,
    productNumber,
    isBulkDiscountAvailable,
    getUnitPrice,
    getTotalPrice,
    getBasePrice,
    getPriceBreak,
    isBulkDiscountApplied
  };
};
