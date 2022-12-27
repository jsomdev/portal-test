/**
 * Reduces an array to a sort of dictionary <TKey, TItem[]>.
 * (where the key is the value of groupby property
 * and the values are an array of all items of the input array that match the key)
 */
export const groupArrayByKey =
  <TKey, TItem>(key: TKey) =>
  (array: TItem[]): { [groupedValue: string]: TItem[] } =>
    array
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        array.reduce((objectsByKeyValue: any, obj: any) => {
          const value = obj[key];
          objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
            obj
          );
          return objectsByKeyValue;
        }, {})
      : {};

export function groupArrayByKeyGetter<TKey, TItem>(
  array: TItem[],
  keyGetter: (input: TItem) => TKey
): Map<TKey, TItem[]> {
  const map = new Map();
  array.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
