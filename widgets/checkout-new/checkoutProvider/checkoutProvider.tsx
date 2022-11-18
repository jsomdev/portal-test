import React, { useContext, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { useCart } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import { PostalAddress } from '@services/portal-api';
import { ShippingCostAmount } from '@services/portal-api/base/types';
import { fetchShippingOptions } from '@services/portal-api/shippingOptions';
import { fetchOrderTaxAmount } from '@services/portal-api/tax';
import { QUERYKEYS } from '@services/react-query/constants';
import pagePaths from '@utilities/pagePaths';
import { sortShippingOptionsByCostAscending } from '@utilities/sortBy';
import {
  CheckoutFormValues,
  CheckoutSteps
} from '@widgets/checkout-new/checkoutForm.types';
import useStepper from '@widgets/checkout-new/stepper/useStepper';
import step1Details from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import step2ShippingMethod from '@widgets/checkout-new/steps/step-2-shipping-method/step-2-shipping-method';
import step3Payment from '@widgets/checkout-new/steps/step-3-payment/step-3-payment';
import step4Overview from '@widgets/checkout-new/steps/step-4-overview/step-4-overview';

import { CheckoutContext, CheckoutContextProps } from './checkoutContext';

const messages = defineMessages({
  details: {
    id: messageIds.pages.checkout.steps.details,
    defaultMessage: 'Details'
  },
  shippingMethod: {
    id: messageIds.pages.checkout.steps.shippingMethod,
    defaultMessage: 'Shipping Method'
  },
  paymentDetails: {
    id: messageIds.pages.checkout.steps.paymentDetails,
    defaultMessage: 'Payment Method'
  },
  overview: {
    id: messageIds.pages.checkout.steps.overview,
    defaultMessage: 'Overview'
  }
});

export const CheckoutProvider: React.FC = ({ children }) => {
  const [formValues, setFormValues] = useState<CheckoutFormValues>();

  const [selectedShippingOption, setSelectedShippingOption] = useState<
    ShippingCostAmount | undefined
  >();
  const [shippingOptions, setShippingOptions] = useState<ShippingCostAmount[]>(
    []
  );
  const [creditCardIssuer, setCreditCardIssuer] = useState<
    string | undefined
  >();
  const { totalPrice, checkoutItems } = useCart();

  const [subTotalCost, setSubTotalCost] = useState(totalPrice);
  const [shippingAddress, setShippingAddress] = useState<
    PostalAddress | undefined
  >(undefined);

  const { data: orderTaxAmount, status: orderTaxAmountStatus } = useQuery(
    [
      QUERYKEYS.checkoutOrderTaxAmount,
      selectedShippingOption?.shippingMethod,
      shippingAddress
    ],
    () =>
      fetchOrderTaxAmount(
        shippingAddress,
        selectedShippingOption?.shippingMethod
      ),
    {
      enabled:
        !!selectedShippingOption?.shippingMethod &&
        shippingAddress !== undefined,
      retry: 3,
      keepPreviousData: false,
      retryDelay: 1500
    }
  );

  const { data: shippingCostData, status: shippingCostDataStatus } = useQuery(
    [QUERYKEYS.checkoutShippingOptions, JSON.stringify(shippingAddress)],
    () => fetchShippingOptions(shippingAddress),
    {
      enabled: shippingAddress !== undefined,
      retry: 2,
      keepPreviousData: false,
      retryDelay: 2000,
      onError: () => {
        setSelectedShippingOption(undefined);
      },
      onSuccess: data => {
        setSelectedShippingOption(
          data.sort(sortShippingOptionsByCostAscending)[0] || undefined
        );
      }
    }
  );

  const currencyCode: string = React.useMemo(() => {
    return checkoutItems?.[0].priceBreaks?.[0].currencyCode || 'USD';
  }, [checkoutItems]);

  const totalCost: number = React.useMemo(() => {
    return (
      (subTotalCost * 100 +
        (selectedShippingOption?.amount || 0) * 100 +
        (orderTaxAmount?.amount || 0) * 100) /
      100
    );
  }, [selectedShippingOption, subTotalCost, orderTaxAmount]);

  const { formatMessage } = useIntl();

  const steps: CheckoutSteps = useMemo(
    () => ({
      details: {
        index: 0,
        label: formatMessage(messages.details),
        iconProps: { iconName: 'ContactInfo' },
        ...step1Details
      },
      shippingMethod: {
        index: 1,
        label: formatMessage(messages.shippingMethod),
        iconProps: { iconName: 'Product' },
        ...step2ShippingMethod
      },
      payment: {
        index: 2,
        label: formatMessage(messages.paymentDetails),
        iconProps: { iconName: 'PaymentCard' },
        ...step3Payment
      },
      overview: {
        index: 3,
        label: formatMessage(messages.overview),
        iconProps: { iconName: 'WaitlistConfirm' },
        ...step4Overview
      }
    }),
    [formatMessage]
  );

  const stepperSteps = Object.values(steps);

  const { push } = useRouter();
  const stepper = useStepper({
    steps: stepperSteps,
    initialIndex: 0,
    onExit: () => push(pagePaths.cart)
  });

  return (
    <CheckoutContext.Provider
      value={{
        selectedShippingOption,
        setSelectedShippingOption,
        totalCost,
        currencyCode,
        subTotalCost,
        setSubTotalCost,
        shippingOptions,
        setShippingOptions,
        shippingAddress,
        setShippingAddress,
        orderTaxAmount,
        orderTaxAmountStatus,
        shippingCostData,
        shippingCostDataStatus,
        creditCardIssuer,
        setCreditCardIssuer,
        formValues,
        setFormValues,
        steps,
        stepper
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () =>
  useContext<CheckoutContextProps>(CheckoutContext);
