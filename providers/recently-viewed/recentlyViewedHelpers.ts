import { Product, Setting } from '@services/portal-api';
import { sortProductViewsByLastViewedOn } from '@utilities/sortBy';

import { ProductView } from './models';

export function combineProductViews(
  newProductView: ProductView,
  currentViews: ProductView[]
): ProductView[] {
  const MAXITEMS = 10;
  const filteredViews = currentViews.filter(
    view => view.id !== newProductView.id
  );

  const combinedViews = [...filteredViews, newProductView]
    .sort(sortProductViewsByLastViewedOn)
    .slice(0, MAXITEMS);
  return combinedViews;
}
/**
 * Function that will lookup its correspending productView and sort
 * them by date.
 * @param setting the setting that includes the productViews (id & lastviewedon)
 */
export function sortProductsByMostRecentlyViewed(
  a: Product,
  b: Product,
  setting?: Setting
): number {
  const aProductView: ProductView | undefined =
    setting?.value?.productViews?.find(
      (productView: ProductView) => productView.id === a.id
    );
  const bProductView: ProductView | undefined =
    setting?.value?.productViews?.find(
      (productView: ProductView) => productView.id === b.id
    );
  if (!!aProductView && !!bProductView) {
    return sortProductViewsByLastViewedOn(aProductView, bProductView);
  }

  if (!aProductView) {
    return -1;
  }

  return 1;
}
