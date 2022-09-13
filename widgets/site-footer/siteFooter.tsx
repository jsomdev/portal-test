/* eslint-disable react/jsx-no-undef */
import { Stack, useTheme } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import Image from 'next/image';
import { FC } from 'react';
import { SiteFooterStyles } from './siteFooter.types';
import { SocialMedia } from './socialMedia';

export const SiteFooter: FC = () => {
  const { semanticColors, palette, spacing } = useTheme();
  const styles: SiteFooterStyles = {
    footer: {
      root: {
        backgroundColor: semanticColors.bodyStandoutBackground,
        paddingTop: '40px',
        paddingBottom: '40px'
      }
    },
    footerContainer: {
      root: {
        maxWidth: '1493px',
        padding: '0 40px'
      }
    },
    text: {
      root: {
        color: semanticColors.bodySubtext
      }
    },
    footerInfo: {
      root: {
        flexBasis: '20%',
        paddingLeft: '30px'
      }
    },
    footerMenuItem: {
      root: {
        flex: 1,
        minWidth: '100px',
        maxWidth: '150px'
      }
    },
    buildContainer: {
      root: {
        ' span': {
          opacity: 0.7,
          color: palette.neutralLight
        }
      }
    },

    footerMenu: {
      root: {
        flexBasis: '80%'
      }
    }
  };

  // if (shouldMobileOptimize) {
  //   return (
  //     <Stack styles={styles.footer} horizontalAlign="center">
  //       <Stack styles={styles.footerContainer} tokens={{ childrenGap: 40 }}>
  //         <SocialMedia />
  //         <Copyright />
  //       </Stack>
  //     </Stack>
  //   );
  // }

  return (
    <Stack styles={styles.footer} horizontalAlign="center">
      <Stack
        styles={styles.footerContainer}
        horizontal
        tokens={{ childrenGap: 40 }}
      >
        <Stack
          styles={styles.footerInfo}
          tokens={{ childrenGap: 20 }}
          horizontal
        >
          <Stack tokens={{ childrenGap: spacing.l1 }}>
            <div
              style={{ width: '245px', height: '40px', position: 'relative' }}
            >
              <Image
                src={STATIC_IMAGES.footer.mainLogo}
                alt="Spraying Systems Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <SocialMedia />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
