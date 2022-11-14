import React, { useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { InferType } from 'yup';

import { getTouchedFields } from '@widgets/checkout-new/checkout.helper';

const validation = yup.object({
  paymentMethod: yup.string()
});

export type Step3FormData = InferType<typeof validation>;

const defaultValues: Step3FormData = {
  paymentMethod: ''
};

export type Step3Props = {
  values: Step3FormData;
  formRef: React.RefObject<FormikProps<Step3FormData>> | undefined;
};

export const Step3Payment: React.FC<Step3Props> = ({ values, formRef }) => {
  const initialTouched = useMemo(() => {
    return getTouchedFields(values);
  }, [values]);

  return (
    <Formik<Step3FormData>
      innerRef={formRef}
      initialValues={values}
      initialTouched={initialTouched}
      validationSchema={validation}
      enableReinitialize={true}
      onSubmit={(values, { setSubmitting }) => {
        console.log('submitting');
        //TODO handle submits
        //onFormSubmit(values);
      }}
    >
      <Form>Step 3 Content</Form>
    </Formik>
  );
};

export default {
  Component: Step3Payment,
  defaultValues,
  validation
};
