import {
  FontSizes,
  FontWeights,
  ILinkStyles,
  ITextStyles,
  Link,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { FC } from 'react';
import { FooterColumnItem } from './footerColumn.types';

type ColumnStyles = {
  title: ITextStyles;
  link: ILinkStyles;
};

export const FooterColumn: FC<FooterColumnItem> = ({ title, items }) => {
  const { palette, semanticColors } = useTheme();
  const styles: ColumnStyles = {
    title: {
      root: {
        color: palette.white,
        fontWeight: FontWeights.bold,
        fontSize: FontSizes.mediumPlus
      }
    },
    link: {
      root: {
        color: semanticColors.bodySubtext,
        fontSize: FontSizes.mediumPlus,
        fontWeight: 500,
        '&:hover': {
          color: semanticColors.bodySubtext,
          textDecoration: 'none'
        }
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: 8 }}>
      <Text styles={styles.title}>{title}</Text>
      {items.map(item => (
        <Link key={item.text} styles={styles.link} href={item.url}>
          {item.text}
        </Link>
      ))}
    </Stack>
  );
};
