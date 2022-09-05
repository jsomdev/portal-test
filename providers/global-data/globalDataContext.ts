import { createContext, useContext } from 'react';

import { AttributeGroup, AttributeType, MenuItem } from '@services/portal-api';

export interface GlobalDataContextProps {
  attributeTypes: AttributeType[] | undefined;
  attributeGroups: AttributeGroup[] | undefined;
  siteMenuItems: MenuItem[] | undefined;
  mainMenuItems: MenuItem[] | undefined;
  getAttributeType: (code: string) => AttributeType | undefined;
  getAttributeGroup: (code: string) => AttributeGroup | undefined;
}

const initialContext: GlobalDataContextProps = {
  attributeGroups: [],
  attributeTypes: [],
  siteMenuItems: [],
  mainMenuItems: [],
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