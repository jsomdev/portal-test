import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { Category } from '@services/portal-api';

export interface HomeCategoryItem {
  id: string | undefined;
  href: string;
  name: string;
  imageSrc: string;
  imageCaption: string;
  description: string;
  children: HomeCategoryItem[];
}

export function mapCategoriesToHomeCategoryItems(
  categories: Category[],
  locale?: string
): HomeCategoryItem[] {
  return categories.map(category =>
    mapCategoryToHomeCategoryItem(category, locale)
  );
}

export function mapCategoryToHomeCategoryItem(
  category: Category,
  locale?: string
): HomeCategoryItem {
  const categoryFormatter: CategoryFormatter = new CategoryFormatter(
    category,
    locale
  );
  const item: HomeCategoryItem = {
    id: category.id,
    href: categoryFormatter.formatHref(),
    name: categoryFormatter.formatName(),
    description: categoryFormatter.formatDescription(),
    children: mapCategoriesToHomeCategoryItems(category.children || []),
    imageSrc: categoryFormatter.formatImageSrc(),
    imageCaption: categoryFormatter.formatImageCaption()
  };
  return item;
}
