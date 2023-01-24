import React from 'react';

import {
  FormattedDate,
  FormattedNumber,
  defineMessages,
  useIntl
} from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { Quote } from '@services/portal-api/models/Quote';
import pagePaths from '@utilities/pagePaths';
import { mediaQueryFrom } from '@widgets/media-queries';

import { AccountCardProductLines } from '../shared/accountCardProductLines';

/**
 * MESSAGES FOR QUOTE CARD
 */

const messages = defineMessages({
  dateHeader: {
    id: messageIds.pages.account.quotes.quoteDateHeader,
    description: 'order card date header',
    defaultMessage: 'Quoted on'
  },
  priceHeader: {
    id: messageIds.pages.account.quotes.totalHeader,
    defaultMessage: 'Price',
    description: 'Quote card price header'
  },
  viewQuote: {
    id: messageIds.pages.account.quotes.viewQuote,
    description: 'View quote link text',
    defaultMessage: 'View quote'
  },
  numberHeader: {
    id: messageIds.pages.account.quotes.numberHeader,
    description: 'Quote number header',
    defaultMessage: 'Quote number'
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
  datePrefix: ITextStyles;
  date: ITextStyles;
}

interface QuoteCardProps {
  quote: Quote;
  compactView: boolean;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, compactView }) => {
  const { effects, semanticColors, spacing, palette } = useTheme();
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
      },
      rootHovered: {
        '.ms-Icon': {
          color: palette.themePrimary
        }
      }
    },
    container: {
      root: {
        flex: '1 1 100%',
        ...mediaQueryFrom('tablet', {
          flex: !compactView ? '1 1 100%' : `0 1 calc(50% - ${spacing.m})`
        })
      }
    },
    datePrefix: {
      root: {
        color: palette.neutralDark
      }
    },
    date: {
      root: {
        fontWeight: FontWeights.semibold
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
            <Text styles={styles.datePrefix}>
              {formatMessage(messages.dateHeader)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <Text styles={styles.date}>
              <FormattedDate
                dateStyle="medium"
                value={new Date(quote.submittedOn)}
              />
            </Text>
          </Stack.Item>
        </Stack>
      )}
      <Stack
        styles={styles.contentContainer}
        grow
        tokens={{ childrenGap: spacing.m }}
      >
        <QuoteCardTopSection quote={quote} />
        {quote.id && quote.lines?.length && (
          <>
            <AccountCardProductLines
              compactView={compactView}
              lines={quote.lines}
              href={pagePaths.quoteDetail(quote.id)}
            />
            <Stack
              horizontal
              tokens={{ childrenGap: spacing.l2 }}
              styles={styles.actionsContainer}
            >
              <NextLink href={pagePaths.quoteDetail(quote.id)} passHref>
                <a>
                  <ActionButton
                    text={formatMessage(messages.viewQuote)}
                    menuIconProps={{ iconName: 'chevronRight' }}
                    styles={styles.button}
                  />
                </a>
              </NextLink>
            </Stack>
          </>
        )}
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
