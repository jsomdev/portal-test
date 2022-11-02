export const getTouchedFields = <T extends Record<string, unknown>>(
  values: T
) => {
  const touchedFields: Partial<{ [Property in keyof T]: boolean }> = {};
  Object.keys(values).forEach((key: keyof T) => {
    touchedFields[key] = !!values[key as keyof T];
  });
  return touchedFields;
};
