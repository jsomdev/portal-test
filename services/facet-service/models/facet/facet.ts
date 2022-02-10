import { FacetKey } from './facetKey';
import { FacetOption } from './facetOption';
import { FacetViewConfiguration } from './facetViewConfiguration';

/**
 * Inside the codebase a facet is known as a way to add specific / relevant options to our Product Finder filtering functionality.
 * An instance of a Facet holds information to:
 *  - Determine the look and feel inside the application (eg: FacetViewConfiguration > controlType)
 *  - Determine its behaviour / sub-feature it belongs to (eg: FacetViewConfiguration > category)
 *  - Identify it with the Portal Api (attributeTypeCode) and Browser (FacetKey)
 *  - All of it options and these options can be managed throughout the application (Using Stateful functionality)
 *
 */
export type Facet<
  TFacetOptionKey = never,
  TFacetOption extends FacetOption<TFacetOptionKey> = FacetOption<never>,
  ExtraAttributes = Record<string, unknown>
> = {
  // String identifier used to add to reference back-end objects (e.g: Results from the 'GroupByFacets' call)
  attributeTypeCode: string;
  // View configuration that is used to decide how the facet should be rendered and behave
  configuration: FacetViewConfiguration;
  // Key of the Facet
  key: FacetKey;
  // All Facet options
  options: TFacetOption[];
} & ExtraAttributes; // Any aditional attribtues when using inheritance
