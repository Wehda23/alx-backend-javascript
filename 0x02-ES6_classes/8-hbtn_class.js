export default class HolbertonClass {
  /**
     *
     * @param {size} size - Size of the class
     * @param {String} location - Location
     */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
     * @returns {Number} size - Size of the class
     */
  get size() {
    return this._size;
  }

  /**
     * @param {Number} size - Size of the class
     */
  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (size < 1) {
      throw new RangeError('size must be equale to or more than 1  inclusive');
    }
    this._size = size;
  }

  /**
     * @returns {String} location - Location of the class
     */
  get location() {
    return this._location;
  }

  /**
     * @param {String} location - Location of the class
     */
  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = location;
  }

  // Overriding the valueOf method for casting to Number
  valueOf() {
    return this._size;
  }

  // Overriding the toString method for casting to String
  toString() {
    return this._location;
  }
}
