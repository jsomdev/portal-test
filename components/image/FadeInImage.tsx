import React, { useState } from 'react';

import { ImageProps } from 'next/dist/client/image';
import Image from 'next/image';

import { mergeCss } from '@fluentui/merge-styles';

/**
 * A wrapper around the Next.js Image component that adds a fade-in animation
 * Only use this for images that are not critical to the page load
 */
const FadeInImage: React.FC<ImageProps> = props => {
  const [showFadeIn, setShowFadeIn] = useState(false);

  const styles = {
    image: {
      ...(showFadeIn ? { animation: 'fadeIn 0.5s' } : {})
    }
  };

  if (props.priority) {
    console.error(
      'FadeInImage should not be used for critical images that have priority. Use the Next.js Image component instead.'
    );
  }

  return (
    <div>
      <Image
        {...props}
        className={mergeCss(styles.image)}
        onLoadingComplete={() => setShowFadeIn(true)}
      />
    </div>
  );
};

export default FadeInImage;
