import { useCallback, useEffect, useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';
import { useMutation, useQuery } from 'react-query';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { LoadingOverlay } from '@components/overlays/loadingOverlay';
import { Stack, useTheme } from '@fluentui/react';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { User } from '@services/portal-api';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { UserRoles } from '@services/portal-api/models/UserRolesFlags';
import {
  createUserVerification,
  fetchMe,
  updateContactDetails
} from '@services/portal-api/users';
import { queryClient } from '@services/react-query/config';
import { QUERYKEYS } from '@services/react-query/constants';
import { scrollToTop } from '@utilities/scrollToTop';
import { CompleteSignUp } from '@widgets/complete-sign-up/completeSignUp';
import {
  CompleteSignUpFormValues,
  ContactDetailsFormValues
} from '@widgets/complete-sign-up/completeSignUp.types';
import {
  mapContactDetailsFieldsToContactDetailsPut,
  mapVerificationRequestFieldsToVerificationPost
} from '@widgets/complete-sign-up/completeSignUpFormHelper';
import { ClientEnvironment } from '@widgets/environment/environment.types';
import { getCurrentClientEnvironment } from '@widgets/environment/environmentHelpers';

import { UserContext } from './userContext';

const messages = defineMessages({
  loading: {
    id: messageIds.loading.default,
    description: 'Default loading text',
    defaultMessage: 'Loading...'
  },
  signingIn: {
    id: messageIds.loading.user.signingIn,
    description: 'Loading text while signing in',
    defaultMessage: 'Signing in...'
  },
  signingOut: {
    id: messageIds.loading.user.signingOut,
    description: 'Loading text while signing out',
    defaultMessage: 'Signing out...'
  },
  redirecting: {
    id: messageIds.loading.user.redirecting,
    description: 'Loading text while redirecting you from somewhere else',
    defaultMessage: 'Redirecting...'
  }
});

/**
 * Context Provider for the current user.
 * It will provide information about the user and functionality to update its information.
 */
export const UserProvider: React.FC = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal();
  const { formatMessage } = useIntl();
  const {
    isVerifiedCustomer,
    forceRefreshToken,
    isRegisteredUser,
    isCustomer,
    roles,
    isEmployee,
    value: claims
  } = useClaims();
  const { spacing } = useTheme();

  const { data: me, status: meStatus } = useQuery(
    [QUERYKEYS.appMe, isAuthenticated],
    () => fetchMe(),
    {
      keepPreviousData: true,
      enabled: isAuthenticated
    }
  );
  const logClaimsToConsole = useCallback(() => {
    const currentEnvironment: ClientEnvironment = getCurrentClientEnvironment();

    // Do not log on production
    if (
      [
        ClientEnvironment.Develop,
        ClientEnvironment.Test,
        ClientEnvironment.Local
      ].includes(currentEnvironment)
    ) {
      console.group('Claims');
      console.info(
        'These are the values of the idTokenClaims for the authenticated user'
      );
      console.dir(claims);
      console.groupEnd();
    }
  }, [claims]);

  useEffect(() => {
    if (claims) {
      logClaimsToConsole();
    }
  }, [claims, logClaimsToConsole]);

  useEffect(() => {
    if (meStatus === 'success' && me?.roles !== undefined) {
      const apiRoles: Partial<UserRoles> = FlaggedEnum.create<UserRoles>(
        UserRoles,
        me?.roles || ''
      );
      const claimsRoles: Partial<UserRoles> = FlaggedEnum.create<UserRoles>(
        UserRoles,
        roles.join(', ')
      );
      if (apiRoles !== claimsRoles) {
        forceRefreshToken();
      }
    }
  }, [forceRefreshToken, me?.roles, meStatus, roles]);

  const hasPricing = useMemo(() => {
    if (isCustomer) {
      return 'Customer';
    }

    if (isEmployee) {
      return 'Standard';
    }

    if (isRegisteredUser) {
      return 'Quoted';
    }

    return 'None';
  }, [isCustomer, isEmployee, isRegisteredUser]);

  const isRequestForQuoteEnabled: boolean = useMemo(() => {
    if (isRegisteredUser) {
      return true;
    }
    return false;
  }, [isRegisteredUser]);

  const isCheckoutEnabled: boolean = useMemo(() => {
    if (isCustomer) {
      return true;
    }
    return false;
  }, [isCustomer]);

  const isQuoteRequestHistoryEnabled: boolean = useMemo(() => {
    if (isRegisteredUser) {
      return true;
    }
    return false;
  }, [isRegisteredUser]);

  const isQuoteHistoryEnabled: boolean = useMemo(() => {
    if (isVerifiedCustomer) {
      return true;
    }
    return false;
  }, [isVerifiedCustomer]);

  const isOrderHistoryEnabled: boolean = useMemo(() => {
    if (isVerifiedCustomer) {
      return true;
    }
    return false;
  }, [isVerifiedCustomer]);

  const showCustomerDetails: boolean = useMemo(() => {
    if (isCustomer) {
      return true;
    }
    return false;
  }, [isCustomer]);

  const isInternalViewEnabled: boolean = useMemo(() => {
    if (isEmployee) {
      return true;
    }
    return false;
  }, [isEmployee]);

  function handleError(error: Error) {
    console.error(error);
  }

  const createContactDetailsRequest = useMutation(
    (formValues: ContactDetailsFormValues) =>
      updateContactDetails(
        mapContactDetailsFieldsToContactDetailsPut(formValues)
      ),
    {
      onError: handleError,
      onSuccess: (data: User) => {
        queryClient.setQueryData([QUERYKEYS.appMe, isAuthenticated], {
          ...me,
          contactInfo: {
            ...data
          }
        });
      },
      onSettled: () => {
        setTimeout(() => createContactDetailsRequest.reset(), 5000);
      }
    }
  );

  const {
    mutateAsync: createVerificationRequest,
    status: createVerificationRequestStatus
  } = useMutation(
    (formValues: CompleteSignUpFormValues) =>
      createUserVerification(
        mapContactDetailsFieldsToContactDetailsPut(formValues),
        mapVerificationRequestFieldsToVerificationPost(formValues, me)
      ),
    {
      onError: handleError,
      onSettled: () => scrollToTop()
    }
  );

  function getInteractionStatusText(status: InteractionStatus): string {
    switch (status) {
      case InteractionStatus.Login:
        return formatMessage(messages.signingIn);
      case InteractionStatus.Logout:
        return formatMessage(messages.signingOut);
      case InteractionStatus.HandleRedirect:
        return formatMessage(messages.redirecting);
      default:
        return formatMessage(messages.loading);
    }
  }

  if (
    ![InteractionStatus.Startup, InteractionStatus.None].includes(inProgress)
  ) {
    return (
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        tokens={{
          childrenGap: spacing.l1,
          padding: `${spacing.l1} 0 `
        }}
      >
        <LoadingOverlay spinnerText={getInteractionStatusText(inProgress)} />
      </Stack>
    );
  }
  return (
    <UserContext.Provider
      value={{
        me,
        meStatus,
        hasPricing,
        isCheckoutEnabled,
        isOrderHistoryEnabled,
        isQuoteRequestHistoryEnabled,
        isQuoteHistoryEnabled,
        isRequestForQuoteEnabled,
        isInternalViewEnabled,
        showCustomerDetails,
        createVerificationRequest,
        createContactDetailsRequest: createContactDetailsRequest.mutateAsync,
        createContactDetailsRequestStatus: createContactDetailsRequest.status,
        createVerificationRequestStatus
      }}
    >
      {(isAuthenticated && !isRegisteredUser && <CompleteSignUp />) || children}
    </UserContext.Provider>
  );
};
