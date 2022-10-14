import React, { useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { ClosePanelButton } from '@components/buttons/closePanelButton';
import {
  IButtonStyles,
  IPanelStyles,
  IStackItemStyles,
  IStackStyles,
  Panel,
  PanelType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { FINDER_PAGE_SIZE } from '@providers/finder/finderProvider';
import { messageIds } from '@services/i18n';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { Category } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { scrollToTop } from '@utilities/scrollToTop';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

import { FinderPanel } from '../panel/finderPanel';
import { ActiveFilters } from './activeFilters';
import { FilterResultsButton } from './filterResultsButton';
import { ProductListView } from './list-view/listView';
import { ResultViewPagination } from './product-result-view-pagination/resultViewPagination';
import { getTotalPages } from './product-result-view-pagination/resultViewPaginationHelper';
import { ResultsHeader } from './resultsHeader';

interface ResultViewProps {
  category: Category;
}

interface ResultViewStyles {
  root?: IStackStyles;
  sidePanelContainer?: IStackItemStyles;
  mainContainer?: IStackItemStyles;
  panel?: Partial<IPanelStyles>;
  panelHeader: IStackStyles;
  closeButton: IButtonStyles;
  stickyContainer: IStackStyles;
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
  const { spacing, palette, semanticColors } = useTheme();
  const { locale } = useIntl();
  const { productCount, modelCount } = useFinder();
  const router = useRouter();
  const { formatMessage } = useIntl();

  const page = useMemo(() => {
    const pageValue: number = Number(router.query.page || '1');
    const isValidPage =
      pageValue > 0 &&
      pageValue <= getTotalPages(productCount || 0, FINDER_PAGE_SIZE);
    return isValidPage ? pageValue : 1;
  }, [productCount, router.query.page]);

  function updatePage(newPage: number): void {
    router.query.page = newPage >= 1 ? newPage.toString() : '1';
    router.push(router, undefined, { shallow: true });
  }
  const categoryFormatter = new CategoryFormatter(category, locale);

  const styles: ResultViewStyles = {
    panel: {
      commands: {
        display: 'none'
      },
      root: {
        height: '100%',
        background: palette.white
      },
      content: {
        padding: 0,
        overflow: 'auto',
        maxHeight: `calc(100% - ${rem(90)})`
      }
    },
    panelHeader: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        height: rem(90)
      }
    },
    closeButton: {
      icon: {
        color: palette.neutralPrimary
      }
    },
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
    },
    stickyContainer: {
      root: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        background: palette.white
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
          type={PanelType.smallFluid}
          isOpen={isFiltersPanelOpen}
          onDismiss={() => setIsFiltersPanelOpen(false)}
          hasCloseButton={false}
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
          onRenderHeader={props => (
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ padding: `${rem(25)} ${rem(spacing.s1)}` }}
              styles={styles.panelHeader}
            >
              <ClosePanelButton
                iconProps={{
                  iconName: 'Cancel'
                }}
                onClick={() => props?.onDismiss?.()}
                title={formatMessage(messages.ariaClose)}
                styles={styles.closeButton}
              />
              <Stack.Item
                align="center"
                styles={{ root: { justifySelf: 'center' } }}
              >
                <Text
                  as="h1"
                  styles={{ root: { marginTop: 0, marginBottom: 8 } }}
                >
                  {/* This is temp text */}
                  <Text variant="xxLarge">Spray</Text>
                  <Text
                    variant="xxLarge"
                    styles={{ root: { color: palette.themePrimary } }}
                  >
                    {/* This is temp text */}
                    Finder
                  </Text>
                </Text>
              </Stack.Item>
            </Stack>
          )}
          styles={styles.panel}
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
          <ProductListView />
          <ResultViewPagination
            totalItems={productCount || 0}
            currentPage={page}
            pageSize={FINDER_PAGE_SIZE}
            onPageChange={newPage => {
              scrollToTop('body');
              updatePage(newPage);
            }}
          />
          <Mobile>
            <Stack
              tokens={{ padding: `${rem(spacing.m)} ${rem(25)}` }}
              styles={styles.stickyContainer}
            >
              <FilterResultsButton
                onClick={() => setIsFiltersPanelOpen(true)}
                text={formatMessage(messages.filterResults, {
                  productCount: productCount || 0
                })}
              />
            </Stack>
          </Mobile>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
