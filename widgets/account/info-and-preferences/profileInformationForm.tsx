import React, { useMemo } from 'react';

import { Form, Formik } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import {
  DefaultButton,
  IButtonStyles,
  IPanelStyles,
  IStackStyles,
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
      .addressBook.panel.ariaClose,
    description: 'Arialabel to close the panel',
    defaultMessage: 'Close'
  },
  cancel: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.panel.cancel,
    defaultMessage: 'Cancel',
    description: 'Address book panel close'
  },
  save: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.panel.save,
    defaultMessage: 'Submit',
    description: 'Address book panel save'
  }
});

interface ProfileInformationFormProps {
  editInformation: boolean;
  setEditInformation: (value: boolean) => void;
}

interface ProfileInformationFormStyles {
  panel: Partial<IPanelStyles>;
  panelHeader: IStackStyles;
  closeButton: Partial<IButtonStyles>;
  actionButton: Partial<IButtonStyles>;
}

export const ProfileInformationForm: React.FC<ProfileInformationFormProps> = ({
  editInformation,
  setEditInformation
}) => {
  const { palette, spacing, semanticColors } = useTheme();
  const { formatMessage } = useIntl();
  const { me, createContactDetailsRequest } = useMe();

  const defaultAndPrefilledValues: ProfileInformationFormData =
    useMemo((): ProfileInformationFormData => {
      return {
        firstName: me?.contactInfo?.firstName || '',
        name: me?.contactInfo?.lastName || '',
        company: me?.contactInfo?.jobTitle || '',
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
      jobTitle: values.company
    });
  }

  const styles: ProfileInformationFormStyles = {
    panel: {
      commands: {
        background: palette.white,
        zIndex: 1
      },
      scrollableContent: {
        marginRight: spacing.s1
      },
      content: {
        padding: `0 ${spacing.l1}`
      },
      main: {
        background: palette.white,
        paddingBottom: spacing.l1,
        maxWidth: rem('425px'),
        cursor: 'default'
      },
      root: {
        cursor: 'default'
      },
      navigation: {
        display: 'none'
      }
    },
    actionButton: {
      root: {
        width: '100%'
      }
    },

    panelHeader: {
      root: {
        background: palette.white,
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        height: rem(90),
        padding: `0 ${spacing.s1}`
      }
    },
    closeButton: {
      icon: {
        color: palette.neutralPrimary
      }
    }
  };
  return (
    <Panel
      isLightDismiss
      isOpen={!!editInformation}
      onDismiss={() => {
        setEditInformation(false);
      }}
      styles={styles.panel}
      allowTouchBodyScroll={true}
      type={PanelType.custom}
      customWidth={rem(600)}
      isBlocking
      hasCloseButton={false}
      isFooterAtBottom={true}
    >
      <Formik<ProfileInformationFormData>
        initialValues={defaultAndPrefilledValues}
        initialTouched={initialTouched}
        validationSchema={validation}
        enableReinitialize={true}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          saveContactDetails(values);
        }}
      >
        <Form noValidate>
          <Stack
            horizontal
            horizontalAlign="space-between"
            tokens={{ childrenGap: spacing.m, padding: `${spacing.l1} 0` }}
            wrap={true}
          >
            <ProfileInformationFormGroup />
          </Stack>
          <Stack
            horizontal
            horizontalAlign="space-between"
            tokens={{ childrenGap: spacing.m }}
          >
            <PrimaryButton
              type="submit"
              text={formatMessage(messages.save)}
              styles={styles.actionButton}
            />
            <DefaultButton
              onClick={() => {
                setEditInformation(false);
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
