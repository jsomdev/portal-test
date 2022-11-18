import React, { useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { InferType } from 'yup';

import { Stack, useTheme } from '@fluentui/react';
import { CheckoutFormValues } from '@widgets/checkout-new/checkoutForm.types';
import { getTouchedFields } from '@widgets/checkout-new/shared/getTouchedFields';
import { CheckoutOverview } from '@widgets/checkout-new/steps/step-4-overview/overview/checkoutOverview';

const validation = yup.object({
  additionalInformation: yup.string(),
  acceptedTerms: yup.boolean().oneOf([true], () => ({
    messageId: 'You must accept the terms and conditions'
  }))
});

export type Step4FormData = InferType<typeof validation>;

const defaultValues: Step4FormData = {
  additionalInformation: '',
  acceptedTerms: false
};

export type Step4Props = {
  values: Step4FormData;
  formRef: React.RefObject<FormikProps<Step4FormData>> | undefined;
  checkoutValues: CheckoutFormValues;
};

export const Step4Overview: React.FC<Step4Props> = ({ values, formRef }) => {
  const { spacing } = useTheme();
  const initialTouched = useMemo(() => {
    return getTouchedFields(values);
  }, [values]);

  return (
    <Formik<Step4FormData>
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
            <CheckoutOverview />
          </Stack.Item>
          {/* <Stack.Item>
            <AdditionalInformationFormGroup />
          </Stack.Item>
          <Stack.Item>
            <TermsAndConditionsGroup />
          </Stack.Item>*/}
        </Stack>
      </Form>
    </Formik>
  );
};

export default {
  Component: Step4Overview,
  defaultValues,
  validation
};
