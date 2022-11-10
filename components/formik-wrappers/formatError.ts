import { FieldMetaProps } from 'formik';
import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
import { Options as IntlMessageFormatOptions } from 'intl-messageformat/src/core';

import { MessageDescriptor } from '@formatjs/intl/src/types';

const formatError = (
  formatMessage: (
    descriptor: MessageDescriptor,
    values?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>,
    opts?: IntlMessageFormatOptions
  ) => string,
  metaProps: FieldMetaProps<unknown>
) => {
  // errors type defined by Formik is incorrect, when using localisation for yup validation,
  // the errors can be objects
  const error = (
    metaProps.touched && metaProps.error ? metaProps.error : undefined
  ) as
    | string
    | undefined
    | { messageId: string; values: Record<string, string> };

  if (error && typeof error !== 'string' && error.messageId) {
    const translatedValues = Object.keys(error.values).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formatMessage({ id: error.values[key] })
      }),
      {}
    );
    return formatMessage({ id: error.messageId }, translatedValues);
  }
  return error as string;
};

export default formatError;
