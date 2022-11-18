import React from 'react';

import { IntlShape, defineMessages } from 'react-intl';

import { IChoiceGroupOption, Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { ChoiceGroupOptionContainer } from '@widgets/checkout-new/shared/choiceGroupOptionWrapper';
import { StepFields } from '@widgets/checkout-new/shared/types';
import { BillingContactFormGroup } from '@widgets/checkout-new/steps/step-3-payment/billingContactFormGroup';
import { Step3FormData } from '@widgets/checkout-new/steps/step-3-payment/step-3-payment';

const messages = defineMessages({
  sameAsShipping: {
    id: messageIds.pages.checkout.payment.fields.billingContactChoice
      .sameAsShipping,
    defaultMessage: 'Same as shipping address'
  },
  differentFromShipping: {
    id: messageIds.pages.checkout.payment.fields.billingContactChoice
      .differentFromShipping,
    defaultMessage: 'Use a different billing address'
  }
});

export const getBillingContactOptions: (
  intl: IntlShape,
  fields: StepFields<Step3FormData>
) => IChoiceGroupOption[] = (intl, fields) => [
  {
    key: 'yes',
    text: intl.formatMessage(messages.sameAsShipping),
    value: 'yes',
    onRenderField: (props, render) => {
      return (
        <Stack>
          <ChoiceGroupOptionContainer props={props}>
            <Stack.Item>{render && render(props)}</Stack.Item>
          </ChoiceGroupOptionContainer>
        </Stack>
      );
    }
  },
  {
    key: 'no',
    text: intl.formatMessage(messages.differentFromShipping),
    value: 'no',
    onRenderField: (props, render) => {
      if (!render) {
        return null;
      }
      return (
        <Stack>
          <ChoiceGroupOptionContainer props={props}>
            <BillingContactFormGroup
              fields={fields}
              props={props}
              render={render}
            />
          </ChoiceGroupOptionContainer>
        </Stack>
      );
    }
  }
];
