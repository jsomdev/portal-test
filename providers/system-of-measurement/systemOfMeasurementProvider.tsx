import { FC, useState } from 'react';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';

import { SystemOfMeasurementContext } from './systemOfMeasurementContext';

export const SystemOfMeasurementProvider: FC = ({ children }) => {
  const [systemOfMeasurement, setSystemOfMeasurement] =
    useState<SystemOfMeasurement>('US');

  const changeSystemOfMeasurement = (
    systemOfMeasurement: SystemOfMeasurement
  ) => {
    setSystemOfMeasurement(systemOfMeasurement);
  };

  return (
    <SystemOfMeasurementContext.Provider
      value={{
        changeSystemOfMeasurement,
        systemOfMeasurement
      }}
    >
      {children}
    </SystemOfMeasurementContext.Provider>
  );
};
