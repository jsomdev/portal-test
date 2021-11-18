/**
 * Select, Expand, Filter, OrderBy, Count, Top, Skip
 */
export interface QueryOptions {
  selectQuery: string | undefined;
  expandQuery: string | undefined;
  filterQuery: string | undefined;
  orderbyQuery: string | undefined;
  // actual value
  includeCount: boolean;
  // actual value
  top: number | undefined;
  // actual value
  skip: number | undefined;
}
