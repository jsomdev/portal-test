import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  FontWeights,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { ContactInfoFormatter } from '@services/i18n/formatters/entity-formatters/contactInfoFormatter';

import { AccountAddress } from '../shared/accountAddress';
import { QuoteRequestViewModel } from './quoteRequests.types';

const messages = defineMessages({
  detailsHeader: {
    id: messageIds.pages.account.quoteRequests.detailsHeader,
    description: 'Quote request details header',
    defaultMessage: 'Contact and billing details'
  },
  commentsHeader: {
    id: messageIds.pages.account.quoteRequests.commentsHeader,
    description: 'quote requests card comments header',
    defaultMessage: 'Comments'
  },
  deliveryAddress: {
    id: messageIds.pages.account.quoteRequests.addressHeader,
    description: 'Header for billing address',
    defaultMessage: 'Shipping address'
  }
});

interface QuoteRequestDetailInfoSectionStyles {
  subSectionContainer: IStackStyles;
  subSectionTitle: ITextStyles;
  sectionTitle: ITextStyles;
  overviewContainer: IStackStyles;
  lightText: ITextStyles;
  boldText: ITextStyles;
}

interface QuoteRequestDetailInfoSectionProps {
  quoteRequest: QuoteRequestViewModel;
}

export const QuoteRequestDetailInfoSection: React.FC<
  QuoteRequestDetailInfoSectionProps
> = ({ quoteRequest }) => {
  const { spacing, semanticColors, palette, effects, fonts } = useTheme();
  const { formatMessage } = useIntl();

  const name: string | undefined = useMemo(() => {
    if (quoteRequest.billingContactInfo) {
      const contactInfoFormatter = new ContactInfoFormatter(
        quoteRequest.billingContactInfo
      );
      return contactInfoFormatter.formatDisplayName();
    }
    return undefined;
  }, [quoteRequest.billingContactInfo]);

  const styles: QuoteRequestDetailInfoSectionStyles = {
    sectionTitle: {
      root: {
        ...fonts.large
      }
    },
    subSectionContainer: {
      root: {
        flex: `1 1 calc(33% - ${32}px)`,
        minWidth: 310,
        border: `1px solid ${semanticColors.variantBorder}`,
        padding: spacing.m,
        borderRadius: effects.roundedCorner4
      }
    },
    subSectionTitle: {
      root: {
        fontWeight: FontWeights.semibold,
        ...fonts.mediumPlus
      }
    },
    overviewContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        padding: spacing.m,
        borderRadius: effects.roundedCorner4
      }
    },
    lightText: {
      root: {
        color: palette.neutralSecondary
      }
    },
    boldText: {
      root: {
        fontWeight: FontWeights.semibold
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l2 }}>
      <Stack tokens={{ padding: `${spacing.l1} 0 0` }}>
        <Text styles={styles.sectionTitle} as="h2">
          {formatMessage(messages.detailsHeader)}
        </Text>
      </Stack>
      <Stack horizontal wrap tokens={{ childrenGap: spacing.l2 }}>
        {/* Shipping Address */}
        <Stack
          styles={styles.subSectionContainer}
          tokens={{ childrenGap: spacing.m }}
        >
          <Stack>
            <Text styles={styles.subSectionTitle}>
              {formatMessage(messages.deliveryAddress)}
            </Text>
          </Stack>
          <Stack tokens={{ childrenGap: spacing.m }}>
            {name && <Text>{name}</Text>}
            {quoteRequest.billingAddress && (
              <AccountAddress
                address={quoteRequest.billingAddress}
                contentSpacing={spacing.s2}
              />
            )}
            {quoteRequest.billingContactInfo?.phoneNumber && (
              <Text>{quoteRequest.billingContactInfo?.phoneNumber}</Text>
            )}
            {quoteRequest.emailAddress && (
              <Text>{quoteRequest.emailAddress}</Text>
            )}
          </Stack>
        </Stack>
        {/* Comments */}
        {quoteRequest.comment && (
          <Stack
            styles={styles.subSectionContainer}
            tokens={{ childrenGap: spacing.m }}
          >
            <Stack>
              <Text styles={styles.subSectionTitle}>
                {formatMessage(messages.commentsHeader)}
              </Text>
            </Stack>
            <Stack>
              <Text>{quoteRequest.comment}</Text>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
