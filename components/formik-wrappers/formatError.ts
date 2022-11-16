import { FieldMetaProps } from 'formik';
import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
import { Options as IntlMessageFormatOptions } from 'intl-messageformat/src/core';
import { IntlShape } from 'react-intl';

import { MessageDescriptor } from '@formatjs/intl/src/types';

const formatError = (
  intl: IntlShape,
  metaProps: FieldMetaProps<unknown>,
  name: string
) => {
  // errors type defined by Formik is incorrect, when using localisation for yup validation,
  // the errors can be objects
  const error = (
    metaProps.touched && metaProps.error ? metaProps.error : undefined
  ) as
    | string
    | undefined
    | { messageId: string; values: Record<string, string> };

  console.log('valid ', name, error);
  if (
    error &&
    typeof error !== 'string' &&
    error.messageId /*&&
    error.values &&
    Object.keys(error.values).length > 0*/
  ) {
    if (error.values && Object.keys(error.values).length > 0) {
      const translatedValues = Object.keys(error.values).reduce(
        (acc, key) => ({
          ...acc,
          [key]: error.values[key]
            ? intl.formatMessage({ id: error.values[key] })
            : name
        }),
        {}
      );
      return intl.formatMessage({ id: error.messageId }, translatedValues);
    } else {
      return intl.formatMessage({ id: error.messageId });
    }
  }
  return error as string;
};

export default formatError;
