import React, { useMemo } from 'react';

import { IntlShape, defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  FontSizes,
  IButtonStyles,
  IIconStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { mediaQueryFrom } from '@widgets/media-queries';

const messages = defineMessages({
  profileInformationTitle: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.title,
    description: 'Title for profile information subsection',
    defaultMessage: 'Profile information default'
  },
  profileInformationDescription: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.description,
    description: 'Description for profile information subsection',
    defaultMessage: 'Profile information description default'
  },
  companyInformationTitle: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .companyInformation.title,
    description: 'Title for company information subsection',
    defaultMessage: 'Company information default'
  },
  companyInformationDescription: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .companyInformation.description,
    description: 'Description for company information subsection',
    defaultMessage: 'Company information description default'
  },
  addressBookTitle: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.title,
    description: 'Title for address book subsection',
    defaultMessage: 'Address book default'
  },
  addressBookDescription: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.description,
    description: 'Description for address book subsection',
    defaultMessage: 'Address book description default'
  },
  preferencesTitle: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .preferences.title,
    description: 'Title for preferences subsection',
    defaultMessage: 'Preferences default'
  },
  preferencesDescription: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .preferences.description,
    description: 'Description for preferences subsection',
    defaultMessage: 'Preferences description default'
  },
  viewPersonalInfoLink: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.viewInfoLink,
    description: 'Link to view personal information',
    defaultMessage: 'View personal info default'
  },
  changePassword: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.changePasswordLink,
    description: 'Link to change password',
    defaultMessage: 'Change password default'
  },
  addressBook: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.viewAddressBookLink,
    description: 'Link to view address book',
    defaultMessage: 'Address book default'
  },
  privacySettings: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .preferences.privacySettingsLink,
    description: 'Link to view privacy settings',
    defaultMessage: 'Privacy settings default'
  },
  measurementSettings: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .preferences.settingsLink,
    description: 'Link to view measurement settings',
    defaultMessage: 'Measurements settings default'
  }
});

interface InfoAndPreferencesSectionViewModel {
  iconName: string;
  title: string;
  description: string;
  links?: {
    text: string;
    href: string;
  }[];
}

interface InfoAndPreferencesStyles {
  cardContainer: IStackStyles;
  iconContainer: IStackStyles;
  iconStyles: IIconStyles;
  linkStyles: IButtonStyles;
  sectionTitle: ITextStyles;
}

function getInfoAndPreferencesAccountSection(
  intl: IntlShape
): InfoAndPreferencesSectionViewModel[] {
  const { formatMessage } = intl;
  return [
    {
      iconName: 'Contact',
      description: formatMessage(messages.profileInformationDescription),
      title: formatMessage(messages.profileInformationTitle),
      links: [
        {
          href: pagePaths.profileInfo,
          text: formatMessage(messages.viewPersonalInfoLink)
        },
        {
          href: pagePaths.accountOverview,
          text: formatMessage(messages.changePassword)
        }
      ]
    },
    {
      iconName: 'Home',
      description: formatMessage(messages.addressBookDescription),
      title: formatMessage(messages.addressBookTitle),
      links: [
        {
          href: pagePaths.addressBook,
          text: formatMessage(messages.addressBook)
        }
      ]
    },
    {
      iconName: 'Suitcase',
      description: formatMessage(messages.companyInformationDescription),
      title: formatMessage(messages.companyInformationTitle)
    },
    {
      iconName: 'Equalizer',
      description: formatMessage(messages.preferencesDescription),
      title: formatMessage(messages.preferencesTitle),
      links: [
        {
          href: pagePaths.accountOverview,
          text: formatMessage(messages.privacySettings)
        },
        {
          href: pagePaths.preferences,
          text: formatMessage(messages.measurementSettings)
        }
      ]
    }
  ];
}

export const InfoAndPreferences: React.FC = () => {
  const { spacing, semanticColors, effects, palette } = useTheme();
  const intl = useIntl();

  const sections: InfoAndPreferencesSectionViewModel[] = useMemo(() => {
    return getInfoAndPreferencesAccountSection(intl);
  }, [intl]);

  const styles: InfoAndPreferencesStyles = {
    cardContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
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
        fontSize: FontSizes.size24,
        ...mediaQueryFrom('tablet', {
          fontSize: FontSizes.size32
        })
      }
    },
    linkStyles: {
      root: {
        padding: 0,
        height: 'auto'
      },
      icon: {
        margin: 0,
        fontSize: FontSizes.size14
      },
      textContainer: {
        color: palette.themePrimary
      }
    },
    sectionTitle: {
      root: {
        fontSize: FontSizes.size16
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l2 }}>
      {sections.map(section => {
        return (
          <Stack key={section.title} styles={styles.cardContainer} horizontal>
            <Stack styles={styles.iconContainer} verticalAlign="center">
              <Icon styles={styles.iconStyles} iconName={section.iconName} />
            </Stack>
            <Stack tokens={{ childrenGap: spacing.m }}>
              <Stack>
                <Text styles={styles.sectionTitle} as="h3">
                  {section.title}
                </Text>
              </Stack>
              <Stack>
                <Text>{section.description}</Text>
              </Stack>
              {section.links?.length && (
                <Stack tokens={{ childrenGap: spacing.s1 }}>
                  {section.links.map(link => {
                    return (
                      <NextLink
                        key={link.text}
                        href={link.href}
                        shallow
                        passHref
                      >
                        <a>
                          <ActionButton
                            text={link.text}
                            iconProps={{ iconName: 'ChevronRight' }}
                            styles={styles.linkStyles}
                          />
                        </a>
                      </NextLink>
                    );
                  })}
                </Stack>
              )}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
