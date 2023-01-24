import React, { FC } from 'react';

import { useIntl } from 'react-intl';

import { ILinkStyles, Link, Stack, useTheme } from '@fluentui/react';

import { FooterItem } from '../siteFooter.types';

export const SiteLinks: FC<{ siteLinks: FooterItem[] }> = ({ siteLinks }) => {
  const { semanticColors } = useTheme();
  const { formatMessage } = useIntl();
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
              {formatMessage({ id: siteLink.labelMessageId })}
            </Link>
          </Stack.Item>
        );
      })}
    </Stack>
  );
};
