import React, { useContext, useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import {
  IComboBoxOption,
  IComboBoxStyles,
  Stack,
  useTheme
} from '@fluentui/react';

import { mapShippingCostAmountToShippingMethodComboBoxOptions } from '../checkout-form-groups/shippingMethodChoiceGroupHelper';
import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormContext } from '../shared/checkoutFormContext';
import { CheckoutFormOverviewGroupContainer } from '../shared/checkoutFormOverviewGroupContainer';

const messages = {
  shippingMethod: 'Shipping Method'
};

export const CheckoutFormOverviewShippingMethod: React.FC = () => {
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();
  const { shippingCostData, setSelectedShippingOption } =
    useContext(CheckoutFormContext);
  const { formatNumber } = useIntl();
  const { spacing } = useTheme();

  const shippingMethodOptions: IComboBoxOption[] = useMemo(() => {
    return mapShippingCostAmountToShippingMethodComboBoxOptions(
      shippingCostData || [],
      formatNumber
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

  //When the shipping method changes values, we want to assign the new shipping method to our context
  React.useEffect(() => {
    if (!!shippingCostData && values.shippingMethod !== undefined) {
      setSelectedShippingOption(
        shippingCostData.find(option => {
          return option.shippingMethod === values.shippingMethod;
        })
      );
    }
  }, [setSelectedShippingOption, shippingCostData, values.shippingMethod]);

  const styles: Partial<IComboBoxStyles> = {
    root: {
      width: 'auto'
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }}>
      <Stack.Item>
        <CheckoutFormOverviewGroupContainer text={messages.shippingMethod}>
          <Stack tokens={{ childrenGap: spacing.m }}>
            <Stack.Item>
              <FormikComboBox
                getSelectedKey={getShipmentOptionKey}
                name={checkoutFormFields.shippingMethod.name}
                placeholder={checkoutFormFields.shippingMethod.placeholder}
                options={shippingMethodOptions}
                allowFreeform={false}
                useComboBoxAsMenuWidth
                ariaLabel={checkoutFormFields.shippingMethod.label}
                styles={styles}
                validationProps={{ disabled: true }}
              />
            </Stack.Item>
          </Stack>
        </CheckoutFormOverviewGroupContainer>
      </Stack.Item>
    </Stack>
  );
};
