import { IntlShape } from 'react-intl';

import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { FacetOptionFormatter } from '@services/i18n/formatters/facetFormatter';
import { Category } from '@services/portal-api';

import { QuickFilterItem } from './quickFilter.types';

export function mapCategoriesToQuickFilterItems(
  categories: Category[],
  locale: string
): QuickFilterItem[] {
  return categories.map(category => {
    const categoryFormatter: CategoryFormatter = new CategoryFormatter(
      category,
      locale
    );
    return {
      query: {
        categorySlug: [categoryFormatter.formatSlug()]
      },
      image: {
        alt: categoryFormatter.formatImageCaption(),
        src: categoryFormatter.formatImageSrc()
      },
      text: categoryFormatter.formatName()
    };
  });
}
export function mapFacetOptionsToQuickFilterItem(
  facetOptions: FacetOption[],
  facetKey: FacetKey,
  query: Record<string, string | string[] | undefined>,
  intl: IntlShape,
  systemOfMeasurement: SystemOfMeasurement,
  locale: string
): QuickFilterItem[] {
  return facetOptions.map(facetOption => {
    const facetOptionFormatter: FacetOptionFormatter = new FacetOptionFormatter(
      facetOption,
      undefined,
      intl,
      systemOfMeasurement,
      locale
    );
    return {
      query: {
        [facetKey]: query[facetKey]
          ? (query[facetKey] as string).concat(`,${facetOption.key}`)
          : facetOption.key
      },
      image: null,
      isActive: facetOption.isActive,
      shallowNavigation: true,
      text: facetOptionFormatter.formatDisplayValue()
    };
  });
}
