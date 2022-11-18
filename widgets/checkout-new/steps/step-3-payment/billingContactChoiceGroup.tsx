import React, { useMemo } from 'react';

import { useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { FormikChoiceGroup } from '@components/formik-wrappers/formikChoiceGroup';
import { IChoiceGroupStyles, Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { CheckoutFormGroupTitle } from '@widgets/checkout-new/shared/checkoutFormGroupTitle';
import { StepFields } from '@widgets/checkout-new/shared/types';
import { getBillingContactOptions } from '@widgets/checkout-new/steps/step-3-payment/billingContactChoiceGroup.helper';
import { Step3FormData } from '@widgets/checkout-new/steps/step-3-payment/step-3-payment';

const messages = defineMessages({
  billingContact: {
    id: messageIds.pages.checkout.payment.billingContact,
    defaultMessage: 'Billing Contact'
  }
});

type BillingContactChoiceGroupProps = {
  fields: StepFields<Step3FormData>;
};

export const BillingContactChoiceGroup: React.FC<
  BillingContactChoiceGroupProps
> = ({ fields }) => {
  const intl = useIntl();
  const { values } = useFormikContext<Step3FormData>();

  const billingContactOptions = useMemo(
    () => getBillingContactOptions(intl, fields),
    [intl]
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
          title={intl.formatMessage(messages.billingContact)}
        />
      </Stack.Item>
      <Stack.Item>
        <FormikChoiceGroup
          name={fields.shippingContactAsBillingContact.name}
          options={billingContactOptions}
          styles={styles}
          defaultValue={values.shippingContactAsBillingContact}
          defaultSelectedKey={values.shippingContactAsBillingContact}
        />
      </Stack.Item>
    </Stack>
  );
};
