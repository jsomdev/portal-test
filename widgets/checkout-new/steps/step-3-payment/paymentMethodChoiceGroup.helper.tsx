import React from 'react';

import { IntlShape, defineMessages } from 'react-intl';

import { IChoiceGroupOption } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { CreditCardPaymentFormGroup } from '@widgets/checkout-new/steps/step-3-payment/creditCardPaymentFormGroup';
import { Step3FormData } from '@widgets/checkout-new/steps/step-3-payment/step-3-payment';
import { PurchaseOrderFormGroup } from '@widgets/checkout/checkout-form-groups/purchaseOrderFormGroup';
import { ChoiceGroupOptionContainer } from '@widgets/checkout/shared/choiceGroupOptionWrapper';

const messages = defineMessages({
  creditCard: {
    id: messageIds.pages.checkout.payment.creditCard,
    defaultMessage: 'Credit Card'
  },
  purchaseOrder: {
    id: messageIds.pages.checkout.payment.purchaseOrder,
    defaultMessage: 'Purchase Order'
  }
});
export function getPaymentMethodOptions(
  paymentMethod: PaymentMethod | undefined | null,
  fields: StepFields<
    Pick<
      Step3FormData,
      | 'creditCardNumber'
      | 'creditCardName'
      | 'creditCardCVV'
      | 'creditCardExpiration'
    >
  >,
  intl: IntlShape
): IChoiceGroupOption[] {
  const purchaseOrderOption: IChoiceGroupOption = {
    key: PaymentMethod.PURCHASE_ORDER,
    text: intl.formatMessage(messages.purchaseOrder),
    value: PaymentMethod.PURCHASE_ORDER,
    onRenderField: (props, render) => {
      if (!render) {
        return null;
      }
      return (
        <ChoiceGroupOptionContainer props={props}>
          <PurchaseOrderFormGroup props={props} render={render} />
          {/*TODO ward handle this case */}
        </ChoiceGroupOptionContainer>
      );
    }
  };

  const creditCardOption: IChoiceGroupOption = {
    key: PaymentMethod.CREDIT_CARD,
    text: intl.formatMessage(messages.creditCard),
    value: PaymentMethod.CREDIT_CARD,
    onRenderField: (props, render) => {
      if (!render) {
        return null;
      }
      return (
        <ChoiceGroupOptionContainer props={props}>
          <CreditCardPaymentFormGroup
            fields={fields}
            props={props}
            render={render}
          />
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
