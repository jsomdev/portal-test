/**
 * Enum that identifies the ProductSection on the Product page
 */
export enum ProductSectionKey {
  GeneralInformation = 'GeneralInformation',
  ProductPerformance = 'ProductPerformance',
  ProductAttributes = 'ProductSpecifications',
  ProductAccessories = 'ProductAccessories',
  ProductDownloads = 'ProductDownloads',
  AlternativeModels = 'AlternativeModels'
}

export interface ProductSection {
  sectionKey: ProductSectionKey | string;
  title: string | undefined;
}
