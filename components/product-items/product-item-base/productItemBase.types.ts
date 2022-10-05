import { CSSProperties } from 'react';

//TODO ward import { LocationDescriptorObject } from 'history';
import { StaticImageData } from 'next/image';

import { IImageStyles, IStackItemStyles, IStackStyles } from '@fluentui/react';

export type ProductItemBaseProps = {
  productId: string;
  path: string;
  imageUrl: StaticImageData | string | null | undefined;
  imageAlt: string;
  height?: number;
  width?: number | string;
  fallbackImageUrl?: StaticImageData | string;
  onRenderTopLeft?: () => JSX.Element;
  onRenderBottomLeft?: () => JSX.Element;
};

export type ProductItemBaseStyles = {
  image: Partial<IImageStyles>;
  root: IStackStyles;
  imageContainer: IStackStyles;
  disclaimerWrapper: IStackItemStyles;
  link: CSSProperties;
};
