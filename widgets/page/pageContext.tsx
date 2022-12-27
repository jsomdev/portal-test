import { createContext, useContext } from 'react';

import { LocalePaths } from '@widgets/page/page.types';

export interface PageContextProps {
  localePaths: LocalePaths;
  showPageOverlay: boolean;
  togglePageOverlay: (on: boolean) => void;
}

const initialContext: PageContextProps = {
  localePaths: {},
  showPageOverlay: false,
  togglePageOverlay: () => {
    throw Error('Not implemented');
  }
};

export const PageContext = createContext<PageContextProps>(initialContext);

export const usePageContext = (): PageContextProps => useContext(PageContext);
