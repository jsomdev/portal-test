import { ImageLoader, ImageProps } from 'next/dist/client/image';
import { StaticImageData } from 'next/image';

import { WidenImageHelper } from '@services/widen/widenImageHelper';

const widenImageLoader: ImageLoader = ({ src, width, quality }) => {
  let urlObject: URL | undefined;
  try {
    urlObject = new URL(src);
  } catch {
    throw new Error(
      `Invalid image URL in widenImageLoader: "${src}". In case you want to use a local fallback image, don't use the widenImageLoader for that image, as it's not coming from widen.`
    );
  }

  const searchParams: URLSearchParams = new URLSearchParams(
    urlObject.searchParams
  );

  if (width > 2000) {
    width = 2000;
  }

  if (width > 0) {
    searchParams.set('w', width.toString());
  }

  searchParams.set('q', (quality || 75).toString());
  searchParams.set('color', 'ffffff');
  searchParams.set('crop', 'false');

  const optimizedUrl = urlObject.origin
    .concat(urlObject.pathname)
    .concat(searchParams.toString() ? `?${searchParams.toString()}` : '');

  return optimizedUrl;
};

export function getImageLoader(
  url: ImageProps['src']
): ImageLoader | undefined {
  if (typeof url !== 'string') {
    return undefined;
  }
  if (WidenImageHelper.validateUrl(url)) {
    return widenImageLoader;
  }
  return undefined;
}
