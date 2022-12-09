export function resetFieldsValueAndValidation(
  setFieldTouched: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => void,
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => void,
  fieldsToReset: string[]
): void[] {
  function resetValueAndValidation(key: string) {
    setFieldValue(key, '', false);
    setFieldTouched(key, false);
  }
  return fieldsToReset.map(key => {
    return resetValueAndValidation(key);
  });
}
