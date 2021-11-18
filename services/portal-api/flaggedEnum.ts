/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */

export class FlaggedEnum {
  static create<TEnum>(Enum: any, value: string | TEnum): Partial<TEnum> {
    if (typeof value === 'string') {
      if (value === '') {
        return Enum[0];
      }
      const keys: string[] = value.split(', ');
      let mappedValue: TEnum | undefined = undefined;
      keys.forEach((key) => {
        (mappedValue as any) |= Enum[key];
      });
      return mappedValue ? mappedValue : Enum[0];
    }
    return value as TEnum;
  }
  static toString<TEnum>(Enum: any, value: TEnum): string {
    let index = 0;
    let numericValue;
    const stringValues: string[] = [];
    while (Enum[(numericValue = 1 << index++)]) {
      if ((value as any) & numericValue) {
        stringValues.push(Enum[numericValue]);
      }
    }
    return stringValues.join(', ');
  }
}
