import { ILinkStyles, Link, Stack, useTheme } from '@fluentui/react';
import { FC } from 'react';
import { FooterItem } from '../siteFooter.types';

const siteLinks: FooterItem[] = [
  {
    text: 'Site Map',
    url: 'https://www.spray.com/legal/site-map/'
  },
  {
    text: 'Legal Information',
    url: 'https://www.spray.com/legal/legal-information/'
  },
  {
    text: 'Privacy Statement',
    url: 'https://www.spray.com/legal/privacy-statement/'
  },
  {
    text: 'ISO System and Policy Statement',
    url: 'https://www.spray.com/legal/iso-system-and-policy-statement/'
  }
];

export const SiteLinks: FC = () => {
  const { semanticColors } = useTheme();
  const style: ILinkStyles = {
    root: {
      color: semanticColors.bodySubtext,
      '&:hover': {
        color: semanticColors.bodySubtext,
        textDecoration: 'none'
      }
    }
  };
  return (
    <Stack>
      {siteLinks.map((siteLink, i) => {
        return (
          <Stack.Item key={`${siteLink.url}_${i}`}>
            <Link styles={style} href={siteLink.url}>
              {siteLink.text}
            </Link>
          </Stack.Item>
        );
      })}
    </Stack>
  );
};
