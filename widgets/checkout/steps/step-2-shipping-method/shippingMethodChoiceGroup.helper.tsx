import { IntlShape } from 'react-intl';

import { IChoiceGroupOption, Stack } from '@fluentui/react';
import { ShippingMethod } from '@services/portal-api';
import { ShippingCostAmount } from '@services/portal-api/base/types';
import { sortShippingOptionsByCostAscending } from '@utilities/sortBy';
import { ChoiceGroupOptionContainer } from '@widgets/checkout/shared/choiceGroupOptionWrapper';
import { formatShippingMethod } from '@widgets/checkout/shared/shippingMethods';
import { PricePrimaryText } from '@widgets/pricing/price-label/pricePrimaryText';

export const mapShippingCostAmountToShippingMethodChoiceGroupOptions = (
  shippingOptions: ShippingCostAmount[],
  intl: IntlShape
): IChoiceGroupOption[] => {
  const options: IChoiceGroupOption[] = [];
  //Map over shipping options and create a choice group option for each item
  shippingOptions
    ?.sort(sortShippingOptionsByCostAscending)
    .filter(option => {
      return option.shippingMethod !== ShippingMethod.UpsNextDayAirSaver;
    })
    .map((shippingOption, i) => {
      return options.push({
        key: shippingOption.shippingMethod || '',
        text: shippingOption.shippingMethod
          ? formatShippingMethod(shippingOption.shippingMethod, intl)
          : '',
        value: shippingOption.shippingMethod || '',
        defaultChecked: i === 0,
        onRenderField: (props, render) => {
          return (
            <ChoiceGroupOptionContainer props={props}>
              <Stack horizontal wrap={false} horizontalAlign="space-between">
                <Stack.Item>{render && render(props)}</Stack.Item>
                <Stack.Item>
                  <PricePrimaryText
                    text={(
                      shippingOption.amount &&
                      intl.formatNumber(shippingOption.amount, {
                        currency: shippingOption.currencyCode || 'USD',
                        currencyDisplay: 'narrowSymbol',
                        style: 'currency'
                      })
                    ).toString()}
                    variant={'medium'}
                  />
                </Stack.Item>
              </Stack>
            </ChoiceGroupOptionContainer>
          );
        }
      });
    });
  return options;
};
