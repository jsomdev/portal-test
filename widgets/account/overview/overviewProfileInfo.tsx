import React from 'react';

import { useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  FontSizes,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  IconButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';
import { User } from '@services/portal-api';
import pagePaths from '@utilities/pagePaths';
import { rem } from '@utilities/rem';

const messages = defineMessages({
  nameHeader: {
    id: messageIds.pages.account.overview.profileInformation.nameHeader,
    description: 'Header text for profile name',
    defaultMessage: 'This is you'
  },
  jobHeader: {
    id: messageIds.pages.account.overview.profileInformation.jobHeader,
    description: 'Header text for job title',
    defaultMessage: 'Job title'
  },
  phoneHeader: {
    id: messageIds.pages.account.overview.profileInformation.phoneHeader,
    description: 'Header text for phone number',
    defaultMessage: 'Phonenumber'
  },
  emailHeader: {
    id: messageIds.pages.account.overview.profileInformation.emailHeader,
    description: 'Header text for email',
    defaultMessage: 'Email'
  },
  profileInformation: {
    id: messageIds.pages.account.overview.profileInformation.title,
    description: 'Profile sub section title',
    defaultMessage: 'Profile information'
  }
});

interface OverviewProfileInfoStyles {
  contentContainer: IStackStyles;
  outerContainer: IStackStyles;
  headerText: ITextStyles;
  editButton: IButtonStyles;
}

interface OverviewProfileInfoProps {
  me: User | undefined;
  formattedName: string;
}

export const OverviewProfileInfo: React.FC<OverviewProfileInfoProps> = ({
  me,
  formattedName
}) => {
  const { spacing, semanticColors, effects, palette } = useTheme();
  const { formatMessage } = useIntl();

  const styles: OverviewProfileInfoStyles = {
    contentContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        padding: spacing.m,
        borderRadius: effects.roundedCorner4,
        flex: '1 1 0',
        minWidth: rem(300)
      }
    },
    headerText: {
      root: {
        color: palette.neutralDark
      }
    },
    editButton: {
      icon: {
        fontSize: FontSizes.size20
      }
    },
    outerContainer: {
      root: {
        flex: '1 1 0',
        minWidth: rem(300)
      }
    }
  };

  return (
    <Stack styles={styles.outerContainer} tokens={{ childrenGap: spacing.l1 }}>
      <Stack>
        <Text variant="large" as={'h2'}>
          {formatMessage(messages.profileInformation)}
        </Text>
      </Stack>
      <Stack styles={styles.contentContainer}>
        <Stack tokens={{ childrenGap: spacing.m }}>
          <Stack
            tokens={{ childrenGap: spacing.s1 }}
            grow
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
          >
            <Stack tokens={{ childrenGap: spacing.s1 }}>
              <Text styles={styles.headerText}>
                {formatMessage(messages.nameHeader)}
              </Text>
              <Text variant="mediumPlus">{formattedName}</Text>
            </Stack>
            <Stack>
              <NextLink href={pagePaths.profileInformation} passHref>
                <a>
                  <IconButton
                    styles={styles.editButton}
                    iconProps={{ iconName: 'EditContact' }}
                  />
                </a>
              </NextLink>
            </Stack>
          </Stack>
          <Stack tokens={{ childrenGap: spacing.s1 }} grow>
            <Text styles={styles.headerText}>
              {formatMessage(messages.jobHeader)}
            </Text>
            <Text variant="mediumPlus">{me?.contactInfo?.jobTitle}</Text>
          </Stack>
          <Stack tokens={{ childrenGap: spacing.s1 }} grow>
            <Text styles={styles.headerText}>
              {formatMessage(messages.phoneHeader)}
            </Text>
            <Text variant="mediumPlus">{me?.contactInfo?.phoneNumber}</Text>
          </Stack>
          <Stack tokens={{ childrenGap: spacing.s1 }} grow>
            <Text styles={styles.headerText}>
              {formatMessage(messages.emailHeader)}
            </Text>
            {me?.contactInfo?.emailAddresses?.map(email => {
              return (
                <Text variant="mediumPlus" key={email}>
                  {email}
                </Text>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
