import React from 'react';

import { FormikContextType, useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import { FormikChoiceGroup } from '@components/formik-wrappers/formikChoiceGroup';
import {
  IChoiceGroupOption,
  IChoiceGroupStyles,
  ISpinnerStyles,
  Spinner,
  SpinnerSize,
  Stack,
  getTheme
} from '@fluentui/react';
import { PostalAddress } from '@services/portal-api';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormContext } from '../shared/checkoutFormContext';
import { CheckoutFormGroupTitle } from '../shared/checkoutFormGroupTitle';
import { mapShippingCostAmountToShippingMethodChoiceGroupOptions } from './shippingMethodChoiceGroupHelper';

const messages = {
  shippingMethod: 'Shipping Method'
};

export const ShippingMethodChoiceGroup: React.FC = () => {
  const { formatNumber } = useIntl();
  const { fonts, palette } = getTheme();
  const {
    values,
    setFieldValue,
    setFieldTouched
  }: FormikContextType<CheckoutFormValues> = useFormikContext();

  const {
    setSelectedShippingOption,
    selectedShippingOption,
    setShippingAddress,
    shippingCostData,
    shippingCostDataStatus
  } = React.useContext(CheckoutFormContext);

  React.useEffect(() => {
    const shippingAddress: PostalAddress = {
      city: values.city,
      region: values.state,
      postalCode: values.zipCode,
      lines: [values.address],
      country: values.country
    };
    setShippingAddress((currentState: PostalAddress | undefined) => {
      if (
        JSON.stringify(shippingAddress).localeCompare(
          JSON.stringify(currentState)
        ) !== 0
      ) {
        setSelectedShippingOption(undefined);
      }
      return shippingAddress;
    });
  }, [
    values.city,
    values.state,
    values.zipCode,
    values.address,
    values.country,
    setShippingAddress,
    setSelectedShippingOption
  ]);

  // This memo maps our API data (ShippingCostAmount[]) to choice group options
  const shippingMethodOptions: IChoiceGroupOption[] = React.useMemo(() => {
    return mapShippingCostAmountToShippingMethodChoiceGroupOptions(
      shippingCostData || [],
      formatNumber
    );
  }, [shippingCostData, formatNumber]);

  // When the selected shipping option changes (in the context) we want to update the field values of the form.
  React.useEffect(() => {
    setFieldValue(
      checkoutFormFields.shippingMethod.name,
      selectedShippingOption?.shippingMethod.toString(),
      true
    );
    setFieldTouched(checkoutFormFields.shippingMethod.name, true, false);
  }, [selectedShippingOption, setFieldTouched, setFieldValue]);

  const styles: IChoiceGroupStyles = {
    root: {
      marginTop: 0,
      selectors: {
        '.ms-ChoiceField-wrapper': {
          width: '100%'
        },
        '.ms-ChoiceField-input': {
          cursor: 'pointer'
        }
      }
    }
  };

  const spinnerStyles: ISpinnerStyles = {
    label: {
      ...fonts.mediumPlus,
      color: palette.themeDark
    }
  };

  if (shippingCostDataStatus === 'loading') {
    return (
      <Stack>
        <Stack.Item>
          <CheckoutFormGroupTitle title={messages.shippingMethod} />
        </Stack.Item>
        <Stack.Item>
          <Spinner
            size={SpinnerSize.large}
            label="Loading shipping options..."
            styles={spinnerStyles}
          />
        </Stack.Item>
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack.Item>
        <CheckoutFormGroupTitle title={messages.shippingMethod} />
      </Stack.Item>
      <Stack.Item>
        <FormikChoiceGroup
          name={checkoutFormFields.shippingMethod.name}
          options={shippingMethodOptions}
          onChange={(ev, option) => {
            setSelectedShippingOption(
              shippingCostData?.find(
                shippingCost => shippingCost.shippingMethod === option?.key
              )
            );
          }}
          styles={styles}
          selectedKey={selectedShippingOption?.shippingMethod}
        />
      </Stack.Item>
    </Stack>
  );
};
