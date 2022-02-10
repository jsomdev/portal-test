import { Flags } from './Flags';

export enum Variation {
  'Metric' = 1,
  'Us' = 2,
  'Invariant' = 3
}

export type VariationFlags = Flags<Variation>;
