export default class Building {
  /**
     * @param {Number} sqrt Square meter of the building
     */
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
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
