import React from 'react';

import { useIntl } from 'react-intl';

import { FormikCheckbox } from '@components/formik-wrappers/formikCheckbox';
import { Link, Stack, Text, getTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { StepFields } from '@widgets/checkout/shared/types';
import { Step4FormData } from '@widgets/checkout/steps/step-4-overview/step-4-overview';

const messages = {
  acceptedTerms: {
    id: messageIds.pages.checkout.overview.fields.acceptedTerms,
    defaultMessage: 'I accept the terms and conditions'
  },
  termsAndConditions: {
    id: messageIds.pages.checkout.overview.termsAndConditions,
    defaultMessage: 'Terms and Conditions'
  },
  privacyPolicy: {
    id: messageIds.pages.checkout.overview.privacyPolicy,
    defaultMessage: 'Privacy Policy'
  }
};

type TermsAndConditionsGroupProps = {
  fields: Pick<StepFields<Step4FormData>, 'acceptedTerms'>;
};

export const TermsAndConditionsGroup: React.FC<
  TermsAndConditionsGroupProps
> = ({ fields }) => {
  const { spacing } = getTheme();
  const { formatMessage } = useIntl();
  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <FormikCheckbox
        name={fields.acceptedTerms.name}
        onRenderLabel={() => (
          <Text>
            {formatMessage(messages.acceptedTerms, {
              termsAndConditions: (
                <Link
                  target="_blank"
                  href="https://www.spray.com/legal/legal-information"
                >
                  {formatMessage(messages.termsAndConditions)}
                </Link>
              ),
              privacyPolicy: (
                <Link
                  target="_blank"
                  href="https://www.spray.com/legal/privacy-statement"
                >
                  {formatMessage(messages.privacyPolicy)}
                </Link>
              )
            })}
          </Text>
        )}
      />
    </Stack>
  );
};
