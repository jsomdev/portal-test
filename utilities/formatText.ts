//TODO https://dev.azure.com/itssco/SSCo/_workitems/edit/14868
import { BaseCartItem } from '@providers/cart/cartModels';
import { defaultLanguage } from '@services/i18n';
import { OrderLine, Product } from '@services/portal-api';

/**
 * Function that will map a CartItem to its displayValue
 * @param item CartItem that needs to be formatted
 */
//TODO https://dev.azure.com/itssco/SSCo/_workitems/edit/14868
export const formatCartItemDisplayValue = (
  item: BaseCartItem | OrderLine | undefined
): string => {
  return item?.productName?.[defaultLanguage] || item?.productNumber || '';
};

/**
 * Function that will map a product to its displayValue
 * @param product Product that needs to be formatted
 */
// TODO https://dev.azure.com/itssco/SSCo/_workitems/edit/14868
export const formatProductDisplayValue = (
  product: Partial<Product> | undefined
): string => {
  return product?.number || product?.name?.['en'] || '';
};

//TODO https://dev.azure.com/itssco/SSCo/_workitems/edit/14868
export const formatUnitSymbolSuffix = (
  unitSymbol: string | undefined | null
): string => {
  if (!unitSymbol) {
    return '';
  }
  // Currently checking if unitSymbol is '°' (angular degrees)
  // TODO: add unitSystem checker$
  if (unitSymbol === '°') {
    return unitSymbol;
  }
  // In all other cases return the unitSymbol prefixed with a whitespace
  return ` ` + unitSymbol;
};
