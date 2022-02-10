import { Flags } from './Flags';

export enum ListSettings {
  'SupportsConditions' = 1,
  'SupportsHierarchy' = 2,
  'SupportsGrouping' = 4
}

export type ListSettingsFlags = Flags<ListSettings>;
