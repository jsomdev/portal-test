export function average(values: unknown[]): number | null {
  const numericValues: number[] = values.filter(
    value => value !== null && !isNaN(Number(value))
  ) as number[];

  if (numericValues.length === 0) {
    return null;
  }

  const total = numericValues.reduce((a, b) => a + b, 0);

  return total / numericValues.length;
}
