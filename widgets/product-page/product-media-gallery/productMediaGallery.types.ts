export type ProductMediaGalleryItemType = 'image' | 'cadenas' | 'video' | 'pdf';

export interface ProductMediaGalleryItem {
  id: string;
  type: ProductMediaGalleryItemType;
  src: string;
  alt: string;
  thumbnailSrc?: string;
  isDefault?: boolean;
  hasDisclaimer: boolean;
}
