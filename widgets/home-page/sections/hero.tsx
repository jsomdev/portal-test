import React from 'react';

import Image from 'next/image';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import {
  FontWeights,
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
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import { mediaQueryFrom } from '@widgets/media-queries';

interface HeroStyles {
  root: IStackStyles;
  imageContainer: IStackItemStyles;
  contentContainer: IStackItemStyles;
  content: IStackStyles;
  header: ITextStyles;
  description: ITextStyles;
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
  const { spacing, fonts, palette } = useTheme();
  const styles: HeroStyles = {
    root: {
      root: {
        height: 480,
        position: 'relative'
      }
    },
    header: {
      root: {
        marginBottom: spacing.s1,
        fontSize: rem(56),
        fontWeight: FontWeights.bold,
        color: palette.white
      }
    },
    description: {
      root: {
        color: palette.neutralLighter
      }
    },
    content: {
      root: {
        ...mediaQueryFrom('tablet', {
          maxWidth: rem(480)
        })
      }
    },
    contentContainer: {
      root: {
        margin: `${spacing.l1} 0`,
        background: 'rgba(0,0,0,0.4)',
        padding: spacing.m,
        ...mediaQueryFrom('tablet', {
          maxWidth: rem(480),
          padding: 0,
          background: 'transparent'
        })
      }
    },
    callToAction: {
      root: {
        height: 48
      },
      label: {
        fontSize: fonts.large.fontSize
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
      <ContentContainerStack>
        <Stack.Item styles={styles.contentContainer}>
          <Stack styles={styles.content}>
            <Text as="h1" variant="xxLargePlus" styles={styles.header}>
              <FormattedMessage {...messages.heroTitle} />
            </Text>
            <Text as="p" variant="large" styles={styles.description}>
              <FormattedMessage {...messages.heroDescription} />
            </Text>
            <Stack.Item tokens={{ padding: `${spacing.m} 0 0` }}>
              <PrimaryButton
                text={formatMessage(messages.heroCallToAction)}
                styles={styles.callToAction}
              />
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </ContentContainerStack>
    </Stack>
  );
};
