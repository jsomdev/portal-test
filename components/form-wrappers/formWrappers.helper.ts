import { FormikValidationProps } from '@components/formik-wrappers/formikWrappers.types';
import { ObjectOnly } from '@fluentui/merge-styles';
import { IProcessedStyleSet, mergeStyleSets } from '@fluentui/react';

import { FieldState } from './formWrappers.types';

export const getErrorMessage = (fieldState: FieldState) => {
  return (
    (fieldState.isTouched &&
      fieldState.error &&
      (typeof fieldState.error.message === 'string'
        ? fieldState.error.message
        : fieldState.error.type)) ||
    undefined
  );
};

/**
 * This hook will take our default styling, default validation styling and custom validation styling and
 * merge it based on if validation styling is enabled, if the field has been touched and if the field has an error or not
 * @param fieldState - The state of the field
 * @param parentStyles styling passed from our parent component
 * @param defaultValidationStyles default validation styles that are defined in our custom formik wrapper component
 * @param validationProps validation props are passed from our parent component
 * @returns either styles or a merged style set of our passed styles type argument, or undefined
 */
export function getValidationWrapperStyles<TStyles>(
  fieldState: FieldState,
  parentStyles: TStyles | undefined,
  defaultValidationStyles: TStyles,
  validationProps: FormikValidationProps<TStyles> | undefined
): TStyles | IProcessedStyleSet<ObjectOnly<TStyles>> | undefined {
  const error = fieldState.error;
  const isTouched = fieldState.isTouched || false;

  const applyValidationStyles: boolean =
    isTouched && !error && !validationProps?.disabled;

  if (!validationProps?.styles && applyValidationStyles) {
    return mergeStyleSets(parentStyles, defaultValidationStyles);
  }
  if (!!validationProps?.styles && applyValidationStyles) {
    return mergeStyleSets(parentStyles, validationProps.styles);
  }

  return undefined;
}
