import { useMemo } from 'react';

import { useField } from 'formik';

import { IProcessedStyleSet, mergeStyleSets } from '@fluentui/react';

import { FormikValidationProps } from './formikWrappers.types';

// eslint-disable-next-line @typescript-eslint/ban-types
type ObjectOnly<TArg> = TArg extends {} ? TArg : {};

export interface FormikWrapperStylesHook<TStyles> {
  mergedStyles: TStyles | IProcessedStyleSet<ObjectOnly<TStyles>> | undefined;
}

/**
 * This hook will take our default styling, default validation styling and custom validation styling and
 * merge it based on if validation styling is enabled, if the field has been touched and if the field has an error or not
 * @param fieldName the name of the field used to access the meta data from Formik
 * @param parentStyles styling passed from our parent component
 * @param defaultValidationStyles default validation styles that are defined in our custom formik wrapper component
 * @param validationProps validation props are passed from our parent component
 * @returns either styles or a merged style set of our passed styles type argument, or undefined
 */
export function useFormikWrapperStyles<TStyles>(
  fieldName: string,
  parentStyles: TStyles | undefined,
  defaultValidationStyles: TStyles,
  validationProps: FormikValidationProps<TStyles> | undefined
): FormikWrapperStylesHook<TStyles> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [input, meta] = useField(fieldName);

  const mergedStyles:
    | TStyles
    | IProcessedStyleSet<ObjectOnly<TStyles>>
    | undefined = useMemo(() => {
    const applyValidationStyles: boolean =
      meta.touched && !meta.error && !validationProps?.disabled;

    if (!validationProps?.styles && applyValidationStyles) {
      return mergeStyleSets(parentStyles, defaultValidationStyles);
    }
    if (!!validationProps?.styles && applyValidationStyles) {
      return mergeStyleSets(parentStyles, validationProps.styles);
    }

    return parentStyles;
  }, [
    defaultValidationStyles,
    meta.error,
    meta.touched,
    parentStyles,
    validationProps?.disabled,
    validationProps?.styles
  ]);

  return { mergedStyles };
}
