import React, { useMemo, useState } from 'react';

import { MarkDownDialog } from '@components/dialogs/markDownDialog';
import {
  FontWeights,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';

import { ProductCompareContext } from '../productCompareContext';
import {
  CompareAttribute,
  CompareAttributeValue,
  CompareGroup
} from './detailedCompare.types';
import { DetailedCompareListItem } from './detailedCompareListItem';

export type DetailedCompareListProps = CompareGroup;
export interface ProductCompareListStyles {
  title: ITextStyles;
  root: IStackStyles;
}

export const DetailedCompareList: React.FC<DetailedCompareListProps> = ({
  attributes,
  groupName
}) => {
  const { spacing } = useTheme();
  const { getAttributeType } = useGlobalData();
  const { showIdenticalValues, products } = React.useContext(
    ProductCompareContext
  );
  const [selectedCompareAttribute, setSelectedCompareAttribute] = useState<
    CompareAttribute | undefined
  >(undefined);

  const filteredAttributes: CompareAttribute[] = useMemo(() => {
    function allValuesAreIdentical(list: CompareAttributeValue[]): boolean {
      const compareValue = list[0].text;
      //An attribute with no comparable attribute value should be visible under 'show only differences'
      if (list.length === 1 && products.length > 1) {
        return false;
      }

      return list.every(item => {
        return item.text === compareValue;
      });
    }

    return attributes.filter(compareAttribute => {
      return showIdenticalValues && products.length > 1
        ? !allValuesAreIdentical(compareAttribute.values)
        : true;
    });
  }, [attributes, showIdenticalValues, products]);

  const selectedAttributeTitle: string | undefined = useMemo(() => {
    if (selectedCompareAttribute) {
      const attributeTypeFormatter = new AttributeTypeFormatter(
        getAttributeType(selectedCompareAttribute.typeCode || '')
      );
      return attributeTypeFormatter.formatName();
    }
    return undefined;
  }, [getAttributeType, selectedCompareAttribute]);

  const selectedAttributeDescription: string | undefined = useMemo(() => {
    if (selectedCompareAttribute) {
      const attributeTypeFormatter = new AttributeTypeFormatter(
        getAttributeType(selectedCompareAttribute.typeCode || '')
      );
      return attributeTypeFormatter.formatDescription();
    }
    return undefined;
  }, [getAttributeType, selectedCompareAttribute]);

  const styles: ProductCompareListStyles = {
    root: {
      root: {
        marginBottom: spacing.m,
        overflow: 'visible'
      }
    },

    title: {
      root: {
        fontWeight: FontWeights.semibold,
        marginBottom: spacing.s2
      }
    }
  };

  if (!filteredAttributes.length) {
    return null;
  }

  return (
    <>
      <Stack styles={styles.root} tokens={{ childrenGap: spacing.s1 }}>
        <Text variant="large" styles={styles.title} as="h2">
          {groupName}
        </Text>
        <Stack>
          <Stack.Item>
            <MarkDownDialog
              dialogProps={{
                onDismiss: () => setSelectedCompareAttribute(undefined),
                hidden: !selectedCompareAttribute?.description
              }}
              title={selectedAttributeTitle || ''}
              markdownSource={selectedAttributeDescription || ''}
            />
            {filteredAttributes.map((attribute, index) => {
              return (
                <DetailedCompareListItem
                  key={attribute.typeCode}
                  name={attribute.attributeTypeName}
                  index={index || 0}
                  compareValues={attribute.values}
                  hideInfoIcon={!attribute.description}
                  onClick={() => setSelectedCompareAttribute(attribute)}
                />
              );
            })}
          </Stack.Item>
        </Stack>
      </Stack>
    </>
  );
};
