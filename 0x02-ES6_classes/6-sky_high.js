import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
     * @param {Number} sqrt - Represent square feet of the building
     * @param {Number} floors - Represents the number of floors in the building
     */
  constructor(sqrt, floors) {
    super(sqrt);
    this.floors = floors;
  }

  /**
     * @returns {Number} floor - Returns the number of floors of the building
     */
  get floors() {
    return this._floors;
  }

  /**
     * @param {Number} floors - Sets the floor number of the class
     */
  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new Error('Floor must be a number');
    }
    this._floors = floors;
  }

  /**
   * @returns {String} - `Evacuate slowly the ${this.floors} floors`
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
