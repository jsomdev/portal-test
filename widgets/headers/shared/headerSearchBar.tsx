import React, { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  Callout,
  DirectionalHint,
  ICalloutContentStyles,
  IIconProps,
  IOverlayStyles,
  ISearchBoxStyles,
  List,
  Overlay,
  SearchBox,
  Stack,
  mergeStyleSets,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

/**
 * This component is a work in progress and not yet functional.
 * The data shown in the dropdown is placeholder data.
 * The functions triggered by events are still basic and do not currently support any real search results
 *
 */

const messages = defineMessages({
  searchPlaceholder: {
    id: messageIds.navigation.searchBar.placeholder,
    description: 'Page search bar placeholder',
    defaultMessage: 'Search by part number default...'
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
  const { formatMessage } = useIntl();
  const { spacing } = useTheme();

  return (
    <Stack
      grow
      horizontal
      tokens={{ padding: `0 ${rem(spacing.l1)}` }}
      horizontalAlign="center"
      className={className}
    >
      {renderChildren && (
        <SearchBar placeholder={formatMessage(messages.searchPlaceholder)} />
      )}
    </Stack>
  );
};

const MobileSearchBar: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Stack tokens={{ padding: `0 ${rem(12)}` }}>
      <SearchBar placeholder={formatMessage(messages.searchPlaceholder)} />
    </Stack>
  );
};

interface SearchBarProps {
  placeholder: string;
  styles?: Partial<ISearchBoxStyles>;
}

interface SearchBarStyles {
  searchBox: ISearchBoxStyles;
  searchSuggestions: Partial<ICalloutContentStyles>;
  overlay: IOverlayStyles;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, styles }) => {
  const { spacing, palette, semanticColors } = useTheme();
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [searchText, setSearchText] = useState('');

  // This ref is used to calculate the width of the search suggestions callout
  // This ref is also used as an anchor point for the callout
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Do not show the search suggestions when there is no input text
  // This catches the 'esc' button scenario triggering the clear text functionality
  useEffect(() => {
    if (!searchText.length) {
      setShowSearchSuggestions(false);
    }
  }, [searchText.length]);

  function onSearchBarKeyPress(ev: React.KeyboardEvent<HTMLInputElement>) {
    if (ev.key === 'Enter' || ev.type === 'scroll') {
      if (searchText.length >= 2) {
        setShowSearchSuggestions(true);
        ev.currentTarget?.blur();
      }
    }
  }

  function onSearchBarFocus() {
    if (searchText.length >= 2) {
      setShowSearchSuggestions(true);
    }
  }

  function onSearchBarChange(newValue: string | undefined) {
    setSearchText(newValue || '');
    if (searchText.length >= 2) {
      setShowSearchSuggestions(true);
    } else {
      setShowSearchSuggestions(false);
    }
  }

  const searchBoxStyles: SearchBarStyles = {
    searchBox: {
      root: {
        width: '100%',
        position: 'relative',
        zIndex: '9999',
        maxWidth: rem(450),
        '&:hover': {
          border:
            !showSearchSuggestions && `1px solid ${palette.themeSecondary}`,
          borderColor: showSearchSuggestions && 'transparent'
        },
        '&.is-active, &:focus-visible, &.is-active:after': {
          border: showSearchSuggestions && 'none',
          borderRadius: `2px 2px 0 0`
        },
        '&:after': {
          content: 'none'
        }
      }
    },
    searchSuggestions: {
      root: {
        maxWidth: rem(450),
        left: 0,
        right: 0,
        boxShadow: 'none',
        background: palette.white
      },
      calloutMain: {
        margin: spacing.s1,
        marginTop: 0,
        borderTop: `1px solid ${semanticColors.variantBorder}`
      }
    },
    overlay: {
      root: {
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.1)'
      }
    }
  };

  const mergedSearchBoxStyles = mergeStyleSets(
    styles,
    searchBoxStyles.searchBox
  );

  return (
    <>
      <Stack
        grow
        horizontalAlign="center"
        verticalAlign="center"
        root={{ ref: searchBarRef }}
        id="main-search-box-container"
      >
        <SearchBox
          placeholder={placeholder}
          id="main-search-box"
          styles={mergedSearchBoxStyles}
          onChange={(ev, newValue) => {
            onSearchBarChange(newValue);
          }}
          role="search"
          onFocus={onSearchBarFocus}
          autoComplete="off"
          onKeyPress={ev => {
            onSearchBarKeyPress(ev);
          }}
          onClear={() => {
            setShowSearchSuggestions(false);
          }}
          onEscape={() => {
            setShowSearchSuggestions(false);
          }}
        />
        {showSearchSuggestions && (
          <Callout
            directionalHint={DirectionalHint.bottomCenter}
            gapSpace={0}
            isBeakVisible={false}
            alignTargetEdge={true}
            calloutWidth={searchBarRef.current?.offsetWidth}
            target={searchBarRef}
            onDismiss={() => {
              setShowSearchSuggestions(false);
            }}
            styles={searchBoxStyles.searchSuggestions}
          >
            <List
              items={dummyListItems}
              onRenderCell={item => {
                return (
                  <Stack>
                    <Link href={item?.href || '/404'} passHref>
                      <ActionButton
                        iconProps={item?.iconProps}
                        text={item?.text}
                      />
                    </Link>
                  </Stack>
                );
              }}
            />
          </Callout>
        )}
      </Stack>
      {showSearchSuggestions && <Overlay styles={searchBoxStyles.overlay} />}
    </>
  );
};

interface DummyListItem {
  text: string;
  key: string;
  href: string;
  iconProps: IIconProps;
}

const dummyListItems: DummyListItem[] = [
  {
    text: 'Product suggestion',
    key: '001',
    href: '/',
    iconProps: { iconName: 'Search' }
  },
  {
    text: 'Product suggestion',
    key: '002',
    href: '/',
    iconProps: { iconName: 'Search' }
  },
  {
    text: 'Product suggestion',
    key: '003',
    href: '/',
    iconProps: { iconName: 'Search' }
  },
  {
    text: 'Product suggestion',
    key: '004',
    href: '/',
    iconProps: { iconName: 'Search' }
  },
  {
    text: 'Product suggestion',
    key: '005',
    href: '/',
    iconProps: { iconName: 'Search' }
  }
];
