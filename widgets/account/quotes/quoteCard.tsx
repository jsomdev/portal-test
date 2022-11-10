import React, { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {
  FormattedDate,
  FormattedNumber,
  defineMessages,
  useIntl
} from 'react-intl';

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
import { Quote } from '@services/portal-api/models/Quote';
import { QuoteLine } from '@services/portal-api/models/QuoteLine';
import { mediaQueryFrom, useMobile, useTablet } from '@widgets/media-queries';

/**
 * MESSAGES FOR QUOTE CARD
 */

const messages = defineMessages({
  dateHeader: {
    id: messageIds.pages.account.quotes.quoteDateHeader,
    description: 'order card date header',
    defaultMessage: 'Quoteed on default'
  },
  priceHeader: {
    id: messageIds.pages.account.quotes.totalHeader,
    defaultMessage: 'Price default',
    description: 'order card price header'
  },
  viewQuote: {
    id: messageIds.pages.account.quotes.viewQuote,
    description: 'View order link text',
    defaultMessage: 'View quote default'
  },
  numberHeader: {
    id: messageIds.pages.account.quotes.numberHeader,
    description: 'Quote number header',
    defaultMessage: 'Quote number default'
  }
});

/**
 * QUOTE OVERVIEW CARD
 */

interface QuoteCardStyles {
  contentContainer: IStackStyles;
  actionsContainer: IStackStyles;
  button: IButtonStyles;
  container: IStackStyles;
}

interface QuoteCardProps {
  quote: Quote;
  compactView: boolean;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, compactView }) => {
  const { effects, semanticColors, spacing } = useTheme();
  const { formatMessage } = useIntl();

  const styles: QuoteCardStyles = {
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
      {quote.submittedOn && (
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
              value={new Date(quote.submittedOn)}
            />
          </Stack.Item>
        </Stack>
      )}
      <Stack
        styles={styles.contentContainer}
        grow
        tokens={{ childrenGap: spacing.m }}
      >
        <QuoteCardTopSection quote={quote} />
        {quote.lines?.length && (
          <QuoteCardLines compactView={compactView} lines={quote.lines} />
        )}
        <Stack
          horizontal
          horizontalAlign="end"
          tokens={{ childrenGap: spacing.l2 }}
          styles={styles.actionsContainer}
        >
          <Link href={`/account/quotes/${quote.id}`} passHref>
            <a>
              <ActionButton
                text={formatMessage(messages.viewQuote)}
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
 * QUOTE OVERVIEW CARD LINES
 */

interface QuoteCardLinesProps {
  lines: QuoteLine[];
  compactView: boolean;
}

interface QuoteCardLinesStyles {
  container: IStackStyles;
  viewMoreButton: IButtonStyles;
  moreButtonText: ITextStyles;
  viewMoreContainer: IStackStyles;
}

const QuoteCardLines: React.FC<QuoteCardLinesProps> = ({
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

  const styles: QuoteCardLinesStyles = {
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
      {lines?.slice(0, visibleItems).map((orderLine: QuoteLine) => {
        return <QuoteCardLine key={orderLine.id} orderLine={orderLine} />;
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

interface QuoteCardLineStyles {
  orderLineContainer: IStackStyles;
  orderLineImageContainer: IStackStyles;
}

const QuoteCardLine: React.FC<{ orderLine: QuoteLine }> = ({ orderLine }) => {
  const { spacing, effects } = useTheme();
  const productFormatter = new ProductFormatter(
    orderLine?.product || undefined
  );

  const styles: QuoteCardLineStyles = {
    orderLineContainer: {
      root: {
        width: 250,
        borderRadius: effects.roundedCorner4
      }
    },
    orderLineImageContainer: {
      root: {
        width: 120,
        height: 90,
        position: 'relative'
      }
    }
  };
  return (
    <Stack
      key={orderLine.id}
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={{ childrenGap: spacing.m }}
      styles={styles.orderLineContainer}
    >
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{ childrenGap: spacing.m }}
      >
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <Text variant="mediumPlus">{orderLine.productNumber}</Text>
          <Text>{productFormatter.formatName()}</Text>
          <Text>x{orderLine.quantity}</Text>
        </Stack>
        <Stack styles={styles.orderLineImageContainer}>
          <Image
            priority
            src={
              orderLine?.product?.image?.url ||
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

/**
 * QUOTE OVERVIEW CARD TOP SECTION / HEADER
 */

interface QuoteCardTopSectionStyles {
  alignRight: IStackStyles;
}

const QuoteCardTopSection: React.FC<{ quote: Quote }> = ({ quote }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

  const styles: QuoteCardTopSectionStyles = {
    alignRight: {
      root: {
        textAlign: 'right'
      }
    }
  };

  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      tokens={{
        childrenGap: spacing.l2,
        padding: `${spacing.m} ${spacing.m} 0`
      }}
    >
      <Stack
        id="order-card-top-section"
        horizontal
        tokens={{ childrenGap: spacing.l2 }}
      >
        <Stack tokens={{ childrenGap: spacing.s2 }}>
          <Stack.Item>
            <Text variant="smallPlus">
              {formatMessage(messages.priceHeader)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <FormattedNumber
              currency={quote.currencyCode || 'USD'}
              currencyDisplay="narrowSymbol"
              style={'currency'}
              value={quote.totalAmount || 0}
            />
          </Stack.Item>
        </Stack>
      </Stack>
      {quote.number && (
        <Stack>
          <Stack
            tokens={{ childrenGap: spacing.s2 }}
            styles={styles.alignRight}
          >
            <Stack.Item>
              <Text variant="smallPlus">
                {formatMessage(messages.numberHeader)}
              </Text>
            </Stack.Item>
            <Stack.Item>
              <Text>{quote.number}</Text>
            </Stack.Item>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
