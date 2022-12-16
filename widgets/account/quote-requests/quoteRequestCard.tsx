import React from 'react';

import { FormattedDate, defineMessages, useIntl } from 'react-intl';

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
import { QuoteRequest } from '@services/portal-api/models/QuoteRequest';
import pagePaths from '@utilities/pagePaths';
import { mediaQueryFrom } from '@widgets/media-queries';

import { AccountCardProductLines } from '../shared/accountCardProductLines';

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
  datePrefix: ITextStyles;
  date: ITextStyles;
}

interface QuoteRequestCardProps {
  quoteRequest: QuoteRequest;
  compactView: boolean;
}

export const QuoteRequestOverviewCard: React.FC<QuoteRequestCardProps> = ({
  quoteRequest,
  compactView
}) => {
  const { effects, semanticColors, spacing, palette } = useTheme();
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
      {quoteRequest.submittedOn && (
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
                value={new Date(quoteRequest.submittedOn)}
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
        {quoteRequest.id && quoteRequest.lines?.length && (
          <AccountCardProductLines
            compactView={compactView}
            lines={quoteRequest.lines}
            href={pagePaths.quoteRequests(quoteRequest.id).toString()}
          />
        )}
        <Stack
          horizontal
          tokens={{ childrenGap: spacing.l2 }}
          styles={styles.actionsContainer}
        >
          <NextLink href={pagePaths.quoteRequests(quoteRequest.id)} passHref>
            <a>
              <ActionButton
                text={formatMessage(messages.viewQuoteRequest)}
                menuIconProps={{ iconName: 'chevronRight' }}
                styles={styles.button}
              />
            </a>
          </NextLink>
        </Stack>
      </Stack>
    </Stack>
  );
};
