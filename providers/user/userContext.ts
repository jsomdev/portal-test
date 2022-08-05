import { createContext, useContext } from 'react';

import { User } from '@services/portal-api';
import { CustomerVerificationRequest } from '@services/portal-api/models/CustomerVerificationRequest';
import { ReactQueryStatus } from '@services/react-query/types';
import {
  CompleteSignUpFormValues,
  ContactDetailsFormValues
} from '@widgets/complete-sign-up/completeSignUp.types';

export interface UserContextProps {
  meStatus: ReactQueryStatus;
  me: User | undefined;
  // Type of pricing the user has permission to see
  hasPricing: 'None' | 'Standard' | 'Quoted' | 'Customer';
  isRequestForQuoteEnabled: boolean;
  isCheckoutEnabled: boolean;
  isQuoteRequestHistoryEnabled: boolean;
  isOrderHistoryEnabled: boolean;
  showCustomerDetails: boolean;
  isInternalViewEnabled: boolean;
  createContactDetailsRequest: (
    formValues: ContactDetailsFormValues
  ) => Promise<User>;
  createContactDetailsRequestStatus: ReactQueryStatus;
  createVerificationRequest: (
    formValues: CompleteSignUpFormValues
  ) => Promise<CustomerVerificationRequest>;
  createVerificationRequestStatus: ReactQueryStatus;
}

const initialContextProps: UserContextProps = {
  meStatus: 'idle',
  me: undefined,
  hasPricing: 'None',
  isRequestForQuoteEnabled: false,
  isCheckoutEnabled: false,
  isQuoteRequestHistoryEnabled: false,
  isOrderHistoryEnabled: false,
  isInternalViewEnabled: false,
  showCustomerDetails: false,

  createContactDetailsRequest: () => {
    throw new Error('Not implemented');
  },
  createVerificationRequest: () => {
    throw new Error('Not implemented');
  },
  createContactDetailsRequestStatus: 'idle',
  createVerificationRequestStatus: 'idle'
};

export const UserContext = createContext<UserContextProps>(initialContextProps);

export const useMe = (): UserContextProps => useContext(UserContext);
