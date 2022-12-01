import { Attribute } from '../models/Attribute';
import { Display } from '../models/Display';
import { Product } from '../models/Product';
import { OdataCollection } from '../o-data';

// Expected return type of the FacetedSearch call
export type FacetedSearchOdataCollection =
  OdataCollection<FacetedSearchProduct> & {
    '@search.facets': FacetedSearchFacetResults;
  };

export type AutoCompleteOdataCollection = OdataCollection<string>;
// Type that represents a product in the collection that is returned by the faceted search call. It shares a number of properties
// with a Product Entity as we know but also has a score and a set of relevant attributes (previously known as the key specifications or display in table row)
export type FacetedSearchProduct = {
  '@search.score': number;
  attributes: FacetedSearchProductAttribute[];
} & Pick<
  Product,
  'id' | 'audience' | 'image' | 'slug' | 'name' | 'description' | 'number'
> & { [facetKey: string]: string[] | undefined | null };

// Type with - for each facet (defined by the attributeTypeCode key)- an array of facet results
type FacetedSearchFacetResults = {
  [attributeTypeCode: string]: FacetedSearchFacetResult[];
};

// Type with the count (amount of results) for a specific value (can be an actual value or lookup valueId)
export type FacetedSearchFacetResult = {
  count: number;
  // Can be a GUID
  value: string | number;
};

type FacetedSearchProductAttributeDisplay = Pick<
  Display,
  'unitSymbol' | 'variation'
> & {
  value: string;
};

type FacetedSearchProductAttribute = Pick<
  Attribute,
  'typeCode' | 'sortIndex' | 'settings'
> & {
  displays: FacetedSearchProductAttributeDisplay[];
};
