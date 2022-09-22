import Image from 'next/image';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import {
  FontSizes,
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n/ids';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

interface HeroStyles {
  root: IStackStyles;
  imageContainer: IStackItemStyles;
  contentContainer: IStackItemStyles;
  content: IStackStyles;
  header: ITextStyles;
  callToAction: IButtonStyles;
}

const messages = defineMessages({
  heroImageAlt: {
    id: messageIds.pages.home.sections.hero.imageAlt,
    description: 'Alternative for background image',
    defaultMessage: 'Big spray lance background image'
  },
  heroTitle: {
    id: messageIds.pages.home.sections.hero.title,
    description: 'Header text for the homepage hero',
    defaultMessage: 'Choose quality nozzles'
  },
  heroDescription: {
    id: messageIds.pages.home.sections.hero.description,
    description: 'Header text for the homepage hero',
    defaultMessage: `Paired with excellent customer service, Spraying Systems Co.'s digital catalog helps you find, compare and purchase the products your company needs.`
  },
  heroCallToAction: {
    id: messageIds.pages.home.sections.hero.callToAction,
    description: 'Call to action text for the homepage hero',
    defaultMessage: 'Get Started Now'
  }
});

export const Hero: React.FC = () => {
  const { formatMessage } = useIntl();
  const { spacing } = useTheme();
  const styles: HeroStyles = {
    root: {
      root: {
        height: 328,
        position: 'relative'
      }
    },
    header: {
      root: {
        marginBottom: rem(spacing.s1)
      }
    },
    content: {
      root: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: rem(spacing.l1),
        ...mediaQueryFrom('tablet', {
          maxWidth: 400
        })
      }
    },
    contentContainer: {
      root: {
        margin: rem(spacing.l1),
        ...mediaQueryFrom('tablet', {
          maxWidth: 400,
          marginLeft: rem(140)
        })
      }
    },
    callToAction: {
      root: {
        width: '100%',
        height: 40
      },
      label: {
        fontSize: FontSizes.mediumPlus
      }
    },
    imageContainer: {
      root: {
        zIndex: -1
      }
    }
  };
  return (
    <Stack verticalAlign="center" styles={styles.root}>
      <Stack.Item styles={styles.imageContainer}>
        <Image
          priority
          src={STATIC_IMAGES.home.hero}
          layout="fill"
          objectFit="cover"
          objectPosition={'center'}
          placeholder="blur"
          alt={formatMessage(messages.heroImageAlt)}
        />
      </Stack.Item>
      <Stack.Item styles={styles.contentContainer}>
        <Stack styles={styles.content}>
          <Text as="h1" variant="xxLargePlus" styles={styles.header}>
            <FormattedMessage {...messages.heroTitle} />
          </Text>
          <Text as="p" variant="large">
            <FormattedMessage {...messages.heroDescription} />
          </Text>

          <Stack.Item tokens={{ padding: `${rem(spacing.m)} 0 0` }}>
            <PrimaryButton
              text={formatMessage(messages.heroCallToAction)}
              styles={styles.callToAction}
            />
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
