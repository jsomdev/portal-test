import Image from 'next/image';
import Link from 'next/link';

import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';

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
}

function getWidth(size: CategoryCardSize): number {
  switch (size) {
    case 'small':
      return 216;

    default:
      return 268;
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
        width: getWidth(size),
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
          <Image
            layout="fixed"
            width={getWidth(size)}
            height={getWidth(size) * 0.7}
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
          />
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
