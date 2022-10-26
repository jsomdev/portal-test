import React from 'react';

import { FormikCheckbox } from '@components/formik-wrappers/formikCheckbox';
import { Link, Stack, Text, getTheme } from '@fluentui/react';

import { checkoutFormOverviewFields } from '../checkout-form/checkoutFormHelper';

const messages = {
  terms: 'I agree with the ',
  and: ' and the ',
  termsAndConditionsLink: 'terms and conditions',
  privacyPolicyLink: 'privacy policy'
};

export const TermsAndConditionsGroup: React.FC = () => {
  const { spacing } = getTheme();
  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <FormikCheckbox
        name={checkoutFormOverviewFields.acceptedTerms.name}
        label=""
        onRenderLabel={() => (
          <Text>
            {messages.terms}
            <Link
              target="_blank"
              href="https://www.spray.com/legal/legal-information"
            >
              {messages.termsAndConditionsLink}
            </Link>
            {messages.and}
            <Link
              target="_blank"
              href="https://www.spray.com/legal/privacy-statement"
            >
              {messages.privacyPolicyLink}
            </Link>
            {`.`}
          </Text>
        )}
      />
    </Stack>
  );
};
