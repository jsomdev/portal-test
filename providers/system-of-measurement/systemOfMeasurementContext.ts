import { createContext, useContext } from 'react';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';

type SystemOfMeasurementState = {
  systemOfMeasurement: SystemOfMeasurement;
  changeSystemOfMeasurement: (systemOfMeasurement: SystemOfMeasurement) => void;
};

const initialContextState: SystemOfMeasurementState = {
  changeSystemOfMeasurement: () => {
    throw new Error('Not implemented');
  },

  systemOfMeasurement: 'US'
};

export const SystemOfMeasurementContext =
  createContext<SystemOfMeasurementState>(initialContextState);

export const useSystemOfMeasurement = (): SystemOfMeasurementState =>
  useContext(SystemOfMeasurementContext);
