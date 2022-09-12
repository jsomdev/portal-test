import { useIntl } from 'react-intl';

import {
  IButtonStyles,
  IStackStyles,
  IVerticalDividerStyles,
  Stack,
  useTheme,
  VerticalDivider
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries';

import { useGlobalData } from '@providers/global-data/globalDataContext';
import { NavigationPanel } from '@widgets/headers/site-header/navigation-panel/navigationPanel';
import { NavigationPanelType } from '@widgets/headers/site-header/navigation-panel/navigationPanel.types';
import { useMemo, useState } from 'react';
import {
  mapMenuItemsToMenuItemProps,
  MenuItemProps
} from '../main-header/mainHeader.helper';
import { HeaderSearchBar } from '../shared/headerSearchBar';
import { mapMenuItemsToSiteHeaderItemProps } from './siteHeader.helper';
import { SiteHeaderButton } from './siteHeaderButton';
import { SiteHeaderItem } from './siteHeaderItem';
import { SiteLogo } from './siteLogo';

//items prop has Menu Items from the api
export interface SiteHeaderProps {
  siteMenuItems: MenuItemProps[];
}

/**
 * Header component for the Spray.com links.
 * Based on the screen size a different version will be displayed.
 * Important note: the aim is to keep this header aligned with the spray.com header.
 */
export const SiteHeader: React.FC = () => {
  const isLarge = useLarge();

  const { siteMenuItems } = useGlobalData();
  const { locale } = useIntl();

  const mappedSiteMenuItems: MenuItemProps[] = useMemo(() => {
    return mapMenuItemsToSiteHeaderItemProps(siteMenuItems || [], locale);
  }, [locale, siteMenuItems]);

  if (isLarge) {
    return <DesktopSiteHeader siteMenuItems={mappedSiteMenuItems} />;
  }

  return <MobileSiteHeader siteMenuItems={mappedSiteMenuItems} />;
};

// ### Mobile Site Header

interface MobileSiteHeaderStyles {
  root: IStackStyles;
}

const MobileSiteHeader: React.FC<SiteHeaderProps> = ({ siteMenuItems }) => {
  const { spacing } = useTheme();
  const intl = useIntl();
  const { mainMenuItems } = useGlobalData();

  const [sideNavigationType, setSideNavigationType] =
    useState<null | NavigationPanelType>(null);

  const mappedMainMenuItems: MenuItemProps[] = useMemo(() => {
    return mapMenuItemsToMenuItemProps(
      mainMenuItems || [],
      'expanded',
      intl,
      null,
      undefined
    );
  }, [mainMenuItems, intl]);

  function onSitePanelDismiss(): void {
    setSideNavigationType(null);
  }

  const styles: MobileSiteHeaderStyles = {
    root: {
      root: {
        height: rem(80),
        position: 'relative'
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
              setSideNavigationType('site');
            }}
            iconProps={{
              iconName: 'GlobalNavButton'
            }}
          />
        </Stack>
        <SiteLogo />
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
              setSideNavigationType('user');
            }}
            iconProps={{
              iconName: 'Contact'
            }}
          />
        </Stack>
      </Stack>
      <NavigationPanel
        panelProps={{
          isOpen: !!sideNavigationType,
          onDismiss: onSitePanelDismiss
        }}
        siteMenuItems={siteMenuItems}
        mainMenuItems={mappedMainMenuItems}
      />
    </Stack>
  );
};

interface DesktopSiteHeaderStyles {
  root: IStackStyles;
  button: Partial<IButtonStyles>;
  divider: Partial<IVerticalDividerStyles>;
}

// ### Desktop Site Header

/**
 * Large version of the Site Header
 */
const DesktopSiteHeader: React.FC<SiteHeaderProps> = ({ siteMenuItems }) => {
  const { spacing } = useTheme();
  const { locale } = useIntl();

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
    }
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
        <SiteLogo />
        <HeaderSearchBar />
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: rem(spacing.s2) }}
          role="navigation"
          id="far-items"
        >
          <ul className="horizontal">
            {siteMenuItems.map(item => {
              return (
                <SiteHeaderItem
                  item={item}
                  key={`site-main-menu-item-${item.id}`}
                />
              );
            })}
          </ul>
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
