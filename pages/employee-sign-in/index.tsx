import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { LoadingOverlay } from '@components/overlays/loadingOverlay';
import { employeeLoginRequest } from '@services/authentication/authenticationConfiguration';
import pagePaths from '@utilities/pagePaths';

const messages = {
  redirecting:
    'Please wait while we redirect you to the employee sign in page...'
};
const EmployeeSignIn: React.FC = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const { replace } = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      replace(pagePaths.accountOverview);
    } else if (inProgress === InteractionStatus.None) {
      instance.loginRedirect(employeeLoginRequest);
    }
  }, [inProgress, instance, isAuthenticated, replace]);

  return <LoadingOverlay spinnerText={messages.redirecting} />;
};

export default EmployeeSignIn;
