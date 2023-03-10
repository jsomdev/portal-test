import React, { useMemo } from 'react';

import { useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { FormikChoiceGroup } from '@components/formik-wrappers/formikChoiceGroup';
import { IChoiceGroupStyles, Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { StepFields } from '@widgets/checkout/shared/types';
import { getBillingAddressOptions } from '@widgets/checkout/steps/step-3-payment/billingAddressChoiceGroup.helper';
import { Step3FormData } from '@widgets/checkout/steps/step-3-payment/step-3-payment';

const messages = defineMessages({
  billingAddress: {
    id: messageIds.pages.checkout.payment.billingAddress,
    defaultMessage: 'Billing Address'
  }
});

type BillingAddressChoiceGroupProps = {
  fields: Pick<
    StepFields<Step3FormData>,
    | 'shippingAddressAsBillingAddress'
    | 'billingCountry'
    | 'billingAddress'
    | 'billingCity'
    | 'billingState'
    | 'billingPostalCode'
  >;
};

export const BillingAddressChoiceGroup: React.FC<
  BillingAddressChoiceGroupProps
> = ({ fields }) => {
  const intl = useIntl();
  const { values } = useFormikContext<Step3FormData>();

  const billingAddressOptions = useMemo(
    () => getBillingAddressOptions(intl, fields),
    [fields, intl]
  );

  const styles: IChoiceGroupStyles = {
    root: {
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

  return (
    <Stack>
      <Stack.Item>
        <CheckoutFormGroupTitle
          title={intl.formatMessage(messages.billingAddress)}
        />
      </Stack.Item>
      <Stack.Item>
        <FormikChoiceGroup
          name={fields.shippingAddressAsBillingAddress.name}
          options={billingAddressOptions}
          styles={styles}
          defaultValue={values.shippingAddressAsBillingAddress}
          defaultSelectedKey={values.shippingAddressAsBillingAddress}
        />
      </Stack.Item>
    </Stack>
  );
};
