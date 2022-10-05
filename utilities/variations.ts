import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';

import { Variation } from '../services/portal-api/models/VariationFlags';

export function getSystemOfMeasurementVariation(
  systemOfMeasurement: SystemOfMeasurement | undefined
): Variation {
  switch (systemOfMeasurement) {
    case 'Metric':
      return Variation.Metric;
    case 'US':
      return Variation.Us;

    default:
      return Variation.Invariant;
  }
}
