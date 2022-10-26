import React from 'react';

import { FormatNumberOptions } from 'react-intl';

import { IComboBoxOption, Stack } from '@fluentui/react';
import { IChoiceGroupOption } from '@fluentui/react/lib/components/ChoiceGroup/ChoiceGroup.types';
import { ShippingMethod } from '@services/portal-api';
import { ShippingCostAmount } from '@services/portal-api/base/types';
import { sortShippingOptionsByCostAscending } from '@utilities/sortBy';
import { PricePrimaryText } from '@widgets/pricing/price-label/pricePrimaryText';

import { ChoiceGroupOptionContainer } from '../shared/choiceGroupOptionWrapper';

export const formatShippingMethod = (
  shippingMethod: ShippingMethod
): string => {
  switch (shippingMethod) {
    case ShippingMethod.FREE_SHIPPING:
      return 'Free Shipping';
    case ShippingMethod.FLAT_RATE:
      return 'Flat Rate';
    case ShippingMethod.UPS_GROUND:
      return 'UPS Ground';
    case ShippingMethod.UPS_SECOND_DAY_AIR:
      return 'UPS Second Day Air';
    case ShippingMethod.UPS_NEXT_DAY_AIR:
      return 'UPS Next Day Air';
    case ShippingMethod.UPS_NEXT_DAY_AIR_SAVER:
      return 'UPS Next Day Air Saver';
    case ShippingMethod.UPS_STANDARD:
      return 'UPS Standard';
    case ShippingMethod.UPS_WORLDWIDE_EXPEDITED:
      return 'UPS Worldwide Expedited';
    default:
      return '';
  }
};

export const mapShippingCostAmountToShippingMethodChoiceGroupOptions = (
  shippingOptions: ShippingCostAmount[],
  formatNumber: (
    value: number | bigint,
    opts?: FormatNumberOptions | undefined
  ) => string
): IChoiceGroupOption[] => {
  const options: IChoiceGroupOption[] = [];
  //Map over shipping options and create a choice group option for each item
  shippingOptions
    ?.sort(sortShippingOptionsByCostAscending)
    .filter(option => {
      return option.shippingMethod !== ShippingMethod.UPS_NEXT_DAY_AIR_SAVER;
    })
    .map((shippingOption, i) => {
      return options.push({
        key: shippingOption.shippingMethod || '',
        text: shippingOption.shippingMethod
          ? formatShippingMethod(shippingOption.shippingMethod)
          : '',
        value: shippingOption.shippingMethod || '',
        defaultChecked: i === 0,
        onRenderField: (props, render) => {
          return (
            //TODO: ward
            <ChoiceGroupOptionContainer props={props}>
              <Stack horizontal wrap={false} horizontalAlign="space-between">
                <Stack.Item>{render && render(props)}</Stack.Item>
                <Stack.Item>
                  <PricePrimaryText
                    text={(
                      shippingOption.amount &&
                      formatNumber(shippingOption.amount, {
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

export const mapShippingCostAmountToShippingMethodComboBoxOptions = (
  shippingOptions: ShippingCostAmount[],
  formatNumber: (
    value: number | bigint,
    opts?: FormatNumberOptions | undefined
  ) => string
): IComboBoxOption[] => {
  const options: IComboBoxOption[] = [];
  //Map over shipping options and create a choice group option for each item
  shippingOptions
    ?.sort(sortShippingOptionsByCostAscending)
    .filter(option => {
      return option.shippingMethod !== ShippingMethod.UPS_NEXT_DAY_AIR_SAVER;
    })
    .map((shippingOption, i) => {
      return options.push({
        key: shippingOption.shippingMethod || '',
        text: shippingOption.shippingMethod
          ? `${formatShippingMethod(shippingOption.shippingMethod)} - ${(
              (shippingOption.amount &&
                formatNumber(shippingOption.amount, {
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
