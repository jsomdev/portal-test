import { createContext, useContext } from 'react';

import {
  AttributeGroup,
  AttributeType,
  Category,
  ConditionType,
  MenuItem
} from '@services/portal-api';

export interface GlobalDataContextProps {
  attributeTypes: AttributeType[] | undefined;
  attributeGroups: AttributeGroup[] | undefined;
  conditionTypes: ConditionType[] | undefined;
  siteMenuItems: MenuItem[] | undefined;
  mainMenuItems: MenuItem[] | undefined;
  category: Category | undefined;
  getConditionType: (code: string) => ConditionType | undefined;
  getAttributeType: (
    code: string,
    caseSensitive?: boolean
  ) => AttributeType | undefined;
  getAttributeGroup: (code: string) => AttributeGroup | undefined;
}

const initialContext: GlobalDataContextProps = {
  attributeGroups: [],
  attributeTypes: [],
  conditionTypes: [],
  siteMenuItems: [],
  mainMenuItems: [],
  category: undefined,
  getAttributeGroup: () => {
    throw new Error('Not implemented');
  },
  getAttributeType: () => {
    throw new Error('Not implemented');
  },
  getConditionType: () => {
    throw new Error('Not implemented');
  }
};
export const GlobalDataContext =
  createContext<GlobalDataContextProps>(initialContext);
export const useGlobalData = (): GlobalDataContextProps =>
  useContext(GlobalDataContext);
