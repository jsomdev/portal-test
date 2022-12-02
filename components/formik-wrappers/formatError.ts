import { FieldMetaProps } from 'formik';
import { IntlShape } from 'react-intl';

const formatError = (
  intl: IntlShape,
  metaProps: FieldMetaProps<unknown>,
  name: string
): string | undefined => {
  // errors type defined by Formik is incorrect, when using localisation for yup validation,
  // the errors can be objects
  const error = (
    metaProps.touched && metaProps.error ? metaProps.error : undefined
  ) as
    | string
    | undefined
    | { messageId: string; values: Record<string, string> };

  if (error && typeof error !== 'string' && error.messageId) {
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

  if (error === undefined || error === null) {
    return undefined;
  }
  if (typeof error === 'string' && error !== '') {
    return error;
  }
  return undefined;
};

export default formatError;
