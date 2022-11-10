import React, { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FormattedDate, defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  IconButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { QuoteRequest } from '@services/portal-api/models/QuoteRequest';
import { QuoteRequestLine } from '@services/portal-api/models/QuoteRequestLine';
import { mediaQueryFrom, useMobile, useTablet } from '@widgets/media-queries';

/**
 * MESSAGES FOR QUOTE REQUEST CARD
 */

const messages = defineMessages({
  dateHeader: {
    id: messageIds.pages.account.quoteRequests.requestDateHeader,
    description: 'Quote request card date header',
    defaultMessage: 'Quote requested on default'
  },
  viewQuoteRequest: {
    id: messageIds.pages.account.quoteRequests.viewQuoteRequest,
    description: 'View quote request link text',
    defaultMessage: 'View quote request default'
  }
});

/**
 * QUOTE REQUEST OVERVIEW CARD
 */

interface QuoteRequestCardStyles {
  contentContainer: IStackStyles;
  actionsContainer: IStackStyles;
  button: IButtonStyles;
  container: IStackStyles;
}

interface QuoteRequestCardProps {
  quoteRequest: QuoteRequest;
  compactView: boolean;
}

export const QuoteRequestOverviewCard: React.FC<QuoteRequestCardProps> = ({
  quoteRequest,
  compactView
}) => {
  const { effects, semanticColors, spacing } = useTheme();
  const { formatMessage } = useIntl();

  const styles: QuoteRequestCardStyles = {
    contentContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        height: '100%'
      }
    },
    actionsContainer: {
      root: {
        borderTop: `1px solid ${semanticColors.variantBorder}`,
        padding: `${spacing.m}`
      }
    },
    button: {
      root: {
        padding: 0,
        height: 'auto'
      },
      menuIcon: {
        marginRight: 0
      }
    },
    container: {
      root: {
        flex: '1 1 100%',
        ...mediaQueryFrom('tablet', {
          flex: !compactView ? '1 1 100%' : `0 1 calc(50% - ${spacing.m})`
        })
      }
    }
  };

  return (
    <Stack styles={styles.container} tokens={{ childrenGap: spacing.m }}>
      {quoteRequest.submittedOn && (
        <Stack
          tokens={{ childrenGap: spacing.s2 }}
          horizontal
          verticalAlign="center"
        >
          <Stack.Item>
            <Text variant="smallPlus">
              {formatMessage(messages.dateHeader)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <FormattedDate
              dateStyle="medium"
              value={new Date(quoteRequest.submittedOn)}
            />
          </Stack.Item>
        </Stack>
      )}
      <Stack
        styles={styles.contentContainer}
        grow
        tokens={{ childrenGap: spacing.m }}
      >
        {quoteRequest.lines?.length && (
          <QuoteRequestCardLines
            compactView={compactView}
            lines={quoteRequest.lines}
          />
        )}
        <Stack
          horizontal
          horizontalAlign="end"
          tokens={{ childrenGap: spacing.l2 }}
          styles={styles.actionsContainer}
        >
          <Link href={`/account/quote-requests/${quoteRequest.id}`} passHref>
            <a>
              <ActionButton
                text={formatMessage(messages.viewQuoteRequest)}
                menuIconProps={{ iconName: 'chevronRight' }}
                styles={styles.button}
              />
            </a>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

/**
 * QUOTE REQUEST OVERVIEW CARD LINES
 */

interface QuoteRequestCardLinesProps {
  lines: QuoteRequestLine[];
  compactView: boolean;
}

interface QuoteRequestCardLinesStyles {
  container: IStackStyles;
  viewMoreButton: IButtonStyles;
  moreButtonText: ITextStyles;
  viewMoreContainer: IStackStyles;
}

const QuoteRequestCardLines: React.FC<QuoteRequestCardLinesProps> = ({
  lines,
  compactView
}) => {
  const { spacing, semanticColors, palette, effects } = useTheme();
  const isMobile = useMobile();
  const isTablet = useTablet();

  const visibleItems: number = React.useMemo(() => {
    if (isMobile || compactView) {
      return 1;
    }
    if (isTablet) {
      return 1;
    }
    return 3;
  }, [isMobile, isTablet, compactView]);

  const viewMoreText: string = useMemo(() => {
    if (lines?.length) {
      return `+${lines.length - visibleItems}`;
    }
    return '';
  }, [lines, visibleItems]);

  const styles: QuoteRequestCardLinesStyles = {
    container: {
      root: {
        borderTop: `1px solid ${semanticColors.variantBorder}`,
        padding: `${spacing.m} ${spacing.m} 0`,
        display: 'flex'
      }
    },
    viewMoreButton: {
      root: {
        height: 65,
        width: 65,
        minWidth: 65,
        minHeight: 65,
        padding: `${spacing.s2}`,
        position: 'relative',
        backgroundImage: `url('${
          lines?.[visibleItems]?.product?.image?.url ||
          STATIC_IMAGES.cart.defaultItem
        }')`,
        backgroundSize: 'auto 57px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'block'
      },
      rootHovered: {
        backgroundColor: 'transparent'
      },
      rootPressed: {
        backgroundColor: 'transparent',
        height: 65,
        width: 65
      }
    },
    moreButtonText: {
      root: {
        fontWeight: FontWeights.bold,
        color: palette.white,
        textShadow: `${palette.themeDarker} 1px 1px 2px`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: effects.elevation4,
        borderRadius: effects.roundedCorner4
      }
    },
    viewMoreContainer: {
      root: {
        margin: 'auto !important',
        paddingLeft: spacing.m
      }
    }
  };

  return (
    <Stack
      className="list-scroll"
      verticalFill
      verticalAlign="center"
      tokens={{ childrenGap: spacing.l2 }}
      horizontal
      styles={styles.container}
    >
      {lines
        ?.slice(0, visibleItems)
        .map((quoteRequestLine: QuoteRequestLine) => {
          return (
            <QuoteRequestCardLine
              key={quoteRequestLine.id}
              quoteRequestLine={quoteRequestLine}
            />
          );
        })}
      {lines?.length && !!(lines.length - visibleItems > 0) && (
        <Stack styles={styles.viewMoreContainer}>
          <IconButton styles={styles.viewMoreButton}>
            <Text variant="xLarge" styles={styles.moreButtonText}>
              {viewMoreText}
            </Text>
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};

interface QuoteRequestCardLineStyles {
  quoteRequestLineContainer: IStackStyles;
  quoteRequestLineImageContainer: IStackStyles;
}

const QuoteRequestCardLine: React.FC<{
  quoteRequestLine: QuoteRequestLine;
}> = ({ quoteRequestLine }) => {
  const { spacing, effects } = useTheme();
  const productFormatter = new ProductFormatter(
    quoteRequestLine?.product || undefined
  );

  const styles: QuoteRequestCardLineStyles = {
    quoteRequestLineContainer: {
      root: {
        width: 250,
        bquoteRequestRadius: effects.roundedCorner4
      }
    },
    quoteRequestLineImageContainer: {
      root: {
        width: 120,
        height: 90,
        position: 'relative'
      }
    }
  };
  return (
    <Stack
      key={quoteRequestLine.id}
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={{ childrenGap: spacing.m }}
      styles={styles.quoteRequestLineContainer}
    >
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{ childrenGap: spacing.m }}
      >
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <Text variant="mediumPlus">{quoteRequestLine.productNumber}</Text>
          <Text>{productFormatter.formatName()}</Text>
          <Text>x{quoteRequestLine.quantity}</Text>
        </Stack>
        <Stack styles={styles.quoteRequestLineImageContainer}>
          <Image
            priority
            src={
              quoteRequestLine?.product?.image?.url ||
              STATIC_IMAGES.app.noImageAvailable
            }
            layout="fill"
            objectFit="contain"
            objectPosition={'center'}
            alt={productFormatter.formatImageCaption()}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
