import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IStackStyles, Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries';

interface SiteLogoProps {
  alt: string;
}

export const SiteLogo: React.FC<SiteLogoProps> = ({ alt }) => {
  const isLarge = useLarge();

  if (isLarge) {
    return <DesktopSiteLogo alt={alt} />;
  }
  return <MobileSiteLogo alt={alt} />;
};

interface SiteLogoStyles {
  root: IStackStyles;
}

const DesktopSiteLogo: React.FC<SiteLogoProps> = ({ alt }) => {
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
            alt={alt}
          />
        </a>
      </Link>
    </Stack.Item>
  );
};

const MobileSiteLogo: React.FC<SiteLogoProps> = ({ alt }) => {
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
            alt={alt}
          />
        </a>
      </Link>
    </Stack.Item>
  );
};
