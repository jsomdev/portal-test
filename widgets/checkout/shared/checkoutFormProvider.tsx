import React, { useState } from 'react';

import { useQuery } from 'react-query';

import { useCart } from '@providers/cart/cartContext';
import { PostalAddress } from '@services/portal-api';
import { ShippingCostAmount } from '@services/portal-api/base/types';
import { fetchShippingOptions } from '@services/portal-api/shippingOptions';
import { fetchOrderTaxAmount } from '@services/portal-api/tax';
import { QUERYKEYS } from '@services/react-query/constants';
import { sortShippingOptionsByCostAscending } from '@utilities/sortBy';

import { CheckoutFormContext } from './checkoutFormContext';

export const CheckoutFormProvider: React.FC = ({ children }) => {
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

  return (
    <CheckoutFormContext.Provider
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
        setCreditCardIssuer
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};
