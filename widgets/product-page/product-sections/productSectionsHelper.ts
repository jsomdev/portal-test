import { IntlShape, defineMessages } from 'react-intl';

import {
  FontWeights,
  IButtonStyles,
  ICommandBarItemProps,
  ITheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

import { ProductSection, ProductSectionKey } from './productSections.types';

const messages = defineMessages({
  generalInformationTitle: {
    id: messageIds.pages.product.sections.generalInformation.title,
    defaultMessage: 'General Information'
  },
  performanceSectionTitle: {
    id: messageIds.pages.product.sections.performance.title,
    defaultMessage: 'Product Performance'
  },
  specificationsSectionTitle: {
    id: messageIds.pages.product.sections.specifications.title,
    defaultMessage: 'Product Specifications'
  },
  accessoriesSectionTitle: {
    id: messageIds.pages.product.sections.accessories.title,
    defaultMessage: 'Accessories'
  },
  downloadsSectionTitle: {
    id: messageIds.pages.product.sections.downloadsSection.title,
    defaultMessage: 'Product Downloads'
  }
});

interface ProductSections {
  generalInformationSection: ProductSection;
  accessoriesSection: ProductSection;
  downloadsSection: ProductSection;
  performanceSection: ProductSection;
  specificationsSection: ProductSection;
}

function createSection(key: ProductSectionKey, title: string): ProductSection {
  return {
    sectionKey: key,
    title
  };
}

export function getProductSections(intl: IntlShape): ProductSections {
  return {
    generalInformationSection: createSection(
      ProductSectionKey.GeneralInformation,
      intl.formatMessage(messages.generalInformationTitle)
    ),
    accessoriesSection: createSection(
      ProductSectionKey.ProductAccessories,
      intl.formatMessage(messages.accessoriesSectionTitle)
    ),
    downloadsSection: createSection(
      ProductSectionKey.ProductDownloads,
      intl.formatMessage(messages.downloadsSectionTitle)
    ),
    performanceSection: createSection(
      ProductSectionKey.ProductPerformance,
      intl.formatMessage(messages.performanceSectionTitle)
    ),
    specificationsSection: createSection(
      ProductSectionKey.ProductAttributes,
      intl.formatMessage(messages.specificationsSectionTitle)
    )
  };
}

/**
 * Function that will map a ProductSections array to a CommanbarItemProps array,
 * by setting the key, text and custom button.
 * When a section link is clicked, it will scroll to its id.
 * @param sections ProductSections shown on the product page that need to be mapped
 */
export function mapProductSectionsToCommandBarItems(
  sections: ProductSection[],
  onClick: (section: ProductSection) => void,
  theme: ITheme
): ICommandBarItemProps[] {
  return sections.map(section => {
    const { palette, fonts } = theme;
    const styles: IButtonStyles = {
      root: {
        color: palette.accent
      },
      rootHovered: {
        background: 'transparent',
        color: palette.accent
      },
      rootPressed: {
        background: 'transparent',
        color: palette.accent
      },
      labelHovered: {
        textDecoration: 'underline'
      },
      label: {
        fontSize: fonts.mediumPlus.fontSize,
        fontWeight: FontWeights.semibold
      }
    };
    return {
      key: section.sectionKey.toString(),
      text: section.title,
      onClick: () => onClick(section),
      buttonStyles: styles
    };
  });
}
