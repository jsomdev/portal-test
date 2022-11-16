import React, { useCallback, useContext, useEffect, useMemo } from 'react';

import { Form, Formik, FormikTouched, useFormikContext } from 'formik';
import { useRouter } from 'next/router';

import { StepContent } from '@components/stepper/stepContent';
import { Stepper } from '@components/stepper/stepper';
import { Steps } from '@components/stepper/steps';
import { Stack, useTheme } from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { getValidPostalAddressFromUserAddress } from '@providers/address-book/addressBookHelper';
import { useMe } from '@providers/user/userContext';
import { PostalAddress } from '@services/portal-api';
import { OrderPost } from '@services/portal-api/base/types';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';
import { BillingAddressChoiceGroup } from '@widgets/checkout/checkout-form-groups/billingAddressChoiceGroup';
import { BillingContactChoiceGroup } from '@widgets/checkout/checkout-form-groups/billingContactChoiceGroup';
import { OrderContactFormGroup } from '@widgets/checkout/checkout-form-groups/orderContactFormGroup';
import { PaymentMethodChoiceGroup } from '@widgets/checkout/checkout-form-groups/paymentMethodChoiceGroup';
import { ShippingAddressFormGroup } from '@widgets/checkout/checkout-form-groups/shippingAddressFormGroup';
import { ShippingContactFormGroup } from '@widgets/checkout/checkout-form-groups/shippingContactFormGroup';
import { ShippingMethodChoiceGroup } from '@widgets/checkout/checkout-form-groups/shippingMethodChoiceGroup';
import { TermsAndConditionsGroup } from '@widgets/checkout/checkout-form-groups/termsAndConditionsGroup';
import { CheckoutFormOverview } from '@widgets/checkout/checkout-form-overview/checkoutFormOverview';
import { CheckoutSummary } from '@widgets/checkout/checkout-summary/checkoutSummary';
import { mapFormFieldsToOrderPost } from '@widgets/checkout/checkoutHelper';
import { AdditionalInformationFormGroup } from '@widgets/forms/additionalInformationGroup';
import { CheckoutFormFooterStepActions } from '@widgets/forms/checkoutFormFooterStepActions';
import { FormStepActions } from '@widgets/forms/formStepActions';

import { CheckoutFormContext } from '../shared/checkoutFormContext';
import { CheckoutFormErrorBox } from '../shared/checkoutFormErrorBox';
import {
  CheckoutDetailsFormValues,
  CheckoutFormStyles,
  CheckoutFormValues,
  CheckoutPaymentMethodFormValues
} from './checkoutForm.types';
import {
  checkoutFormFields,
  checkoutFormStepLabels,
  checkoutFormValues,
  getCheckoutFieldNames
} from './checkoutFormHelper';
import { checkoutFormValidation } from './checkoutFormValidation';

const ContentClearer: React.FC = () => {
  const { values, setFieldValue, setFieldTouched } =
    useFormikContext<CheckoutFormValues>();
  useEffect(() => {
    setFieldValue(checkoutFormFields.shippingMethod.name, undefined, true);
    setFieldTouched(checkoutFormFields.shippingMethod.name, true, true);
  }, [setFieldTouched, setFieldValue, values.state]);

  return <></>;
};

