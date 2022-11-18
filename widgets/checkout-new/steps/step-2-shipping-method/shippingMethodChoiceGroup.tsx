import React, { useEffect } from 'react';

import { useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

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
import { messageIds } from '@services/i18n';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { CheckoutFormGroupTitle } from '@widgets/checkout-new/shared/checkoutFormGroupTitle';
import { StepFields } from '@widgets/checkout-new/shared/types';
import { mapShippingCostAmountToShippingMethodChoiceGroupOptions } from '@widgets/checkout-new/steps/step-2-shipping-method/shippingMethodChoiceGroup.helper';

import { Step2FormData } from './step-2-shipping-method';

const messages = defineMessages({
  loadingShippingMethods: {
    id: messageIds.pages.checkout.shippingMethods.loadingShippingMethods,
    defaultMessage: 'Loading shipping options...',
    description: 'Checkout step2: loading shipping options text'
  }
});

type ShippingMethodChoiceGroupProps = {
  title: string;
  fields: Pick<StepFields<Step2FormData>, 'shippingMethod'>;
};

export const ShippingMethodChoiceGroup: React.FC<
  ShippingMethodChoiceGroupProps
> = ({ fields, title }) => {
  const intl = useIntl();
  const { formatNumber, formatMessage } = intl;
  const { fonts, palette } = getTheme();
  const { setFieldValue, setFieldTouched } = useFormikContext<Step2FormData>();
  const {
    setSelectedShippingOption,
    selectedShippingOption,
    shippingCostData,
    shippingCostDataStatus
  } = useCheckout();

  // This memo maps our API data (ShippingCostAmount[]) to choice group options
  const shippingMethodOptions: IChoiceGroupOption[] = React.useMemo(() => {
    return mapShippingCostAmountToShippingMethodChoiceGroupOptions(
      shippingCostData || [],
      intl
    );
  }, [shippingCostData, formatNumber]);

  // When the selected shipping option changes (in the context) we want to update the field values of the form.
  useEffect(() => {
    setFieldValue(
      fields.shippingMethod.name,
      selectedShippingOption?.shippingMethod.toString(),
      true
    );
    setFieldTouched(fields.shippingMethod.name, true, false);
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
            label={formatMessage(messages.loadingShippingMethods)}
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
