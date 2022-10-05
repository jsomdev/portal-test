/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Reduces an array to a sort of dictionary <TKey, TItem[]>.
 * (where the key is the value of groupby property
 * and the values are an array of all items of the input array that match the key)
 */
export const groupArrayByKey =
  <TKey, TItem>(key: TKey) =>
  (array: TItem[]): { [groupedValue: string]: TItem[] } =>
    array
      ? array.reduce((objectsByKeyValue: any, obj: any) => {
          const value = obj[key];
          objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
            obj
          );
          return objectsByKeyValue;
        }, {})
      : {};
