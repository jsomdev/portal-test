import React from 'react';

import { IChoiceGroupOption } from '@fluentui/react';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';

import { ChoiceGroupOptionContainer } from '../shared/choiceGroupOptionWrapper';
import { CreditCardPaymentFormGroup } from './creditCardPaymentFormGroup';
import { PurchaseOrderFormGroup } from './purchaseOrderFormGroup';

export function getPaymentMethodOptions(
  paymentMethod: PaymentMethod | undefined | null
): IChoiceGroupOption[] {
  const purchaseOrderOption: IChoiceGroupOption = {
    key: PaymentMethod.PURCHASE_ORDER,
    text: 'Purchase order',
    value: PaymentMethod.PURCHASE_ORDER,
    onRenderField: (props, render) => {
      if (!render) {
        return null;
      }
      return (
        <ChoiceGroupOptionContainer props={props}>
          <PurchaseOrderFormGroup props={props} render={render} />
        </ChoiceGroupOptionContainer>
      );
    }
  };

  const creditCardOption: IChoiceGroupOption = {
    key: PaymentMethod.CREDIT_CARD,
    text: 'Credit card',
    value: PaymentMethod.CREDIT_CARD,
    onRenderField: (props, render) => {
      if (!render) {
        return null;
      }
      return (
        <ChoiceGroupOptionContainer props={props}>
          <CreditCardPaymentFormGroup props={props} render={render} />
        </ChoiceGroupOptionContainer>
      );
    }
  };

  if (paymentMethod === PaymentMethod.CREDIT_CARD) {
    return [creditCardOption];
  }

  if (paymentMethod === PaymentMethod.PURCHASE_ORDER) {
    return [purchaseOrderOption];
  }

  return [creditCardOption, purchaseOrderOption];
}
