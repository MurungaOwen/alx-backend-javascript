import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);// create instance of car and not evcar
  }
}

export default EVCar;
