export default function appendToEachArrayValue(array, appendString) {
    const myArray = []
    for (let value of array) {
      myArray.push(appendString + value)
    }
  
    return myArray;
  }