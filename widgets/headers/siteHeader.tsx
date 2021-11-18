import React from 'react';

import { useIntl } from 'react-intl';

import {
  IButtonStyles,
  IStackStyles,
  IVerticalDividerStyles,
  Stack,
  useTheme,
  VerticalDivider,
} from '@fluentui/react';
import { siteMenuItems } from '@services/preval';
import { rem } from '@utilities/rem';
import { Medium } from '@widgets/media-queries/mediaQuery';
import { useLarge } from '@widgets/media-queries/mediaQuery.hook';
import { SiteNavigationType } from '@widgets/panels/siteNavigationPanel.types';

import { HeaderButton } from './headerButton';
import { SiteLogo } from './siteLogo';

export interface ISiteHeaderProps {
  onOpenSideNavigation?: (type: SiteNavigationType) => void;
}

/**
 * Header component for the Spray.com links.
 * Based on the screen size a different version will be displayed.
 * Important note: the aim is to keep this header aligned with the spray.com header.
 */
export const SiteHeader: React.FC<ISiteHeaderProps> = ({ onOpenSideNavigation }) => {
  const isLarge = useLarge();
  if (isLarge) {
    return <LargeSiteHeader />;
  }

  return <DefaultSiteHeader onOpenSideNavigation={onOpenSideNavigation} />;
};

// ### Default Site Header

/**
 * Default version of the Site Header
 */
interface IDefaultSiteHeaderStyles {
  root: IStackStyles;
  divider: Partial<IVerticalDividerStyles>;
}

const DefaultSiteHeader: React.FC<ISiteHeaderProps> = ({ onOpenSideNavigation }) => {
  const { spacing } = useTheme();
  const { locale } = useIntl();

  const styles: IDefaultSiteHeaderStyles = {
    root: {
      root: {
        height: rem(80),
      },
    },
    divider: {
      wrapper: {
        padding: rem(spacing.s2),
        height: rem(32),
      },
    },
  };
  return (
    <nav>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          padding: `0 ${rem(spacing.s1)}`,
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <Stack horizontal grow verticalFill tokens={{ childrenGap: rem(spacing.s1) }} verticalAlign="center">
          <HeaderButton
            onClick={() => {
              onOpenSideNavigation?.('site');
            }}
            iconProps={{
              iconName: 'GlobalNavButton',
            }}
          />
          <SiteLogo />
        </Stack>
        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: rem(spacing.s2) }}>
          <Medium>
            <HeaderButton
              iconProps={{
                iconName: 'Globe',
              }}
              type="actionButton"
              text={locale.toLocaleUpperCase()}
            />
            <VerticalDivider styles={styles.divider} />
          </Medium>
          <HeaderButton
            iconProps={{
              iconName: 'Search',
            }}
          />
          <HeaderButton
            iconProps={{
              iconName: 'ShoppingCart',
            }}
          />

          <HeaderButton
            onClick={() => {
              onOpenSideNavigation?.('user');
            }}
            iconProps={{
              iconName: 'Contact',
            }}
          />
        </Stack>
      </Stack>
    </nav>
  );
};

// ###LargeSiteHeader

interface ILargeSiteHeaderStyles {
  root: IStackStyles;
  button: Partial<IButtonStyles>;
  divider: Partial<IVerticalDividerStyles>;
}
/**
 * Large version of the Site Header
 */
const LargeSiteHeader: React.FC<ISiteHeaderProps> = () => {
  const { spacing } = useTheme();
  const { locale } = useIntl();

  const styles: ILargeSiteHeaderStyles = {
    root: {
      root: {
        height: rem(80),
      },
    },
    button: {
      label: {
        fontSize: rem(14),
        fontWeight: 500,
      },
    },
    divider: {
      wrapper: {
        padding: rem(spacing.s2),
        height: rem(32),
      },
    },
  };
  return (
    <nav>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          padding: `0 ${rem(spacing.l1)}`,
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <Stack horizontal grow verticalFill tokens={{ childrenGap: rem(spacing.s1) }} verticalAlign="center">
          <SiteLogo />
        </Stack>
        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: rem(spacing.s2) }}>
          {siteMenuItems.map((item) => (
            <HeaderButton
              type="actionButton"
              key={item.id}
              text={item.url?.text?.en}
              href={item?.url?.value}
              styles={styles.button}
            />
          ))}
          <VerticalDivider styles={styles.divider} />
          <HeaderButton
            id="random"
            iconProps={{
              iconName: 'Globe',
            }}
            type="actionButton"
            styles={styles.button}
            text={locale.toLocaleUpperCase()}
          />
        </Stack>
      </Stack>
    </nav>
  );
};
