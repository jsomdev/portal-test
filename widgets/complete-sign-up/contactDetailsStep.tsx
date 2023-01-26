import { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  ISpinnerStyles,
  ITextFieldStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

import { getContactDetailsFormFields } from './constants';

interface ContactDetailsFormGroupStyles {
  description: ITextStyles;
  textField: Partial<ITextFieldStyles>;
  spinner: ISpinnerStyles;
}

const messages = defineMessages({
  contactDetailsTitle: {
    id: messageIds.signupFlow.contactDetailsTitle,
    defaultMessage: 'Contact Details'
  }
});

export const ContactDetailsStep: React.FC = () => {
  const { fonts, palette, spacing } = useTheme();
  const { formatMessage } = useIntl();

  const contactDetailsFormFields = useMemo(() => {
    return getContactDetailsFormFields(formatMessage);
  }, [formatMessage]);

  const styles: ContactDetailsFormGroupStyles = {
    description: {
      root: {
        textAlign: 'center'
      }
    },
    textField: {
      fieldGroup: {
        height: 40
      },
      icon: {
        position: 'relative',
        top: 'unset',
        bottom: 'unset',
        alignSelf: 'center'
      },
      field: { fontSize: '16px' }
    },
    spinner: {
      label: {
        ...fonts.mediumPlus,
        color: palette.themeDark
      }
    }
  };

  return (
    <Stack horizontalAlign="stretch" tokens={{ childrenGap: spacing.s1 }}>
      <Stack
        horizontalAlign="stretch"
        tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
      >
        <Text variant="xLarge">
          {formatMessage(messages.contactDetailsTitle)}
        </Text>
      </Stack>
      <FormikTextField
        styles={styles.textField}
        {...contactDetailsFormFields.firstName}
        required={true}
      />
      <FormikTextField
        styles={styles.textField}
        {...contactDetailsFormFields.lastName}
        required={true}
      />
      <FormikTextField
        styles={styles.textField}
        {...contactDetailsFormFields.phone}
        required={true}
      />
      <FormikTextField
        styles={styles.textField}
        {...contactDetailsFormFields.jobTitle}
        required={false}
      />
    </Stack>
  );
};
