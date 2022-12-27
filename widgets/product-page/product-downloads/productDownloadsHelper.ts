import { Guid } from 'guid-typescript';
import { IntlShape } from 'react-intl';

import { STATIC_IMAGES } from '@public/media/images';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n';
import { ResourceFormatter } from '@services/i18n/formatters/entity-formatters/resourceFormatter';
import { Resource, ResourceType } from '@services/portal-api';

import { filterResourcesBySystemOfMeasurement } from '../product-media-gallery/productMediaGalleryHelper';
import { ProductDownloadsGalleryItem } from './productDownloads.types';

export function mapResourcesToProductDownloadsGalleryItems(
  resources: Resource[],
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  locale: string
): ProductDownloadsGalleryItem[] {
  const filteredResourcesBySystemOfMeasurement =
    filterResourcesBySystemOfMeasurement(resources, systemOfMeasurement);
  return filteredResourcesBySystemOfMeasurement.map(resource =>
    mapResourceToProductDownloadGalleryItem(resource, intl, locale)
  );
}

function mapResourceToProductDownloadGalleryItem(
  resource: Resource,
  intl: IntlShape,
  locale: string
): ProductDownloadsGalleryItem {
  const resourceFormatter: ResourceFormatter = new ResourceFormatter(
    resource,
    locale
  );

  return {
    resource,
    imageSrc:
      resourceFormatter.formatThumbnailSrc() ||
      STATIC_IMAGES.app.noImageAvailable.src,
    src: resourceFormatter.formatSrc(),
    key: resource.id || Guid.create().toString(),
    text: resourceFormatter.formatCaption(),
    title: formatResourceType(resource.type, intl)
  };
}

export const formatResourceType = (
  resourceType: ResourceType | undefined,
  intl: IntlShape
): string => {
  switch (resourceType) {
    case ResourceType.IMAGE:
      return intl.formatMessage({
        id: messageIds.data.resourceType.image,
        defaultMessage: 'Image'
      });
    case ResourceType.FLOW_IMAGE:
      return intl.formatMessage({
        id: messageIds.data.resourceType.flowImage,
        defaultMessage: 'Flow Image'
      });
    case ResourceType.VIDEO:
      return intl.formatMessage({
        id: messageIds.data.resourceType.video,
        defaultMessage: 'Video'
      });
    case ResourceType.CATALOG:
      return intl.formatMessage({
        id: messageIds.data.resourceType.catalog,
        defaultMessage: 'Catalog'
      });
    case ResourceType.CATALOG_DETAIL:
      return intl.formatMessage({
        id: messageIds.data.resourceType.catalogDetail,
        defaultMessage: 'Catalog Detail'
      });
    case ResourceType.PRODUCT_BULLETIN:
      return intl.formatMessage({
        id: messageIds.data.resourceType.productBulletin,
        defaultMessage: 'Product Bulletin'
      });
    case ResourceType.CASE_STUDY:
      return intl.formatMessage({
        id: messageIds.data.resourceType.caseStudy,
        defaultMessage: 'Case Study'
      });
    case ResourceType.INTERACTIVE_MODEL:
      return intl.formatMessage({
        id: messageIds.data.resourceType.interactiveModel,
        defaultMessage: 'Interactive Model'
      });
    default:
      return intl.formatMessage({
        id: messageIds.data.resourceType.default,
        defaultMessage: 'Download'
      });
  }
};
