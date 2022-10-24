/**
 * Enum that identifies the ProductSection on the Product page
 */
export enum ProductSectionKey {
  GeneralInformation = 'GeneralInformation',
  ProductPerformance = 'ProductPerformance',
  ProductAttributes = 'ProductSpecifications',
  ProductAccessories = 'ProductAccessories',
  ProductDownloads = 'ProductDownloads'
}

export interface ProductSection {
  sectionKey: ProductSectionKey;
  title: string;
}
