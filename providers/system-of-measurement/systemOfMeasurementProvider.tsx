import { FC, useEffect, useState } from 'react';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { LOCALSTORAGEKEYS } from '@services/local-storage/constants';

import { SystemOfMeasurementContext } from './systemOfMeasurementContext';

export const SystemOfMeasurementProvider: FC = ({ children }) => {
  const [systemOfMeasurement, setSystemOfMeasurement] =
    useState<SystemOfMeasurement>('US');

  const changeSystemOfMeasurement = (
    systemOfMeasurement: SystemOfMeasurement
  ) => {
    try {
      localStorage.setItem(
        LOCALSTORAGEKEYS.systemOfMeasurement,
        systemOfMeasurement
      );
    } catch (error) {
      console.warn(error);
    }
    setSystemOfMeasurement(systemOfMeasurement);
  };

  useEffect(() => {
    const valueInLocalStorage: string | null = localStorage.getItem(
      LOCALSTORAGEKEYS.systemOfMeasurement
    );

    if (
      valueInLocalStorage === null ||
      !['US', 'Metric'].includes(valueInLocalStorage)
    ) {
      changeSystemOfMeasurement('US');
    } else {
      setSystemOfMeasurement(
        localStorage.getItem(
          LOCALSTORAGEKEYS.systemOfMeasurement
        ) as SystemOfMeasurement
      );
    }
  }, []);

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
