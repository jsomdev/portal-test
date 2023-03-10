import React, { useMemo } from 'react';

import { Form, Formik } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import {
  IComboBoxOption,
  IComboBoxStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout/shared/overviewGroupContainer';

import { mapShippingCostAmountToShippingMethodComboBoxOptions } from './shippingMethodSummary.helper';

const messages = defineMessages({
  shippingMethod: {
    id: messageIds.pages.checkout.shippingMethods.shippingMethodLabel,
    defaultMessage: 'Shipping Contact'
  }
});

export const ShippingMethodSummary: React.FC = () => {
  const intl = useIntl();
  const { shippingCostData, setSelectedShippingOption, formValues } =
    useCheckout();
  const { spacing } = useTheme();

  const shippingMethodOptions: IComboBoxOption[] = useMemo(() => {
    return mapShippingCostAmountToShippingMethodComboBoxOptions(
      shippingCostData || [],
      intl
    );
  }, [shippingCostData, intl]);

  const styles: Partial<IComboBoxStyles> = {
    root: {
      width: 'auto'
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }}>
      <Stack.Item>
        <OverviewGroupContainer
          text={intl.formatMessage(messages.shippingMethod)}
        >
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
