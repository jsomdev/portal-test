import { ModelSeriesGrouping } from '@services/portal-api/models/ModelSeriesGrouping';

import { ModelGroupingResult, SeriesGroupingResult } from './types';

export function mapModelsSeriesGroupingToSeriesGroupingResult(
  modelSeriesGrouping: ModelSeriesGrouping[]
): SeriesGroupingResult[] {
  const seriesGroupingResult: SeriesGroupingResult[] = [];

  modelSeriesGrouping.forEach(modelsSeriesGroup => {
    let existingSeriesGroupingResult: SeriesGroupingResult | undefined =
      seriesGroupingResult.find(s => s.id === modelsSeriesGroup.seriesId);

    if (!existingSeriesGroupingResult) {
      const newSeriesGroupingResult: SeriesGroupingResult = {
        productCount: 0,
        models: [],
        id: modelsSeriesGroup.seriesId || ''
      };
      existingSeriesGroupingResult = { ...newSeriesGroupingResult };
      seriesGroupingResult.push(existingSeriesGroupingResult);
    }
    const newModelGroupingResult: ModelGroupingResult = {
      id: modelsSeriesGroup.modelId || '',
      seriesId: modelsSeriesGroup.seriesId || '',
      productCount: modelsSeriesGroup.count || 0
    };
    const index: number = seriesGroupingResult.findIndex(
      s => s.id === newModelGroupingResult.seriesId
    );

    if (index >= 0) {
      seriesGroupingResult[index].productCount =
        seriesGroupingResult[index].productCount +
        newModelGroupingResult.productCount;
      seriesGroupingResult[index].models = [
        ...seriesGroupingResult[index].models,
        newModelGroupingResult
      ];
    }
  });
  return seriesGroupingResult;
}
