import React, { useMemo } from 'react';

import { Form, Formik } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import {
  DefaultButton,
  IButtonStyles,
  IPanelStyles,
  Panel,
  PanelType,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
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
  const { me, createContactDetailsRequest } = useMe();

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

  const initialTouched = useMemo(() => {
    return getTouchedFields(defaultAndPrefilledValues);
  }, [defaultAndPrefilledValues]);

  async function saveContactDetails(values: ProfileInformationFormData) {
    await createContactDetailsRequest({
      email: values.email,
      firstName: values.firstName,
      lastName: values.name,
      phone: values.phone,
      jobTitle: values.jobTitle
    });
  }

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
          saveContactDetails(values);
          setShowEditInformation(false);
        }}
      >
        <Form noValidate>
          <Stack tokens={{ padding: spacing.l1 }}>
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
            />
            <DefaultButton
              onClick={() => {
                setShowEditInformation(false);
              }}
              text={formatMessage(messages.cancel)}
              styles={styles.actionButton}
            />
          </Stack>
        </Form>
      </Formik>
    </Panel>
  );
};
