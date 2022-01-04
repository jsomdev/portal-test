import { brandFacet } from '../facets/brand';
import { capacitySizeFacet } from '../facets/capacitySize';
import { designFeatureFacet } from '../facets/designFeature';
import { inletConnectionSizeFacet } from '../facets/inletConnectionSize';
import { inletConnectionTypeFacet } from '../facets/inletConnectionType';
import { materialsFacet } from '../facets/materials';
import { productTypeFacet } from '../facets/productType';
import { liquidFlowRateRangeFacet } from '../facets/range-facets/liquidFlowRateRangeProductFacet';
import { liquidPressureRangeFacet } from '../facets/range-facets/liquidPressureRangeProductFacet';
import { liquidSpecificGravityFacet } from '../facets/range-facets/liquidSpecificGravityRangeFacet';
import { sprayAngleRangeFacet } from '../facets/range-facets/sprayAngleRangeProductFacet';
import { relativeDropSizeGroupFacet } from '../facets/relativeDropSizeGroup';
import { sprayAngleCatalogCodeFacet } from '../facets/sprayAngleCatalogCode';
import { sprayPatternFacet } from '../facets/sprayPattern';
import { sprayPortalDemoCategoryPageFacet } from '../facets/sprayPortalDemoCategoryPage';
import { strainerScreenMeshSizeFacet } from '../facets/strainerScreenMeshSize';
import { Facet } from '../models/facet/facet';
import { FacetKey } from '../models/facet/facetKey';

export class FacetFactory {
  static getFacetsFromFiles(excludedFacetKeys: FacetKey[]): Facet[] {
    return [
      sprayPortalDemoCategoryPageFacet as Facet,
      liquidFlowRateRangeFacet as unknown as Facet,
      liquidPressureRangeFacet as unknown as Facet,
      liquidSpecificGravityFacet as unknown as Facet,
      sprayAngleRangeFacet as unknown as Facet,
      productTypeFacet as Facet,
      materialsFacet as Facet,
      inletConnectionTypeFacet as Facet,
      inletConnectionSizeFacet as Facet,
      designFeatureFacet as Facet,
      strainerScreenMeshSizeFacet as Facet,
      sprayPatternFacet as Facet,
      sprayAngleCatalogCodeFacet as Facet,
      brandFacet as Facet,
      capacitySizeFacet as Facet,
      relativeDropSizeGroupFacet as Facet
    ].filter(facet => !excludedFacetKeys?.includes(facet.key));
  }
}
