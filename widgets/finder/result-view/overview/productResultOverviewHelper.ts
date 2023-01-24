import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { Category } from '@services/portal-api';

import { ProductResultOverviewItem } from './productResultOverview.types';

export function mapCategoriesToProductResultOverviewItems(
  categories: Category[],
  locale: string
): ProductResultOverviewItem[] {
  return categories.map(category =>
    mapCategoryToProductResultOverviewItem(category, locale)
  );
}

function mapCategoryToProductResultOverviewItem(
  category: Category,
  locale: string
): ProductResultOverviewItem {
  const categoryFormatter: CategoryFormatter = new CategoryFormatter(
    category,
    locale
  );

  return {
    name: categoryFormatter.formatName(),
    description: null,
    href: categoryFormatter.formatHref(),
    imageAlt: categoryFormatter.formatImageCaption(),
    imageSrc: categoryFormatter.formatThumbnailSrc()
  };
}
