import React, { useEffect } from 'react';

import { NextPage } from 'next';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { InferType } from 'yup';

import FormComboBox from '@components/form-wrappers/formComboBox';
import FormTextField from '@components/form-wrappers/formTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  formErrorMessages,
  formRequiredMessages
} from '@widgets/forms/formMessages';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .max(40, formErrorMessages.firstName)
    .required(formRequiredMessages.firstName),
  name: yup
    .string()
    .max(40, formErrorMessages.lastName)
    .required(formRequiredMessages.lastName),
  country: yup.string().length(2, formErrorMessages.country).required()
});

type FormData = InferType<typeof validationSchema>;

const initialValues: FormData = {
  firstName: '',
  name: '',
  country: 'BE'
};

const MyTextField: React.FC<{ name: string }> = ({ name }) => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors, touchedFields }
  } = useFormContext();
  //const state = getFieldState(name);
  console.log('state', errors, touchedFields);
  const style =
    touchedFields[name] && errors[name]
      ? { border: '2px solid red' }
      : touchedFields[name] && !errors[name]
      ? { border: '2px solid green' }
      : {};
  return <input {...register('firstName')} style={style} />;
};

const MyForm = () => {
  const { setValue, handleSubmit, register } = useFormContext<FormData>();
  useEffect(() => {
    setValue('country', initialValues.country, {
      shouldValidate: true,
      shouldTouch: true
    });
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(data => console.log('data', data))}>
      {/*  <MyTextField name={'firstName'} />*/}
      <FormTextField<FormData> name={'firstName'} />
      <FormTextField<FormData> name={'name'} />
      <FormComboBox<FormData>
        name="country"
        useComboBoxAsMenuWidth
        defaultToPreviousValueOnInvalidSelection={true}
        options={[
          { key: 'BE', text: 'Belgium' },
          { key: 'NL', text: 'Netherlands' }
        ]}
        onChange={(ev, option) => {
          setValue('firstName', '', {
            shouldDirty: false,
            shouldTouch: false,
            shouldValidate: true
          });
          setValue('name', '', {
            shouldDirty: false,
            shouldTouch: false,
            shouldValidate: true
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          setValue('firstName', 'CLEARED', {
            shouldTouch: true,
            shouldValidate: true
          });
          setValue('name', 'CLEARED', {
            shouldTouch: true,
            shouldValidate: true
          });
        }}
      >
        Clear
      </button>
      <input type="submit" />
    </form>
  );
};

const FormikPage: NextPage = () => {
  const methods = useForm<FormData>({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });

  return (
    <FormProvider {...methods}>
      <MyForm />
    </FormProvider>
  );
};

export default FormikPage;
