class Car{


    constructor(model,creator,year,maxspeed,Vengine) {
        this.model = model
        this.creator= creator
        this.year = year
        this.maxspeed = maxspeed
        this.Vengine = Vengine
    }
    drive (){
        console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
    }
    info(){
        for (const inf in this){
            console.log(inf , this[inf])
        }
    }
    increaseMaxSpeed (newSpeed){
        this.maxspeed = newSpeed
    }
    changeYear(newValue){
        this.year = newValue
    }
    addDriver(driverobj){
        this.driver = driverobj
    }
}
let car = new Car(`skyline`,`nisan`,2000,200,12)
car.addDriver({name:`maximka`})
car.info()
console.log(car)