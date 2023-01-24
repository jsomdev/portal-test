import { Resource } from '@services/portal-api';

export interface ProductDownloadsGalleryItem {
  title: string;
  text: string;
  imageSrc: string;
  key: string;
  resource: Resource;
  src: string;
}
