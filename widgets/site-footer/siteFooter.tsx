/* eslint-disable react/jsx-no-undef */
import { Stack, Text, useTheme } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import Image from 'next/image';
import { FC } from 'react';
import { applicationColumnItem } from './site-footer-elements/columns/applicationColumn';
import { companyColumnItem } from './site-footer-elements/columns/companyColumn';
import { contactColumnItem } from './site-footer-elements/columns/contactColumn';
import { FooterColumn } from './site-footer-elements/columns/footerColumn';
import { industryColumnItem } from './site-footer-elements/columns/industryColumn';
import { productColumnItem } from './site-footer-elements/columns/productColumn';
import { resourceColumnItem } from './site-footer-elements/columns/resourceColumn';
import { serviceColumnItem } from './site-footer-elements/columns/serviceColumn';
import { Copyright } from './site-footer-elements/copyright';
import { SiteLinks } from './site-footer-elements/siteLinks';
import { SocialMedia } from './site-footer-elements/socialMedia';
import { SiteFooterStyles } from './siteFooter.types';

const messages = {
  build: 'Build version: '
};

export const SiteFooter: FC = () => {
  const { semanticColors, palette } = useTheme();
  const styles: SiteFooterStyles = {
    footer: {
      root: {
        backgroundColor: semanticColors.bodyStandoutBackground,
        paddingTop: '40px',
        paddingBottom: '20px'
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
    <Stack
      styles={styles.footer}
      tokens={{ childrenGap: 40 }}
      horizontalAlign="center"
    >
      <Stack
        styles={styles.footerContainer}
        horizontal
        tokens={{ childrenGap: 40 }}
      >
        <Stack styles={styles.footerInfo} tokens={{ childrenGap: 20 }}>
          <div style={{ width: '245px', height: '40px', position: 'relative' }}>
            <Image
              src={STATIC_IMAGES.footer.mainLogo}
              alt="Spraying Systems Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <SocialMedia />
          <Copyright />
          <SiteLinks />
        </Stack>
        <Stack
          horizontal
          styles={styles.footerMenu}
          wrap
          grow
          tokens={{ childrenGap: 40 }}
        >
          <Stack.Item styles={styles.footerMenuItem}>
            <FooterColumn {...productColumnItem} />
          </Stack.Item>
          <Stack.Item styles={styles.footerMenuItem}>
            <FooterColumn {...industryColumnItem} />
          </Stack.Item>
          <Stack.Item styles={styles.footerMenuItem}>
            <FooterColumn {...applicationColumnItem} />
          </Stack.Item>
          <Stack.Item styles={styles.footerMenuItem}>
            <FooterColumn {...serviceColumnItem} />
          </Stack.Item>
          <Stack.Item styles={styles.footerMenuItem}>
            <FooterColumn {...resourceColumnItem} />
          </Stack.Item>
          <Stack.Item styles={styles.footerMenuItem}>
            <FooterColumn {...companyColumnItem} />
          </Stack.Item>
          <Stack.Item styles={styles.footerMenuItem}>
            <FooterColumn {...contactColumnItem} />
          </Stack.Item>
        </Stack>
      </Stack>
      <Stack.Item>
        <Stack horizontal styles={styles.buildContainer} verticalAlign="center">
          <Text variant="xSmall">{messages.build}</Text>
          {/* <Text variant="xSmall">
            <FormattedDate
              timeStyle="short"
              dateStyle="short"
              value={new Date(packageJson.buildDate)}
            />
          </Text> */}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
