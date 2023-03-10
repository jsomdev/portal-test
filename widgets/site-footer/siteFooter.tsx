import React, { FC } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { ErrorMessage } from '@components/errors/errorMessage';
import {
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { handleResponse } from '@services/portal-api/base/fetch';
import { QUERYKEYS } from '@services/react-query/constants';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';
import { Copyright } from '@widgets/site-footer/components/copyright';
import { FooterColumn } from '@widgets/site-footer/components/footerColumn';
import { SiteLinks } from '@widgets/site-footer/components/siteLinks';
import { SocialMedia } from '@widgets/site-footer/components/socialMedia';
import { FooterColumns } from '@widgets/site-footer/siteFooter.types';

type SiteFooterStyles = {
  footer: IStackStyles;
  footerInfo: IStackStyles;
  footerMenu: IStackStyles;
  footerMenuItem: IStackItemStyles;
  text: ITextStyles;
  logo: IStackItemStyles;
};

export const SiteFooter: FC = () => {
  const { semanticColors } = useTheme();
  const { locale } = useRouter();
  const styles: SiteFooterStyles = {
    footer: {
      root: {
        backgroundColor: semanticColors.bodyStandoutBackground,
        paddingTop: '40px',
        paddingBottom: '20px'
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
        minWidth: '200px',
        width: '200px',
        padding: '0 20px 40px 0'
      }
    },
    footerMenu: {
      root: {
        flexBasis: '80%'
      }
    },
    logo: {
      root: { width: '245px', height: '40px', position: 'relative' }
    }
  };

  const {
    data: footerData,
    status,
    error
  } = useQuery([QUERYKEYS.footerData, locale], async () => {
    const response: Response = await fetch(
      `/frontend-api/footer?locale=${locale}`
    );
    const result: FooterColumns = (await handleResponse<FooterColumns>(
      response,
      'GET',
      true
    )) as FooterColumns;
    return result;
  });

  if (status === 'loading' || footerData === undefined) {
    return null;
  }

  if (status === 'error') {
    return <ErrorMessage error={error as Error | undefined} logError silent />;
  }

  return (
    <>
      <Mobile>
        <Stack styles={styles.footer} horizontalAlign="center">
          <Stack tokens={{ childrenGap: 40 }}>
            <SocialMedia />
            <Copyright />
          </Stack>
        </Stack>
      </Mobile>
      <TabletAndDesktop>
        <Stack
          styles={styles.footer}
          tokens={{ childrenGap: 40 }}
          horizontalAlign="space-around"
        >
          <Stack horizontal tokens={{ childrenGap: 40 }}>
            <Stack styles={styles.footerInfo} tokens={{ childrenGap: 20 }}>
              <Stack.Item styles={styles.logo}>
                <Image
                  src={STATIC_IMAGES.footer.mainLogo}
                  alt="Spraying Systems Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </Stack.Item>
              <SocialMedia />
              <Copyright />
              <SiteLinks siteLinks={footerData.siteLinks.items} />
            </Stack>
            <Stack horizontal styles={styles.footerMenu} wrap>
              <Stack.Item styles={styles.footerMenuItem}>
                <FooterColumn {...footerData.productCategories} />
              </Stack.Item>
              <Stack.Item styles={styles.footerMenuItem}>
                <FooterColumn {...footerData.industries} />
              </Stack.Item>
              <Stack.Item styles={styles.footerMenuItem}>
                <FooterColumn {...footerData.applications} />
              </Stack.Item>
              <Stack.Item styles={styles.footerMenuItem}>
                <FooterColumn {...footerData.services} />
              </Stack.Item>
              <Stack.Item styles={styles.footerMenuItem}>
                <FooterColumn {...footerData.resources} />
              </Stack.Item>
              <Stack.Item styles={styles.footerMenuItem}>
                <FooterColumn {...footerData.company} />
              </Stack.Item>
              <Stack.Item styles={styles.footerMenuItem}>
                <FooterColumn {...footerData.contact} />
              </Stack.Item>
            </Stack>
          </Stack>
        </Stack>
      </TabletAndDesktop>
    </>
  );
};
