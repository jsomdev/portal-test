import React, { useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { Url } from 'url';

import { NextLink } from '@components/link/nextLink';
import {
  ContextualMenu,
  ICalloutContentStyleProps,
  ICalloutContentStyles,
  IProgressIndicatorStyles,
  ISearchBoxStyles,
  IStackStyles,
  IStyleFunctionOrObject,
  ITextStyles,
  ProgressIndicator,
  SearchBox,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { COOKIESKEYS } from '@services/cookies/constants';
import { messageIds } from '@services/i18n';
import {
  fetchAutoCompleteSearch,
  fetchFacetedSearchResults
} from '@services/portal-api/finder';
import { QUERYKEYS } from '@services/react-query/constants';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
import pagePaths from '@utilities/pagePaths';
import { rem } from '@utilities/rem';
import { useDebounce } from '@utilities/useDebounce';
import { useWindowSize } from '@utilities/useWindowSize';
import { ProductListItemPricing } from '@widgets/finder/result-view/list-view/listItemPricing';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';
import { usePageContext } from '@widgets/page/pageContext';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

import {
  ProductSearchSuggestion,
  mapAutoCompleteStringsToViewModel,
  mapFacetedSearchProductsToProductSuggestions as mapFacetedSearchProductsToProductSearchSuggestions
} from './headerSearchBarHelper';

const messages = defineMessages({
  searchPlaceholder: {
    id: messageIds.searchBar.placeholder,
    description: 'Page search bar placeholder',
    defaultMessage: 'I am looking for...'
  },
  noResults: {
    id: messageIds.searchBar.noResults,
    description: 'No results text',
    defaultMessage: 'No products found. Try searching something else'
  },
  recentSearches: {
    id: messageIds.searchBar.recentSearches,
    description: 'Recent searches text',
    defaultMessage: 'Recent searches'
  },
  suggestedProducts: {
    id: messageIds.searchBar.suggestedProducts,
    description: 'Suggested text',
    defaultMessage: 'Suggested products'
  }
});

export const HeaderSearchBar: React.FC = () => {
  return (
    <>
      <Mobile>
        <MobileSearchBar />
      </Mobile>
      <TabletAndDesktop>
        {(className, renderChildren) => (
          <DesktopSearchBar
            renderChildren={renderChildren}
            className={className}
          />
        )}
      </TabletAndDesktop>
    </>
  );
};

const DesktopSearchBar: React.FC<{
  className: string;
  renderChildren: boolean;
}> = ({ className, renderChildren }) => {
  const { spacing } = useTheme();

  return (
    <Stack grow tokens={{ padding: `0 ${spacing.l1}` }} className={className}>
      {renderChildren && <SearchBar />}
    </Stack>
  );
};

const MobileSearchBar: React.FC = () => {
  return (
    <Stack tokens={{ padding: `0 ${rem(12)}` }}>
      <SearchBar />
    </Stack>
  );
};

interface SearchBarStyles {
  searchBox: ISearchBoxStyles;
  sectionTitle: ITextStyles;
  sectionContainer: IStackStyles;
  noReults: ITextStyles;
  linkText: ITextStyles;
  listContainer: IStackStyles;
  progressIndicator: Partial<IProgressIndicatorStyles>;
  callout: IStyleFunctionOrObject<
    ICalloutContentStyleProps,
    ICalloutContentStyles
  >;
}

const SearchBar: React.FC = () => {
  const { togglePageOverlay } = usePageContext();
  const { spacing, palette, semanticColors, fonts, effects } = useTheme();
  const { locale, formatMessage } = useIntl();
  const { push } = useRouter();
  const [cookies, setCookie] = useCookies([COOKIESKEYS.recentSearches]);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [searchBoxInput, setSearchBoxInput] = useState<string | undefined>(
    undefined
  );
  const [isBoxFocused, setIsBoxFocused] = useState(false);
  const [showContextualMenu, setShowContextualMenu] = useState(false);
  const recentSearches: string[] | null | undefined = useMemo(
    () => cookies[COOKIESKEYS.recentSearches],
    [cookies]
  );
  const debouncedSearchBoxInput = useDebounce<string | undefined>(
    searchBoxInput,
    600
  );

  const {
    data: suggestionsData,
    status: suggestionsStatus,
    isFetching
  } = useQuery(
    [QUERYKEYS.productFinderResults, debouncedSearchBoxInput],
    async () => {
      if (!debouncedSearchBoxInput || debouncedSearchBoxInput.length < 2) {
        return undefined;
      }
      const [productsResults, autoCompleteResults] = await Promise.all([
        fetchFacetedSearchResults(
          'null',
          'null',
          encodeURIComponent(debouncedSearchBoxInput || ''),
          SUGGESTIONS_COUNT,
          0
        ),
        fetchAutoCompleteSearch(debouncedSearchBoxInput || undefined)
      ]);

      return {
        products: productsResults,
        autoComplete: autoCompleteResults
      };
    },
    {
      keepPreviousData: true
    }
  );

  const productSearchSuggestions: ProductSearchSuggestion[] | undefined =
    useMemo(() => {
      if (!suggestionsData) {
        return undefined;
      }
      return mapFacetedSearchProductsToProductSearchSuggestions(
        suggestionsData.products.value,
        locale
      );
    }, [locale, suggestionsData]);

  const showLoadingIndicator: boolean = useMemo(
    () => isFetching || suggestionsStatus === 'loading',
    [isFetching, suggestionsStatus]
  );
  const showAutoComplete: boolean = useMemo(
    () =>
      !!(suggestionsData?.autoComplete?.value.length && searchBoxInput?.length),
    [searchBoxInput?.length, suggestionsData?.autoComplete?.value.length]
  );
  const SUGGESTIONS_COUNT: number = showAutoComplete ? 3 : 5;
  const showRecentSearches: boolean = useMemo(
    () => !!(recentSearches?.length && !searchBoxInput?.length),
    [recentSearches?.length, searchBoxInput?.length]
  );
  const showSuggestedProducts: boolean = useMemo(
    () => !!(productSearchSuggestions?.length && searchBoxInput?.length),
    [productSearchSuggestions?.length, searchBoxInput?.length]
  );
  const showNoResults: boolean = useMemo(
    () =>
      !!(
        (suggestionsStatus === 'success' || suggestionsStatus === 'error') &&
        searchBoxInput?.length &&
        searchBoxInput.length >= 2 &&
        !productSearchSuggestions?.length
      ),
    [
      productSearchSuggestions?.length,
      searchBoxInput?.length,
      suggestionsStatus
    ]
  );

  function onSearchBarChange(
    ev: React.ChangeEvent<HTMLInputElement> | undefined,
    newValue: string | undefined
  ) {
    setSearchBoxInput(newValue || '');
  }

  function onHideContextualMenu() {
    setShowContextualMenu(false);
  }

  function onFocus() {
    setIsBoxFocused(true);
  }

  function onClear() {
    setSearchBoxInput(undefined);
  }

  function onBlur() {
    setIsBoxFocused(false);
  }

  function onClickCapture() {
    setShowContextualMenu(true);
  }

  function onEscape(ev: React.ChangeEvent<HTMLDivElement>): void {
    setSearchBoxInput(undefined);
    ev.target.blur();
  }

  function onSearch(newValue: string) {
    // Need to make sure the overlay + menu disappears
    setShowContextualMenu(false);
    setIsBoxFocused(false);

    // Filter out the newValue from the recentSearches
    const currentRecentSearches =
      recentSearches?.filter(value => value !== newValue) || [];

    // Add the newValue to the recentSearches
    const newRecentSearches: string[] = [
      newValue,
      ...currentRecentSearches
    ].slice(0, 10);

    // Update the cookie
    setCookie(COOKIESKEYS.recentSearches, newRecentSearches);

    // Navigate to the search page
    push({
      pathname: pagePaths.search().toString(),
      query: { query: newValue }
    });
  }

  // This will trigger rerenders when we resize
  useWindowSize();

  useEffect(() => {
    if (isBoxFocused || showContextualMenu) {
      togglePageOverlay(true);
    } else {
      togglePageOverlay(false);
    }
  }, [isBoxFocused, showContextualMenu, togglePageOverlay]);

  const styles: SearchBarStyles = {
    linkText: {
      root: {
        cursor: 'pointer'
      }
    },
    noReults: {
      root: {
        color: palette.neutralSecondary
      }
    },
    sectionTitle: {
      root: {
        color: palette.neutralSecondaryAlt,
        fontWeight: 500
      }
    },
    sectionContainer: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      }
    },
    progressIndicator: {
      itemProgress: {
        padding: 0,
        height: 2
      }
    },
    listContainer: {
      root: {
        maxHeight: '60vh',
        borderTop:
          suggestionsStatus !== 'loading' && !isFetching
            ? `2px solid ${semanticColors.variantBorder}`
            : 0,
        width: '100%'
      }
    },
    callout: {
      root: {
        boxShadow: 'none'
      },
      calloutMain: {
        width: searchBoxRef.current?.clientWidth,
        borderRadius: 0,
        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
      }
    },
    searchBox: {
      clearButton: {
        margin: rem(2)
      },
      field: {
        paddingLeft: spacing.s2
      },
      root: {
        margin: 'auto',
        width: '100%',
        fontSize: fonts.mediumPlus.fontSize,
        position: 'relative',
        zIndex: 4,
        padding: 0,
        maxWidth: rem(560),
        border: showContextualMenu
          ? 'none'
          : `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        borderBottomLeftRadius: showContextualMenu ? 0 : effects.roundedCorner4,
        borderBottomRightRadius: showContextualMenu
          ? 0
          : effects.roundedCorner4,
        '&.is-active': {
          border: 'none',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        },
        '&:focus-visible': {
          border: 'none'
        },
        '&:after': {
          border: 'none'
        }
      }
    }
  };

  return (
    <>
      <SearchBox
        placeholder={formatMessage(messages.searchPlaceholder)}
        value={searchBoxInput}
        ref={searchBoxRef}
        styles={styles.searchBox}
        onChange={onSearchBarChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        onClickCapture={onClickCapture}
        role="search"
        id="header-search-box"
        autoComplete="off"
        onClear={onClear}
        onEscape={onEscape}
      />
      <ContextualMenu
        items={[{ key: 'Default' }]}
        hidden={!showContextualMenu && !isBoxFocused}
        shouldUpdateWhenHidden={true}
        isBeakVisible={false}
        gapSpace={0}
        target={searchBoxRef}
        useTargetWidth={true}
        shouldFocusOnMount={false}
        onRestoreFocus={() => null}
        calloutProps={{
          styles: styles.callout
        }}
        styles={{
          container: {}
        }}
        onRenderMenuList={() => {
          return (
            <Stack styles={styles.listContainer}>
              {showLoadingIndicator && (
                <ProgressIndicator styles={styles.progressIndicator} />
              )}
              {showAutoComplete && (
                <Stack
                  styles={styles.sectionContainer}
                  tokens={{
                    childrenGap: spacing.s1,
                    padding: `${spacing.s1} ${spacing.s1} ${spacing.s1}`
                  }}
                >
                  {mapAutoCompleteStringsToViewModel(
                    suggestionsData?.autoComplete?.value,
                    debouncedSearchBoxInput
                  ).map(item => (
                    <Text
                      as="a"
                      key={item.query}
                      styles={styles.linkText}
                      onClick={() => onSearch(item.query)}
                    >
                      <NextLink href={pagePaths.search(item.query)} passHref>
                        <a
                          dangerouslySetInnerHTML={{ __html: item.htmlText }}
                        />
                      </NextLink>
                    </Text>
                  ))}
                </Stack>
              )}
              {showRecentSearches && (
                <Stack
                  styles={styles.sectionContainer}
                  tokens={{
                    childrenGap: spacing.s1,
                    padding: `${spacing.m} ${spacing.s1} ${spacing.m}`
                  }}
                >
                  <Text styles={styles.sectionTitle}>
                    {formatMessage(messages.recentSearches)}
                  </Text>
                  {recentSearches?.map(recentSearch => {
                    return (
                      <Text
                        as="a"
                        key={recentSearch}
                        styles={styles.linkText}
                        onClick={() => onSearch(recentSearch)}
                      >
                        <NextLink href={pagePaths.search(recentSearch)}>
                          {recentSearch}
                        </NextLink>
                      </Text>
                    );
                  })}
                </Stack>
              )}
              {showNoResults && (
                <Stack.Item
                  tokens={{
                    padding: spacing.s1
                  }}
                >
                  <Text variant="mediumPlus" styles={styles.noReults}>
                    {formatMessage(messages.noResults)}
                  </Text>
                </Stack.Item>
              )}
              {showSuggestedProducts && (
                <Stack
                  tokens={{
                    childrenGap: spacing.m,
                    padding: `${spacing.m} ${spacing.s1} ${spacing.m}`
                  }}
                >
                  <Text styles={styles.sectionTitle}>
                    {formatMessage(messages.suggestedProducts)}
                  </Text>
                  {productSearchSuggestions
                    ?.slice(0, SUGGESTIONS_COUNT)
                    .map(item => {
                      const src =
                        item.imageUrl || STATIC_IMAGES.app.noImageAvailable;
                      return (
                        <NextLink key={item.id} href={item.url}>
                          <Stack
                            horizontal
                            verticalAlign="center"
                            styles={styles.linkText}
                            tokens={{
                              childrenGap: spacing.s1,
                              padding: `0 ${spacing.s1}`
                            }}
                            onClick={() => {
                              setShowContextualMenu(false);
                              setIsBoxFocused(false);
                            }}
                          >
                            <Image
                              height={80}
                              style={{
                                borderRadius: effects.roundedCorner2
                              }}
                              objectFit="contain"
                              objectPosition="center"
                              width={80}
                              alt={item.number}
                              src={src}
                              loader={getImageLoader(src)}
                            />

                            <Stack tokens={{ childrenGap: spacing.s2 }}>
                              <ProductCardTitleLink
                                size="small"
                                number={item.number}
                                name={item.name}
                                url={item.url}
                              />
                              <ProductListItemPricing
                                hideAddToCart={true}
                                hidePriceBreaks={true}
                                product={{
                                  id: item.id,
                                  number: item.number
                                }}
                              />
                            </Stack>
                          </Stack>
                        </NextLink>
                      );
                    })}
                </Stack>
              )}
            </Stack>
          );
        }}
        onItemClick={onHideContextualMenu}
        onDismiss={onHideContextualMenu}
      />
    </>
  );
};
