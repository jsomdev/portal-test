export interface SeriesGroupingResult {
  id: string;
  productCount: number;
  models: ModelGroupingResult[];
}

export interface ModelGroupingResult {
  id: string;
  productCount: number;
  seriesId: string;
}
