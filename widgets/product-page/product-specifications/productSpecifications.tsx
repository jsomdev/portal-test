import { useMemo } from 'react';

import { useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useProductPage } from '@providers/product-page/productPageContext';
import { useSystemOfMeasurement } from '@providers/system-of-measurement/systemOfMeasurementContext';

import { ProductSpecificationsList } from './productSpecificationList';
import { mapAttributesToProductSpecificationGroups } from './productSpecificationsHelper';

export const ProductSpecifications: React.FC = () => {
  const { attributes } = useProductPage();
  const { getAttributeType, getAttributeGroup } = useGlobalData();
  const { systemOfMeasurement } = useSystemOfMeasurement();
  const intl = useIntl();
  const { locale } = intl;
  const productSpecificationGroups = useMemo(() => {
    return mapAttributesToProductSpecificationGroups(
      attributes,
      getAttributeType,
      getAttributeGroup,
      systemOfMeasurement,
      locale,
      intl,
      true
    );
  }, [
    attributes,
    getAttributeGroup,
    getAttributeType,
    intl,
    locale,
    systemOfMeasurement
  ]);
  return (
    <Stack>
      {productSpecificationGroups.map(group => (
        <ProductSpecificationsList key={group.id} {...group} />
      ))}
    </Stack>
  );
};
