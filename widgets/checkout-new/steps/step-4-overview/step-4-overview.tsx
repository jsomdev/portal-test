import React, { useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { InferType } from 'yup';

import { getTouchedFields } from '@widgets/checkout-new/checkout.helper';

const validation = yup.object({});

export type Step4FormData = InferType<typeof validation>;

const defaultValues: Step4FormData = {};

export type Step4Props = {
  values: Step4FormData;
  formRef: React.RefObject<FormikProps<Step4FormData>> | undefined;
};

export const Step4Overview: React.FC<Step4Props> = ({ values, formRef }) => {
  const initialTouched = useMemo(() => {
    return getTouchedFields(values);
  }, [values]);

  return (
    <Formik<Step4FormData>
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
      <Form>Step 4 Content</Form>
    </Formik>
  );
};

export default {
  Component: Step4Overview,
  defaultValues,
  validation
};
