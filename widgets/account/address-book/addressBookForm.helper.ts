import { IntlShape, defineMessages } from 'react-intl';
import * as yup from 'yup';
import { InferType } from 'yup';

import { messageIds } from '@services/i18n';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';
import { StepFields } from '@widgets/checkout/shared/types';
import {
  addressValidation,
  cityValidation,
  countryValidation,
  postalCodeValidation,
  stateValidation
} from '@widgets/checkout/shared/validation';

setYupLocalisation();

const fieldMessageIds =
  messageIds.pages.account.sections.infoAndPreferences.sections.addressBook
    .formFields;

const labelMessages = defineMessages({
  name: {
    id: fieldMessageIds.name.label,
    defaultMessage: 'Name',
    description: 'Name label'
  },
  country: {
    id: fieldMessageIds.country.label,
    defaultMessage: 'Country',
    description: 'Country label'
  },
  address: {
    id: fieldMessageIds.address.label,
    defaultMessage: 'Address',
    description: 'Address label'
  },
  city: {
    id: fieldMessageIds.city.label,
    defaultMessage: 'City',
    description: 'City label'
  },
  postalCode: {
    id: fieldMessageIds.postalCode.label,
    defaultMessage: 'Postal Code',
    description: 'Postal Code label'
  },
  setAsBilling: {
    id: fieldMessageIds.setAsBilling.label,
    defaultMessage: 'Set as billing address',
    description: 'Set as billing address label'
  },
  setAsShipping: {
    id: fieldMessageIds.setAsShipping.label,
    defaultMessage: 'Set as shipping address',
    description: 'Set as shipping address label'
  },
  state: {
    id: fieldMessageIds.region.label.default,
    defaultMessage: 'Region',
    description: 'Region label'
  }
});

export const validation = yup.object({
  name: yup.string().trim().label(fieldMessageIds.name.label).required(),
  country: countryValidation(fieldMessageIds.country.label),
  address: addressValidation(fieldMessageIds.address.label),
  city: cityValidation(fieldMessageIds.city.label),
  postalCode: postalCodeValidation(fieldMessageIds.postalCode.label),
  setAsBilling: yup.bool().oneOf([true, false]),
  setAsShipping: yup.bool().oneOf([true, false]),
  state: stateValidation(
    'state',
    fieldMessageIds.region.label.default,
    fieldMessageIds.region.label.us,
    fieldMessageIds.region.label.ca
  )
});

export const getFields = (intl: IntlShape): StepFields<AddressBookFormData> => {
  const { formatMessage } = intl;
  return {
    name: {
      label: formatMessage(labelMessages.name),
      name: 'name'
    },
    country: {
      label: formatMessage(labelMessages.country),
      name: 'country'
    },
    address: {
      label: formatMessage(labelMessages.address),
      name: 'address'
    },
    city: {
      label: formatMessage(labelMessages.city),
      name: 'city'
    },
    postalCode: {
      label: formatMessage(labelMessages.postalCode),
      name: 'postalCode'
    },
    setAsBilling: {
      label: formatMessage(labelMessages.setAsBilling),
      name: 'setAsBilling'
    },
    setAsShipping: {
      label: formatMessage(labelMessages.setAsShipping),
      name: 'setAsShipping'
    },
    state: {
      label: formatMessage(labelMessages.state),
      name: 'state'
    }
  };
};

export type AddressBookFormData = InferType<typeof validation>;
