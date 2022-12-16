import React, { useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import { useIntl } from 'react-intl';

import { Stack, useTheme } from '@fluentui/react';
import { getTouchedFields } from '@widgets/checkout/shared/getTouchedFields';
import { AdditionalInformationFormGroup } from '@widgets/checkout/steps/step-4-overview/additionalInformationGroup';
import { TermsAndConditionsGroup } from '@widgets/checkout/steps/step-4-overview/termsAndConditionsGroup';
import { RequestForQuoteFormValues } from '@widgets/request-for-quote/shared/types';

import { RequestForQuoteOverview } from './overview/requestForQuoteOverview';
import { Step2FormData, getFields, validation } from './step-2-overview.helper';

const defaultValues: Step2FormData = {
  additionalInformation: '',
  acceptedTerms: false
};

export type Step2OverviewProps = {
  values: Step2FormData;
  formRef: React.RefObject<FormikProps<Step2FormData>> | undefined;
  requestForQuoteValues: RequestForQuoteFormValues;
};

export const Step2Overview: React.FC<Step2OverviewProps> = ({
  values,
  formRef
}) => {
  const { spacing } = useTheme();
  const intl = useIntl();

  const initialTouched = useMemo(() => {
    return getTouchedFields(values);
  }, [values]);

  const fields = useMemo(() => getFields(intl), [intl]);

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }}>
      <Stack.Item>
        <RequestForQuoteOverview />
      </Stack.Item>
      <Formik<Step2FormData>
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
  Component: Step2Overview,
  defaultValues,
  validation
};
