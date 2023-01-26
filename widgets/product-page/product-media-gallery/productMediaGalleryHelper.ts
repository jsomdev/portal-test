import { Guid } from 'guid-typescript';

import { STATIC_IMAGES } from '@public/media/images';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { ResourceFormatter } from '@services/i18n/formatters/entity-formatters/resourceFormatter';
import { Resource, ResourceType } from '@services/portal-api';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { Variation } from '@services/portal-api/models/VariationFlags';
import { getSystemOfMeasurementVariation } from '@utilities/variations';

import {
  ProductMediaGalleryItem,
  ProductMediaGalleryItemType
} from './productMediaGallery.types';

export function mapResourcesToProductMediaGalleryItems(
  defaultProductImage: Resource | null | undefined,
  resources: Resource[],
  systemOfMeasurement: SystemOfMeasurement,
  locale: string
): ProductMediaGalleryItem[] {
  const filteredResources: Resource[] = filterResourcesBySystemOfMeasurement(
    resources,
    systemOfMeasurement
  ).filter(resource => resource.id !== defaultProductImage?.id);

  const productMediaGalleryItems: ProductMediaGalleryItem[] = [];
  const defaultItem: ProductMediaGalleryItem | undefined = defaultProductImage
    ? mapResourceToProductMediaGalleryItem(
        defaultProductImage,
        'image',
        locale,
        true,
        true
      )
    : undefined;

  if (defaultItem) {
    productMediaGalleryItems.push(defaultItem);
  }

  const cadenasModelResource: Resource | undefined = filteredResources.find(
    resource => resource.type === ResourceType.INTERACTIVE_MODEL
  );
  const cadenasModelItem: ProductMediaGalleryItem | undefined =
    cadenasModelResource
      ? mapResourceToProductMediaGalleryItem(
          cadenasModelResource,
          'cadenas',
          locale,
          false,
          false
        )
      : undefined;

  if (cadenasModelItem) {
    productMediaGalleryItems.push(cadenasModelItem);
  }

  const flowImageResources: Resource[] = filteredResources.filter(
    resource => resource.type === ResourceType.FLOW_IMAGE
  );

  flowImageResources.forEach(flowImage => {
    productMediaGalleryItems.push(
      mapResourceToProductMediaGalleryItem(flowImage, 'image', locale)
    );
  });

  const alternativeImageResources: Resource[] = filteredResources.filter(
    resource => resource.type === ResourceType.IMAGE
  );

  alternativeImageResources.forEach(alternativeImage => {
    productMediaGalleryItems.push(
      mapResourceToProductMediaGalleryItem(
        alternativeImage,
        'image',
        locale,
        false,
        true
      )
    );
  });

  const videoResources: Resource[] = filteredResources.filter(
    resource => resource.type === ResourceType.VIDEO
  );

  videoResources.forEach(video => {
    productMediaGalleryItems.push(
      mapResourceToProductMediaGalleryItem(video, 'video', locale, false)
    );
  });

  const pdfs: Resource[] = filteredResources.filter(
    resource =>
      resource.type === ResourceType.CASE_STUDY ||
      resource.type === ResourceType.PRODUCT_BULLETIN ||
      resource.type === ResourceType.CATALOG_DETAIL ||
      resource.type === ResourceType.CATALOG ||
      resource.type === ResourceType.DATA_SHEET
  );

  pdfs.forEach(pdf => {
    productMediaGalleryItems.push(
      mapResourceToProductMediaGalleryItem(pdf, 'pdf', locale, false)
    );
  });

  return productMediaGalleryItems.sort(sortProductMediaGalleryItems);
}

function mapResourceToProductMediaGalleryItem(
  resource: Resource,
  itemType: ProductMediaGalleryItemType,
  locale: string,
  isDefault: boolean = false,
  hasDisclaimer: boolean = false
): ProductMediaGalleryItem {
  const resourceFormatter = new ResourceFormatter(resource, locale);
  let thumbnailSrc: string = resourceFormatter.formatThumbnailSrc();

  if (itemType === 'cadenas') {
    thumbnailSrc = STATIC_IMAGES.product.display.cadenasThumbnail.src;
  }

  return {
    id: resource.id || Guid.create().toString(),
    src: resourceFormatter.formatSrc(),
    alt: resourceFormatter.formatCaption(),
    type: itemType,
    isDefault,
    hasDisclaimer,
    thumbnailSrc
  };
}

function sortProductMediaGalleryItems(
  a: ProductMediaGalleryItem,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  b: ProductMediaGalleryItem
): number {
  const defaultFirst: number = a.isDefault ? -1 : 0;
  return defaultFirst || 1;
}

export function filterResourcesBySystemOfMeasurement(
  resources: Resource[],
  systemOfMeasurement: SystemOfMeasurement
): Resource[] {
  return resources.filter(resource => {
    const resourceVariation: Variation = FlaggedEnum.create<Variation>(
      Variation,
      resource.variation || ''
    );
    return (
      resourceVariation & getSystemOfMeasurementVariation(systemOfMeasurement)
    );
  });
}

export function getExtraThumbnailIndex(
  itemCount: number,
  maxItemCount: number
): number {
  return itemCount - (itemCount - maxItemCount) - 1;
}
export function getExtraThumbnailCount(
  itemCount: number,
  maxItemCount: number
): number {
  return itemCount - maxItemCount + 1;
}
