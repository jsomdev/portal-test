import { ReactNode } from 'react';

//TODO ward import { LocationDescriptorObject } from 'history';
import { StaticImageData } from 'next/image';

import { ProductSpecificationsItem } from '@components/product-items/productSpecifications.types';
import {
  IStackItemStyles,
  IStackStyles,
  ITextProps,
  ITextStyles
} from '@fluentui/react';
import { Attribute, Product } from '@services/portal-api';

export type ProductItemProps = {
  productId: string;
  product: Product;
  productAttributes: Attribute[];
  horizontal?: boolean;
  enableCompare?: boolean;
  enableBookmark?: boolean;
  label?: string;
  styles?: ProductItemStyles;
  imageUrl?: StaticImageData | string | null;
  imageWidth?: number | string;
  imageHeight?: number;
  shouldImageFadeIn?: boolean;
  title: string;
  description: string;
  path: string; //TODO ward | LocationDescriptorObject;
  onRenderKeySpecifications?: (
    productSpecificationItems: ProductSpecificationsItem[],
    onSpecificationItemClick: (
      productSpecificationItem: ProductSpecificationsItem
    ) => void
  ) => ReactNode;
  onRenderBody?: (
    titleProps: ITextProps,
    descriptionProps: ITextProps
  ) => ReactNode;
  onRenderProductPricing?: () => ReactNode;
};

export type ProductItemStyles = {
  root?: IStackStyles;
  title?: ITextStyles;
  leftLabelWrapper?: IStackItemStyles;
  leftBookmarkWrapper?: IStackItemStyles;
  contentWrapper?: IStackStyles;
  attributeText?: ITextStyles;
  description?: ITextStyles;
};
