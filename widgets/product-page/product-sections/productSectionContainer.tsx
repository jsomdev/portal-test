import React from 'react';

import {
  FontWeights,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';

import { ProductSection } from './productSections.types';

interface ProductSectionContainerStyles {
  containerStyles: IStackStyles;
  productDesignSectionHeaderStyles: IStackStyles;
}

/**
 * Displays a container for the section content with the ProductSectionHeader
 * on top. The container has an id that is used by the ProductSectionsMenu
 * to scroll to when a menu item is clicked.
 */
export const ProductSectionContainer: React.FC<ProductSection> = ({
  title,
  sectionKey,
  children
}) => {
  const { spacing } = useTheme();

  const styles: ProductSectionContainerStyles = {
    containerStyles: {
      root: {
        marginTop: spacing.m
      }
    },
    /**
     * On our product, we want to add a "fake" padding
     * to each section header to account for our sticky header height
     * This allows us to scroll to the correct position when using the section menu
     */
    productDesignSectionHeaderStyles: {
      root: {
        marginTop: -74,
        paddingTop: 74
      }
    }
  };

  return (
    <Stack styles={styles.containerStyles}>
      <Stack.Item
        root={{ id: sectionKey.toString() }}
        styles={styles.productDesignSectionHeaderStyles}
      >
        <ProductSectionHeader title={title} />
      </Stack.Item>
      {children}
    </Stack>
  );
};

const ProductSectionHeader: React.FC<Partial<ProductSection>> = ({ title }) => {
  const { spacing } = useTheme();
  const styles: ITextStyles = {
    root: {
      fontWeight: FontWeights.bold,
      marginBottom: spacing.s1,
      display: 'block'
    }
  };
  return (
    <Text styles={styles} variant="large">
      {title}
    </Text>
  );
};
