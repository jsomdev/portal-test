import React from 'react';

import { IntlShape, defineMessages } from 'react-intl';

import { IChoiceGroupOption, Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { ChoiceGroupOptionContainer } from '@widgets/checkout/shared/choiceGroupOptionWrapper';
import { StepFields } from '@widgets/checkout/shared/types';
import { BillingAddressFormGroup } from '@widgets/checkout/steps/step-3-payment/billingAddressFormGroup';
import { Step3FormData } from '@widgets/checkout/steps/step-3-payment/step-3-payment';

const messages = defineMessages({
  sameAsShipping: {
    id: messageIds.pages.checkout.payment.fields.billingAddressChoice
      .sameAsShipping,
    defaultMessage: 'Same as shipping address'
  },
  differentFromShipping: {
    id: messageIds.pages.checkout.payment.fields.billingAddressChoice
      .differentFromShipping,
    defaultMessage: 'Use a different billing address'
  }
});
export const getBillingAddressOptions: (
  intl: IntlShape,
  fields: Pick<
    StepFields<Step3FormData>,
    | 'billingCountry'
    | 'billingAddress'
    | 'billingCity'
    | 'billingState'
    | 'billingPostalCode'
  >
) => IChoiceGroupOption[] = (intl, fields) => [
  {
    key: 'yes',
    text: intl.formatMessage(messages.sameAsShipping),
    value: 'yes',
    onRenderField: (props, render): JSX.Element => {
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
            <BillingAddressFormGroup
              props={props}
              render={render}
              fields={fields}
            />
          </ChoiceGroupOptionContainer>
        </Stack>
      );
    }
  }
];
