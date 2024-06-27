export default class Car {
  /**
     *
     * @param {String} brand - Car brand
     * @param {String} motor - Car motor
     * @param {String} color - Car Color
     */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
     * @returns {String} brand - Brand of the car
     */
  get brand() {
    return this._brand;
  }

  /**
     * @param {String} value - Set the brand of the car
     */
  set brand(value) {
    if (typeof value !== 'string') {
      throw new Error('Brand must be a string');
    }
    this._brand = value;
  }

  /**
     * @returns {String} motor - motor of the car
     */
  get motor() {
    return this._motor;
  }

  /**
     * @param {String} value - Set the motor of the car
     */
  set motor(value) {
    if (typeof value !== 'string') {
      throw new Error('motor must be a string');
    }
    this._motor = value;
  }

  /**
     * @returns {String} color - color of the car
     */
  get color() {
    return this._color;
  }

  /**
     * @param {String} value - Set the color of the car
     */
  set color(value) {
    if (typeof value !== 'string') {
      throw new Error('color must be a string');
    }
    this._color = value;
  }

  /**
     * @returns {Car} New Car Class or extended Car sub class
     */
  cloneCar() {
    return new this.constructor(this.brand, this.motor, this.color);
  }
}
