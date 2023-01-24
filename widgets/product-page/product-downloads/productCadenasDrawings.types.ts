import { IIconProps } from '@fluentui/react';

export interface ProductCadenasDrawingItem {
  flag: string;
  format: string;
  iconProps: IIconProps;
  text: string;
}
export type ProductCadenasDrawingDownloadStatus =
  | 'initial'
  | 'error'
  | 'loading';
