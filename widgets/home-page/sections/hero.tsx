import React from 'react';

import Image from 'next/image';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  DefaultButton,
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
import { useMe } from '@providers/user/userContext';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n/ids';
import pagePaths from '@utilities/pagePaths';
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
    defaultMessage: 'Find the Right Spray Nozzles'
  },
  heroDescription: {
    id: messageIds.pages.home.sections.hero.description,
    description: 'Header text for the homepage hero',
    defaultMessage: `Spraying Systems Co.'s digital catalog helps you find, compare and purchase the spray nozzles you need. Shop our full product range, including hydraulic spray nozzles, air atomizing nozzles, tank cleaning equipment and spray guns.`
  },
  heroCallToAction: {
    id: messageIds.pages.home.sections.hero.callToAction,
    description: 'Call to action text for the homepage hero',
    defaultMessage: 'Get Started Now'
  },
  reorder: {
    id: messageIds.pages.home.sections.hero.reorder,
    description: 'Call to action text for the reorder functionality',
    defaultMessage: 'Reorder'
  }
});

export const Hero: React.FC = () => {
  const { formatMessage } = useIntl();
  const { isOrderHistoryEnabled } = useMe();
  const { spacing, fonts, palette } = useTheme();
  const styles: HeroStyles = {
    root: {
      root: {
        ...mediaQueryFrom('largePhone', {
          minHeight: 400
        }),
        position: 'relative'
      }
    },
    header: {
      root: {
        marginBottom: spacing.s1,
        fontSize: rem(32),
        ...mediaQueryFrom('largePhone', {
          fontSize: rem(40)
        }),
        ...mediaQueryFrom('tablet', {
          fontSize: rem(56)
        }),
        lineHeight: '100%',
        fontWeight: FontWeights.bold,
        color: palette.white,
        overflowWrap: 'break-word'
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
          maxWidth: rem(560)
        })
      }
    },
    contentContainer: {
      root: {
        margin: `${spacing.l1} 0`,
        background: 'rgba(0,0,0,0.4)',
        padding: spacing.m,
        ...mediaQueryFrom('tablet', {
          maxWidth: rem(560),
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
              <FormattedMessage
                {...messages.heroTitle}
                values={{ linebreak: <br /> }}
              />
            </Text>
            <Text as="p" variant="large" styles={styles.description}>
              <FormattedMessage {...messages.heroDescription} />
            </Text>
            <Stack.Item tokens={{ padding: `${spacing.m} 0 0` }}>
              <Stack horizontal tokens={{ childrenGap: spacing.l1 }}>
                <NextLink href={pagePaths.search()}>
                  <PrimaryButton
                    text={formatMessage(messages.heroCallToAction)}
                    styles={styles.callToAction}
                  />
                </NextLink>
                {isOrderHistoryEnabled && (
                  <NextLink href={pagePaths.orders}>
                    <DefaultButton
                      text={formatMessage(messages.reorder)}
                      styles={styles.callToAction}
                    />
                  </NextLink>
                )}
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </ContentContainerStack>
    </Stack>
  );
};
