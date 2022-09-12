import { createContext, useContext } from 'react';

import { AttributeGroup, AttributeType, Category } from '@services/portal-api';

export interface GlobalDataContextProps {
  attributeTypes: AttributeType[];
  attributeGroups: AttributeGroup[];
  category: Category | undefined;

  getAttributeType: (code: string) => AttributeType | undefined;
  getAttributeGroup: (code: string) => AttributeGroup | undefined;
}

const initialContext: GlobalDataContextProps = {
  category: undefined,
  attributeGroups: [],
  attributeTypes: [],
  getAttributeGroup: () => {
    throw new Error('Not implemented');
  },
  getAttributeType: () => {
    throw new Error('Not implemented');
  }
};
export const GlobalDataContext =
  createContext<GlobalDataContextProps>(initialContext);
export const useGlobalData = (): GlobalDataContextProps =>
  useContext(GlobalDataContext);
