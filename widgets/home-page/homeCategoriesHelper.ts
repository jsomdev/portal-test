import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { Category } from '@services/portal-api';
import { formatCategoryHref } from '@utilities/formatHref';

import { HomeCategoryItem } from './homeCategories';

export function mapCategoriesToHomeCategoryItems(
  categories: Category[],
  locale?: string
): HomeCategoryItem[] {
  return categories.map(category => {
    const categoryFormatter: CategoryFormatter = new CategoryFormatter(
      category,
      locale
    );
    const item: HomeCategoryItem = {
      id: category.id,
      href: formatCategoryHref(category, false),
      name: categoryFormatter.formatName(),
      description: categoryFormatter.formatDescription(),
      children: mapCategoriesToHomeCategoryItems(category.children || [])
    };
    return item;
  });
}
