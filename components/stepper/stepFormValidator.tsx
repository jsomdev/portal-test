import { useEffect } from 'react';

import { useFormikContext } from 'formik';

import { useStepper } from './stepperContext';

export const StepFormValidator: React.FC = () => {
  const { validateForm } = useFormikContext();
  const { currentIndex } = useStepper();
  useEffect(() => {
    validateForm();
  }, [currentIndex, validateForm]);
  return null;
};
