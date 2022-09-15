import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  siteLogoAlt: {
    id: messageIds.navigation.site.logoAlt,
    description: 'Alt for the Spraying Systems logo',
    defaultMessage: 'Spraying Systems Company logo'
  }
});

export const SiteLogo: React.FC = () => {
  return (
    <>
      <Mobile>
        <MobileSiteLogo />
      </Mobile>
      <TabletAndDesktop>
        <DesktopSiteLogo />
      </TabletAndDesktop>
    </>
  );
};

interface DesktopSiteLogoStyles {
  container: IStackStyles;
  logo: IStackStyles;
}

const DesktopSiteLogo: React.FC = () => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const styles: DesktopSiteLogoStyles = {
    logo: {
      root: {
        maxWidth: rem(280),
        transition: 'all 0.3s'
      }
    },
    container: {
      root: {
        width: rem(280)
      }
    }
  };
  return (
    <Stack
      horizontal
      verticalFill
      tokens={{ childrenGap: rem(spacing.s1) }}
      verticalAlign="center"
      styles={styles.container}
    >
      <Stack.Item grow styles={styles.logo}>
        <Link href={'/'}>
          <a>
            <Image
              src={STATIC_IMAGES.branding.siteLogo}
              layout="responsive"
              alt={formatMessage(messages.siteLogoAlt)}
            />
          </a>
        </Link>
      </Stack.Item>
    </Stack>
  );
};

interface MobileSiteLogoStyles {
  container: IStackStyles;
  logo: IStackStyles;
}

const MobileSiteLogo: React.FC = () => {
  const { formatMessage } = useIntl();
  const styles: MobileSiteLogoStyles = {
    logo: {
      root: {
        transition: 'all 0.3s',
        width: rem(40),
        height: rem(40)
      }
    },
    container: {
      root: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }
  };
  return (
    <Stack styles={styles.container}>
      <Stack.Item grow styles={styles.logo}>
        <Link href={'/'}>
          <a>
            <Image
              src={STATIC_IMAGES.branding.siteIcon}
              layout="responsive"
              alt={formatMessage(messages.siteLogoAlt)}
            />
          </a>
        </Link>
      </Stack.Item>
    </Stack>
  );
};
