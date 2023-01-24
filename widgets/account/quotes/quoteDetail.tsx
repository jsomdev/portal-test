import React, { useMemo, useState } from 'react';

import Image from 'next/image';
import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import {
  DefaultButton,
  FontWeights,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  MessageBarType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
import { mediaQueryFrom, useTabletAndDesktop } from '@widgets/media-queries';

import { OrderLineViewModel } from '../orders/orders.types';
import { QuoteDetailInfoSection } from './quoteDetailInfoSection';
import { useQuote } from './useQuote';

const messages = defineMessages({
  dateHeader: {
    id: messageIds.pages.account.quotes.quoteDateHeader,
    description: 'Quote date header',
    defaultMessage: 'Request date'
  },
  viewAllLines: {
    id: messageIds.pages.account.quotes.viewAllLines,
    description: 'Button text to show all quote lines',
    defaultMessage: 'Show all'
  },
  numberHeader: {
    id: messageIds.pages.account.quotes.numberHeader,
    description: 'quote number header',
    defaultMessage: 'Quote number'
  },
  error: {
    id: messageIds.pages.account.quotes.detailPageError,
    description: 'Error message when quote detail page fails to load',
    defaultMessage: 'Something went wrong'
  }
});

interface QuoteDetailProps {
  id: string;
}

interface QuoteDetailStyles {
  prefixText: ITextStyles;
  detailText: ITextStyles;
  lineContainer: IStackStyles;
  accountProductLineImageContainer: IStackStyles;
  quoteLineButton: IButtonStyles;
  quoteDetailHeader: IStackStyles;
  lineAmount: IStackStyles;
  lineTotal: ITextStyles;
}

export const QuoteDetail: React.FC<QuoteDetailProps> = ({ id }) => {
  const { spacing, palette, semanticColors, effects, fonts } = useTheme();

  const MAX_ITEMS = 3;
  const isTabletOrDesktop = useTabletAndDesktop();
  const [displayAllLines, setDisplayAllLines] = useState(false);
  const intl = useIntl();
  const { formatMessage } = intl;
  const { quote, quoteStatus } = useQuote(id);

  const visibleLines: OrderLineViewModel[] | undefined = useMemo(() => {
    if (
      quote?.lines?.length &&
      quote.lines.length > MAX_ITEMS &&
      !displayAllLines
    ) {
      return quote.lines?.slice(0, MAX_ITEMS);
    }
    return quote?.lines;
  }, [quote, displayAllLines]);

  const shouldDisplayButton: boolean = useMemo(() => {
    if (quote?.lines?.length && quote.lines.length <= MAX_ITEMS) {
      return false;
    }
    if (displayAllLines) {
      return false;
    }
    if (!quote?.lines?.length) {
      return false;
    }
    return true;
  }, [displayAllLines, quote]);

  const styles: QuoteDetailStyles = {
    prefixText: {
      root: {
        color: palette.neutralDark
      }
    },
    detailText: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    lineContainer: {
      root: {
        borderRadius: effects.roundedCorner4,
        border: `1px solid ${semanticColors.variantBorder}`,
        padding: spacing.m
      }
    },
    accountProductLineImageContainer: {
      root: {
        width: 70,
        minWidth: 70,
        height: 90,
        maxHeight: 90,
        position: 'relative',
        ...mediaQueryFrom('tablet', {
          width: 120,
          height: 90,
          position: 'relative'
        })
      }
    },
    quoteLineButton: {
      root: {
        padding: 0,
        height: 'auto'
      },
      menuIcon: {
        marginRight: 0
      },
      rootHovered: {
        '.ms-Icon': {
          color: palette.themePrimary
        }
      }
    },
    quoteDetailHeader: {
      root: {
        minHeight: 32
      }
    },
    lineAmount: {
      root: {
        height: '100%',
        textAlign: 'right'
      }
    },
    lineTotal: {
      root: {
        ...fonts.mediumPlus
      }
    }
  };

  if (quoteStatus === 'loading') {
    return <LoadingSpinner />;
  }

  if (quoteStatus === 'error') {
    return (
      <Stack>
        <PortalMessageBar messageBarType={MessageBarType.error}>
          <Text>{formatMessage(messages.error)}</Text>
        </PortalMessageBar>
      </Stack>
    );
  }

  if (quote === undefined) {
    return (
      <Stack>
        <PortalMessageBar messageBarType={MessageBarType.error}>
          <Text>{formatMessage(messages.error)}</Text>
        </PortalMessageBar>
      </Stack>
    );
  }

  return (
    <Stack
      id="quote-request-detail-container"
      tokens={{ childrenGap: spacing.m }}
    >
      <Stack
        horizontal
        tokens={{ childrenGap: spacing.l1 }}
        verticalAlign="center"
        horizontalAlign="space-between"
        styles={styles.quoteDetailHeader}
        wrap
      >
        <Stack
          horizontal
          tokens={{ childrenGap: spacing.l1 }}
          verticalAlign="center"
          wrap
        >
          {quote.date && (
            <Stack
              tokens={{ childrenGap: spacing.s2 }}
              horizontal
              verticalAlign="center"
            >
              <Stack.Item>
                <Text styles={styles.prefixText}>
                  {formatMessage(messages.dateHeader)}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Text styles={styles.detailText}>{quote.date}</Text>
              </Stack.Item>
            </Stack>
          )}
          {quote.number && (
            <Stack
              tokens={{ childrenGap: spacing.s2 }}
              horizontal
              verticalAlign="center"
            >
              <Stack.Item>
                <Text styles={styles.prefixText}>
                  {formatMessage(messages.numberHeader)}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Text styles={styles.detailText}>{quote.number}</Text>
              </Stack.Item>
            </Stack>
          )}
        </Stack>
      </Stack>
      <Stack tokens={{ childrenGap: spacing.m }}>
        {visibleLines?.map(line => {
          return (
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              tokens={{ childrenGap: spacing.m }}
              key={line.name}
              styles={styles.lineContainer}
            >
              <Stack
                horizontal
                verticalAlign="center"
                tokens={{ childrenGap: spacing.m }}
              >
                <Stack
                  styles={styles.accountProductLineImageContainer}
                  verticalAlign="center"
                >
                  <NextLink href={line.url} passHref>
                    <a>
                      <Image
                        priority
                        src={line.imageUrl}
                        layout="fixed"
                        objectPosition={'center'}
                        alt={line.imageAlt}
                        width={isTabletOrDesktop ? 120 : 70}
                        height={isTabletOrDesktop ? 90 : 70}
                        objectFit="contain"
                        loader={getImageLoader(line.imageUrl)}
                      />
                    </a>
                  </NextLink>
                </Stack>
                <NextLink href={line.url} passHref>
                  <a>
                    <Stack tokens={{ childrenGap: spacing.s1 }}>
                      <Text variant="mediumPlus">{line.number}</Text>
                      <Text>{line.name}</Text>
                      <Text>{line.quantity}</Text>
                    </Stack>
                  </a>
                </NextLink>
              </Stack>
              <Stack
                tokens={{ childrenGap: spacing.s1 }}
                verticalFill
                styles={styles.lineAmount}
              >
                {line.unitAmount !== line.totalAmount && (
                  <Stack>
                    <Text styles={styles.prefixText}>{line.unitAmount}</Text>
                  </Stack>
                )}
                {line.totalAmount && (
                  <Stack>
                    <Text styles={styles.lineTotal}>{line.totalAmount}</Text>
                  </Stack>
                )}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
      {shouldDisplayButton && (
        <Stack
          horizontal
          horizontalAlign="center"
          styles={{ root: { marginTop: '-10px !important' } }}
        >
          <DefaultButton
            onClick={() => {
              setDisplayAllLines(true);
            }}
            iconProps={{ iconName: 'chevronDown' }}
            text={formatMessage(messages.viewAllLines, {
              number: quote.lines.length - MAX_ITEMS
            })}
          />
        </Stack>
      )}
      <QuoteDetailInfoSection quote={quote} />
    </Stack>
  );
};
