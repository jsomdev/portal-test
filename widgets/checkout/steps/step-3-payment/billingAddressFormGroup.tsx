import React from 'react';

import {
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IRenderFunction,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import {
  AddressFormGroup,
  AddressFormGroupFields
} from '@widgets/checkout/shared/addressFormGroup';
import { StepFields } from '@widgets/checkout/shared/types';
import { Step3FormData } from '@widgets/checkout/steps/step-3-payment/step-3-payment';
import { mediaQueryFrom } from '@widgets/media-queries';

export const BillingAddressFormGroup: React.FC<{
  props: (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined;
  render: IRenderFunction<
    (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined
  >;
  fields: Pick<
    StepFields<Step3FormData>,
    | 'billingCountry'
    | 'billingAddress'
    | 'billingCity'
    | 'billingState'
    | 'billingPostalCode'
  >;
}> = ({ props, render, fields }) => {
  const { spacing } = useTheme();

  const styles: IStackStyles = {
    root: {
      ...mediaQueryFrom('tablet', {
        paddingLeft: '26px'
      })
    }
  };

  const addressFields: AddressFormGroupFields = {
    country: fields.billingCountry,
    address: fields.billingAddress,
    city: fields.billingCity,
    state: fields.billingState,
    postalCode: fields.billingPostalCode
  };
  const isChecked =
    props === undefined || !('checked' in props) ? false : props.checked;

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack horizontal wrap={false} horizontalAlign="space-between">
        <Stack.Item>{render && render(props)}</Stack.Item>
      </Stack>
      {isChecked && (
        <Stack
          styles={styles}
          tokens={{ childrenGap: spacing.s1, padding: `0 0 ${spacing.l1}` }}
        >
          <AddressFormGroup fields={addressFields} />
        </Stack>
      )}
    </Stack>
  );
};
