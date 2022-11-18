import React, { useMemo } from 'react';

import { useIntl } from 'react-intl';

import {
  IComboBoxOption,
  IComboBoxStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { CheckoutFormOverviewGroupContainer } from '@widgets/checkout/shared/checkoutFormOverviewGroupContainer';

import { mapShippingCostAmountToShippingMethodComboBoxOptions } from './shippingMethodSummary.helper';

const messages = {
  shippingMethod: 'Shipping Method'
};

export const ShippingMethodSummary: React.FC = () => {
  const intl = useIntl();
  const { shippingCostData, setSelectedShippingOption } = useCheckout();
  const { formatNumber } = useIntl();
  const { spacing } = useTheme();

  const shippingMethodOptions: IComboBoxOption[] = useMemo(() => {
    return mapShippingCostAmountToShippingMethodComboBoxOptions(
      shippingCostData || [],
      intl
    );
  }, [shippingCostData, formatNumber]);

  const getShipmentOptionKey = React.useCallback(
    (value: string) => {
      return shippingMethodOptions
        .find(option => option.key === value)
        ?.key.toString();
    },
    [shippingMethodOptions]
  );

  /* TODO //When the shipping method changes values, we want to assign the new shipping method to our context
  React.useEffect(() => {
    if (!!shippingCostData && values.shippingMethod !== undefined) {
      setSelectedShippingOption(
        shippingCostData.find(option => {
          return option.shippingMethod === values.shippingMethod;
        })
      );
    }
  }, [setSelectedShippingOption, shippingCostData, values.shippingMethod]);
*/
  const styles: Partial<IComboBoxStyles> = {
    root: {
      width: 'auto'
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }}>
      <Stack.Item>
        <OverviewGroupContainer text={messages.shippingMethod}>
          <Stack tokens={{ childrenGap: spacing.m }}>
            <Stack.Item>
              {/* TODO <FormikComboBox
                getSelectedKey={getShipmentOptionKey}
                name={checkoutFormFields.shippingMethod.name}
                placeholder={checkoutFormFields.shippingMethod.placeholder}
                options={shippingMethodOptions}
                allowFreeform={false}
                useComboBoxAsMenuWidth
                ariaLabel={checkoutFormFields.shippingMethod.label}
                styles={styles}
                validationProps={{ disabled: true }}
              />*/}
            </Stack.Item>
          </Stack>
        </OverviewGroupContainer>
      </Stack.Item>
    </Stack>
  );
};
