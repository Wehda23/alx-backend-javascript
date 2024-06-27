export default class Airport {
  /**
     *
     * @param {String} name - Name of the airport.
     * @param {String} code - Code of the airport.
     */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
     * @returns {String} name - Name of the airport.
     */
  get name() {
    return this._name;
  }

  /**
     * @param {String} name - Sets the name of the airport.
     */
  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
  }

  /**
     * @param {String} code - Returns the code of the airport.
     */
  get code() {
    return this._code;
  }

  /**
     * @param {String} code - Sets the code of the airport.
     */
  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
