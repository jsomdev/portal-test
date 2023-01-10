import React, { useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { AccountInfo } from '@azure/msal-browser';
import {
  FontSizes,
  IButtonStyles,
  IIconStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  IconButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { getMsalInstance } from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { UserFormatter } from '@services/i18n/formatters/entity-formatters/userFormatter';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

import { AccountOverviewTags } from '../shared/accountOverviewTags';
import { ProfileInformationForm } from './profileInformationForm';

const messages = defineMessages({
  title: {
    id: messageIds.pages.account.overview.profileInformation.title,
    description: 'Title text for profile information',
    defaultMessage: 'Profile Information'
  },
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
  }
});

interface IProfileInformationStyles {
  cardContainer: IStackStyles;
  iconContainer: IStackStyles;
  iconStyles: IIconStyles;
  sectionTitle: ITextStyles;
  headerText: ITextStyles;
  infoContainter: IStackStyles;
  editButton: IButtonStyles;
}

export const ProfileInformation: React.FC = () => {
  const { formatMessage } = useIntl();
  const { semanticColors, effects, spacing, palette, fonts } = useTheme();
  const { me } = useMe();
  const claims = useClaims();
  const account: AccountInfo | undefined =
    getMsalInstance()?.getAllAccounts()[0];
  const [showEditInformation, setShowEditInformation] = useState(false);

  const name = useMemo(() => {
    const userFormatter = new UserFormatter(me, account);
    if (me && me.contactInfo?.firstName && me.contactInfo?.lastName) {
      return `${me.contactInfo?.firstName} ${me.contactInfo?.lastName}`;
    }
    const name = userFormatter.formatDisplayName(
      `${claims.firstName} ${claims.lastName}`
    );
    return name;
  }, [account, claims, me]);

  const styles: IProfileInformationStyles = {
    cardContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        width: '100%',
        padding: spacing.l1,
        ...mediaQueryFrom('tablet', {
          padding: `${spacing.l1} ${spacing.l2}`
        })
      }
    },
    iconContainer: {
      root: {
        paddingRight: spacing.l1,
        ...mediaQueryFrom('tablet', {
          paddingRight: spacing.l2
        })
      }
    },
    iconStyles: {
      root: {
        fontSize: fonts.xxLarge.fontSize,
        ...mediaQueryFrom('tablet', {
          fontSize: rem(32)
        })
      }
    },
    sectionTitle: {
      root: {
        ...fonts.large
      }
    },
    headerText: {
      root: {
        color: palette.neutralDark
      }
    },
    infoContainter: {
      root: {
        minWidth: `calc(50% - ${spacing.l2})`
      }
    },
    editButton: {
      root: {
        icon: {
          fontSize: FontSizes.size20
        }
      }
    }
  };

  if (!me?.contactInfo) {
    return null;
  }

  return (
    <Stack styles={styles.cardContainer} horizontal>
      <Stack styles={styles.iconContainer} verticalAlign="center">
        <Icon styles={styles.iconStyles} iconName="Contact" />
      </Stack>
      <Stack grow tokens={{ childrenGap: spacing.l2 }}>
        <Stack
          horizontal
          tokens={{ childrenGap: spacing.m }}
          verticalAlign="center"
          horizontalAlign="space-between"
        >
          <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
            <Text styles={styles.sectionTitle} as="h3">
              {formatMessage(messages.title)}
            </Text>
            <AccountOverviewTags />
          </Stack>
          <Stack>
            <IconButton
              styles={styles.editButton}
              iconProps={{ iconName: 'Edit' }}
              onClick={() => {
                setShowEditInformation(true);
              }}
            />
          </Stack>
        </Stack>
        <Stack tokens={{ childrenGap: spacing.l2 }} wrap horizontal>
          <Stack
            styles={styles.infoContainter}
            tokens={{ childrenGap: spacing.s1 }}
            grow
          >
            <Stack tokens={{ childrenGap: spacing.s1 }}>
              <Text styles={styles.headerText}>
                {formatMessage(messages.nameHeader)}
              </Text>
              <Text variant="mediumPlus">{name}</Text>
            </Stack>
          </Stack>
          <Stack
            styles={styles.infoContainter}
            tokens={{ childrenGap: spacing.s1 }}
            grow
          >
            <Text styles={styles.headerText}>
              {formatMessage(messages.jobHeader)}
            </Text>
            <Text variant="mediumPlus">{me.contactInfo.jobTitle}</Text>
          </Stack>
          <Stack
            styles={styles.infoContainter}
            tokens={{ childrenGap: spacing.s1 }}
            grow
          >
            <Text styles={styles.headerText}>
              {formatMessage(messages.phoneHeader)}
            </Text>
            <Text variant="mediumPlus">{me.contactInfo.phoneNumber}</Text>
          </Stack>
          <Stack
            styles={styles.infoContainter}
            tokens={{ childrenGap: spacing.s1 }}
            grow
          >
            <Text styles={styles.headerText}>
              {formatMessage(messages.emailHeader)}
            </Text>
            {me.contactInfo.emailAddresses?.map(email => {
              return (
                <Text variant="mediumPlus" key={email}>
                  {email}
                </Text>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
      <ProfileInformationForm
        showEditInformation={showEditInformation}
        setShowEditInformation={setShowEditInformation}
      />
    </Stack>
  );
};
