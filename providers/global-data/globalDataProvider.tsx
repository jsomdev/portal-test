import { AttributeType } from '@services/portal-api';

import { GlobalDataContext, GlobalDataContextProps } from './globalDataContext';

type GlobalDataProviderProps = Pick<
  GlobalDataContextProps,
  'attributeGroups' | 'attributeTypes' | 'category'
>;

export const GlobalDataProvider: React.FC<GlobalDataProviderProps> = ({
  attributeGroups,
  category,
  attributeTypes,
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
        category,
        attributeGroups,
        attributeTypes,
        getAttributeGroup,
        getAttributeType
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};
