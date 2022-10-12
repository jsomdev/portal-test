import React from 'react';

import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ENABLE_REACT_QUERY_DEVTOOLS, queryClient } from './config';

export const ReactQueryClientProvider: React.FC = ({ children }) => {
  // useEffect(() => {
  //   // EXPERIMENTAL
  //   const localStoragePersistor = createWebStoragePersistor({
  //     storage: window.localStorage
  //   });
  //   persistQueryClient({
  //     queryClient,
  //     persistor: localStoragePersistor
  //   });
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {ENABLE_REACT_QUERY_DEVTOOLS && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};
