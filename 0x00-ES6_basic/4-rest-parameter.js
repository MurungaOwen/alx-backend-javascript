export default function returnHowManyArguments(...params) {
  let count = 0;
  for (let i = 0; i < params.length; i += 1) {
    count += 1;
  }
  return count;
}
