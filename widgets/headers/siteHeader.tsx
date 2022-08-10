import {
  IButtonStyles,
  IStackStyles,
  ITextFieldStyles,
  IVerticalDividerStyles,
  List,
  Stack,
  TextField,
  useTheme,
  VerticalDivider
} from '@fluentui/react';
import { SiteHeaderMenuUrlFormatter } from '@services/i18n/formatters/entity-formatters/siteMenuItemFormatter';
import { messageIds } from '@services/i18n/ids';
import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries';
import { AppNavigationType } from '@widgets/panels/appNavigationPanel.types';
import { defineMessages, useIntl } from 'react-intl';
import { HeaderButton } from './headerButton';
import { SiteLogo } from './siteLogo';

//items prop has Menu Items from the api
export interface SiteHeaderProps {
  onOpenSideNavigation?: (type: AppNavigationType) => void;
  items: MenuItem[];
}

/**
 * Header component for the Spray.com links.
 * Based on the screen size a different version will be displayed.
 * Important note: the aim is to keep this header aligned with the spray.com header.
 */
export const SiteHeader: React.FC<SiteHeaderProps> = ({
  items,
  onOpenSideNavigation
}) => {
  const isLarge = useLarge();

  //const mappedItems =

  if (isLarge) {
    return <DesktopSiteHeader items={items} />;
  }

  return (
    <MobileSiteHeader
      items={items}
      onOpenSideNavigation={onOpenSideNavigation}
    />
  );
};

// ### Small Site Header

interface MobileSiteHeaderStyles {
  root: IStackStyles;
  logoContainer: IStackStyles;
}

const MobileSiteHeader: React.FC<SiteHeaderProps> = ({
  onOpenSideNavigation
}) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

  const messages = defineMessages({
    searchPlaceholder: {
      id: messageIds.navigation.searchBar.placeholder,
      description: 'Page search bar placeholder',
      defaultMessage: 'Search by part number...'
    }
  });

  const styles: MobileSiteHeaderStyles = {
    root: {
      root: {
        height: rem(80),
        position: 'relative'
      }
    },
    logoContainer: {
      root: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }
  };
  return (
    <Stack>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          padding: `0 ${rem(spacing.s1)}`
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <Stack
          horizontal
          grow
          verticalFill
          tokens={{ childrenGap: rem(spacing.s1) }}
          verticalAlign="center"
        >
          <HeaderButton
            onClick={() => {
              onOpenSideNavigation?.('site');
            }}
            iconProps={{
              iconName: 'GlobalNavButton'
            }}
          />
        </Stack>
        <Stack styles={styles.logoContainer}>
          <SiteLogo />
        </Stack>
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: rem(spacing.s2) }}
        >
          <HeaderButton
            iconProps={{
              iconName: 'ShoppingCart'
            }}
          />

          <HeaderButton
            onClick={() => {
              onOpenSideNavigation?.('user');
            }}
            iconProps={{
              iconName: 'Contact'
            }}
          />
        </Stack>
      </Stack>
      <Stack
        tokens={{
          padding: `0 ${rem(12)}`
        }}
      >
        <TextField
          iconProps={{ iconName: 'Search' }}
          placeholder={formatMessage(messages.searchPlaceholder)}
        />
      </Stack>
    </Stack>
  );
};

// ###DesktopSiteHeader

interface DesktopSiteHeaderStyles {
  root: IStackStyles;
  button: Partial<IButtonStyles>;
  divider: Partial<IVerticalDividerStyles>;
  logoContainer: IStackStyles;
  searchBarContainer: Partial<ITextFieldStyles>;
}
/**
 * Large version of the Site Header
 */
const DesktopSiteHeader: React.FC<SiteHeaderProps> = ({ items }) => {
  const { spacing } = useTheme();
  const { locale, formatMessage } = useIntl();

  const messages = defineMessages({
    searchPlaceholder: {
      id: messageIds.navigation.searchBar.placeholder,
      description: 'Page search bar placeholder',
      defaultMessage: 'Search by part number...'
    }
  });

  const styles: DesktopSiteHeaderStyles = {
    root: {
      root: {
        height: rem(80)
      }
    },
    button: {
      label: {
        fontSize: rem(14),
        fontWeight: 500
      }
    },
    divider: {
      wrapper: {
        padding: rem(spacing.s2),
        height: rem(32)
      }
    },
    logoContainer: {
      root: {
        width: rem(280)
      }
    },
    searchBarContainer: { root: { width: '100%', maxWidth: rem(450) } }
  };
  return (
    <Stack>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          padding: `0 ${rem(spacing.l1)}`
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <Stack
          horizontal
          verticalFill
          tokens={{ childrenGap: rem(spacing.s1) }}
          verticalAlign="center"
          styles={styles.logoContainer}
        >
          <SiteLogo />
        </Stack>
        <Stack
          grow
          horizontal
          tokens={{ padding: `0 ${rem(spacing.l1)}` }}
          horizontalAlign="center"
        >
          <TextField
            styles={styles.searchBarContainer}
            iconProps={{ iconName: 'Search' }}
            placeholder={formatMessage(messages.searchPlaceholder)}
          />
        </Stack>
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: rem(spacing.s2) }}
          role="navigation"
        >
          <ul className="horizontal">
            {items.map((item, index) => {
              if (item?.url) {
                const formatter = new SiteHeaderMenuUrlFormatter(item.url);
                return (
                  <li className="horizontal" key={`site-menu-item-${index}`}>
                    <HeaderButton
                      type="actionButton"
                      key={item?.id}
                      text={formatter.formatText()}
                      href={formatter.formatHref()}
                      styles={styles.button}
                    />
                  </li>
                );
              }
            })}
          </ul>
          {/* <BasicList
            items={items}
            onRenderItem={(item: MenuItem) => {
              return (
                <HeaderButton
                  type="actionButton"
                  key={item?.id}
                  text={formatter.formatText()}
                  href={formatter.formatHref()}
                  styles={styles.button}
                />
              );
            }}
          /> */}
          <List items={items} />
          <VerticalDivider styles={styles.divider} />
          <HeaderButton
            id="random"
            iconProps={{
              iconName: 'Globe'
            }}
            type="actionButton"
            styles={styles.button}
            text={locale.toLocaleUpperCase()}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
