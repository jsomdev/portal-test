import React, { CSSProperties, useCallback, useState } from 'react';

import { useField, useFormikContext } from 'formik';

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

import { FormikTextFieldProps } from './formikWrappers.types';

type FormikFileFieldProps = {
  fieldProps: FormikTextFieldProps;
  onChange?: (value: File | undefined) => void;
} & {
  styles?: Partial<Omit<FormikFileFieldStyles, 'inputField'>>;
};

interface FormikFileFieldStyles {
  inputField: CSSProperties;
  removeButton: IButtonStyles;
  uploadLabel: ILabelStyles;
  fileUploadIcon: IIconStyles;
  fileUploadContainer: IStackStyles;
  textStyles: ITextStyles;
}

export const FormikFileField: React.FC<FormikFileFieldProps> = ({
  fieldProps,
  onChange
}) => {
  const { name } = fieldProps;
  const { spacing, palette, fonts } = useTheme();
  const [input] = useField<File | undefined>(name);
  const { setFieldValue } = useFormikContext();
  const UPLOAD_INPUT_ID = `${name}-upload-input`;
  const [fileName, setFileName] = useState<string | undefined>(undefined);

  const handleOnChange = useCallback(
    (file: File | undefined) => {
      if (onChange) {
        onChange(file);
        setFileName(file?.name);
      }
      if (!onChange) {
        setFieldValue(name, file);
      }
    },
    [name, onChange, setFieldValue]
  );

  const defaultStyles: FormikFileFieldStyles = {
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
      <input
        onChange={ev => {
          handleOnChange(ev.target.files?.[0]);
        }}
        type="file"
        accept=".pdf"
        id={UPLOAD_INPUT_ID}
        style={defaultStyles.inputField}
      />
      <Stack
        horizontal
        verticalAlign="center"
        styles={defaultStyles.fileUploadContainer}
      >
        <Label styles={defaultStyles.uploadLabel} htmlFor={UPLOAD_INPUT_ID}>
          <Stack
            horizontal
            tokens={{ childrenGap: spacing.s1 }}
            verticalAlign="center"
            horizontalAlign="center"
          >
            <Icon
              iconName={input.value ? 'FolderHorizontal' : 'CloudUpload'}
              styles={defaultStyles.fileUploadIcon}
            />
            <Text styles={defaultStyles.textStyles}>
              {input.value?.name
                ? new TextFormatter().formatText(input.value.name, 30, '...')
                : fileName || fieldProps.label}
            </Text>
          </Stack>
        </Label>
        {input.value ||
          (fileName && (
            <DefaultButton
              iconProps={{ iconName: 'Cancel' }}
              styles={defaultStyles.removeButton}
              onClick={() => {
                handleOnChange(undefined);
              }}
            />
          ))}
      </Stack>
    </Stack>
  );
};
