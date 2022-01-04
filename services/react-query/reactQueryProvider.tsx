import { useEffect } from 'react';

import { QueryClientProvider } from 'react-query';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { ReactQueryDevtools } from 'react-query/devtools';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';

import { ENABLE_REACT_QUERY_DEVTOOLS, queryClient } from './config';

export const ReactQueryClientProvider: React.FC = ({ children }) => {
  useEffect(() => {
    const localStoragePersistor = createWebStoragePersistor({
      storage: window.localStorage
    });
    persistQueryClient({
      queryClient,
      persistor: localStoragePersistor
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {ENABLE_REACT_QUERY_DEVTOOLS && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};
