import Currency from './3-currency';

export default class Pricing {
  /**
     *
     * @param {Number} amount
     * @param {Currency} currency
     */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
     * @returns {Number} amount
     */
  get amount() {
    return this._amount;
  }

  /**
     * @param {Number} amount of the class
     */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = amount;
  }

  /**
     * @returns {Currency} currency
     */
  get currency() {
    return this._currency;
  }

  /**
     * @param {Currency} currency of the class
     */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  /**
   * @returns {String} amount currency_name (currency_code)
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
