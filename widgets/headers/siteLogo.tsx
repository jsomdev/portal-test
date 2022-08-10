import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IStackStyles, Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries';
import { defineMessages, useIntl } from 'react-intl';

export const SiteLogo: React.FC = () => {
  const isLarge = useLarge();

  if (isLarge) {
    return <DesktopSiteLogo />;
  }
  return <MobileSiteLogo />;
};

interface SiteLogoStyles {
  root: IStackStyles;
}

const DesktopSiteLogo: React.FC = () => {
  const { formatMessage } = useIntl();

  const messages = defineMessages({
    desktopLogoImageAlt: {
      id: messageIds.navigation.desktopLogo.imageAlt,
      description: 'Desktop logo image alt tag',
      defaultMessage: 'Spraying Systems Company Site Logo'
    }
  });

  const styles: SiteLogoStyles = {
    root: {
      root: {
        maxWidth: rem(280),
        transition: 'all 0.3s'
      }
    }
  };
  return (
    <Stack.Item grow styles={styles.root}>
      <Link href={'/'}>
        <a>
          <Image
            src={STATIC_IMAGES.branding.siteLogo}
            layout="responsive"
            alt={formatMessage(messages.desktopLogoImageAlt)}
          />
        </a>
      </Link>
    </Stack.Item>
  );
};

const MobileSiteLogo: React.FC = () => {
  const { formatMessage } = useIntl();

  const messages = defineMessages({
    mobileLogoImageAlt: {
      id: messageIds.navigation.mobileLogo.imageAlt,
      description: 'Mobile logo image alt tag',
      defaultMessage: 'Spraying Systems Company Site Logo'
    }
  });
  const styles: SiteLogoStyles = {
    root: {
      root: {
        transition: 'all 0.3s',
        width: rem(40),
        height: rem(40)
      }
    }
  };
  return (
    <Stack.Item grow styles={styles.root}>
      <Link href={'/'}>
        <a>
          <Image
            src={STATIC_IMAGES.branding.siteIcon}
            layout="responsive"
            alt={formatMessage(messages.mobileLogoImageAlt)}
          />
        </a>
      </Link>
    </Stack.Item>
  );
};
