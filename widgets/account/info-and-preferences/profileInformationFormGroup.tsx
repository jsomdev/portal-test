import React, { useMemo } from 'react';

import { useIntl } from 'react-intl';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';
import { StepFields } from '@widgets/checkout/shared/types';

import {
  ProfileInformationFormData,
  getFields
} from './profileInformationForm.helper';

export const ProfileInformationFormGroup: React.FC = () => {
  const { spacing } = useTheme();
  const intl = useIntl();

  const fields: StepFields<ProfileInformationFormData> = useMemo(
    () => getFields(intl),
    [intl]
  );

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }} grow>
      <FormikTextField {...fields.firstName} required={true} />
      <FormikTextField {...fields.name} required={true} />
      <FormikTextField {...fields.company} required={true} />
      <FormikTextField {...fields.email} required={true} />
      <FormikTextField {...fields.phone} required={true} />
    </Stack>
  );
};
