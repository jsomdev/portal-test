import React, { useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import { useIntl } from 'react-intl';
import { InferType } from 'yup';

import { Stack, useTheme } from '@fluentui/react';
import { getTouchedFields } from '@widgets/checkout/shared/getTouchedFields';
import { BillingAddressChoiceGroup } from '@widgets/checkout/steps/step-3-payment/billingAddressChoiceGroup';
import { BillingContactChoiceGroup } from '@widgets/checkout/steps/step-3-payment/billingContactChoiceGroup';
import { PaymentMethodChoiceGroup } from '@widgets/checkout/steps/step-3-payment/paymentMethodChoiceGroup';
import {
  getFields,
  validation
} from '@widgets/checkout/steps/step-3-payment/step-3-payment.helper';

export type Step3FormData = InferType<typeof validation> & {
  referenceDocumentFile: File | undefined;
};

const defaultValues: Step3FormData = {
  paymentMethod: '',
  shippingAddressAsBillingAddress: 'yes',
  shippingContactAsBillingContact: 'yes',

  creditCardNumber: '',
  creditCardName: '',
  creditCardExpiration: '',
  creditCardCVV: '',

  billingFirstName: '',
  billingLastName: '',
  billingCompany: '',
  billingPhone: '',

  billingAddress: '',
  billingCity: '',
  billingState: '',
  billingCountry: '',
  billingPostalCode: '',
  referenceNumber: '',
  referenceDocumentFile: undefined,
  referenceDocument: ''
};

export type Step3Props = {
  values: Step3FormData;
  formRef: React.RefObject<FormikProps<Step3FormData>> | undefined;
};

export const Step3Payment: React.FC<Step3Props> = ({ values, formRef }) => {
  const initialTouched = useMemo(() => {
    return getTouchedFields(values);
  }, [values]);

  const { spacing } = useTheme();
  const intl = useIntl();
  const fields = getFields(intl);

  return (
    <Formik<Step3FormData>
      innerRef={formRef}
      initialValues={values}
      initialTouched={initialTouched}
      validationSchema={validation}
      enableReinitialize={true}
      onSubmit={() => {
        /* do nothing */
      }}
    >
      <Form>
        <Stack tokens={{ childrenGap: spacing.l1 }}>
          <Stack.Item>
            <PaymentMethodChoiceGroup fields={fields} />
          </Stack.Item>
          <Stack.Item>
            <BillingContactChoiceGroup fields={fields} />
          </Stack.Item>
          <Stack.Item>
            <BillingAddressChoiceGroup fields={fields} />
          </Stack.Item>
        </Stack>
      </Form>
    </Formik>
  );
};

export default {
  Component: Step3Payment,
  defaultValues,
  validation
};
