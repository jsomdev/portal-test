import React, { useCallback, useContext, useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import { useIntl } from 'react-intl';
import { InferType } from 'yup';

import { Stack, useTheme } from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { getValidPostalAddressFromUserAddress } from '@providers/address-book/addressBookHelper';
import { useMe } from '@providers/user/userContext';
import { PostalAddress } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { getTouchedFields } from '@widgets/checkout/shared/getTouchedFields';
import { OrderContactFormGroup } from '@widgets/checkout/steps/step-1-details/orderContactFormGroup';
import { ShippingAddressFormGroup } from '@widgets/checkout/steps/step-1-details/shippingAddressFormGroup';
import { ShippingContactFormGroup } from '@widgets/checkout/steps/step-1-details/shippingContactFormGroup';
import {
  getFields,
  validation
} from '@widgets/checkout/steps/step-1-details/step-1-details.helper';

export type Step1FormData = InferType<typeof validation>;

const defaultValues: Step1FormData = {
  name: '',
  firstName: '',
  company: '',
  country: 'US',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  phone: '',
  email: ''
};

export type Step1DetailsProps = {
  values: Step1FormData;
  formRef: React.RefObject<FormikProps<Step1FormData>> | undefined;
};

export const Step1Details: React.FC<Step1DetailsProps> = ({
  values,
  formRef
}) => {
  const { spacing } = useTheme();
  const intl = useIntl();
  const { shippingAddress } = useContext(AddressBookContext);
  const { setShippingAddress, setSelectedShippingOption } = useCheckout();
  const { me } = useMe();
  const fields = useMemo(() => getFields(intl), [intl]);

  const defaultAndPrefilledValues = useMemo(() => {
    //fill in the form with the user's address if it exists, but don't overwrite any existing form values
    if (values.address) {
      return values;
    }
    const address: PostalAddress =
      getValidPostalAddressFromUserAddress(shippingAddress);

    const step1: Partial<Step1FormData> = {
      address: (address.lines?.[0] || '').trim(),
      city: (address.city || '').trim(),
      country: (address.country || '').trim(),
      state: (address.region || '').trim(),
      postalCode: (address.postalCode || '').trim(),
      firstName: (me?.contactInfo?.firstName || '').trim(),
      name: (me?.contactInfo?.lastName || '').trim(),
      phone: (me?.contactInfo?.phoneNumber || '').trim(),
      email: (me?.contactInfo?.emailAddresses?.[0] || '').trim(),
      company: (me?.account?.name || '').trim()
    };
    return { ...values, ...step1 };
  }, [me, shippingAddress, values]);

  const initialTouched = useMemo(() => {
    return getTouchedFields(defaultAndPrefilledValues);
  }, [defaultAndPrefilledValues]);

  const onSubmit = useCallback(
    values => {
      const shippingAddress: PostalAddress = {
        city: values.city,
        region: values.state,
        postalCode: values.postalCode,
        lines: [values.address],
        country: values.country
      };
      setShippingAddress((currentState: PostalAddress | undefined) => {
        if (
          JSON.stringify(shippingAddress).localeCompare(
            JSON.stringify(currentState)
          ) !== 0
        ) {
          setSelectedShippingOption(undefined);
        }
        return shippingAddress;
      });
    },
    [setSelectedShippingOption, setShippingAddress]
  );

  return (
    <Formik<Step1FormData>
      innerRef={formRef}
      initialValues={defaultAndPrefilledValues}
      initialTouched={initialTouched}
      validationSchema={validation}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      <Form>
        <Stack tokens={{ childrenGap: spacing.l1 }}>
          <Stack.Item>
            <OrderContactFormGroup fields={fields} />
          </Stack.Item>
          <Stack.Item>
            <ShippingContactFormGroup fields={fields} />
          </Stack.Item>
          <Stack.Item>
            <ShippingAddressFormGroup fields={fields} />
          </Stack.Item>
        </Stack>
      </Form>
    </Formik>
  );
};

export default {
  Component: Step1Details,
  defaultValues: defaultValues,
  validation: validation
};
