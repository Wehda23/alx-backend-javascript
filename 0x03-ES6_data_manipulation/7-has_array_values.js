const hasValuesFromArray = (set, array) => {
  if (!(set instanceof Set)) return false;
  if (!(array instanceof Array)) return false;
  // Check the size and length of the array and set
  if (set.size === 0 || array.length === 0) return false;
  // loop over array
  for (const number of array) {
    // if number is in set, return true
    if (!set.has(number)) return false;
  }
  return true;
};

export default hasValuesFromArray;
