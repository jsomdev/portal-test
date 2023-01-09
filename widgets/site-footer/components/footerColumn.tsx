import React, { FC } from 'react';

import { useIntl } from 'react-intl';

import {
  FontWeights,
  ILinkStyles,
  ITextStyles,
  Link,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { FooterColumnFields } from '@widgets/site-footer/siteFooter.types';

type ColumnStyles = {
  title: ITextStyles;
  link: ILinkStyles;
};

export const FooterColumn: FC<FooterColumnFields> = ({
  titleMessageId,
  items
}) => {
  const { palette, semanticColors, fonts } = useTheme();
  const { formatMessage } = useIntl();
  const styles: ColumnStyles = {
    title: {
      root: {
        color: palette.white,
        fontWeight: FontWeights.bold,
        fontSize: fonts.medium.fontSize,
        textTransform: 'uppercase'
      }
    },
    link: {
      root: {
        color: semanticColors.bodySubtext,
        fontSize: fonts.medium.fontSize,
        fontWeight: FontWeights.regular,
        '&:hover': {
          color: semanticColors.bodySubtext,
          textDecoration: 'underline'
        }
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: 8 }}>
      {titleMessageId && (
        <Text styles={styles.title}>
          {formatMessage({ id: titleMessageId })}
        </Text>
      )}
      {items.map(item => (
        <Link key={item.labelMessageId} styles={styles.link} href={item.url}>
          {formatMessage({ id: item.labelMessageId })}
        </Link>
      ))}
    </Stack>
  );
};
