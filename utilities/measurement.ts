export interface UnitOfMeasurement {
  symbol: string;
  // System it belongs to
  system: SystemOfMeasurement;
  // Is this UnitOfMeasurement the base for its SystemOfMeasurement
  isBase: boolean;
  // Converts the value from the default UnitOfMeasurement to the value for this UnitOfMeasurement
  fromDefault: (value: number) => number;
  // Converts the value from this UnitOfMeasurement to the value for the default UnitOfMeasurement
  toDefault: (value: number) => number;
}

// SystemOfMeasurement a Unit belongs to
// 'Metric' --> lpm
// 'US' --> gpm
// 'fixed' --> minutes,degrees (°)
export type SystemOfMeasurement = 'Metric' | 'US' | 'common';
