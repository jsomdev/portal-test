import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

import { FormikProps } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { ResponsiveStack } from '@components/stacks/responsiveStack';
import {
  IStackItemStyles,
  IStackStyles,
  Stack,
  getTheme
} from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { getValidPostalAddressFromUserAddress } from '@providers/address-book/addressBookHelper';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import { Order } from '@services/portal-api';
import { OrderPost } from '@services/portal-api/base/types';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import { scrollToTop } from '@utilities/scrollToTop';
import { CheckoutSummary } from '@widgets/checkout/checkout-summary/checkoutSummary';
import { CheckoutActions } from '@widgets/checkout/checkoutActions';
import {
  getCurrentStep,
  mapFormFieldsToOrderPost
} from '@widgets/checkout/checkoutForm.helper';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { CheckoutFormErrorBox } from '@widgets/checkout/shared/checkoutFormErrorBox';
import { CheckoutFormValues } from '@widgets/checkout/shared/types';
import { Steps } from '@widgets/checkout/stepper/steps';
import step1Details from '@widgets/checkout/steps/step-1-details/step-1-details';
import step2ShippingMethod from '@widgets/checkout/steps/step-2-shipping-method/step-2-shipping-method';
import step3Payment from '@widgets/checkout/steps/step-3-payment/step-3-payment';
import step4Overview from '@widgets/checkout/steps/step-4-overview/step-4-overview';
import { Environment } from '@widgets/environment/environment';
import { ClientEnvironment } from '@widgets/environment/environment.types';
import {
  mediaQueryFrom,
  useBetweenMobileAndTablet
} from '@widgets/media-queries';

interface CheckoutFormStyles {
  container: IStackStyles;
  leftColumn: IStackItemStyles;
  rightColumn: IStackItemStyles;
}

const messages = defineMessages({
  completePayment: {
    id: messageIds.pages.checkout.actions.completePayment,
    defaultMessage: 'Confirm and pay'
  },
  completePurchaseOrder: {
    id: messageIds.pages.checkout.actions.completePurchaseOrder,
    defaultMessage: 'Confirm and submit'
  }
});

const defaultValues: CheckoutFormValues = {
  details: step1Details.defaultValues,
  shippingMethod: step2ShippingMethod.defaultValues,
  payment: step3Payment.defaultValues,
  overview: step4Overview.defaultValues
};

