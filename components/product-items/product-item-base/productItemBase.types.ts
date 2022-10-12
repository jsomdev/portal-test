import { CSSProperties } from 'react';

import { StaticImageData } from 'next/image';

import { IImageStyles, IStackItemStyles, IStackStyles } from '@fluentui/react';
import { MultilingualString } from '@services/portal-api';

export type ProductItemBaseProps = {
  productId: string;
  slug?: MultilingualString;
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
