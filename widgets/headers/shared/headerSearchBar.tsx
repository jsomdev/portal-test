import React, { useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { NextLink } from '@components/link/nextLink';
import {
  IProgressIndicatorStyles,
  ISearchBoxStyles,
  IStackItemStyles,
  IStackStyles,
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
import useOnClickOutside from '@utilities/useClickOutside';
import { useDebounce } from '@utilities/useDebounce';
import { ProductListItemPricing } from '@widgets/finder/result-view/list-view/listItemPricing';
import {
  Mobile,
  TabletAndDesktop,
  mediaQueryFrom
} from '@widgets/media-queries';
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
  const { query } = useRouter();
  return (
    <Stack grow tokens={{ padding: `0 ${spacing.l1}` }} className={className}>
      {renderChildren && (
        <SearchBar
          initialSearchInput={(query.query || undefined) as string | undefined}
        />
      )}
    </Stack>
  );
};

const MobileSearchBar: React.FC = () => {
  const { query } = useRouter();
  return (
    <Stack tokens={{ padding: `0 ${rem(12)}` }}>
      <SearchBar
        initialSearchInput={(query.query || undefined) as string | undefined}
      />
    </Stack>
  );
};

interface SearchBarStyles {
  searchBox: ISearchBoxStyles;
  sectionTitle: ITextStyles;
  sectionContainer: IStackStyles;
  menu: IStackItemStyles;
  noReults: ITextStyles;
  linkText: ITextStyles;
  progressIndicator: Partial<IProgressIndicatorStyles>;
}

const SearchBar: React.FC<{ initialSearchInput: string | undefined }> = ({
  initialSearchInput
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchBoxInput, setSearchBoxInput] = useState<string | undefined>(
    initialSearchInput || ''
  );
  const [cookies, setCookie] = useCookies([COOKIESKEYS.recentSearches]);
  const { spacing, palette, semanticColors, fonts, effects } = useTheme();
  const { locale, formatMessage } = useIntl();
  const { push } = useRouter();
  /**
   * # Refs
   * rootRef: Ref object including the searchbox itself and the menu component.
   * searchbox: Ref object for the searchbox.
   * menuRef: Ref object for the menu with the suggestions and recent searches.
   */
  const { ref: rootRef } = useOnClickOutside<HTMLDivElement>(onHideMenu);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  // We want to toggle the PageOverlay when the menu is shown
  const { togglePageOverlay } = usePageContext();

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
        fetchAutoCompleteSearch(
          encodeURIComponent(debouncedSearchBoxInput || '')
        )
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

  function onHideMenu() {
    setShowMenu(false);
  }

  function onSearchBarChange(
    ev: React.ChangeEvent<HTMLInputElement> | undefined,
    newValue: string | undefined
  ) {
    setSearchBoxInput(newValue || '');
  }

  function onFocus() {
    setShowMenu(true);
  }

  function onClear() {
    setSearchBoxInput('');
  }

  function onClickCapture() {
    setShowMenu(true);
  }

  function onKeyUp(ev: React.KeyboardEvent<HTMLInputElement>): void {
    if (ev.key === 'Enter') {
      ev.currentTarget.blur();
    }
  }

  function onSearch(newValue: string) {
    // Need to make sure the overlay + menu disappears
    setShowMenu(false);
    setSearchBoxInput(newValue);

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

  useEffect(() => {
    setSearchBoxInput(initialSearchInput || '');
  }, [initialSearchInput]);

  useEffect(() => {
    if (showMenu) {
      togglePageOverlay(true);
    } else {
      togglePageOverlay(false);
    }
  }, [showMenu, togglePageOverlay]);

  const styles: SearchBarStyles = {
    menu: {
      root: {
        borderRadius: 0,
        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
        borderTop:
          suggestionsStatus !== 'loading' && !isFetching
            ? `2px solid ${semanticColors.variantBorder}`
            : 0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        display: showMenu ? 'flex' : 'none',
        flexDirection: 'column',
        background: 'white',
        zIndex: 3,
        overflow: 'auto',
        position: 'absolute',
        left: 0,
        top: 32,
        right: 0,
        margin: 'auto',
        width: '100%',
        maxWidth: rem(560),
        maxHeight: '60vh'
      }
    },
    linkText: {
      root: {
        cursor: 'pointer',
        ...fonts.mediumPlus,
        paddingTop: spacing.s1,
        paddingBottom: spacing.s1,
        wordBreak: 'break-all',
        display: 'flex',
        '&:hover': {
          color: palette.accent
        },
        ...mediaQueryFrom('tablet', {
          ...fonts.medium,
          paddingTop: spacing.s2,
          paddingBottom: spacing.s2
        })
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
        maxWidth: rem(560),
        fontSize: fonts.mediumPlus.fontSize,
        position: 'relative',
        zIndex: 4,
        padding: 0,
        border: showMenu ? 'none' : `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        borderBottomLeftRadius: showMenu ? 0 : effects.roundedCorner4,
        borderBottomRightRadius: showMenu ? 0 : effects.roundedCorner4,
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
    <Stack
      root={{
        ref: rootRef
      }}
      styles={{
        root: {
          position: 'relative'
        }
      }}
    >
      <SearchBox
        placeholder={formatMessage(messages.searchPlaceholder)}
        value={searchBoxInput}
        ref={searchBoxRef}
        styles={styles.searchBox}
        onChange={onSearchBarChange}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        onSearch={onSearch}
        onClickCapture={onClickCapture}
        role="search"
        id="header-search-box"
        clearButtonProps={{}}
        autoComplete="off"
        onClear={onClear}
      />
      {showMenu && (
        <Stack.Item
          className="list-scroll"
          role={'menu'}
          tabIndex={0}
          root={{
            ref: menuRef
          }}
          styles={styles.menu}
        >
          {showLoadingIndicator && (
            <ProgressIndicator styles={styles.progressIndicator} />
          )}
          {showAutoComplete && (
            <Stack
              styles={styles.sectionContainer}
              tokens={{
                padding: `${spacing.s1} ${spacing.s1} ${spacing.s1}`
              }}
            >
              {mapAutoCompleteStringsToViewModel(
                suggestionsData?.autoComplete?.value,
                debouncedSearchBoxInput
              ).map(item => (
                <Text
                  tabIndex={-1}
                  role={'menuitem'}
                  key={item.query}
                  styles={styles.linkText}
                  onClick={() => onSearch(item.query)}
                >
                  <NextLink href={pagePaths.search(item.query)}>
                    <a dangerouslySetInnerHTML={{ __html: item.htmlText }} />
                  </NextLink>
                </Text>
              ))}
            </Stack>
          )}
          {showRecentSearches && (
            <Stack
              styles={styles.sectionContainer}
              tokens={{
                padding: `${spacing.m} ${spacing.s1} ${spacing.m}`
              }}
            >
              <Text styles={styles.sectionTitle}>
                {formatMessage(messages.recentSearches)}
              </Text>
              {recentSearches?.map(recentSearch => {
                return (
                  <Text
                    key={recentSearch}
                    role={'menuitem'}
                    tabIndex={-1}
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
                        role={'menuitem'}
                        horizontal
                        verticalAlign="center"
                        styles={styles.linkText}
                        tokens={{
                          childrenGap: spacing.s1,
                          padding: `0 ${spacing.s1}`
                        }}
                        onClick={() => {
                          setShowMenu(false);
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
        </Stack.Item>
      )}
    </Stack>
  );
};
