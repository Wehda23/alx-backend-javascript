export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
     * @param {string} code
     */
  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  /**
     * @param {string} name
     */
  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
     * @returns {String} name (code)
     */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
