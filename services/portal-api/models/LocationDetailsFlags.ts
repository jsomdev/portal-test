import { Flags } from './Flags';

export enum LocationDetails {
  'SalesOffice' = 1,
  'HomeOffice' = 2,
  'ManufacturingSite' = 4,
  'Warehouse' = 8,
  'TestLab' = 16,
}

export type LocationDetailsFlags = Flags<LocationDetails>;
