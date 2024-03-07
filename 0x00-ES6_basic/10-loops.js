export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (const value of array) {
    myArray.push(appendString + value);
  }

  return myArray;
}
