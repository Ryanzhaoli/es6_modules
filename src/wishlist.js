import Car from  "./car.js";

export default class WishList {
    constructor () {
        this.list = [];
        this.nextID = 0;
    }

    add (make, model, year) {
        let newCar = new Car(this.nextID++, make, model, year);
        this.list.push(newCar);
    }

    remove (carId) {
        this.list = this.list.filter((car) => car.id != carId);
    }
}