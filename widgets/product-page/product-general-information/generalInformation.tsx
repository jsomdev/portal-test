import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import {
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useProductPage } from '@providers/product-page/productPageContext';
import { useSystemOfMeasurement } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import { AttributeFormatter } from '@services/i18n/formatters/entity-formatters/attributeFormatter';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { mediaQueryFrom } from '@widgets/media-queries';

import { ProductSubsectionHeader } from '../product-sections/productSubSectionHeader';
import { ProductSpecificationsList } from '../product-specifications/productSpecificationList';
import { ProductSpecificationsGroup } from '../product-specifications/productSpecifications.types';
import { mapAttributesToProductSpecificationItems } from '../product-specifications/productSpecificationsHelper';

interface ProductGeneralInformationStyles {
  leftContainer: IStackItemStyles;
  rightContainer: IStackItemStyles;
  root: IStackStyles;
}

const messages = defineMessages({
  flowTitle: {
    id: messageIds.pages.product.sections.generalInformation.flowTitle,
    description: 'Title for flow subsection',
    defaultMessage: 'Flow'
  },
  descriptionTitle: {
    id: messageIds.pages.product.sections.generalInformation.descriptionTitle,
    description: 'Title for description subsection',
    defaultMessage: 'Description'
  },
  keySpecificationsTitle: {
    id: messageIds.pages.product.sections.generalInformation
      .keySpecificationsTitle,
    description: 'Title for keySpecifications subsection',
    defaultMessage: 'Specification Summary'
  },
  keySpecificationsDescription: {
    id: messageIds.pages.product.sections.generalInformation
      .keySpecificationsDescription,
    description: 'Description for keySpecifications subsection',
    defaultMessage: 'The key specifications of the product'
  }
});

export const ProductGeneralInformation: React.FC = () => {
  const { spacing } = useTheme();
  const { flow, product, keyAttributes } = useProductPage();
  const intl = useIntl();
  const { locale, formatMessage } = intl;
  const { getAttributeType } = useGlobalData();
  const { systemOfMeasurement } = useSystemOfMeasurement();
  const productFormatter: ProductFormatter = new ProductFormatter(product);
  const flowAttributeFormatter: AttributeFormatter = new AttributeFormatter(
    flow,
    intl,
    systemOfMeasurement,
    locale
  );

  const keySpecificationsGroup: ProductSpecificationsGroup | undefined =
    useMemo(() => {
      if (!keyAttributes) {
        return undefined;
      }
      return {
        id: 'ProductKeySpecifications',
        description: formatMessage(messages.keySpecificationsDescription),
        name: '',
        sortIndex: 0,
        items: mapAttributesToProductSpecificationItems(
          keyAttributes || [],
          getAttributeType,
          systemOfMeasurement,
          intl,
          locale
        )
      };
    }, [
      keyAttributes,
      formatMessage,
      getAttributeType,
      systemOfMeasurement,
      intl,
      locale
    ]);
  const styles: ProductGeneralInformationStyles = {
    root: {
      root: {
        width: '100%',
        flexDirection: 'column',
        ...mediaQueryFrom('tablet', {
          flexDirection: 'row'
        })
      }
    },
    leftContainer: {
      root: {
        width: '100%',
        marginBottom: spacing.m,
        marginRight: 0,
        ...mediaQueryFrom('tablet', {
          marginBottom: 0,
          marginRight: spacing.m,
          flex: 5,
          overflow: 'hidden'
        })
      }
    },
    rightContainer: {
      root: {
        width: '100%',
        ...mediaQueryFrom('tablet', {
          flex: 3
        })
      }
    }
  };

  return (
    <Stack styles={styles.root}>
      <Stack tokens={{ childrenGap: spacing.m }} styles={styles.leftContainer}>
        {product.description && (
          <Stack>
            <Stack.Item>
              <ProductSubsectionHeader
                title={formatMessage(messages.descriptionTitle)}
              />
              <Stack tokens={{ padding: `0 ${spacing.l1} 0 0` }}>
                <ReactMarkdown key={'description'} className="reactMarkdown">
                  {productFormatter.formatDescription()}
                </ReactMarkdown>
              </Stack>
            </Stack.Item>
          </Stack>
        )}
        {flow && (
          <Stack>
            <Stack.Item>
              <ProductSubsectionHeader
                title={formatMessage(messages.flowTitle)}
              />
              <Stack tokens={{ padding: `0 ${spacing.l1} 0 0` }}>
                <ReactMarkdown
                  key={formatMessage(messages.flowTitle)}
                  className="reactMarkdown"
                >
                  {flowAttributeFormatter.formatDisplayValue()}
                </ReactMarkdown>
              </Stack>
            </Stack.Item>
          </Stack>
        )}
      </Stack>
      <Stack.Item styles={styles.rightContainer}>
        <Stack>{systemOfMeasurement}</Stack>
        <Stack>
          {!!keyAttributes?.length && keySpecificationsGroup && (
            <Stack>
              <ProductSubsectionHeader
                title={formatMessage(messages.keySpecificationsTitle)}
              />
              <ProductSpecificationsList {...keySpecificationsGroup} />
            </Stack>
          )}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
