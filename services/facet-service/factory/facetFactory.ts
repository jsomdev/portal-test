import { brandFacet } from '../facets/brand';
import { bushingAndORingMaterialFacet } from '../facets/bushingAndORingMaterial';
import { capacitySizeFacet } from '../facets/capacitySize';
import { categoryIdFacet } from '../facets/categoryId';
import { designFeatureFacet } from '../facets/designFeature';
import { flangeOptionsFacet } from '../facets/flangeOptions';
import { inletConnectionSizeFacet } from '../facets/inletConnectionSize';
import { inletConnectionThreadTypeFacet } from '../facets/inletConnectionThreadType';
import { inletConnectionTypeFacet } from '../facets/inletConnectionType';
import { materialsFacet } from '../facets/materials';
import { modelIdFacet } from '../facets/modelId';
import { motorTypeFacet } from '../facets/motorType';
import { motorVersionFacet } from '../facets/motorVersion';
import { nozzleCountFacet } from '../facets/nozzleCount';
import { nozzleHubFacet } from '../facets/nozzleHub';
import { pressureGroupFacet } from '../facets/pressureGroup';
import { productTypeFacet } from '../facets/productType';
import { liquidFlowRateFacet } from '../facets/range-facets/liquidFlowRate';
import { liquidPressureFacet } from '../facets/range-facets/liquidPressure';
import { liquidSpecificGravityFacet } from '../facets/range-facets/liquidSpecificGravity';
import { sprayAngleFacet } from '../facets/range-facets/sprayAngle';
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
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetKey } from '../models/facet/facetKey';

export class FacetFactory {
  static getFacetCodes(): string[] {
    return FacetFactory.getFacetsFromFiles([])
      .filter(facet => facet.configuration.category === FacetCategory.Main)
      .map(facet => facet.attributeTypeCode);
  }
  static getFacetsFromFiles(excludedFacetKeys: FacetKey[]): Facet[] {
    return [
      categoryIdFacet as Facet,
      modelIdFacet as Facet,
      liquidFlowRateFacet as unknown as Facet, // Operating Conditions
      liquidPressureFacet as unknown as Facet, // Operating Conditions
      liquidSpecificGravityFacet as unknown as Facet, // Operating Conditions
      sprayAngleFacet as unknown as Facet, // Operating Conditions
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
      tankMountingOptionsFacet as Facet,
      nozzleCountFacet as Facet,
      nozzleHubFacet as Facet,
      motorVersionFacet as Facet,
      flangeOptionsFacet as Facet,
      bushingAndORingMaterialFacet as Facet,
      inletConnectionThreadTypeFacet as Facet
    ].filter(facet => !excludedFacetKeys?.includes(facet.key));
  }
}
