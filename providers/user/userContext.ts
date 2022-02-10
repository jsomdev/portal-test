import { createContext, useContext } from 'react';

import { User } from '@services/portal-api';
import { ReactQueryStatus } from '@services/react-query/types';

export interface UserContextProps {
  meStatus: ReactQueryStatus;
  me: User | undefined;
}

const initialContextProps: UserContextProps = {
  meStatus: 'idle',
  me: undefined
};

export const UserContext = createContext<UserContextProps>(initialContextProps);

export const useMe = (): UserContextProps => useContext(UserContext);
