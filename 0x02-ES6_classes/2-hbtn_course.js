export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getters and setters for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getters and setters for students
  get students() {
    return this._students;
  }

  set students(newStudent) {
    if (!Array.isArray(newStudent)) {
      throw new TypeError('Students must be an array');
    }
    const arrayIsString = newStudent.every((element) => typeof element === 'string');
    if (!arrayIsString) {
      throw new TypeError('Students must be strings');
    }
    this._students = newStudent;
  }
}
