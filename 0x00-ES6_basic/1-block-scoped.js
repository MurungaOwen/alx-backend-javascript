export default function taskBlock(trueOrFalse) {
  var task;
  var task2;

  task = false;
  task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;

    return [task2 ,task]
  }

  return [task, task2];
}
