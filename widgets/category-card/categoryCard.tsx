import Image from 'next/image';
import Link from 'next/link';

import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import widenImageLoader from '@utilities/image-loaders/widenImageLoader';

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

export const CategoryCard: React.FC<CategoryCardProps> = ({
  href,
  imageAlt,
  imageSrc,
  size = 'large',
  name
}) => {
  function getWidth(size: CategoryCardSize): number {
    switch (size) {
      case 'small':
        return 216;

      default:
        return 268;
    }
  }
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
            objectFit="cover"
            objectPosition="center"
            loader={widenImageLoader}
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
