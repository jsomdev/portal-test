import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Form, Formik } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { AccountInfo } from '@azure/msal-browser';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  DefaultButton,
  IButtonStyles,
  IPanelStyles,
  MessageBarType,
  Panel,
  PanelType,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { getMsalInstance } from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { ContactInfo } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { getTouchedFields } from '@widgets/checkout/shared/getTouchedFields';

import {
  ProfileInformationFormData,
  validation
} from './profileInformationForm.helper';
import { ProfileInformationFormGroup } from './profileInformationFormGroup';

const messages = defineMessages({
  ariaClose: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.panel.ariaClose,
    description: 'Arialabel to close the panel',
    defaultMessage: 'Close'
  },
  cancel: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.panel.cancel,
    defaultMessage: 'Cancel',
    description: 'Address book panel close'
  },
  save: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.panel.save,
    defaultMessage: 'Submit',
    description: 'Address book panel save'
  },
  title: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.panel.title,
    defaultMessage: 'Edit information',
    description: 'Edit information'
  },
  errorMessage: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.errorMessage,
    description: 'Error message for form',
    defaultMessage: 'Your information was not updated. Please try again.'
  }
});

interface ProfileInformationFormProps {
  showEditInformation: boolean;
  setShowEditInformation: (value: boolean) => void;
}

interface ProfileInformationFormStyles {
  panel: Partial<IPanelStyles>;
  actionButton: Partial<IButtonStyles>;
}

export const ProfileInformationForm: React.FC<ProfileInformationFormProps> = ({
  showEditInformation,
  setShowEditInformation
}) => {
  const { palette, spacing, semanticColors } = useTheme();
  const { formatMessage } = useIntl();
  const claims = useClaims();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { me, createContactDetailsRequest, createContactDetailsRequestStatus } =
    useMe();
  const account: AccountInfo | undefined =
    getMsalInstance()?.getAllAccounts()[0];

  const defaultAndPrefilledValues: ProfileInformationFormData =
    useMemo((): ProfileInformationFormData => {
      return {
        firstName: me?.contactInfo?.firstName || '',
        name: me?.contactInfo?.lastName || '',
        jobTitle: me?.contactInfo?.jobTitle || '',
        phone: me?.contactInfo?.phoneNumber || '',
        email: me?.contactInfo?.emailAddresses?.[0] || ''
      };
    }, [me]);

  useEffect(() => {
    if (createContactDetailsRequestStatus === 'error') {
      setShowErrorMessage(true);
    }
    const timeout = setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [createContactDetailsRequestStatus]);

  const initialTouched = useMemo(() => {
    return getTouchedFields(defaultAndPrefilledValues);
  }, [defaultAndPrefilledValues]);

  const onFormSubmit = useCallback(
    async (values: ProfileInformationFormData): Promise<void> => {
      try {
        const data = await createContactDetailsRequest({
          email: values.email,
          firstName: values.firstName,
          lastName: values.name,
          phone: values.phone,
          jobTitle: values.jobTitle
        });

        if (data) {
          // We want to force a refresh of the claims if the updated first name or last name is different from the claims
          if (
            data.firstName !== account?.idTokenClaims?.given_name ||
            data.lastName !== account?.idTokenClaims?.family_name
          ) {
            claims.forceRefreshToken();
          }
          setShowEditInformation(false);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [account, claims, createContactDetailsRequest, setShowEditInformation]
  );

  const styles: ProfileInformationFormStyles = {
    panel: {
      content: {
        background: palette.white,
        padding: 0
      },
      contentInner: {
        background: palette.white
      },
      scrollableContent: {
        background: palette.white
      },
      commands: {
        padding: 0,
        position: 'sticky'
      },
      navigation: {
        height: 80,
        background: palette.white,
        padding: spacing.m,
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      },
      header: {
        padding: 0,
        margin: 'auto'
      },
      subComponentStyles: {
        closeButton: {
          root: {
            margin: 'auto'
          }
        }
      }
    },
    actionButton: {
      root: {
        width: '100%'
      }
    }
  };
  return (
    <Panel
      isLightDismiss
      headerText={formatMessage(messages.title)}
      isOpen={!!showEditInformation}
      onDismiss={() => {
        createContactDetailsRequestStatus !== 'loading' &&
          setShowEditInformation(false);
      }}
      styles={styles.panel}
      type={PanelType.custom}
      customWidth={rem(600)}
      isBlocking
      hasCloseButton={true}
    >
      <Formik<ProfileInformationFormData>
        initialValues={defaultAndPrefilledValues}
        initialTouched={initialTouched}
        validationSchema={validation}
        enableReinitialize={true}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          onFormSubmit(values);
        }}
      >
        <Form noValidate>
          <Stack tokens={{ padding: spacing.l1, childrenGap: spacing.m }}>
            {showErrorMessage && (
              <PortalMessageBar messageBarType={MessageBarType.error}>
                <Text>{formatMessage(messages.errorMessage)}</Text>
              </PortalMessageBar>
            )}
            <ProfileInformationFormGroup />
          </Stack>
          <Stack
            horizontal
            horizontalAlign="space-between"
            tokens={{ childrenGap: spacing.m, padding: spacing.l1 }}
          >
            <PrimaryButton
              type="submit"
              text={formatMessage(messages.save)}
              styles={styles.actionButton}
              disabled={createContactDetailsRequestStatus === 'loading'}
            />
            <DefaultButton
              onClick={() => {
                setShowEditInformation(false);
              }}
              text={formatMessage(messages.cancel)}
              styles={styles.actionButton}
              disabled={createContactDetailsRequestStatus === 'loading'}
            />
          </Stack>
        </Form>
      </Formik>
    </Panel>
  );
};
