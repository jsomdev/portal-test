import { defineMessages, useIntl } from 'react-intl';

import {
  IStackStyles,
  IconButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useProductPage } from '@providers/product-page/productPageContext';
import { useSystemOfMeasurement } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';

import { ProductSubsectionHeader } from '../product-sections/productSubSectionHeader';
import { ProductConfigurationItem } from './productConfigurations.types';
import { mapOptionsToProductConfigurationItems } from './productConfigurationsHelper';

interface ActiveProductConfigurationStyles {
  cardContainer: IStackStyles;
}

const messages = defineMessages({
  title: {
    id: messageIds.pages.product.sections.top.configurations.title,
    defaultMessage: 'Product Configuration',
    description: 'Title for the product configuration sub section'
  }
});

export const ActiveProductConfiguration: React.FC = () => {
  const { spacing, effects, semanticColors, palette } = useTheme();
  const { configurations, product } = useProductPage();
  const { getAttributeType } = useGlobalData();
  const intl = useIntl();
  const { locale, formatMessage } = intl;
  const { systemOfMeasurement } = useSystemOfMeasurement();

  const productConfigurationItems: ProductConfigurationItem[] =
    mapOptionsToProductConfigurationItems(
      configurations,
      product.number || undefined,
      getAttributeType,
      intl,
      systemOfMeasurement,
      locale
    ).filter(item => !!item) as ProductConfigurationItem[];

  if (productConfigurationItems.length === 0) {
    return null;
  }

  const styles: ActiveProductConfigurationStyles = {
    cardContainer: {
      root: {
        marginBottom: spacing.l1,
        borderRadius: effects.roundedCorner2,
        border: `1px solid ${semanticColors.variantBorder}`
      }
    }
  };
  return (
    <Stack.Item>
      <ProductSubsectionHeader title={formatMessage(messages.title)} />
      <Stack
        tokens={{ padding: spacing.m }}
        horizontal
        verticalAlign="center"
        horizontalAlign="space-between"
        styles={styles.cardContainer}
      >
        <Stack.Item>
          {productConfigurationItems.map(item => (
            <div key={item.title}>
              <Text
                variant="mediumPlus"
                styles={{
                  root: {
                    paddingRight: spacing.s1,
                    color: palette.neutralSecondary
                  }
                }}
              >
                {`${item.title}:`}
              </Text>
              <Text variant="mediumPlus">{item.text}</Text>
            </div>
          ))}
        </Stack.Item>
        <IconButton iconProps={{ iconName: 'ChevronRight' }} />
      </Stack>
    </Stack.Item>
  );
};
