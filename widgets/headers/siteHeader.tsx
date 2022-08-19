import { defineMessages, useIntl } from 'react-intl';

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
import { messageIds } from '@services/i18n/ids';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries';
import { AppNavigationType } from '@widgets/panels/appNavigationPanel.types';

import { SiteHeaderButton } from './siteHeaderButton';
import { SiteHeaderItem, SiteHeaderItemProps } from './siteHeaderItem';
import { SiteLogo } from './siteLogo';

//items prop has Menu Items from the api
export interface SiteHeaderProps {
  items: SiteHeaderItemProps[];
  onOpenSideNavigation?: (type: AppNavigationType) => void;
}

const messages = defineMessages({
  searchPlaceholder: {
    id: messageIds.navigation.searchBar.placeholder,
    description: 'Page search bar placeholder',
    defaultMessage: 'Search by part number...'
  },
  siteLogoAlt: {
    id: messageIds.navigation.site.logoAlt,
    description: 'Alt for the Spraying Systems logo',
    defaultMessage: 'Spraying Systems Company logo'
  }
});

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

  if (isLarge) {
    return <DesktopSiteHeader items={items || []} />;
  }

  return (
    <MobileSiteHeader
      items={items}
      onOpenSideNavigation={onOpenSideNavigation}
    />
  );
};

// ### Mobile Site Header

interface MobileSiteHeaderStyles {
  root: IStackStyles;
  logoContainer: IStackStyles;
}

const MobileSiteHeader: React.FC<SiteHeaderProps> = ({
  onOpenSideNavigation
}) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

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
          <SiteHeaderButton
            onClick={() => {
              onOpenSideNavigation?.('site');
            }}
            iconProps={{
              iconName: 'GlobalNavButton'
            }}
          />
        </Stack>
        <Stack styles={styles.logoContainer}>
          <SiteLogo alt={formatMessage(messages.siteLogoAlt)} />
        </Stack>
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: rem(spacing.s2) }}
        >
          <SiteHeaderButton
            iconProps={{
              iconName: 'ShoppingCart'
            }}
          />

          <SiteHeaderButton
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

interface DesktopSiteHeaderStyles {
  root: IStackStyles;
  button: Partial<IButtonStyles>;
  divider: Partial<IVerticalDividerStyles>;
  logoContainer: IStackStyles;
  searchBarContainer: Partial<ITextFieldStyles>;
}

// ### Desktop Site Header

/**
 * Large version of the Site Header
 */
const DesktopSiteHeader: React.FC<SiteHeaderProps> = ({ items }) => {
  const { spacing } = useTheme();
  const { locale, formatMessage } = useIntl();

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
          <SiteLogo alt={formatMessage(messages.siteLogoAlt)} />
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
            {items.map(item => {
              return (
                <SiteHeaderItem {...item} key={`site-menu-item-${item.text}`} />
              );
            })}
          </ul>
          <List items={items} />
          <VerticalDivider styles={styles.divider} />
          <SiteHeaderButton
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