export const CheckoutForm: React.FC<{
  onSubmit: (order: OrderPost) => Promise<void>;
}> = ({ onSubmit }) => {
  const { spacing } = useTheme();
  const { totalCost, creditCardIssuer, orderTaxAmountStatus } =
    useContext(CheckoutFormContext);
  const { billingAddress, shippingAddress } = useContext(AddressBookContext);
  const { me } = useMe();
  const { push } = useRouter();

  const onFormSubmit = useCallback(
    (formValues: CheckoutFormValues): void => {
      scrollToTop('body');

      if (me?.accountId) {
        const order: OrderPost = mapFormFieldsToOrderPost(
          formValues,
          totalCost,
          creditCardIssuer
        );
        onSubmit(order).catch(e => {
          console.log(e);
        });
      }
    },
    [me, totalCost, onSubmit, creditCardIssuer]
  );

  const controlledPaymentMethodFormStepValues: Partial<CheckoutPaymentMethodFormValues> =
    useMemo(() => {
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

      return {
        billingAddress: address.lines?.[0] || '',
        billingCity: address.city || '',
        billingCountry: address.country || '',
        billingState: address.region || '',
        billingZipCode: address.postalCode || '',
        paymentMethod,
        referenceNumber: '',
        shippingAddressAsBillingAddress: shippingAsBilling ? 'yes' : 'no',
        shippingContactAsBillingContact: 'yes',
        billingCompany: '',
        billingAddressLineTwo: ''
      };
    }, [me, shippingAddress, billingAddress]);

  const controlledDetailsFormStepValues: Partial<CheckoutDetailsFormValues> =
    useMemo(() => {
      const address: PostalAddress =
        getValidPostalAddressFromUserAddress(shippingAddress);

      return {
        address: address.lines?.[0] || '',
        city: address.city || '',
        country: address.country || '',
        state: address.region || '',
        zipCode: address.postalCode || '',
        firstName: me?.contactInfo?.firstName || '',
        lastName: me?.contactInfo?.lastName || '',
        jobTitle: me?.contactInfo?.jobTitle || '',
        phone: me?.contactInfo?.phoneNumber || '',
        email: me?.contactInfo?.emailAddresses?.[0] || '',
        company: me?.account?.name || ''
      };
    }, [me, shippingAddress]);

  const initialCheckoutDetailsTouchedFields: FormikTouched<CheckoutDetailsFormValues> =
    useMemo(() => {
      const touchedFields: { [key: string]: boolean } = {};

      Object.keys(controlledDetailsFormStepValues).forEach((key: string) => {
        touchedFields[key] =
          !!controlledDetailsFormStepValues[
            key as keyof CheckoutDetailsFormValues
          ];
      });
      return touchedFields;
    }, [controlledDetailsFormStepValues]);

  const initialPaymentMethodDetailsTouchedFields: FormikTouched<CheckoutPaymentMethodFormValues> =
    useMemo(() => {
      const touchedFields: { [key: string]: boolean } = {};

      Object.keys(controlledPaymentMethodFormStepValues).forEach(
        (key: string) => {
          touchedFields[key] =
            !!controlledPaymentMethodFormStepValues[
              key as keyof CheckoutPaymentMethodFormValues
            ];
        }
      );
      return touchedFields;
    }, [controlledPaymentMethodFormStepValues]);

  const styles: CheckoutFormStyles = {
    container: {},
    leftColumn: {
      root: { flex: 5 }
    },
    rightColumn: { root: { flex: 2 } }
  };

  return (
    <Formik<CheckoutFormValues>
      initialValues={{
        ...checkoutFormValues,
        ...controlledDetailsFormStepValues,
        ...controlledPaymentMethodFormStepValues
      }}
      initialTouched={{
        ...initialCheckoutDetailsTouchedFields,
        ...initialPaymentMethodDetailsTouchedFields
      }}
      enableReinitialize={true}
      validationSchema={checkoutFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        onFormSubmit(values);
      }}
    >
      <Form>
        <Stepper
          onUnload={() => push(pagePaths.cart)}
          steps={checkoutFormStepLabels}
          initialIndex={0}
        >
          <ContentClearer />
          <Stack
            horizontal
            horizontalAlign="space-between"
            tokens={{ childrenGap: spacing.m, padding: `${spacing.l2} 0` }}
            wrap={true}
          >
            <Stack.Item styles={styles.leftColumn}>
              <Stack tokens={{ childrenGap: spacing.l1 }}>
                <Steps />
                <StepContent>
                  <Stack tokens={{ childrenGap: spacing.l1 }}>
                    <Stack.Item>
                      <OrderContactFormGroup />
                    </Stack.Item>
                    <Stack.Item>
                      <ShippingContactFormGroup />
                    </Stack.Item>
                    <Stack.Item>
                      <ShippingAddressFormGroup />
                    </Stack.Item>
                  </Stack>
                  <Stack>
                    <Stack.Item>
                      <ShippingMethodChoiceGroup />
                    </Stack.Item>
                  </Stack>
                  <Stack tokens={{ childrenGap: spacing.l1 }}>
                    <Stack.Item>
                      <PaymentMethodChoiceGroup />
                    </Stack.Item>
                    <Stack.Item>
                      <BillingContactChoiceGroup />
                    </Stack.Item>
                    <Stack.Item>
                      <BillingAddressChoiceGroup />
                    </Stack.Item>
                  </Stack>
                  <Stack tokens={{ childrenGap: spacing.l1 }}>
                    <Stack.Item>
                      <CheckoutFormOverview />
                    </Stack.Item>
                    <Stack.Item>
                      <AdditionalInformationFormGroup />
                    </Stack.Item>
                    <Stack.Item>
                      <TermsAndConditionsGroup />
                    </Stack.Item>
                  </Stack>
                </StepContent>
                <CheckoutFormErrorBox />
                <FormStepActions getFieldNames={getCheckoutFieldNames}>
                  {(onProceed: () => void, onPrevious: () => void) => (
                    <CheckoutFormFooterStepActions
                      onProceedClick={() => {
                        onProceed();
                        scrollToTop('body');
                      }}
                      onPreviousClick={() => {
                        onPrevious();
                        scrollToTop('body');
                      }}
                      disableSubmit={orderTaxAmountStatus === 'loading'}
                    />
                  )}
                </FormStepActions>
              </Stack>
            </Stack.Item>
            <Stack.Item styles={styles.rightColumn}>
              <CheckoutSummary />
            </Stack.Item>
          </Stack>
        </Stepper>
      </Form>
    </Formik>
  );
};
