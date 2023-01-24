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
import { QuoteViewModel } from './quote.types';

const messages = defineMessages({
  detailsHeader: {
    id: messageIds.pages.account.quotes.detailsHeader,
    description: 'Quote request details header',
    defaultMessage: 'Adress and contact information'
  },
  customerInfoHeader: {
    id: messageIds.pages.account.quotes.customerInfoHeader,
    description: 'Quote contact info header',
    defaultMessage: 'Customer details'
  }
});

interface QuoteDetailInfoSectionStyles {
  subSectionContainer: IStackStyles;
  subSectionTitle: ITextStyles;
  sectionTitle: ITextStyles;
  overviewContainer: IStackStyles;
  lightText: ITextStyles;
  boldText: ITextStyles;
}

interface QuoteDetailInfoSectionProps {
  quote: QuoteViewModel;
}

export const QuoteDetailInfoSection: React.FC<QuoteDetailInfoSectionProps> = ({
  quote
}) => {
  const { spacing, semanticColors, palette, effects, fonts } = useTheme();
  const { formatMessage } = useIntl();

  const name: string | undefined = useMemo(() => {
    if (quote.billingContactInfo) {
      const contactInfoFormatter = new ContactInfoFormatter(
        quote.billingContactInfo
      );
      return contactInfoFormatter.formatDisplayName();
    }
    return undefined;
  }, [quote.billingContactInfo]);

  const styles: QuoteDetailInfoSectionStyles = {
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
              {formatMessage(messages.customerInfoHeader)}
            </Text>
          </Stack>
          <Stack tokens={{ childrenGap: spacing.m }}>
            {name && <Text>{name}</Text>}
            {quote.billingAddress && (
              <AccountAddress
                address={quote.billingAddress}
                contentSpacing={spacing.s2}
              />
            )}
            {quote.billingContactInfo?.phoneNumber && (
              <Text>{quote.billingContactInfo?.phoneNumber}</Text>
            )}
            {quote.emailAddress && <Text>{quote.emailAddress}</Text>}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
