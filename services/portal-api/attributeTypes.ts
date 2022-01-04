// import { liquidFlowRateRangeFacet } from '../facet-service/facets/range-facets/liquidFlowRateRangeProductFacet';
// import { liquidPressureRangeFacet } from '../facet-service/facets/range-facets/liquidPressureRangeProductFacet';
// import { liquidSpecificGravityFacet } from '../facet-service/facets/range-facets/liquidSpecificGravityRangeFacet';
import { AttributeType } from './models/AttributeType';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { AttributeTypesResource } from './resources/AttributeTypesResource';

const sprayFinderAttributeTypes: AttributeType[] = [
  // {
  //   code: liquidFlowRateRangeFacet.key,
  //   name: {
  //     en: liquidFlowRateRangeFacet.configuration.displayName?.toString() || '',
  //   },
  //   description: {
  //     en: liquidFlowRateRangeFacet.configuration.description?.toString() || '',
  //   },
  // },
  // {
  //   code: liquidPressureRangeFacet.key,
  //   name: {
  //     en: liquidPressureRangeFacet.configuration.displayName?.toString() || '',
  //   },
  //   description: {
  //     en: liquidPressureRangeFacet.configuration.description?.toString() || '',
  //   },
  // },
  // {
  //   code: liquidSpecificGravityFacet.key,
  //   name: {
  //     en:
  //       liquidSpecificGravityFacet.configuration.displayName?.toString() || '',
  //   },
  //   description: {
  //     en:
  //       liquidSpecificGravityFacet.configuration.description?.toString() || '',
  //   },
  // },
  // {
  //   code: liquidFlowRateRangeFacet.key,
  //   name: {
  //     en: liquidFlowRateRangeFacet.configuration.displayName?.toString() || '',
  //   },
  //   description: {
  //     en: liquidFlowRateRangeFacet.configuration.description?.toString() || '',
  //   },
  // },
];
/**
 * Function that retrieves information about the AttributeTypes that need to be globally available
 * @returns Array of AttributeTypes that will be referenced throughout the application  (e.g Product Specification Name --> Attribute Type)
 */
export async function fetchGlobalAttributeTypes(): Promise<AttributeType[]> {
  const attributeTypesResource: AttributeTypesResource =
    new AttributeTypesResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,name,description,code,sortIndex`
  };

  const data: OdataCollection<AttributeType> =
    await attributeTypesResource.getEntities(queryOptions);

  return [...data.value, ...sprayFinderAttributeTypes];
}
