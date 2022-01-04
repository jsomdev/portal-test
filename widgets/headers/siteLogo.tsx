import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IStackStyles, Stack } from '@fluentui/react';
import siteLogo from '@public/site-logo.svg';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries/mediaQuery.hook';

interface ISiteLogoStyles {
  root: IStackStyles;
}

/**
 * Responsive Spraying Systems logo.
 */
export const SiteLogo: React.FC = () => {
  const isLarge = useLarge();

  const styles: ISiteLogoStyles = {
    root: {
      root: {
        maxWidth: isLarge ? rem(280) : rem(170),
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
