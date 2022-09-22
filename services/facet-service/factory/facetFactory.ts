import { brandFacet } from '../facets/brand';
import { capacitySizeFacet } from '../facets/capacitySize';
import { categoryIdFacet } from '../facets/categoryId';
import { designFeatureFacet } from '../facets/designFeature';
import { inletConnectionSizeFacet } from '../facets/inletConnectionSize';
import { inletConnectionTypeFacet } from '../facets/inletConnectionType';
import { materialsFacet } from '../facets/materials';
import { motorTypeFacet } from '../facets/motorType';
import { pressureGroupFacet } from '../facets/pressureGroup';
import { productModelFacet } from '../facets/productModel';
import { productTypeFacet } from '../facets/productType';
import { liquidFlowRateRangeFacet } from '../facets/range-facets/liquidFlowRateRangeProductFacet';
import { liquidPressureRangeFacet } from '../facets/range-facets/liquidPressureRangeProductFacet';
import { liquidSpecificGravityFacet } from '../facets/range-facets/liquidSpecificGravityRangeFacet';
import { sprayAngleRangeFacet } from '../facets/range-facets/sprayAngleRangeProductFacet';
import { relativeDropSizeGroupFacet } from '../facets/relativeDropSizeGroup';
import { productSeriesFacet } from '../facets/series';
import { shaftLengthFacet } from '../facets/shaftLength';
import { sprayAngleCatalogCodeFacet } from '../facets/sprayAngleCatalogCode';
import { sprayCoverageFacet } from '../facets/sprayCoverage';
import { sprayCoverageDiameterFacet } from '../facets/sprayCoverageDiameter';
import { sprayPatternFacet } from '../facets/sprayPattern';
import { strainerScreenMeshSizeFacet } from '../facets/strainerScreenMeshSize';
import { tankMountingOptionsFacet } from '../facets/tankMountingOptions';
import { Facet } from '../models/facet/facet';
import { FacetKey } from '../models/facet/facetKey';

export class FacetFactory {
  static getFacetsFromFiles(excludedFacetKeys: FacetKey[]): Facet[] {
    return [
      categoryIdFacet as Facet,
      productSeriesFacet as Facet,
      productModelFacet as Facet,
      liquidFlowRateRangeFacet as unknown as Facet, // Operating Conditions
      liquidPressureRangeFacet as unknown as Facet, // Operating Conditions
      liquidSpecificGravityFacet as unknown as Facet, // Operating Conditions
      sprayAngleRangeFacet as unknown as Facet, // Operating Conditions
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
      relativeDropSizeGroupFacet as Facet,
      motorTypeFacet as Facet,
      pressureGroupFacet as Facet,
      shaftLengthFacet as Facet,
      sprayCoverageFacet as Facet,
      sprayCoverageDiameterFacet as Facet,
      tankMountingOptionsFacet as Facet
    ].filter(facet => !excludedFacetKeys?.includes(facet.key));
  }
}
