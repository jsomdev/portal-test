import { IntlShape } from 'react-intl';

import { IComboBoxOption } from '@fluentui/react';
import { ShippingMethod } from '@services/portal-api';
import { ShippingCostAmount } from '@services/portal-api/base/types';
import { sortShippingOptionsByCostAscending } from '@utilities/sortBy';
import { formatShippingMethod } from '@widgets/checkout-new/shared/shippingMethods';

export const mapShippingCostAmountToShippingMethodComboBoxOptions = (
  shippingOptions: ShippingCostAmount[],
  intl: IntlShape
): IComboBoxOption[] => {
  const options: IComboBoxOption[] = [];
  //Map over shipping options and create a choice group option for each item
  shippingOptions
    ?.sort(sortShippingOptionsByCostAscending)
    .filter(option => {
      return option.shippingMethod !== ShippingMethod.UPS_NEXT_DAY_AIR_SAVER;
    })
    .map(shippingOption => {
      return options.push({
        key: shippingOption.shippingMethod || '',
        text: shippingOption.shippingMethod
          ? `${formatShippingMethod(shippingOption.shippingMethod, intl)} - ${(
              (shippingOption.amount &&
                intl.formatNumber(shippingOption.amount, {
                  currency: shippingOption.currencyCode || 'USD',
                  currencyDisplay: 'narrowSymbol',
                  style: 'currency'
                })) ||
              ''
            ).toString()}`
          : ''
      });
    });
  return options;
};
