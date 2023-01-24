import { useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  IPanelStyles,
  IStackStyles,
  IconButton,
  Panel,
  PanelType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useProductPage } from '@providers/product-page/productPageContext';
import { useSystemOfMeasurement } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

import { ProductSubsectionHeader } from '../product-sections/productSubSectionHeader';
import { ProductConfigurationPicker } from './productConfigurationPicker';
import { ProductConfigurationItem } from './productConfigurations.types';
import { mapOptionsToProductConfigurationItems } from './productConfigurationsHelper';

interface ActiveProductConfigurationStyles {
  cardContainer: IStackStyles;
  panel: Partial<IPanelStyles>;
}

const messages = defineMessages({
  title: {
    id: messageIds.pages.product.sections.top.configurations.title,
    defaultMessage: 'Product Configuration',
    description: 'Title for the product configuration sub section'
  },
  ariaClose: {
    id: messageIds.finder.panel.mobile.ariaClose,
    description: 'Arialabel to close the configurations panel',
    defaultMessage: 'Close'
  }
});

export const ActiveProductConfiguration: React.FC = () => {
  const [showConfigurationsPanel, setShowConfigurationsPanel] = useState(false);
  const { spacing, effects, semanticColors, palette } = useTheme();
  const { configurations, product } = useProductPage();
  const { getAttributeType } = useGlobalData();
  const intl = useIntl();
  const { locale, formatMessage } = intl;
  const { systemOfMeasurement } = useSystemOfMeasurement();

  const productConfigurationItems: ProductConfigurationItem[] = useMemo(() => {
    return mapOptionsToProductConfigurationItems(
      configurations,
      product.number || undefined,
      getAttributeType,
      intl,
      systemOfMeasurement,
      locale
    ).filter(item => !!item) as ProductConfigurationItem[];
  }, [
    configurations,
    getAttributeType,
    intl,
    locale,
    product.number,
    systemOfMeasurement
  ]);

  if (productConfigurationItems.length === 0) {
    return null;
  }

  const styles: ActiveProductConfigurationStyles = {
    cardContainer: {
      root: {
        marginBottom: spacing.l1,
        borderRadius: effects.roundedCorner4,
        border: `1px solid ${semanticColors.variantBorder}`,
        '&:hover': {
          border: `1px solid ${semanticColors.variantBorderHovered}`,
          cursor: 'pointer'
        }
      }
    },
    panel: {
      content: {
        background: palette.white,
        padding: 0
      },
      scrollableContent: {
        background: palette.white
      },
      commands: {
        padding: 0,
        position: 'sticky'
      },
      navigation: {
        height: 80,
        background: palette.white,
        padding: spacing.m,
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      },
      header: {
        padding: 0,
        margin: 'auto'
      },
      subComponentStyles: {
        closeButton: {
          root: {
            margin: 'auto'
          }
        }
      }
    }
  };
  return (
    <Stack.Item>
      <ProductSubsectionHeader title={formatMessage(messages.title)}>
        <IconButton
          onClick={() => setShowConfigurationsPanel(true)}
          iconProps={{ iconName: 'Settings' }}
        />
      </ProductSubsectionHeader>
      <Stack
        tokens={{ padding: spacing.m, childrenGap: spacing.s1 }}
        verticalAlign="center"
        horizontalAlign="space-between"
        onClick={() => setShowConfigurationsPanel(true)}
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
      </Stack>

      <Panel
        type={PanelType.custom}
        customWidth={rem(600)}
        isBlocking
        isOpen={showConfigurationsPanel}
        onDismiss={() => setShowConfigurationsPanel(false)}
        hasCloseButton={true}
        isLightDismiss
        headerText={formatMessage(messages.title)}
        closeButtonAriaLabel={formatMessage(messages.ariaClose)}
        isFooterAtBottom={true}
        styles={styles.panel}
      >
        <ProductConfigurationPicker items={productConfigurationItems} />
      </Panel>
    </Stack.Item>
  );
};
