import { useState } from 'react';

import Image from 'next/image';
import { defineMessages, useIntl } from 'react-intl';

import {
  IPanelStyles,
  IStackItemStyles,
  IStackStyles,
  Panel,
  PanelType,
  PrimaryButton,
  Stack,
  Text,
  TextField,
  useTheme
} from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { messageIds } from '@services/i18n';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { Category } from '@services/portal-api';
import {
  WidenImageHelper,
  WidenImagePreset
} from '@services/widen/widenImageHelper';
import { rem } from '@utilities/rem';
import { PagesHeader } from '@widgets/headers/pageHeader';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

import { FinderPanel } from '../panel/finderPanel';
import { ActiveFilters } from './activeFilters';
import { FilterResultsButton, ResultsHeader } from './resultsHeader';

interface ResultViewProps {
  category: Category;
}

interface ResultViewStyles {
  root?: IStackStyles;
  sidePanelContainer?: IStackItemStyles;
  mainContainer?: IStackItemStyles;
  panel?: Partial<IPanelStyles>;
}

const messages = defineMessages({
  title: {
    id: messageIds.pages.category.title,
    description: 'Title for the category result view',
    defaultMessage: 'Category'
  },
  titleWithSearch: {
    id: messageIds.pages.category.titleWithSearch,
    description: 'Title for the category result view with a search query',
    defaultMessage: ''
  },
  panelTitle: {
    id: messageIds.finder.panel.mobile.title,
    description: 'Title for the filters panel on the mobile view',
    defaultMessage: 'Filters'
  },
  ariaClose: {
    id: messageIds.finder.panel.mobile.ariaClose,
    description: 'Arialabel to close the filters panel',
    defaultMessage: 'Close'
  },
  showResults: {
    id: messageIds.finder.panel.mobile.showResults,
    description: 'Text for the button the show the results',
    defaultMessage: 'Show results'
  },
  filterResults: {
    id: messageIds.finder.resultsHeader.actions.filter,
    description: 'Button text for the filter results button',
    defaultMessage: 'Filter products'
  }
});

export const ResultView: React.FC<ResultViewProps> = ({ category }) => {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState<boolean>(false);
  const { spacing } = useTheme();
  const { locale } = useIntl();
  const { productCount, modelCount } = useFinder();
  const { formatMessage } = useIntl();

  const categoryFormatter = new CategoryFormatter(category, locale);

  const styles: ResultViewStyles = {
    sidePanelContainer: {
      root: {
        flex: 2,
        paddingLeft: rem(spacing.l1),
        paddingRight: rem(spacing.m)
      }
    },
    mainContainer: {
      root: {
        paddingLeft: rem(spacing.m),
        paddingRight: rem(spacing.m),
        flex: 6
      }
    }
  };
  return (
    <Stack
      horizontal
      tokens={{ padding: `${rem(spacing.l2)} 0 ${rem(spacing.l1)} 0` }}
    >
      <Mobile>
        <Panel
          isOpen={isFiltersPanelOpen}
          onDismiss={() => setIsFiltersPanelOpen(false)}
          type={PanelType.smallFluid}
          styles={styles.panel}
          headerText={formatMessage(messages.panelTitle)}
          closeButtonAriaLabel={formatMessage(messages.ariaClose)}
          isFooterAtBottom={true}
          onRenderFooterContent={() => (
            <Stack>
              <FilterResultsButton
                onClick={() => setIsFiltersPanelOpen(false)}
                text={formatMessage(messages.showResults, {
                  productCount: productCount || 0
                })}
              />
            </Stack>
          )}
        >
          <FinderPanel />
        </Panel>
      </Mobile>
      <TabletAndDesktop>
        <Stack.Item styles={styles.sidePanelContainer}>
          <FinderPanel />
        </Stack.Item>
      </TabletAndDesktop>
      <Stack.Item styles={styles.mainContainer}>
        <Stack tokens={{ childrenGap: `${rem(spacing.m)} 0` }}>
          <PagesHeader
            title={formatMessage(messages.title, {
              name: categoryFormatter.formatName()
            })}
            description={categoryFormatter.formatDescription()}
          />
          <ResultsHeader
            onClickFilter={() => setIsFiltersPanelOpen(true)}
            filterButtonText={formatMessage(messages.filterResults, {
              productCount: productCount || 0
            })}
            productCount={productCount || 0}
            modelCount={modelCount || 0}
          />
          <ActiveFilters />
          <TempListView />
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export const TempListView: React.FC = () => {
  const { products } = useFinder();
  const { palette } = useTheme();
  const { locale } = useIntl();
  return (
    <Stack horizontal wrap>
      {products.slice(0, 20).map(product => {
        const productFormatter = new ProductFormatter(product, locale);
        return (
          <Stack.Item
            styles={{
              root: {
                padding: rem(8),
                width: 320
              }
            }}
            key={product.number}
          >
            <Stack
              horizontalAlign="stretch"
              styles={{
                root: {
                  position: 'relative',
                  border: `2px solid ${palette.neutralLight}`,
                  borderRadius: 8
                }
              }}
              tokens={{ padding: 16, childrenGap: 8 }}
            >
              <Stack.Item align="center">
                <Image
                  layout="fixed"
                  height={140}
                  width={140}
                  src={
                    WidenImageHelper.getOptimizedSrc(
                      product.image?.url || '',
                      WidenImagePreset.Medium
                    ) || ''
                  }
                  alt={productFormatter.formatImageCaption()}
                />
              </Stack.Item>
              <Text as="h2" variant="xLarge">
                {product.number}
              </Text>
              <Text
                as="p"
                variant="large"
                styles={{
                  root: {
                    maxWidth: 200,
                    minHeight: 70,
                    marginBottom: 16
                  }
                }}
              >
                {productFormatter.formatName()}
              </Text>
              <Stack horizontal tokens={{ childrenGap: 4 }}>
                <TextField
                  height={36}
                  styles={{ root: { width: 60 }, fieldGroup: { height: 36 } }}
                  type="number"
                  placeholder="1"
                />
                <Stack.Item grow>
                  <PrimaryButton
                    styles={{ root: { width: '100%', height: 36 } }}
                    iconProps={{ iconName: 'ShoppingCart' }}
                  >
                    Add To Cart
                  </PrimaryButton>
                </Stack.Item>
              </Stack>
            </Stack>
          </Stack.Item>
        );
      })}
    </Stack>
  );
};
