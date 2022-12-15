import React, { useMemo } from 'react';

import { useRouter } from 'next/dist/client/router';
import { defineMessages, useIntl } from 'react-intl';

import { Pivot, PivotItem, Stack, Text, useTheme } from '@fluentui/react';
import { getAudience, messageIds } from '@services/i18n';
import { getSupportedRegionsWithPaths } from '@widgets/headers/site-header/language-menu/languageMenuCountry.helper';
import { useBetweenMobileAndTablet, useMobile } from '@widgets/media-queries';
import { usePageContext } from '@widgets/page/pageContext';

import { LanguageMenuStyles, RegionWithPaths } from './languageMenu.types';
import { LanguageMenuItem } from './languageMenuCountry';

const messages = defineMessages({
  headerText: {
    id: messageIds.navigation.locale.title,
    description: 'Selected Country/Region title',
    defaultMessage: 'Selected Country/Region'
  }
});

type LanguageMenuProps = {
  onDismiss: () => void;
};

export const LanguageMenu: React.FC<LanguageMenuProps> = ({ onDismiss }) => {
  const { palette, spacing } = useTheme();
  const { locale, defaultLocale } = useRouter();
  const audience = getAudience(locale);
  const isMobileOrTablet = useBetweenMobileAndTablet();
  const { localePaths } = usePageContext();
  const { formatMessage } = useIntl();
  const regions: RegionWithPaths[] | null = useMemo(
    () =>
      defaultLocale
        ? getSupportedRegionsWithPaths(localePaths, defaultLocale)
        : null,
    [localePaths, defaultLocale]
  );

  const currentRegion = regions?.find(region => region.audience === audience);

  const [selectedRegion, setSelectedRegion] = React.useState<
    RegionWithPaths | undefined
  >(currentRegion);

  const selectRegion = (item?: PivotItem) => {
    if (item) {
      const newRegion: RegionWithPaths | undefined = regions?.find(
        region => region.name === item.props.itemKey
      );
      setSelectedRegion(newRegion);
    }
  };

  const styles: LanguageMenuStyles = {
    headerContainer: {
      root: {
        background: palette.themeDark,
        padding: 30
      }
    },
    headerText: {
      root: {
        color: palette.white,
        fontWeight: 500
      }
    },
    selectedRegion: {
      root: {
        fontWeight: 500,
        opacity: 0.75,
        color: palette.white
      }
    },
    contentContainer: {
      root: {
        padding: '30px 25px',
        width: 550,
        minHeight: 200,
        maxWidth: 'calc(100vw - 220px)',
        maxHeight: isMobileOrTablet ? 400 : 'auto',
        overflow: 'auto'
      },
      inner: {
        maxWidth: '100%'
      }
    },
    pivotContainer: {
      root: {
        height: '100%',
        backgroundColor: palette.themeDark
      }
    },
    regionContainer: {
      root: {
        flex: isMobileOrTablet ? `1 0 100%` : `0 1 calc(33% - ${spacing.l1})`
      }
    },
    pivot: {
      root: { display: 'flex', flexWrap: 'wrap', width: 150 },
      link: {
        width: '100%',
        margin: 0,
        backgroundColor: palette.themeDark,
        textAlign: 'left',
        selectors: {
          '&:hover, &:active': {
            backgroundColor: palette.themeDark
          },
          '&:before': {
            content: 'none'
          },
          '&:hover .ms-Pivot-text': {
            textDecoration: 'underline'
          }
        },
        padding: '14px 17px',
        fontWeight: 500,
        fontSize: '17px',
        lineHeight: '17px',
        height: 50
      },
      linkIsSelected: {
        width: '100%',
        backgroundColor: palette.white,
        selectors: {
          '&:hover, &:active': {
            backgroundColor: palette.white
          },
          '.ms-Pivot-text': {
            color: palette.neutralPrimary
          },
          '&:hover .ms-Pivot-text': {
            textDecoration: 'none'
          }
        }
      },
      text: {
        color: palette.white
      }
    }
  };

  return (
    <Stack>
      <Stack.Item>
        <Stack
          styles={styles.headerContainer}
          horizontal
          tokens={{ childrenGap: spacing.s2 }}
        >
          <Stack.Item>
            <Text styles={styles.headerText} variant="large">
              {formatMessage(messages.headerText)}:
            </Text>
          </Stack.Item>
          <Stack.Item>
            <Text styles={styles.selectedRegion} variant="large">
              {locale?.toLocaleUpperCase()}
            </Text>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal>
          <Stack.Item>
            <Stack styles={styles.pivotContainer}>
              <Pivot
                selectedKey={selectedRegion?.name}
                onLinkClick={selectRegion}
                headersOnly={true}
                styles={styles.pivot}
              >
                {regions &&
                  regions.map(region => {
                    return (
                      <PivotItem
                        key={region.name}
                        headerText={region.name}
                        itemKey={region.name}
                      />
                    );
                  })}
              </Pivot>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles.contentContainer}
              wrap
              horizontal
              className="list-scroll"
              tokens={{ childrenGap: spacing.l1 }}
            >
              {selectedRegion?.countries?.map(country => {
                return (
                  <Stack.Item
                    key={`${country.name}`}
                    styles={styles.regionContainer}
                  >
                    <LanguageMenuItem
                      onLocaleSelected={onDismiss}
                      country={country}
                    />
                  </Stack.Item>
                );
              })}
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
