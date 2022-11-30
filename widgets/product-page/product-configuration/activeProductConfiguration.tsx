import { useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { ClosePanelButton } from '@components/buttons/closePanelButton';
import {
  IButtonStyles,
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
  panelHeader: IStackStyles;
  closeButton: Partial<IButtonStyles>;
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
        borderRadius: effects.roundedCorner2,
        border: `1px solid ${semanticColors.variantBorder}`
      }
    },
    panel: {
      commands: {
        display: 'none'
      },
      root: {
        height: '100%'
      },
      content: {
        padding: 0,
        background: palette.white,
        overflow: 'auto',
        maxHeight: `calc(100% - ${rem(90)})`
      },
      footer: {
        background: palette.white
      }
    },

    panelHeader: {
      root: {
        background: palette.white,
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        height: rem(90)
      }
    },
    closeButton: {
      icon: {
        color: palette.neutralPrimary
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
        <IconButton
          onClick={() => setShowConfigurationsPanel(true)}
          iconProps={{ iconName: 'ChevronRight' }}
        />
      </Stack>
      <Panel
        type={PanelType.custom}
        customWidth={rem(600)}
        isBlocking
        isOpen={showConfigurationsPanel}
        onDismiss={() => setShowConfigurationsPanel(false)}
        hasCloseButton={false}
        isFooterAtBottom={true}
        onRenderHeader={props => (
          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
            tokens={{ padding: `${rem(25)} ${spacing.s1}` }}
            styles={styles.panelHeader}
          >
            <ClosePanelButton
              iconProps={{
                iconName: 'Cancel'
              }}
              onClick={() => props?.onDismiss?.()}
              title={formatMessage(messages.ariaClose)}
              text={formatMessage(messages.title)}
              styles={styles.closeButton}
            />
          </Stack>
        )}
        styles={styles.panel}
      >
        <ProductConfigurationPicker items={productConfigurationItems} />
      </Panel>
    </Stack.Item>
  );
};
