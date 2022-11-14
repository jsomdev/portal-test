import React, { useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { InferType } from 'yup';

import { getTouchedFields } from '@widgets/checkout-new/checkout.helper';

type ShippingMethod =
  | 'FreeShipping'
  | 'FlatRate'
  | 'UpsGround'
  | 'UpsSecondDayAir'
  | 'UpsNextDayAir'
  | 'UpsNextDayAirSaver'
  | 'UpsStandard'
  | 'UpsWorldwideExpedited';

const validation = yup.object({
  shippingMethod: yup.string() //TODO  yup.mixed<ShippingMethod>().required()
});

export type Step2FormData = InferType<typeof validation>;

const defaultValues: Step2FormData = {
  shippingMethod: ''
};

export type Step2ShippingMethodProps = {
  values: Step2FormData;
  formRef: React.RefObject<FormikProps<Step2FormData>> | undefined;
};

export const Step2ShippingMethod: React.FC<Step2ShippingMethodProps> = ({
  formRef,
  values
}) => {
  const initialTouched = useMemo(() => {
    return getTouchedFields(values);
  }, [values]);

  return (
    <Formik<Step2FormData>
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
      <Form>Step 2 Content</Form>
    </Formik>
  );
};

export default {
  Component: Step2ShippingMethod,
  defaultValues,
  validation
};
