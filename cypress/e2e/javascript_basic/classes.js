class Car {
    constructor(carname, model, year) {
        this.carname = carname
        this.model = model
        this.year = year
    }

    carAge() {
        let date = new Date() //comes from JS
        return date.getFullYear() - this.year  //find current age

    }
}

var myCar = new Car('seat', 'lean', '2014')
console.log(myCar.carname, myCar.model)
console.log(myCar.carAge())