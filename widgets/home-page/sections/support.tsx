import { CSSProperties, useMemo } from 'react';

import Image, { StaticImageData } from 'next/image';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  IStackItemStyles,
  ITextStyles,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

const messages = defineMessages({
  supportTitle: {
    id: messageIds.pages.home.sections.support.title,
    description: 'Header text for the support section',
    defaultMessage: 'Need help finding the product you need'
  },
  searchToolTitle: {
    id: messageIds.pages.home.sections.support.searchToolTitle,
    description: 'Title text for the search tool card',
    defaultMessage: 'Try the search tool'
  },
  searchToolDescription: {
    id: messageIds.pages.home.sections.support.searchToolDescription,
    description: 'Description text for the search tool card',
    defaultMessage: 'Find a product based on its part number, name and more'
  },
  searchToolAction: {
    id: messageIds.pages.home.sections.support.searchToolAction,
    description: 'Button text for the search tool card',
    defaultMessage: 'Start searching'
  },
  localRepTitle: {
    id: messageIds.pages.home.sections.support.localRepTitle,
    description: 'Title text for the local rep card',
    defaultMessage: 'Find a local representative'
  },
  localRepDescription: {
    id: messageIds.pages.home.sections.support.localRepDescription,
    description: 'Description text for the local rep card',
    defaultMessage:
      'Your local representative can help you if you cannot find exactly what you are looking for'
  },
  localRepAction: {
    id: messageIds.pages.home.sections.support.localRepAction,
    description: 'Button text for the local rep card',
    defaultMessage: 'Get in contact'
  },
  onlineChatTitle: {
    id: messageIds.pages.home.sections.support.onlineChatTitle,
    description: 'Title text for the online chat card',
    defaultMessage: 'Online support'
  },
  onlineChatDescription: {
    id: messageIds.pages.home.sections.support.onlineChatDescription,
    description: 'Description text for the online chat card',
    defaultMessage:
      'Want to speak with someone before you dive into our big product range?'
  },
  onlineChatAction: {
    id: messageIds.pages.home.sections.support.onlineChatAction,
    description: 'Button text for the online chat card',
    defaultMessage: 'Schedule a meeting'
  }
});

interface SupportStyles {
  title: ITextStyles;
  cardsContainer: IStackItemStyles;
  cardContainer: IStackItemStyles;
}

export const Support: React.FC = () => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

  function focusSearch() {
    const searchBox = document.getElementById('header-search-box');
    searchBox?.focus();
  }
  const supportCards: SupportCardProps[] = useMemo(() => {
    const searchToolCard: SupportCardProps = {
      title: formatMessage(messages.searchToolTitle),
      href: undefined,
      onClick: () => {
        focusSearch();
      },
      description: formatMessage(messages.searchToolDescription),
      action: formatMessage(messages.searchToolAction),
      imageAlt: formatMessage(messages.searchToolAction),
      imageSrc: STATIC_IMAGES.home.support.searchToolHome
    };
    const localRepCard: SupportCardProps = {
      title: formatMessage(messages.localRepTitle),
      href: 'https://www.spray.com/contact/find-a-representative',
      onClick: () => null,
      description: formatMessage(messages.localRepDescription),
      action: formatMessage(messages.localRepAction),
      imageAlt: formatMessage(messages.localRepAction),
      imageSrc: STATIC_IMAGES.home.support.salesRepHome
    };
    const onlineChatCard: SupportCardProps = {
      title: formatMessage(messages.onlineChatTitle),
      href: 'https://outlook.office365.com/owa/calendar/SprayingSystemsCo5@sprayingsystems.onmicrosoft.com/bookings/',
      onClick: () => null,
      description: formatMessage(messages.onlineChatDescription),
      action: formatMessage(messages.onlineChatAction),
      imageAlt: formatMessage(messages.onlineChatAction),
      imageSrc: STATIC_IMAGES.home.support.videoChatHome
    };
    return [searchToolCard, localRepCard, onlineChatCard];
  }, [formatMessage]);

  const styles: SupportStyles = {
    title: {
      root: {
        maxWidth: rem(340),
        display: 'block',
        margin: 'auto',
        marginBottom: spacing.l1,
        textAlign: 'center'
      }
    },
    cardsContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(80),
        padding: `${spacing.m} 0`,
        ...mediaQueryFrom('largePhone', {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }),
        ...mediaQueryFrom('tablet', {
          flexWrap: 'no-wrap'
        })
      }
    },
    cardContainer: {
      root: {
        flex: 1,
        maxWidth: rem(440),
        ...mediaQueryFrom('largePhone', {
          minWidth: '40%'
        }),
        ...mediaQueryFrom('tablet', {
          minWidth: 'auto'
        })
      }
    }
  };
  return (
    <Stack>
      <Text as="h2" variant="xxLargePlus" styles={styles.title}>
        <FormattedMessage {...messages.supportTitle} />
      </Text>
      <Stack.Item styles={styles.cardsContainer}>
        {supportCards.map(cardProps => (
          <Stack.Item key={cardProps.title} styles={styles.cardContainer}>
            <SupportCard {...cardProps} />
          </Stack.Item>
        ))}
      </Stack.Item>
    </Stack>
  );
};

interface SupportCardProps {
  title: string;
  description: string;
  action: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  href?: string;
  onClick?: () => void;
}

interface SupportCardStyles {
  root: IStackItemStyles;
  title: ITextStyles;
  description: ITextStyles;
  image: CSSProperties;
}

const SupportCard: React.FC<SupportCardProps> = ({
  description,
  imageAlt,
  imageSrc,
  title,
  action,
  href,
  onClick
}) => {
  const { palette, fonts, spacing } = useTheme();
  const styles: SupportCardStyles = {
    root: {
      root: {
        width: '100%',
        height: 240,
        borderRadius: 8,
        position: 'relative'
      }
    },
    image: {
      borderRadius: 8
    },
    title: {
      root: {
        display: 'block',
        paddingTop: spacing.m,
        maxWidth: rem(280),
        ...fonts.large,
        textAlign: 'center',
        color: palette.neutralDark,
        ...mediaQueryFrom('tablet', {
          ...fonts.xLarge
        })
      }
    },
    description: {
      root: {
        maxWidth: rem(280),
        textAlign: 'center',
        ...mediaQueryFrom('tablet', {
          ...fonts.medium
        })
      }
    }
  };
  return (
    <Stack horizontalAlign="center" tokens={{ childrenGap: spacing.m }}>
      <Stack.Item styles={styles.root}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          style={styles.image}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          objectPosition="center"
          sizes="(max-width: 439) 100vw, 440px"
        />
      </Stack.Item>
      <Text as="h3" styles={styles.title}>
        {title}
      </Text>
      <Text as="p" styles={styles.description}>
        {description}
      </Text>
      <NextLink href={href} passHref>
        <PrimaryButton onClick={onClick}>{action}</PrimaryButton>
      </NextLink>
    </Stack>
  );
};
