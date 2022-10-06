import { Category, Model, Product, Series } from '@services/portal-api';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { CategorySettings } from '@services/portal-api/models/CategorySettingsFlags';

/**
 * Function that will format the href for a Category.
 * Example usages:
 *  - (Origin included) to set as href of a <Link> / <a> href that links to a Product. This is used for browser based functionality (right click -> open in new tab)
 *  - (Origin excluded) to as 'pathname' in the toPath() function of useNavigate, or to so as the 'to' prop on a Link (react-router-dom). This is used for client-side navigation without additional state / location behaviour
 * @param category Category which the href is for
 * @param includeOrigin Whether to include window.location.origin (DO NOT INCLUDE for client-side-routing)
 */
export function formatCategoryHref(
  category: Category,
  includeOrigin = true
): string {
  const origin: string =
    includeOrigin && typeof window !== 'undefined'
      ? window.location.origin
      : '';
  const settings = FlaggedEnum.create<CategorySettings>(
    CategorySettings,
    category.settings || ''
  );
  const finder: boolean = !!(settings & CategorySettings.DisplayProductFinder);
  const path: string =
    (category.seoPath &&
      category.id &&
      `/categories/${category.seoPath}/${category.id}${
        (finder && '/finder') || ''
      }`) ||
    '/categories/not-found';

  return `${origin}${path}`;
}

/**
 * Function that will format the href for a Product.
 * @param design Product which the href is for
 */
//TODO Ward prio move to productFormatter
export function formatDesignHref(design: Partial<Product>): string {
  const structureParameter: string = '/products';
  const productIdParameter: string = `/${design.id}`;
  return `${structureParameter}${productIdParameter}`;
}

/**
 * Function that will format the href for a Model.
 * Example usaged:
 *  - (Origin included) to set as href of a <Link> / <a> href that links to a Model. This is used for browser based functionality (right click -> open in new tab)
 *  - (Origin excluded) to as 'pathname' in the toPath() function of useNavigate, or to so as the 'to' prop on a Link (react-router-dom). This is used for client-side navigation without additional state / location behaviour
 * @param model Model which the href is for
 * @param includeOrigin Whether or not to include window.location.origin (DO NOT INCLUDE for client-side-routing)
 */
export function formatModelHref(model: Model, includeOrigin = true): string {
  const origin: string =
    includeOrigin && typeof window !== 'undefined'
      ? window.location.origin
      : '';
  const structureParameter: string = '/models';
  // TODO , implement seoPath
  const idParameter: string = `/${model.id}`;

  return `${origin}${structureParameter}${idParameter}`;
}
/**
 * Function that will format the href for a Series.
 * Example usaged:
 *  - (Origin included) to set as href of a <Link> / <a> href that links to a Series. This is used for browser based functionality (right click -> open in new tab)
 *  - (Origin excluded) to as 'pathname' in the toPath() function of useNavigate, or to so as the 'to' prop on a Link (react-router-dom). This is used for client-side navigation without additional state / location behaviour
 * @param series Series which the href is for
 * @param includeOrigin Whether or not to include window.location.origin (DO NOT INCLUDE for client-side-routing)
 */
export function formatSeriesHref(series: Series, includeOrigin = true): string {
  const origin: string =
    includeOrigin && typeof window !== 'undefined'
      ? window.location.origin
      : '';
  const structureParameter = '/series';
  // TODO , implement seoPath
  const idParameter: string = `/${series.id}`;

  return `${origin}${structureParameter}${idParameter}`;
}
