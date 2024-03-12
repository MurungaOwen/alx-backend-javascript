export default function hasValuesFromArray(set,array) {
    if (!(set instanceof Set)) {
        throw new Error('First argument must be a Set');
      }
      
      for (const element of array) {
        if (!set.has(element)) {
          return false;
        }
      }
      return true;
}