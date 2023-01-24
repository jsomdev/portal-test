import { ImageProps } from 'next/dist/client/image';

export type ModelCardViewModel = {
  id: string | undefined;
  number: string;
  name: string;
  url: string | undefined;
  imageUrl: ImageProps['src'];
};
