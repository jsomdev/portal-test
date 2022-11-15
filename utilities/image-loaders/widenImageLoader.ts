import { ImageLoader } from 'next/dist/client/image';

const widenImageLoader: ImageLoader = ({ src, width, quality }) => {
  if (width > 2000) {
    width = 2000;
  }
  return `${src}?w=${width}&q=${quality || 75}&crop=false&color=ffffff`;
};

export default widenImageLoader;
