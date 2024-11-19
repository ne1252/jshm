function Car (model,creator,year,maxspeed,Vengine){
    this.model = model
    this.creator= creator
    this.year = year
    this.maxspeed = maxspeed
    this.Vengine = Vengine
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
    }
    this.info = function (){
        for (const inf in this){
            console.log(inf , this[inf])
        }
    }
    this.increaseMaxSpeed = function  (newSpeed){
        this.maxspeed = newSpeed
    }
    this.changeYear = function (newValue){
        this.year = newValue
    }
    this.addDriver = function(driver){
        this.driver = driver
    }
}
let car1 = new Car(`rx-7`,`toyota`,`2000`,300,9)
car1.addDriver({name: `maximka`})
console.log(car1)
