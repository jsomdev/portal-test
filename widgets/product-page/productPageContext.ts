import React from 'react';

import {
  Attribute,
  Identifier,
  Option,
  Product,
  ProductAccessory,
  Resource
} from '@services/portal-api';

import { ProductSection } from './product-sections/productSections.types';

export interface ProductPageContextProps {
  product: Product;
  resources: Resource[];
  downloads: Resource[];
  cadenasIdentifier: Identifier | undefined;
  keyAttributes: Attribute[];
  sections: ProductSection[];
  attributes: Attribute[];
  configurations: Option[];
  accessories: ProductAccessory[];
  isValidAudience: boolean;
}

const initialContextProps: ProductPageContextProps = {
  product: {} as Product,
  resources: [],
  downloads: [],
  cadenasIdentifier: undefined,
  keyAttributes: [],
  sections: [],
  attributes: [],
  configurations: [],
  accessories: [],
  isValidAudience: false
};

export const ProductPageContext =
  React.createContext<ProductPageContextProps>(initialContextProps);

export const useProductPage = (): ProductPageContextProps =>
  React.useContext(ProductPageContext);
