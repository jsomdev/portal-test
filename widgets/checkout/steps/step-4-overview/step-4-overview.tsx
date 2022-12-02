import React, { useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import { defineMessages, useIntl } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import * as yup from 'yup';
import { InferType } from 'yup';

import { Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { getTouchedFields } from '@widgets/checkout/shared/getTouchedFields';
import { CheckoutFormValues, StepFields } from '@widgets/checkout/shared/types';
import { AdditionalInformationFormGroup } from '@widgets/checkout/steps/step-4-overview/additionalInformationGroup';
import { CheckoutOverview } from '@widgets/checkout/steps/step-4-overview/overview/checkoutOverview';
import { TermsAndConditionsGroup } from '@widgets/checkout/steps/step-4-overview/termsAndConditionsGroup';

const validation = yup.object({
  additionalInformation: yup.string(),
  acceptedTerms: yup.boolean().oneOf([true], () => ({
    messageId: messageIds.pages.checkout.overview.fields.acceptedTermsRequired
  }))
});

export type Step4FormData = InferType<typeof validation>;

const defaultValues: Step4FormData = {
  additionalInformation: '',
  acceptedTerms: false
};

const messages = defineMessages({
  acceptedTerms: {
    id: messageIds.pages.checkout.overview.fields.acceptedTerms,
    defaultMessage: 'I accept the terms and conditions'
  },
  additionalInformation: {
    id: messageIds.pages.checkout.overview.fields.additionalInformation,
    defaultMessage: 'Additional Information'
  },
  additionalInformationPlaceholder: {
    id: messageIds.pages.checkout.overview.fields
      .additionalInformationPlaceholder,
    defaultMessage: 'Add any additional comments, request or remarks'
  }
});

export const getFields = (intl: IntlShape): StepFields<Step4FormData> => {
  const { formatMessage } = intl;
  return {
    additionalInformation: {
      name: 'additionalInformation',
      label: formatMessage(messages.additionalInformation),
      placeholder: formatMessage(messages.additionalInformationPlaceholder)
    },
    acceptedTerms: {
      name: 'acceptedTerms',
      label: formatMessage(messages.acceptedTerms)
    }
  };
};

export type Step4Props = {
  values: Step4FormData;
  formRef: React.RefObject<FormikProps<Step4FormData>> | undefined;
  checkoutValues: CheckoutFormValues;
};

export const Step4Overview: React.FC<Step4Props> = ({ values, formRef }) => {
  const { spacing } = useTheme();
  const intl = useIntl();

  const initialTouched = useMemo(() => {
    return getTouchedFields(values);
  }, [values]);

  const fields = useMemo(() => getFields(intl), [intl]);

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }}>
      <Stack.Item>
        <CheckoutOverview />
      </Stack.Item>
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
              <AdditionalInformationFormGroup fields={fields} />
            </Stack.Item>
            <Stack.Item>
              <TermsAndConditionsGroup fields={fields} />
            </Stack.Item>
          </Stack>
        </Form>
      </Formik>
    </Stack>
  );
};

export default {
  Component: Step4Overview,
  defaultValues,
  validation
};
