import { Flags } from './Flags';

export enum CategorySettings {
  'CategoryDrillDownExperience' = 1,
  'DisplayProductFinder' = 2,
  'DisplayGroupedViewOption' = 4,
  'DisplayGridViewOption' = 8,
  'ProductFinderBasicExperience' = 11,
  'DisplayListViewOption' = 16,
  'ProductFinderFullExperience' = 31
}

export type CategorySettingsFlags = Flags<CategorySettings>;
