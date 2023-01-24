import React from 'react';

import {
  Attribute,
  Identifier,
  Option,
  Product,
  ProductAccessory,
  Resource
} from '@services/portal-api';
import { ProductSection } from '@widgets/product-page/product-sections/productSections.types';

export interface ProductPageContextProps {
  product: Product;
  resources: Resource[];
  downloads: Resource[];
  cadenasIdentifier: Identifier | undefined;
  keyAttributes: Attribute[];
  performanceAttributes:
    | {
        sprayAngleAttributes: Attribute[];
        liquidFlowRateAttributes: Attribute[];
        airFlowRateAttributes: Attribute[];
        atomizingAirFlowRateAttributes: Attribute[];
        fanAirFlowRateAttributes: Attribute[];
      }
    | undefined;
  sections: ProductSection[];
  attributes: Attribute[];
  configurations: Option[];
  accessories: ProductAccessory[];
  flow: Attribute | undefined;
  isValidAudience: boolean;
}

const initialContextProps: ProductPageContextProps = {
  product: {} as Product,
  resources: [],
  downloads: [],
  cadenasIdentifier: undefined,
  flow: undefined,
  keyAttributes: [],
  performanceAttributes: undefined,
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
