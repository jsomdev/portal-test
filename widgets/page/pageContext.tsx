import { createContext, useContext } from 'react';

import { LocalePaths } from '@widgets/page/page.types';

export interface PageContextProps {
  localePaths: LocalePaths;
}

const initialContext: PageContextProps = {
  localePaths: {}
};

export const PageContext = createContext<PageContextProps>(initialContext);

export const usePageContext = (): PageContextProps => useContext(PageContext);
