import { ParsedUrlQuery } from 'querystring';

import { FinderQueryHelper } from '@providers/finder/finderQueryHelper';
import { FacetFactory } from '@services/facet-service/factory/facetFactory';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetCategory } from '@services/facet-service/models/facet/facetCategory';
import { FacetControlType } from '@services/facet-service/models/facet/facetControlType';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';

import { FacetsState } from './facetsContext';

export function getInitialFacetsFromFiles(
  excludedFacetKeys: FacetKey[],
  queryParams: ParsedUrlQuery
): FacetsState {
  // We will get the product facets and filter them based on our excluded keys
  const filteredFacetsFromFacetFactory = FacetFactory.getFacetsFromFiles(
    excludedFacetKeys || []
  );

  const initialFacets = Object.fromEntries(
    filteredFacetsFromFacetFactory.map(facet => {
      // Get the query parameters for the facet from the url
      // Url: ?SprayPattern=X,Y&Brand=X,Y
      const facetQueryParam: string | string[] | undefined =
        queryParams[facet.key];
      return [
        facet.key.toString(),
        {
          ...facet,
          options: getInitialOptions(facet as Facet, facetQueryParam)
        } as Facet
      ];
    })
  );

  return initialFacets;
}

/**
 * Since the initial options are hardcoded inside the facet files, they
 * might need to be updated based on the url.
 */
export function getInitialOptions(
  facet: Facet,
  facetQueryParam: string | string[] | undefined
): FacetOption[] {
  const activeQueryValues: string[] =
    typeof facetQueryParam === 'string'
      ? (facetQueryParam as string).split(',')
      : []; // ['Disc']
  const currentOptions = facet.options.slice();
  let newFacetOptions: FacetOption[] = [];

  if (facet.configuration.category === FacetCategory.OperatingConditions) {
    newFacetOptions = currentOptions.map((currentOption: FacetOption) =>
      FinderQueryHelper.mapQueryValuesToOperatingConditionOption(
        facet,
        activeQueryValues,
        currentOption
      )
    );
    return newFacetOptions;
  }

  // The options that are active will have their displayName joined by a comma seperator.
  // Eg: X,Y --> [X, Y]
  if (facet.configuration.category === FacetCategory.Main) {
    // Map through the current options and set to active if the options displayName is included in the parameter
    newFacetOptions = currentOptions.map(facetOption => {
      return {
        ...facetOption,
        isActive: activeQueryValues.includes(facetOption.key)
      };
    });
    return newFacetOptions;
  }

  return facet.options;
}

/**
 * Function that will map through a dictionary of facets and set all options to isActive: false.
 * @param facets The dictionary of facets that need to have their options set to not active.
 */
export function clearAllOptionsForFacets(facets: { [key: string]: Facet }): {
  [key: string]: Facet;
} {
  let facetArray: Facet[] = Object.values(facets).slice();

  facetArray = facetArray.map(facet => clearAllOptionsForFacet(facet));

  return Object.fromEntries(
    facetArray.map(facet => [facet.key.toString(), facet])
  );
}

/** Function that will map through all options of a facet and make sure the option is cleared*/
export function clearAllOptionsForFacet(facet: Facet): Facet {
  switch (facet.configuration.controlType) {
    // A 'Range' Facet also needs its value reset
    case FacetControlType.Range:
      return {
        ...facet,
        options: facet.options.slice().map(option => ({
          ...option,
          value: null,
          isActive: false
        }))
      };
    default:
      return {
        ...facet,
        options: facet.options
          .slice()
          .map(option => ({ ...option, isActive: false }))
      };
  }
}
