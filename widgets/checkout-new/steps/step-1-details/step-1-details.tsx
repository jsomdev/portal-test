import React, { useContext, useMemo } from 'react';

import { Form, Formik, FormikProps, FormikTouched } from 'formik';
import { defineMessages, useIntl } from 'react-intl';
import { InferType } from 'yup';

import { Stack, useTheme } from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { getValidPostalAddressFromUserAddress } from '@providers/address-book/addressBookHelper';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import { PostalAddress } from '@services/portal-api';
import { getTouchedFields } from '@widgets/checkout-new/checkout.helper';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { OrderContactFormGroup } from '@widgets/checkout-new/steps/step-1-details/orderContactFormGroup';
import { ShippingAddressFormGroup } from '@widgets/checkout-new/steps/step-1-details/shippingAddressFormGroup';
import { ShippingContactFormGroup } from '@widgets/checkout-new/steps/step-1-details/shippingContactFormGroup';
import validation from '@widgets/checkout-new/steps/step-1-details/step-1-details.validation';

export type Step1FormData = InferType<typeof validation>;

const defaultValues: Step1FormData = {
  name: '',
  firstName: '',
  company: '',
  country: 'US',
  address: '',
  addressLineTwo: '',
  city: '',
  state: '',
  postalCode: '',
  phone: '',
  email: ''
};

const fieldMessageIds = messageIds.pages.checkout.details.fields;

const messages = defineMessages({
  email: {
    id: fieldMessageIds.email,
    defaultMessage: 'Email'
  },
  firstName: {
    id: fieldMessageIds.firstName,
    defaultMessage: 'First Name'
  },
  name: {
    id: fieldMessageIds.name,
    defaultMessage: 'Name'
  },
  company: {
    id: fieldMessageIds.company,
    defaultMessage: 'Company'
  },
  country: {
    id: fieldMessageIds.country,
    defaultMessage: 'Country'
  },
  address: {
    id: fieldMessageIds.address,
    defaultMessage: 'Address'
  },
  addressLineTwo: {
    id: fieldMessageIds.addressLineTwo,
    defaultMessage: 'Address Line 2'
  },
  city: {
    id: fieldMessageIds.city,
    defaultMessage: 'City'
  },
  state: {
    id: fieldMessageIds.state,
    defaultMessage: 'State'
  },
  postalCode: {
    id: fieldMessageIds.postalCode,
    defaultMessage: 'Postal Code'
  },
  phone: {
    id: fieldMessageIds.phone,
    defaultMessage: 'Phone'
  }
});

export const Step1Details: React.FC<{
  values: Step1FormData;
  formRef: React.RefObject<FormikProps<Step1FormData>> | undefined;
}> = ({ values, formRef }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const fields: StepFields<Step1FormData> = {
    email: {
      label: formatMessage(messages.email),
      placeholder: 'example@domain.com',
      name: 'email'
    },
    firstName: {
      label: formatMessage(messages.firstName),
      placeholder: '',
      name: 'firstName'
    },
    name: {
      label: formatMessage(messages.name),
      placeholder: '',
      name: 'name'
    },
    company: {
      label: formatMessage(messages.company),
      placeholder: 'Name of organization',
      name: 'company'
    },
    country: {
      label: formatMessage(messages.country),
      placeholder: 'Select an option',
      name: 'country'
    },
    address: {
      label: formatMessage(messages.address),
      placeholder: '',
      name: 'address'
    },
    addressLineTwo: {
      label: formatMessage(messages.addressLineTwo),
      placeholder: 'Address Line 2',
      name: 'addressLineTwo'
    },
    city: {
      label: formatMessage(messages.city),
      placeholder: '',
      name: 'city'
    },
    state: {
      label: formatMessage(messages.state),
      placeholder: 'Select an option',
      name: 'state'
    },
    postalCode: {
      label: formatMessage(messages.postalCode),
      placeholder: '',
      name: 'postalCode'
    },
    phone: {
      label: formatMessage(messages.phone),
      placeholder: '',
      name: 'phone'
    }
  };

  const { shippingAddress } = useContext(AddressBookContext);
  const { me } = useMe();

  const defaultAndPrefilledValues = useMemo(() => {
    const address: PostalAddress =
      getValidPostalAddressFromUserAddress(shippingAddress);

    //fill in the form with the user's address if it exists, but don't overwrite any existing form values
    const step1: Partial<Step1FormData> = {
      address: values.address || (address.lines?.[0] || '').trim(),
      city: values.city || (address.city || '').trim(),
      country: values.country || (address.country || '').trim(),
      state: values.state || (address.region || '').trim(),
      postalCode: values.postalCode || (address.postalCode || '').trim(),
      firstName: values.firstName || (me?.contactInfo?.firstName || '').trim(),
      name: values.name || (me?.contactInfo?.lastName || '').trim(),
      phone: values.phone || (me?.contactInfo?.phoneNumber || '').trim(),
      email:
        values.email || (me?.contactInfo?.emailAddresses?.[0] || '').trim(),
      company: values.company || (me?.account?.name || '').trim()
    };
    return { ...values, ...step1 };
  }, [me, shippingAddress, values]);

  const initialTouched: FormikTouched<Step1FormData> = useMemo(() => {
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
        setSubmitting(false);
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
  key: 'step-1',
  Component: Step1Details,
  defaultValues: defaultValues,
  validation: validation
};
