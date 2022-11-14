import React, { useContext, useMemo } from 'react';

import { Form, Formik, FormikProps, FormikTouched } from 'formik';
import { useIntl } from 'react-intl';
import { InferType } from 'yup';

import { Stack, useTheme } from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { getValidPostalAddressFromUserAddress } from '@providers/address-book/addressBookHelper';
import { useMe } from '@providers/user/userContext';
import { PostalAddress } from '@services/portal-api';
import { getTouchedFields } from '@widgets/checkout-new/checkout.helper';
import { OrderContactFormGroup } from '@widgets/checkout-new/steps/step-1-details/orderContactFormGroup';
import { ShippingAddressFormGroup } from '@widgets/checkout-new/steps/step-1-details/shippingAddressFormGroup';
import { ShippingContactFormGroup } from '@widgets/checkout-new/steps/step-1-details/shippingContactFormGroup';
import { getFields } from '@widgets/checkout-new/steps/step-1-details/step-1-details.helper';
import validation from '@widgets/checkout-new/steps/step-1-details/step-1-details.validation';

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
  const { formatMessage } = useIntl();
  const { shippingAddress } = useContext(AddressBookContext);
  const { me } = useMe();
  const fields = getFields(formatMessage);

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

  return (
    <Formik<Step1FormData>
      innerRef={formRef}
      initialValues={defaultAndPrefilledValues}
      initialTouched={initialTouched}
      validationSchema={validation}
      enableReinitialize={true}
      onSubmit={(values, { setSubmitting }) => {
        console.log('submitting');
        //TODO handle submits
        //onFormSubmit(values);
      }}
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
