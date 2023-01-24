import { useCallback, useMemo } from 'react';

import {
  CommandBar,
  ICommandBarItemProps,
  ICommandBarStyles,
  useTheme
} from '@fluentui/react';

import { ProductSection } from './productSections.types';
import { mapProductSectionsToCommandBarItems } from './productSectionsHelper';

interface ProductSectionsMenuProps {
  sections: ProductSection[];
}
// Function that takes offsets of headers into account when scrolling to the section
function scrollToSectionId(id: string) {
  const yOffset = -200;
  const element = document.getElementById(id);

  if (typeof element?.scrollTo === 'function') {
    const y = element.getBoundingClientRect()?.top + window.scrollY + yOffset;
    window.scrollTo({
      behavior: 'smooth',
      top: y
    });
  }
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
      scrollToSectionId(section.sectionKey.toString());
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
