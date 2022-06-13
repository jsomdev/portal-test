import { Flags } from './Flags';

export enum Audience {
  'NorthAmerica' = 1,
  'Europe' = 2
}

export type AudienceFlags = Flags<Audience>;
