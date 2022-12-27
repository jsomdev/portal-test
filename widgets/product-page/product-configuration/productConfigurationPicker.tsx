import Link from 'next/link';

import { ITextStyles, Stack, Text, useTheme } from '@fluentui/react';

import {
  ProductConfigurationItem,
  ProductConfigurationItemOption
} from './productConfigurations.types';

interface ProductConfigurationPickerProps {
  items: ProductConfigurationItem[];
}

interface ProductConfigurationPickerStyles {
  label: ITextStyles;
}

export const ProductConfigurationPicker: React.FC<
  ProductConfigurationPickerProps
> = ({ items }) => {
  const { spacing, palette } = useTheme();

  const styles: ProductConfigurationPickerStyles = {
    label: {
      root: {
        color: palette.neutralSecondary
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l1, padding: spacing.m }}>
      {items
        .filter(item => item.options.length > 1)
        .map(item => (
          <Stack key={item.title} tokens={{ childrenGap: spacing.s1 }}>
            <Text styles={styles.label} variant="mediumPlus">
              {item.title}
            </Text>

            <Stack wrap horizontal tokens={{ childrenGap: spacing.m }}>
              {item.options.map(option => (
                <ProductConfigurationPickerOption
                  {...option}
                  key={option.key}
                />
              ))}
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
};

interface ProductConfigurationItemOptionStyles {
  text: ITextStyles;
}

type ProductConfigurationPickerOptionProps = ProductConfigurationItemOption;

const ProductConfigurationPickerOption: React.FC<
  ProductConfigurationPickerOptionProps
> = ({ key, selected, text, href }) => {
  const { spacing, effects, palette, semanticColors } = useTheme();

  const styles: ProductConfigurationItemOptionStyles = {
    text: {
      root: {
        padding: spacing.m,
        cursor: 'pointer',
        borderRadius: effects.roundedCorner6,
        border: `1px solid ${
          selected ? palette.accent : semanticColors.variantBorder
        }`,
        '&:hover': {
          borderColor: selected
            ? palette.accent
            : semanticColors.variantBorderHovered
        }
      }
    }
  };
  return (
    <Link passHref key={key} href={href}>
      <Text styles={styles.text}>{text}</Text>
    </Link>
  );
};
