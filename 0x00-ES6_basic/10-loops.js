export default function appendToEachArrayValue(array, appendString) {
    for (let string of array) {
      string = appendString + string;
    }
  
    return array;
  }