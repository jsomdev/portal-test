import { useCallback, useMemo } from 'react';

import {
  CommandBar,
  ICommandBarItemProps,
  ICommandBarStyles,
  useTheme
} from '@fluentui/react';
import { scrollToTop } from '@utilities/scrollToTop';

import { ProductSection } from './productSections.types';
import { mapProductSectionsToCommandBarItems } from './productSectionsHelper';

interface ProductSectionsMenuProps {
  sections: ProductSection[];
}

/**
 * Displays a CommandBar with links that will scroll to its respective container
 * when clicked
 */
export const ProductSectionsMenu: React.FC<ProductSectionsMenuProps> = ({
  sections
}) => {
  const theme = useTheme();
  const { semanticColors } = theme;

  const scrollToSection = useCallback((section: ProductSection) => {
    setTimeout(() => {
      scrollToTop(`#${section.sectionKey.toString()}`);
    }, 350);
  }, []);
  const menuItems: ICommandBarItemProps[] = useMemo(() => {
    return mapProductSectionsToCommandBarItems(
      sections,
      scrollToSection,
      theme
    );
  }, [sections, scrollToSection, theme]);

  const styles: ICommandBarStyles = {
    root: {
      paddingLeft: 0,
      width: '100%',
      borderBottom: `1px solid ${semanticColors.variantBorder}`
    }
  };
  return <CommandBar styles={styles} items={menuItems} />;
};
