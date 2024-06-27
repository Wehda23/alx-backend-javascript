export default class Building {
  /**
     * @param {Number} sqrt Square meter of the building
     */
  constructor(sqrt) {
    if (this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqrt = sqrt;
  }

  /**
     * @returns {Number} Square meter of the building
     */
  get sqrt() {
    return this._sqrt;
  }

  /**
     * @param {Number} sqrt - Sets the square meter of the building
     */
  set sqrt(sqrt) {
    if (typeof sqrt !== 'number') {
      throw new Error('sqrt must be a number');
    }
    this._sqrt = sqrt;
  }
}
