export default function returnHowManyArguments(...params) {
  let count = 0;
  let i;
  for (i in params) {
    count += 1;
  }
  return count;
}
