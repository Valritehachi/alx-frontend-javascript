// a function to get the values of an array
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
