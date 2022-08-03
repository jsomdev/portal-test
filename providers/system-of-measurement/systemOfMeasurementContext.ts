import { SystemOfMeasurement } from '@utilities/measurement';
import { createContext } from 'react';

type SystemOfMeasurementState = {
  systemOfMeasurement: SystemOfMeasurement;
  changeSystemOfMeasurement: (systemOfMeasurement: SystemOfMeasurement) => void;
};

const initialContextState: SystemOfMeasurementState = {
  changeSystemOfMeasurement: () => {
    throw new Error('Not implemented');
  },

  systemOfMeasurement: 'Metric'
};

export const SystemOfMeasurementContext =
  createContext<SystemOfMeasurementState>(initialContextState);
