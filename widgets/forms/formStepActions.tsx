import React, { useMemo } from 'react';

import { FormikTouched, useFormikContext } from 'formik';

import { Step, useStepper } from '@components/stepper/stepperContext';
import { Stack } from '@fluentui/react';

interface FormStepActionProps {
  getFieldNames: (currentStepIndex: number) => string[];
  children: (
    onProceedClick: () => void,
    onPreviousClick: () => void,
    currentStep: number
  ) => JSX.Element;
}

export const FormStepActions: React.FC<FormStepActionProps> = ({
  getFieldNames,
  children
}) => {
  const {
    currentIndex,
    steps,
    updateStep,
    next,
    previous: onPreviousClick
  } = useStepper();
  const { errors, touched, setTouched } = useFormikContext();

  const fieldNamesForCurrentStep = useMemo(() => {
    return getFieldNames(currentIndex);
  }, [currentIndex, getFieldNames]);

  const invalidFieldNames = useMemo(() => {
    const filteredFieldNames = fieldNamesForCurrentStep.filter(
      fieldNameForCurrentStep => {
        return Object.keys(errors)
          .map(key => key)
          .includes(fieldNameForCurrentStep);
      }
    );

    return filteredFieldNames;
  }, [fieldNamesForCurrentStep, errors]);

  const touchedFieldNames = useMemo(() => {
    return fieldNamesForCurrentStep.filter(fieldNameForCurrentStep => {
      return Object.keys(touched)
        .map(key => key)
        .includes(fieldNameForCurrentStep);
    });
  }, [touched, fieldNamesForCurrentStep]);

  const isFormStepInvalid: boolean = useMemo(() => {
    return touchedFieldNames.length === 0 || invalidFieldNames.length > 0;
  }, [invalidFieldNames.length, touchedFieldNames.length]);

  React.useEffect(() => {
    const updatedStep: Step = {
      ...steps[currentIndex],
      isValid: !isFormStepInvalid
    };
    updateStep(currentIndex, updatedStep);
    // we don't want to add steps as a dependency because this will cause an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormStepInvalid]);

  const setTouchedFields: FormikTouched<unknown> = React.useMemo(() => {
    const fields: { [key: string]: boolean } = {};
    fieldNamesForCurrentStep.map((field: string, i) => {
      return (fields[field] = true);
    });
    return fields;
  }, [fieldNamesForCurrentStep]);

  const onProceedClick = React.useCallback(() => {
    if (isFormStepInvalid) {
      setTouched(setTouchedFields);
    }
    if (!isFormStepInvalid) {
      next();
    }
  }, [isFormStepInvalid, next, setTouched, setTouchedFields]);

  return (
    <Stack>{children(onProceedClick, onPreviousClick, currentIndex)}</Stack>
  );
};
