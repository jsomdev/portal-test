import React, { useEffect } from 'react';

import { useFormikContext } from 'formik';
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
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { mapShippingCostAmountToShippingMethodChoiceGroupOptions } from '@widgets/checkout-new/steps/step-2-shipping-method/shippingMethodChoiceGroup.helper';
import { checkoutFormFields } from '@widgets/checkout/checkout-form/checkoutFormHelper';
import { CheckoutFormContext } from '@widgets/checkout/shared/checkoutFormContext';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';

import { Step2FormData } from './step-2-shipping-method';

type ShippingMethodChoiceGroupProps = {
  title: string;
  fields: Pick<StepFields<Step2FormData>, 'shippingMethod'>;
};

export const ShippingMethodChoiceGroup: React.FC<
  ShippingMethodChoiceGroupProps
> = ({ fields, title }) => {
  const { formatNumber } = useIntl();
  const { fonts, palette } = getTheme();
  const { setFieldValue, setFieldTouched } = useFormikContext<Step2FormData>();
  const {
    setSelectedShippingOption,
    selectedShippingOption,
    shippingCostData,
    shippingCostDataStatus
  } = React.useContext(CheckoutFormContext);

  // This memo maps our API data (ShippingCostAmount[]) to choice group options
  const shippingMethodOptions: IChoiceGroupOption[] = React.useMemo(() => {
    return mapShippingCostAmountToShippingMethodChoiceGroupOptions(
      shippingCostData || [],
      formatNumber
    );
  }, [shippingCostData, formatNumber]);

  // When the selected shipping option changes (in the context) we want to update the field values of the form.
  useEffect(() => {
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
          <CheckoutFormGroupTitle title={title} />
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
        <CheckoutFormGroupTitle title={title} />
      </Stack.Item>
      <Stack.Item>
        <FormikChoiceGroup
          name={fields.shippingMethod.name}
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
