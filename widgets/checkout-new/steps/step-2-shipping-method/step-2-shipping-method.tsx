import React, { useMemo } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import { useIntl } from 'react-intl';
import { InferType } from 'yup';

import { getTouchedFields } from '@widgets/checkout-new/shared/getTouchedFields';

import { ShippingMethodChoiceGroup } from './shippingMethodChoiceGroup';
import {
  getFields,
  messages,
  validation
} from './step-2-shipping-method.helper';

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
  const intl = useIntl();
  const fields = useMemo(() => getFields(intl), [intl]);
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
      onSubmit={() => {
        /* do nothing */
      }}
    >
      <Form>
        <ShippingMethodChoiceGroup
          fields={fields}
          title={intl.formatMessage(messages.shippingMethod)}
        />
      </Form>
    </Formik>
  );
};

export default {
  Component: Step2ShippingMethod,
  defaultValues,
  validation
};
