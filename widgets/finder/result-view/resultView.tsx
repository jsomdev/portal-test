import React, { useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { ClosePanelButton } from '@components/buttons/closePanelButton';
import { StickyThumbContainer } from '@components/sticky/stickyThumbContainer';
import { TrustFactors } from '@components/trust-factor/trustFactor';
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
import {
  Mobile,
  TabletAndDesktop,
  mediaQueryFrom
} from '@widgets/media-queries';

import { FinderPanel } from '../panel/finderPanel';
import { QuickFilter } from '../quick-filter/quickFilter';
import { ActiveFilters } from './activeFilters';
import { FilterResultsButton } from './filterResultsButton';
import { ProductListView } from './list-view/listView';
import { ProductResultOverview } from './overview/productResultOverview';
import { ProductResultOverviewItem } from './overview/productResultOverview.types';
import { mapCategoriesToProductResultOverviewItems } from './overview/productResultOverviewHelper';
import { ResultViewPagination } from './product-result-view-pagination/resultViewPagination';
import { getTotalPages } from './product-result-view-pagination/resultViewPaginationHelper';
import { ResultsHeader } from './resultsHeader';

export type ResultViewType = 'list' | 'overview';
interface ResultViewProps {
  category?: Category;
  searchQuery?: string;
  viewAs: ResultViewType;
}

interface ResultViewStyles {
  root?: IStackStyles;
  sidePanelContainer?: IStackItemStyles;
  mainContainer?: IStackItemStyles;
  panel?: Partial<IPanelStyles>;
  stickyContainer: IStackStyles;
}

const messages = defineMessages({
  title: {
    id: messageIds.pages.category.title,
    description: 'Title for the category result view',
    defaultMessage: 'Category'
  },
  titleWithSearchAndCategory: {
    id: messageIds.pages.category.titleWithSearchAndCategory,
    description: 'Title for the category result view with a search query',
    defaultMessage: ''
  },
  titleWithOnlySearch: {
    id: messageIds.pages.category.titleWithOnlySearch,
    description: 'Title for the result view with a search query',
    defaultMessage: ''
  },
  titleWithoutSearchOrCategory: {
    id: messageIds.pages.category.titleWithoutSearchOrCategory,
    description: 'Title for the result view without a search query or category',
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

export const ResultView: React.FC<ResultViewProps> = ({
  category,
  viewAs,
  searchQuery
}) => {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState<boolean>(false);
  const { spacing, palette, semanticColors } = useTheme();
  const { locale, formatMessage } = useIntl();
  const { productCount, modelCount } = useFinder();
  const router = useRouter();
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
  const categoryFormatter = useMemo(() => {
    return new CategoryFormatter(category, locale);
  }, [category, locale]);
  const title = useMemo(() => {
    if (searchQuery) {
      return category
        ? formatMessage(messages.titleWithSearchAndCategory, {
            name: categoryFormatter.formatName(),
            searchQuery: searchQuery
          })
        : formatMessage(messages.titleWithOnlySearch, {
            searchQuery: searchQuery
          });
    }

    if (category) {
      return formatMessage(messages.title, {
        name: categoryFormatter.formatName()
      });
    }

    return formatMessage(messages.titleWithoutSearchOrCategory);
  }, [searchQuery, formatMessage, categoryFormatter, category]);
  const overviewItems: ProductResultOverviewItem[] = useMemo(() => {
    if (viewAs == 'overview') {
      return mapCategoriesToProductResultOverviewItems(
        category?.children || [],
        locale
      );
    }
    return [];
  }, [category?.children, locale, viewAs]);

  const styles: ResultViewStyles = {
    panel: {
      content: {
        background: palette.white,
        padding: 0
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
    },

    sidePanelContainer: {
      root: {
        width: 360,
        paddingLeft: spacing.l1,
        paddingRight: spacing.m
      }
    },
    mainContainer: {
      root: {
        paddingLeft: spacing.m,
        paddingRight: spacing.m,
        width: '100%',
        ...mediaQueryFrom('tablet', {
          width: 'calc(100% - 360px)'
        })
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
    <Stack horizontal tokens={{ padding: `${spacing.l2} 0 ${spacing.l1} 0` }}>
      <Mobile>
        <Panel
          type={PanelType.smallFluid}
          isOpen={isFiltersPanelOpen}
          onDismiss={() => setIsFiltersPanelOpen(false)}
          hasCloseButton={true}
          isFooterAtBottom={true}
          onRenderHeader={() => (
            <Stack.Item
              align="center"
              styles={{ root: { flex: 1, justifySelf: 'center' } }}
            >
              <Text
                variant="xxLarge"
                as="h1"
                styles={{ root: { lineHeight: '2rem' } }}
              >
                {/* This is temp text */}
                <span>Spray</span>
                <span style={{ color: palette.themePrimary }}>
                  {/* This is temp text */}
                  Finder
                </span>
              </Text>
            </Stack.Item>
          )}
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
        <Stack tokens={{ childrenGap: `${spacing.m} 0` }}>
          <PagesHeader
            title={title}
            description={categoryFormatter.formatDescription()}
          />

          {viewAs === 'list' && <QuickFilter category={category} />}
          <ResultsHeader
            onClickFilter={() => setIsFiltersPanelOpen(true)}
            filterButtonText={formatMessage(messages.filterResults, {
              productCount: productCount || 0
            })}
            productCount={productCount || 0}
            modelCount={modelCount || 0}
          />
          {viewAs === 'list' && (
            <>
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
              <TrustFactors />
            </>
          )}

          {viewAs === 'overview' && category && (
            <>
              <ProductResultOverview
                category={category}
                categoryItems={overviewItems}
              />
            </>
          )}
          <Mobile>
            <StickyThumbContainer>
              <FilterResultsButton
                onClick={() => setIsFiltersPanelOpen(true)}
                text={formatMessage(messages.filterResults, {
                  productCount: productCount || 0
                })}
              />
            </StickyThumbContainer>
          </Mobile>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
