import React from 'react';

import { useField } from 'formik';

import { ChoiceGroup, IChoiceGroupProps } from '@fluentui/react';

export const FormikChoiceGroup: React.FC<
  IChoiceGroupProps & {
    name: string;
  }
> = ({ name, ...props }) => {
  const [input] = useField(name);
  return <ChoiceGroup {...input} {...props} name={name} />;
};
