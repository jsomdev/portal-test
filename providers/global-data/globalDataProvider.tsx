import { AttributeType, ConditionType } from '@services/portal-api';

import { GlobalDataContext, GlobalDataContextProps } from './globalDataContext';

export type GlobalDataProviderProps = Partial<
  Pick<
    GlobalDataContextProps,
    | 'attributeGroups'
    | 'attributeTypes'
    | 'mainMenuItems'
    | 'siteMenuItems'
    | 'category'
    | 'conditionTypes'
  >
>;

export const GlobalDataProvider: React.FC<GlobalDataProviderProps> = ({
  attributeGroups,
  attributeTypes,
  mainMenuItems,
  siteMenuItems,
  category,
  conditionTypes,
  children
}) => {
  function getAttributeType(
    code: string,
    caseSensitive: boolean = false
  ): AttributeType | undefined {
    return attributeTypes?.find(attributeType => {
      if (caseSensitive) {
        return attributeType.code === code;
      }
      return attributeType.code?.toLowerCase() === code.toLowerCase();
    });
  }
  function getAttributeGroup(code: string): AttributeType | undefined {
    return attributeGroups?.find(
      attributeGroup => attributeGroup.code === code
    );
  }
  function getConditionType(code: string): ConditionType | undefined {
    return conditionTypes?.find(conditionType => conditionType.code === code);
  }

  return (
    <GlobalDataContext.Provider
      value={{
        attributeGroups,
        attributeTypes,
        conditionTypes,
        siteMenuItems,
        mainMenuItems,
        category,
        getAttributeGroup,
        getConditionType,
        getAttributeType
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};
