import React, { useContext, useMemo } from 'react';

import { Form, Formik, FormikTouched } from 'formik';
import * as yup from 'yup';
import { InferType } from 'yup';

import { Stack, useTheme } from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { getValidPostalAddressFromUserAddress } from '@providers/address-book/addressBookHelper';
import { useMe } from '@providers/user/userContext';
import { PostalAddress } from '@services/portal-api';
import {
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import { getTouchedFields } from '@widgets/checkout-new/checkout.helper';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { OrderContactFormGroup } from '@widgets/checkout-new/steps/step-1-details/orderContactFormGroup';
import { ShippingAddressFormGroup } from '@widgets/checkout-new/steps/step-1-details/shippingAddressFormGroup';
import { ShippingContactFormGroup } from '@widgets/checkout-new/steps/step-1-details/shippingContactFormGroup';
import {
  checkoutFormFields,
  regionValidationTest
} from '@widgets/checkout/checkout-form/checkoutFormHelper';
import { checkoutFormValidation } from '@widgets/checkout/checkout-form/checkoutFormValidation';
import {
  formErrorMessages,
  formRequiredMessages
} from '@widgets/forms/formMessages';

const validation = yup.object({
  email: yup
    .string()
    .email(formErrorMessages.email)
    .required(formRequiredMessages.email),
  name: yup
    .string()
    .max(40, formErrorMessages.lastName)
    .required(formRequiredMessages.lastName),
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, formErrorMessages.firstName)
    .required(formRequiredMessages.firstName),
  company: yup.string().required(formRequiredMessages.company),
  country: yup
    .string()
    .length(2, formErrorMessages.country)
    .required(formRequiredMessages.country),
  address: yup.string().trim().required(formRequiredMessages.address),
  addressLineTwo: yup.string().trim().optional(),
  city: yup.string().required(formRequiredMessages.city),
  state: yup
    .string()
    .required(formRequiredMessages.state)
    .when('country', {
      is: 'US',
      then: yup
        .string()
        .required(formRequiredMessages.state)
        .test(
          checkoutFormFields.state.name,
          formRequiredMessages.stateUs,
          value => regionValidationTest(value, supportedStateOptions)
        )
    })
    .when('country', {
      is: 'CA',
      then: yup
        .string()
        .required(formRequiredMessages.state)
        .test(
          checkoutFormFields.state.name,
          formRequiredMessages.providenceCa,
          value => regionValidationTest(value, supportedProvinceOptions)
        )
    }),
  zipCode: yup.string().required(formRequiredMessages.zipCode),
  phone: yup
    .string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
      formErrorMessages.phone
    )
    .required(formRequiredMessages.phone)
});

export type Step1 = InferType<typeof validation>;

const defaultValues: Step1 = {
  name: 'Werbrouck',
  firstName: 'Ward',
  company: '',
  country: 'US',
  address: '',
  addressLineTwo: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
  email: ''
};

export const Step1Details: React.FC<{ values: Step1 }> = ({ values }) => {
  const { spacing } = useTheme();
  const fields: StepFields<Step1> = {
    email: {
      label: 'Email',
      placeholder: 'example@domain.com',
      name: 'email'
    },
    firstName: {
      label: 'First Name',
      placeholder: '',
      name: 'firstName'
    },
    name: { label: 'Last Name', placeholder: '', name: 'name' },
    company: {
      label: 'Company Name',
      placeholder: 'Name of organization',
      name: 'company'
    },
    country: {
      label: 'Country',
      placeholder: 'Select an option',
      name: 'country'
    },
    address: {
      label: 'Address',
      placeholder: '',
      name: 'address'
    },
    addressLineTwo: {
      label: 'Address Line 2',
      placeholder: 'Address Line 2',
      name: 'addressLineTwo'
    },
    city: { label: 'City', placeholder: '', name: 'city' },
    state: {
      label: 'State / Province',
      placeholder: 'Select an option',
      name: 'state'
    },
    zipCode: {
      label: 'Postal Code',
      placeholder: '',
      name: 'zipCode'
    },
    phone: { label: 'Phone Number', placeholder: '', name: 'phone' }
  };

  const { shippingAddress } = useContext(AddressBookContext);
  const { me } = useMe();

  const defaultAndPrefilledValues = useMemo(() => {
    const address: PostalAddress =
      getValidPostalAddressFromUserAddress(shippingAddress);

    const step1: Partial<Step1> = {
      address: (address.lines?.[0] || '').trim(),
      city: (address.city || '').trim(),
      country: (address.country || '').trim(),
      state: (address.region || '').trim(),
      zipCode: (address.postalCode || '').trim(),
      firstName: (me?.contactInfo?.firstName || '').trim(),
      name: (me?.contactInfo?.lastName || '').trim(),
      phone: (me?.contactInfo?.phoneNumber || '').trim(),
      email: (me?.contactInfo?.emailAddresses?.[0] || '').trim(),
      company: (me?.account?.name || '').trim()
    };
    return { ...values, ...step1 };
  }, [me, shippingAddress]);

  const initialTouched: FormikTouched<Step1> = useMemo(() => {
    return getTouchedFields(defaultAndPrefilledValues);
  }, [defaultAndPrefilledValues]);

  return (
    <Formik<Step1>
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
