import React from 'react';

import { IChoiceGroupOption, Stack } from '@fluentui/react';

import { ChoiceGroupOptionContainer } from '../shared/choiceGroupOptionWrapper';
import { BillingAddressFormGroup } from './billingAddressFormGroup';
import { BillingContactFormGroup } from './billingContactFormGroup';

export const billingAddressOptions: IChoiceGroupOption[] = [
  {
    key: 'yes',
    text: 'Same as shipping address',
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
    text: 'Use a different billing address',
    value: 'no',
    onRenderField: (props, render) => {
      if (!render) {
        return null;
      }
      return (
        <Stack>
          <ChoiceGroupOptionContainer props={props}>
            <BillingAddressFormGroup props={props} render={render} />
          </ChoiceGroupOptionContainer>
        </Stack>
      );
    }
  }
];

export const billingContactOptions: IChoiceGroupOption[] = [
  {
    key: 'yes',
    text: 'Same as shipping contact',
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
    text: 'Use a different billing contact',
    value: 'no',
    onRenderField: (props, render) => {
      return (
        <Stack>
          <ChoiceGroupOptionContainer props={props}>
            <BillingContactFormGroup props={props} render={render} />
          </ChoiceGroupOptionContainer>
        </Stack>
      );
    }
  }
];
