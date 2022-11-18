import React, { useMemo } from 'react';

import { Form, Formik } from 'formik';
import { useIntl } from 'react-intl';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import {
  IComboBoxOption,
  IComboBoxStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';

import { mapShippingCostAmountToShippingMethodComboBoxOptions } from './shippingMethodSummary.helper';

const messages = {
  shippingMethod: 'Shipping Method'
};

export const ShippingMethodSummary: React.FC = () => {
  const intl = useIntl();
  const { shippingCostData, setSelectedShippingOption, formValues } =
    useCheckout();
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
              <Formik
                initialValues={{
                  shippingMethod: formValues?.shippingMethod.shippingMethod
                }}
                initialTouched={[{ shippingMethod: true }]}
                onSubmit={() => {
                  /* do nothing */
                }}
              >
                <Form>
                  <FormikComboBox
                    getSelectedKey={getShipmentOptionKey}
                    name={'shippingMethod'}
                    options={shippingMethodOptions}
                    useComboBoxAsMenuWidth
                    styles={styles}
                    validationProps={{ disabled: true }}
                    required={true}
                    allowFreeform={false}
                    onChange={(ev, changedOption) => {
                      const shippingMethod = shippingCostData?.find(option => {
                        return option.shippingMethod === changedOption?.key;
                      });
                      if (shippingMethod) {
                        setSelectedShippingOption(shippingMethod);
                      }
                    }}
                  />
                </Form>
              </Formik>
            </Stack.Item>
          </Stack>
        </OverviewGroupContainer>
      </Stack.Item>
    </Stack>
  );
};
