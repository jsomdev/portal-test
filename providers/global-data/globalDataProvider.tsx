import { AttributeType } from '@services/portal-api';

import { GlobalDataContext, GlobalDataContextProps } from './globalDataContext';

export type GlobalDataProviderProps = Partial<
  Pick<
    GlobalDataContextProps,
    'attributeGroups' | 'attributeTypes' | 'mainMenuItems' | 'siteMenuItems'
  >
>;

export const GlobalDataProvider: React.FC<GlobalDataProviderProps> = ({
  attributeGroups,
  attributeTypes,
  mainMenuItems,
  siteMenuItems,
  children
}) => {
  function getAttributeType(code: string): AttributeType | undefined {
    return attributeTypes?.find(attributeType => attributeType.code === code);
  }
  function getAttributeGroup(code: string): AttributeType | undefined {
    return attributeGroups?.find(
      attribtueGroup => attribtueGroup.code === code
    );
  }

  return (
    <GlobalDataContext.Provider
      value={{
        attributeGroups,
        attributeTypes,
        siteMenuItems,
        mainMenuItems,
        getAttributeGroup,
        getAttributeType
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};
