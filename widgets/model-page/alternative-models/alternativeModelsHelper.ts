import { ModelFormatter } from '@services/i18n/formatters/entity-formatters/modelFormatter';
import { Model } from '@services/portal-api';
import { ModelCardViewModel } from '@widgets/model-card-parts/modelCardViewModel';

export type ModelGalleryItem = ModelCardViewModel;

export function mapModelsToModelsGalleryItems(
  models: Model[],
  locale: string
): ModelGalleryItem[] {
  return models
    .map(model => mapModelToModelGalleryItem(model, locale))
    .filter(model => !!model) as ModelGalleryItem[];
}

function mapModelToModelGalleryItem(
  model: Model,
  locale: string
): ModelGalleryItem | undefined {
  const modelFormatter: ModelFormatter = new ModelFormatter(model, locale);

  return {
    id: model.id || undefined,
    number: model.number || '',
    imageUrl: modelFormatter.formatImageHref(),
    name: modelFormatter.formatName(),
    url: modelFormatter.formatUrl() || undefined
  };
}