export const CheckoutForm: React.FC<{
  onCreateOrder: (order: OrderPost) => Promise<Order>;
}> = ({ onCreateOrder }) => {
  const { formatMessage } = useIntl();
  const {
    totalCost,
    creditCardIssuer,
    orderTaxAmountStatus,
    formValues,
    setFormValues,
    steps,
    stepper
  } = useCheckout();

  //allows us the access the Formik methods of the form of the current step
  //not possible to use a specific type here, because the type of the form depends on the current step
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeFormRef = useRef<FormikProps<any>>(null);
  const { spacing } = getTheme();
  const isMobile = useBetweenMobileAndTablet();
  const { billingAddress, shippingAddress } = useContext(AddressBookContext);
  const { me } = useMe();

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  //set default values for checkout
  useEffect(() => {
    if (!isInitialLoad) {
      return;
    } else {
      setIsInitialLoad(false);
    }

    const shippingAsBilling: boolean =
      !!billingAddress?.id &&
      !!shippingAddress?.id &&
      shippingAddress?.id === billingAddress?.id;

    const paymentMethod: PaymentMethod =
      me?.account?.paymentMethod === PaymentMethod.CREDIT_CARD
        ? PaymentMethod.CREDIT_CARD
        : PaymentMethod.PURCHASE_ORDER;

    const address = getValidPostalAddressFromUserAddress(
      !shippingAsBilling ? billingAddress : shippingAddress
    );

    setFormValues({
      ...defaultValues,
      payment: {
        ...defaultValues.payment,
        billingAddress: address.lines?.[0] || '',
        billingCity: address.city || '',
        billingCountry: address.country || '',
        billingState: address.region || '',
        billingPostalCode: address.postalCode || '',
        paymentMethod,
        referenceNumber: '',
        shippingAddressAsBillingAddress: shippingAsBilling ? 'yes' : 'no',
        shippingContactAsBillingContact: 'yes',
        billingCompany: ''
      }
    });
  }, [
    billingAddress,
    formValues,
    me?.account?.paymentMethod,
    shippingAddress,
    isInitialLoad,
    setFormValues
  ]);

  const { currentStep, currentStepKey, isLastStep } = getCurrentStep(
    steps,
    stepper.currentIndex
  );

  const styles: CheckoutFormStyles = {
    container: {
      root: { marginBottom: '100px' }
    },
    leftColumn: {
      root: { flex: 5 }
    },
    rightColumn: {
      root: {
        flex: 2,
        paddingTop: spacing.l2,
        ...mediaQueryFrom('tablet', {
          paddingTop: 0,
          paddingLeft: spacing.l2
        })
      }
    }
  };

  const onFormSubmit = useCallback(
    (formValues: CheckoutFormValues): void => {
      scrollToTop('body');

      if (me?.accountId) {
        const order: OrderPost = mapFormFieldsToOrderPost(
          formValues,
          totalCost,
          creditCardIssuer
        );
        onCreateOrder(order).catch(e => {
          console.log(e);
        });
      }
    },
    [me?.accountId, totalCost, creditCardIssuer, onCreateOrder]
  );

  const onProceed = useCallback(async () => {
    if (activeFormRef.current && currentStep) {
      await activeFormRef.current.validateForm();
      const isValid = activeFormRef.current.isValid;

      if (isValid && formValues) {
        setFormValues({
          ...formValues,
          [currentStepKey]: activeFormRef.current.values
        });

        if (isLastStep) {
          onFormSubmit(formValues);
        } else {
          await activeFormRef.current.submitForm();
          stepper.next();
          scrollToTop('body');
        }
      } else {
        activeFormRef.current.submitForm();
      }
    }
  }, [
    currentStep,
    currentStepKey,
    formValues,
    isLastStep,
    onFormSubmit,
    setFormValues,
    stepper
  ]);

  const onPrevious = useCallback(() => {
    stepper.previous();
    scrollToTop('body');
  }, [stepper]);

  //don't show anything yet when default values for the form are still being set
  if (!formValues) {
    return null;
  }
  return (
    <ResponsiveStack styles={styles.container} horizontalAlign="space-between">
      <Stack.Item styles={styles.leftColumn}>
        <Stack tokens={{ childrenGap: spacing.l1 }}>
          <Steps
            currentIndex={stepper.currentIndex}
            steps={stepper.steps}
            navigateToStep={stepper.navigateToStep}
          />
          {!currentStep ? (
            <Environment target={ClientEnvironment.Develop}>
              Step is missing Component in default export
            </Environment>
          ) : (
            <currentStep.Component
              key={currentStep.index}
              formRef={activeFormRef}
              values={
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                formValues[currentStepKey] as any
              }
              checkoutValues={formValues}
            />
          )}
          <CheckoutFormErrorBox />
          <CheckoutActions
            isLastStep={isLastStep}
            onProceedClick={onProceed}
            onPreviousClick={onPrevious}
            disableSubmit={orderTaxAmountStatus === 'loading'}
          />
        </Stack>
      </Stack.Item>
      {(!isMobile || isLastStep) && (
        <Stack.Item styles={styles.rightColumn}>
          <CheckoutSummary
            onPrevious={onPrevious}
            onProceed={onProceed}
            showSubmitButton={isLastStep}
            submitButtonText={
              formValues.payment.paymentMethod === PaymentMethod.CREDIT_CARD
                ? formatMessage(messages.completePayment)
                : formatMessage(messages.completePurchaseOrder)
            }
          />
        </Stack.Item>
      )}
    </ResponsiveStack>
  );
};
