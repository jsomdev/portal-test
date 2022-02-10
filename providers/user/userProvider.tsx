import React from 'react';

import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { fetchMe } from '@services/portal-api/users';
import { QUERYKEYS } from '@services/react-query/constants';

import { UserContext } from './userContext';

// const messages = {
//   verifiedRefreshFailed:
//     'Your setup could not be completed. This can happen if your request has only just been accepted. Please try again later or contact customer support if this issue keeps occurring',

//   verifiedReloadRequired: 'Your account has been verified. Please hold on while we set things up...',
// };
export const UserProvider: React.FC = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  // const { isVerified, forceRefresh } = useClaims();
  // const [refreshCount, setRefreshCount] = useState(0);
  const { data: me, status: meStatus } = useQuery(
    [QUERYKEYS.appMe, isAuthenticated],
    () => fetchMe(isAuthenticated),
    {
      keepPreviousData: true,
      enabled: isAuthenticated
    }
  );

  // const isVerifiedInApi: boolean = useMemo(() => {
  //   if (!me?.roles) {
  //     return false;
  //   }
  //   const roles: UserRoles = FlaggedEnum.create<UserRoles>(UserRoles, me?.roles);

  //   if (roles & UserRoles.VerifiedCustomer) {
  //     return true;
  //   }
  //   return false;
  // }, [me]);

  // function onForceRefreshFailed() {
  //   setRefreshCount((prevState) => prevState + 1);
  //   alert(messages.verifiedRefreshFailed);
  // }
  // useEffect(() => {
  //   if (isVerifiedInApi && !isVerified && refreshCount === 0) {
  //     forceRefresh().then((verified) => (verified ? window.location.reload() : onForceRefreshFailed()));
  //   }
  // }, [isVerifiedInApi, isVerified, forceRefresh, refreshCount]);

  // if (isVerifiedInApi && !isVerified && refreshCount === 0) {
  //   return <LoadingOverlay spinnerText={messages.verifiedReloadRequired} />;
  // }
  return (
    <UserContext.Provider
      value={{
        me,
        meStatus
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
