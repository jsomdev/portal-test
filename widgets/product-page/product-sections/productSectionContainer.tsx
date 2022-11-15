import React from 'react';

import {
  FontWeights,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';

import { ProductSection } from './productSections.types';

interface ProductSectionContainerStyles {
  root: IStackStyles;
  contentContainer: IStackItemStyles;
  headerContainer: IStackStyles;
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
    root: {
      root: {
        paddingTop: spacing.m
      }
    },
    contentContainer: {
      root: {
        paddingTop: spacing.m,
        paddingBottom: spacing.m
      }
    },
    /**
     * On our product, we want to add a "fake" padding
     * to each section header to account for our sticky header height
     * This allows us to scroll to the correct position when using the section menu
     */
    headerContainer: {
      root: {
        marginTop: -128,
        paddingTop: 128
      }
    }
  };

  return (
    <Stack styles={styles.root}>
      <Stack.Item
        root={{ id: sectionKey.toString() }}
        styles={styles.headerContainer}
      >
        <ProductSectionHeader title={title} />
      </Stack.Item>
      <Stack.Item styles={styles.contentContainer}>{children}</Stack.Item>
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
    <Text styles={styles} variant="xLargePlus" as="h2">
      {title}
    </Text>
  );
};
