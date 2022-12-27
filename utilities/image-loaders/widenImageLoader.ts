import { ImageLoader } from 'next/dist/client/image';

const widenImageLoader: ImageLoader = ({ src, width, quality }) => {
  let urlObject: URL | undefined;
  try {
    urlObject = new URL(src);
  } catch {
    console.log('invalid url', src);
  }

  if (!urlObject) {
    return src;
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

export default widenImageLoader;
