import Image from 'next/image';
import Link from 'next/link';

import {
  ActionButton,
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
import { breakpoints } from '@widgets/media-queries/media';

type CategoryCardSize = 'small' | 'large';

interface CategoryCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  size?: CategoryCardSize;
}

interface CategoryCardStyles {
  container: IStackStyles;
  linkContainer: IStackStyles;
  button: Partial<IButtonStyles>;
  imageContainer: IStackItemStyles;
}

function getHeight(size: CategoryCardSize): number {
  switch (size) {
    case 'small':
      return 180;

    default:
      return 224;
  }
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  href,
  imageAlt,
  imageSrc,
  size = 'large',
  name
}) => {
  const { palette, fonts } = useTheme();
  const styles: CategoryCardStyles = {
    container: {
      root: {
        background: palette.white,
        borderRadius: 7,
        img: {
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7
        }
      }
    },
    linkContainer: {
      root: {
        height: 65,
        width: '100%',
        borderTop: `1px solid ${palette.neutralLight}`
      }
    },
    imageContainer: {
      root: {
        position: 'relative',
        width: '100%',
        height: getHeight(size)
      }
    },
    button: {
      root: {
        fontSize: fonts.mediumPlus.fontSize,
        color: palette.accent
      },
      labelHovered: {
        color: palette.themeDark
      }
    }
  };
  return (
    <Link passHref href={href}>
      <a>
        <Stack styles={styles.container}>
          <Stack.Item styles={styles.imageContainer}>
            <Image
              layout="fill"
              alt={imageAlt}
              src={imageSrc}
              objectFit={
                imageSrc.indexOf('?crop=true') > -1 ? 'cover' : 'contain'
                /* Legacy behavior:
              - images with a non-white background can be cropped, you can identify these by the url that has a querystring "?crop=true"
              - image with a white background can not be cropped and should be fully visible, as parts of the product will be cut off when cropped  */
              }
              objectPosition="center"
              loader={getImageLoader(imageSrc)}
              sizes={`(max-width:${breakpoints.largePhone}px) 100vw, (max-width:${breakpoints.tablet}px) 50vw, 270px`}
            />
          </Stack.Item>
          <Stack
            styles={styles.linkContainer}
            horizontalAlign="center"
            verticalAlign="center"
          >
            <Link passHref href={href}>
              <ActionButton styles={styles.button}>{name}</ActionButton>
            </Link>
          </Stack>
        </Stack>
      </a>
    </Link>
  );
};
