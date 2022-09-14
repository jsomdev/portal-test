import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IStackStyles, Stack } from '@fluentui/react';
import siteLogo from '@public/site-logo.svg';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

interface ISiteLogoStyles {
  root: IStackStyles;
}

/**
 * Responsive Spraying Systems logo.
 */
export const SiteLogo: React.FC = () => {
  const styles: ISiteLogoStyles = {
    root: {
      root: {
        maxWidth: rem(170),
        transition: 'all 0.3s',
        ...mediaQueryFrom('tablet', { maxWidth: rem(280) })
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
