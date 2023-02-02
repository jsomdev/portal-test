import { ImageLoader, ImageProps } from 'next/dist/client/image';

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

  //prevent up-scaling by widen for small images, that we know in this case have a width no larger than is in the filename
  //TODO find out if there is an option to prevent widen from up-scaling any of the images
  const widthFromFilenameMatch = src.match(
    /(?<width>[0-9]{2,})x[0-9]{2,}.*\.jp(e)?g/i
  );
  const fileWidth = widthFromFilenameMatch?.groups?.width
    ? parseInt(widthFromFilenameMatch.groups.width, 10)
    : null;
  if (fileWidth && width > fileWidth) {
    width = fileWidth;
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
