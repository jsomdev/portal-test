import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IStackStyles, Stack } from '@fluentui/react';
import siteIcon from '@public/site-icon.svg';
import siteLogo from '@public/site-logo.svg';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries';

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
            src={siteLogo}
            layout="responsive"
            alt="Spraying Systems Company Site Logo"
          />
        </a>
      </Link>
    </Stack.Item>
  );
};

const MobileSiteLogo: React.FC = () => {
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
            src={siteIcon}
            layout="responsive"
            alt="Spraying Systems Company Site Logo"
          />
        </a>
      </Link>
    </Stack.Item>
  );
};
