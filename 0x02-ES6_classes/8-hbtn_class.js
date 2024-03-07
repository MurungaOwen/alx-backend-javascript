export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(newSize) {
    if (typeof newSize !== 'string') {
      throw new TypeError('size must be string');
    }
    this._size = newSize;
  }

  set location(newAttr) {
    if (typeof newAttr !== 'string') {
      throw new TypeError('location must be string');
    }
    this._location = newAttr;
  }

  valueOf() {
    // type casting to number
    return this._size;
  }

  toString() {
    // casting to string
    return this._location;
  }
}
