/**
 * Function that will convert the input to its rem value. Works for pixels and percentages. Numeric values are treated as pixels.
 * Examples: rem(32) will return '2rem' ; rem("50%") will return "0.5rem"
 * Note: Invalid inputs will throw a TypeError
 * @param input pixels (as number: 9, or as string: '9px') or percentage (as string: '90%') that needs to be converted to rem
 * @returns rem string value
 */
export function rem(input: number | string): string {
  const BASE_REM_VALUE = 16;
  let remValue: number | undefined = undefined;
  if (typeof input === 'string') {
    let type: 'percentage' | 'pixels' | 'numeric' | 'invalid' = 'invalid';
    let strippedValue: number | undefined = undefined;

    if (!isNaN(Number(input))) {
      type = 'numeric';
      strippedValue = Number(input);
    }
    if (input.includes('%')) {
      type = 'percentage';
      strippedValue = Number(input.replace('%', ''));
    }
    if (input.includes('px')) {
      type = 'pixels';
      strippedValue = Number(input.replace('px', ''));
    }

    if (type === 'invalid' || strippedValue === undefined || isNaN(strippedValue)) {
      throw new TypeError('Incorrect parameter value for pixels. Cannot calculate rem value.');
    }

    if (type === 'percentage') {
      remValue = Number((strippedValue / 100).toFixed(3));
    }
    if (type === 'pixels') {
      remValue = strippedValue / BASE_REM_VALUE;
    }
  }

  if (typeof input === 'number') {
    remValue = input / BASE_REM_VALUE;
  }

  return `${remValue}rem`;
}
