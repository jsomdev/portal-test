import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { TabletAndDesktop } from '@widgets/media-queries';

import { useProductPage } from '../productPageContext';
import { ProductSectionContainer } from './productSectionContainer';
import { ProductSection } from './productSections.types';
import { ProductSectionsMenu } from './productSectionsMenu';

interface ProductSectionsProps {
  onRenderSectionContent: (section: ProductSection) => React.ReactNode;
}
interface ProductSectionsStyles {
  productSectionMenuContainer: IStackStyles;
}

/**
 * Smart Component that builds the sections menu and skeleton for the section content.
 */
export const ProductSections: React.FC<ProductSectionsProps> = ({
  onRenderSectionContent
}) => {
  const { spacing } = useTheme();
  const { sections, product } = useProductPage();
  const styles: ProductSectionsStyles = {
    productSectionMenuContainer: {
      root: { width: '100%', overflow: 'hidden' }
    }
  };
  return (
    <Stack tokens={{ childrenGap: spacing.m, padding: `0 0 ${spacing.l2} 0` }}>
      <TabletAndDesktop>
        {(className, renderChildren) => (
          <Stack.Item
            className={className}
            styles={styles.productSectionMenuContainer}
          >
            {renderChildren && <ProductSectionsMenu sections={sections} />}
          </Stack.Item>
        )}
      </TabletAndDesktop>

      {sections.map((section: ProductSection) => (
        <ProductSectionContainer
          key={`${section.sectionKey}_${product.number}`}
          sectionKey={section.sectionKey}
          title={section.title}
        >
          {onRenderSectionContent(section)}
        </ProductSectionContainer>
      ))}
    </Stack>
  );
};
