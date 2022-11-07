import React from 'react';

import { Form, Formik, useField, useFormikContext } from 'formik';
import { NextPage } from 'next';
import * as yup from 'yup';
import { InferType } from 'yup';

import {
  formErrorMessages,
  formRequiredMessages
} from '@widgets/forms/formMessages';

const MyTextInput: React.FC<{ name: string }> = ({ name }) => {
  const [input, meta, helper] = useField(name);
  const error = meta.touched && meta.error ? meta.error : undefined;
  return <input style={error ? { backgroundColor: 'red' } : {}} {...input} />;
};

const MySelect: React.FC<{
  name: string;
  options: { label: string; value: string }[];
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ name, options, onChange }) => {
  const [input, meta, helper] = useField(name);
  const error = meta.touched && meta.error ? meta.error : undefined;
  return (
    <select
      style={error ? { backgroundColor: 'red' } : {}}
      {...input}
      onChange={ev => {
        if (onChange) onChange(ev);
        if (input.onChange) {
          input.onChange(ev);
        }
      }}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, formErrorMessages.firstName)
    .required(formRequiredMessages.firstName),
  name: yup
    .string()
    .max(40, formErrorMessages.lastName)
    .required(formRequiredMessages.lastName),
  country: yup.string().length(2, formErrorMessages.country).required()
});

const initialValues: InferType<typeof validationSchema> = {
  firstName: 'Ward',
  name: 'Werbrouck',
  country: 'BE'
};

const MyForm = () => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  return (
    <div>
      <MyTextInput name={'firstName'} />
      <MyTextInput name={'name'} />
      <MySelect
        name={'country'}
        options={[
          { label: 'België', value: 'BE' },
          { label: 'Nederland', value: 'NL' }
        ]}
        onChange={() => {
          const setFieldsPromise = Promise.all([
            setFieldValue('firstName', '', true),
            setFieldValue('name', '', true)
          ]);

          setFieldsPromise.then(result => {
            result.forEach((field: any) => {
              setFieldTouched(Object.keys(field)[0], true);
            });
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          setFieldValue('firstName', '', true);
        }}
      >
        Clear
      </button>
    </div>
  );
};

const FormikPage: NextPage = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {
          console.log('submit');
        }}
      >
        <Form>
          <MyForm />
        </Form>
      </Formik>
    </div>
  );
};

export default FormikPage;
