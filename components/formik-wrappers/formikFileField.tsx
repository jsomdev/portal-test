import React, { CSSProperties } from 'react';

import { Field, FormikContextType, useFormikContext } from 'formik';

import {
  DefaultButton,
  FontWeights,
  IButtonStyles,
  IIconStyles,
  ILabelStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  Label,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';

type StepField = { name: string; label: string; placeholder?: string };

interface FormikFileFieldProps {
  fileField: StepField;
  labelField: StepField;
  labelText: string;
}

interface FormikFileFieldStyles {
  inputField: CSSProperties;
  removeButton: IButtonStyles;
  uploadLabel: ILabelStyles;
  fileUploadIcon: IIconStyles;
  fileUploadContainer: IStackStyles;
  textStyles: ITextStyles;
}

export const FormikFileField: React.FC<FormikFileFieldProps> = ({
  fileField,
  labelField,
  labelText
}) => {
  const { spacing, palette, fonts } = useTheme();
  const UPLOAD_INPUT_ID = `${fileField.name}-upload-input`;
  const { setFieldValue, values }: FormikContextType<{ [key: string]: File }> =
    useFormikContext();

  const styles: FormikFileFieldStyles = {
    inputField: {
      display: 'none'
    },
    removeButton: {
      root: {
        width: 20,
        height: 36,
        borderLeft: 'none',
        borderRadius: 0,
        padding: 0,
        minWidth: 40
      }
    },
    uploadLabel: {
      root: {
        border: `1px solid ${palette.neutralSecondaryAlt}`,
        padding: `${spacing.s1} ${spacing.m}`,
        width: '100%',
        height: 36,
        cursor: 'pointer',
        textAlign: 'center'
      }
    },
    fileUploadIcon: {
      root: {
        fontSize: fonts.large.fontSize
      }
    },
    fileUploadContainer: {
      root: {
        width: '100%',
        maxWidth: 350
      }
    },
    textStyles: {
      root: {
        fontWeight: FontWeights.regular
      }
    }
  };

  return (
    <Stack>
      <Label>{fileField.label}</Label>
      <Field
        {...labelField}
        type="file"
        id={UPLOAD_INPUT_ID}
        onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
          setFieldValue(fileField.name, event?.currentTarget?.files?.[0]);
        }}
        style={styles.inputField}
      />
      <Stack
        horizontal
        verticalAlign="center"
        styles={styles.fileUploadContainer}
      >
        <Label styles={styles.uploadLabel} htmlFor={UPLOAD_INPUT_ID}>
          <Stack
            horizontal
            tokens={{ childrenGap: spacing.s1 }}
            verticalAlign="center"
            horizontalAlign="center"
          >
            <Icon
              iconName={
                values?.[fileField.name] ? 'FolderHorizontal' : 'CloudUpload'
              }
              styles={styles.fileUploadIcon}
            />
            <Text styles={styles.textStyles}>
              {values?.[fileField.name]?.name
                ? new TextFormatter().formatText(
                    values?.[fileField.name]?.name,
                    30,
                    '...'
                  )
                : labelText}
            </Text>
          </Stack>
        </Label>
        {values?.[fileField.name] && (
          <DefaultButton
            iconProps={{ iconName: 'Cancel' }}
            styles={styles.removeButton}
            onClick={() => {
              setFieldValue(fileField.name, undefined);
            }}
          />
        )}
      </Stack>
    </Stack>
  );
};
