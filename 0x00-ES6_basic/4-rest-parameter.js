export default function returnHowManyArguments(...params) {
  let count = 0;
  for (let items in params) {
    if(params.hasOwnProperty(items)) {  
      count += 1;
    }
  }
  return count;
}
