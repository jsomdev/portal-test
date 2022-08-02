import { FC, useState } from 'react';

import { LOCALSTORAGEKEYS } from '@services/local-storage/constants';
import { SystemOfMeasurement } from '@utilities/measurement';

import { SystemOfMeasurementContext } from './systemOfMeasurementContext';

export const SystemOfMeasurementProvider: FC = ({ children }) => {
  const [systemOfMeasurement, setSystemOfMeasurement] =
    useState<SystemOfMeasurement>(
      (localStorage.getItem(
        LOCALSTORAGEKEYS.systemOfMeasurement
      ) as SystemOfMeasurement) || 'US'
    );

  const changeSystemOfMeasurement = (
    systemOfMeasurement: SystemOfMeasurement
  ) => {
    try {
      localStorage.setItem(
        LOCALSTORAGEKEYS.systemOfMeasurement,
        systemOfMeasurement
      );
    } catch (ex) {
      console.warn(ex);
    }
    setSystemOfMeasurement(systemOfMeasurement);
  };

  if (
    localStorage.getItem(LOCALSTORAGEKEYS.systemOfMeasurement) !== 'US' &&
    localStorage.getItem(LOCALSTORAGEKEYS.systemOfMeasurement) !== 'Metric'
  ) {
    changeSystemOfMeasurement('US');
  }

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
