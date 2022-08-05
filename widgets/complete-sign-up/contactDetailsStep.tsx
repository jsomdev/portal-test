import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  ISpinnerStyles,
  ITextFieldStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';

import { contactDetailsFormFields } from './constants';

interface ContactDetailsFormGroupStyles {
  title: ITextStyles;
  description: ITextStyles;
  textField: Partial<ITextFieldStyles>;
  spinner: ISpinnerStyles;
}
// TODO: i18n
const messages = {
  title: 'Contact details'
};

export const ContactDetailsStep: React.FC = () => {
  const { fonts, palette, spacing } = useTheme();

  // TODO Styling Conventions
  const styles: ContactDetailsFormGroupStyles = {
    title: { root: {} },
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
    <Stack horizontalAlign="stretch">
      <Stack
        horizontalAlign="stretch"
        tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
      >
        <Text variant="xLarge" styles={styles.title}>
          {messages.title}
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
