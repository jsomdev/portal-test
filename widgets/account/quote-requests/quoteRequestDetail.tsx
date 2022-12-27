import React, { useMemo, useState } from 'react';

import Image from 'next/image';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { NextLink } from '@components/link/nextLink';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import {
  DefaultButton,
  FontWeights,
  IButtonStyles,
  IMessageBarStyles,
  IStackStyles,
  ITextStyles,
  MessageBar,
  MessageBarType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { fetchMyQuoteRequest } from '@services/portal-api/quoteRequests';
import { QUERYKEYS } from '@services/react-query/constants';
import widenImageLoader from '@utilities/image-loaders/widenImageLoader';
import { rem } from '@utilities/rem';
import { mediaQueryFrom, useTabletAndDesktop } from '@widgets/media-queries';

import { OrderLineViewModel } from '../orders/orders.types';
import { QuoteRequestDetailInfoSection } from './quoteRequestDetailInfoSection';
import { mapQuoteRequestToQuoteRequestViewModel } from './quoteRequestHelper';
import { QuoteRequestViewModel } from './quoteRequests.types';

const messages = defineMessages({
  dateHeader: {
    id: messageIds.pages.account.quoteRequests.requestDateHeader,
    description: 'quote request date header',
    defaultMessage: 'Request date'
  },
  viewAllLines: {
    id: messageIds.pages.account.quoteRequests.viewAllLines,
    description: 'Button text to show all quote request lines',
    defaultMessage: 'Show all'
  },
  confirmationTitle: {
    id: messageIds.pages.account.quoteRequests.confirmationTitle,
    description: 'quote request card confirmation title',
    defaultMessage: 'Order confirmation'
  },
  confirmationText: {
    id: messageIds.pages.account.quoteRequests.confirmationText,
    description: 'quote request card confirmation text',
    defaultMessage: 'Your quote request has been placed'
  }
});

interface QuoteRequestDetailProps {
  id: string;
  showConfirmation?: boolean;
}

interface QuoteRequestDetailStyles {
  prefixText: ITextStyles;
  detailText: ITextStyles;
  lineContainer: IStackStyles;
  accountProductLineImageContainer: IStackStyles;
  quoteRequestLineButton: IButtonStyles;
  quoteRequestDetailHeader: IStackStyles;
}

export const QuoteRequestDetail: React.FC<QuoteRequestDetailProps> = ({
  id,
  showConfirmation
}) => {
  const { spacing, palette, semanticColors, effects } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const MAX_ITEMS = 3;
  const isTabletOrDesktop = useTabletAndDesktop();
  const [displayAllLines, setDisplayAllLines] = useState(false);
  const intl = useIntl();
  const { formatMessage } = intl;
  const [quoteRequest, setQuoteRequest] = useState<
    QuoteRequestViewModel | undefined
  >(undefined);

  const { status: quoteRequestStatus } = useQuery(
    [QUERYKEYS.quoteRequestDetail, id, isAuthenticated],
    () => fetchMyQuoteRequest(id, isAuthenticated),
    {
      enabled: !!isAuthenticated,
      retry: 3,
      retryDelay: () => 500,
      onSuccess(data): void {
        return setQuoteRequest(
          data ? mapQuoteRequestToQuoteRequestViewModel(data, intl) : undefined
        );
      }
    }
  );
  const visibleLines: OrderLineViewModel[] | undefined = useMemo(() => {
    if (
      quoteRequest?.lines?.length &&
      quoteRequest.lines.length > MAX_ITEMS &&
      !displayAllLines
    ) {
      return quoteRequest.lines?.slice(0, MAX_ITEMS);
    }
    return quoteRequest?.lines;
  }, [quoteRequest, displayAllLines]);

  const shouldDisplayButton: boolean = useMemo(() => {
    if (quoteRequest?.lines?.length && quoteRequest.lines.length <= MAX_ITEMS) {
      return false;
    }
    if (displayAllLines) {
      return false;
    }
    if (!quoteRequest?.lines?.length) {
      return false;
    }
    return true;
  }, [displayAllLines, quoteRequest]);

  const styles: QuoteRequestDetailStyles = {
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
    quoteRequestLineButton: {
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
    quoteRequestDetailHeader: {
      root: {
        minHeight: 32
      }
    }
  };

  if (quoteRequestStatus === 'loading') {
    return <LoadingSpinner />;
  }

  if (quoteRequestStatus === 'error' || !quoteRequest) {
    return <Stack>Error loading quote request</Stack>;
  }

  return (
    <Stack
      id="quote-request-detail-container"
      tokens={{ childrenGap: spacing.m }}
    >
      {showConfirmation && <QuoteRequestConfirmationCard />}
      <Stack
        horizontal
        tokens={{ childrenGap: spacing.l1 }}
        verticalAlign="center"
        horizontalAlign="space-between"
        styles={styles.quoteRequestDetailHeader}
        wrap
      >
        <Stack
          horizontal
          tokens={{ childrenGap: spacing.l1 }}
          verticalAlign="center"
          wrap
        >
          {quoteRequest.date && (
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
                <Text styles={styles.detailText}>{quoteRequest.date}</Text>
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
                        loader={widenImageLoader}
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
              number: quoteRequest.lines.length - MAX_ITEMS
            })}
          />
        </Stack>
      )}
      <QuoteRequestDetailInfoSection quoteRequest={quoteRequest} />
    </Stack>
  );
};

interface QuoteRequestConfirmationCardStyles {
  title: ITextStyles;
  root: IStackStyles;
  messageBar: Partial<IMessageBarStyles>;
}

const QuoteRequestConfirmationCard: React.FC = () => {
  const { formatMessage } = useIntl();
  const { palette, spacing } = useTheme();

  const styles: QuoteRequestConfirmationCardStyles = {
    messageBar: {
      root: {
        marginBottom: spacing.l1,
        padding: spacing.m
      }
    },
    title: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    root: {
      root: {
        border: `1px solid ${palette.greenDark}`,
        backgroundColor: palette.greenLight
      }
    }
  };
  return (
    <MessageBar
      styles={styles.messageBar}
      messageBarType={MessageBarType.success}
    >
      <Stack tokens={{ childrenGap: spacing.s1 }}>
        <Stack.Item>
          <Text styles={styles.title} variant="mediumPlus">
            {formatMessage(messages.confirmationTitle)}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Text>{formatMessage(messages.confirmationText)}</Text>
        </Stack.Item>
      </Stack>
    </MessageBar>
  );
};
