class Girl{
    constructor(name,age,footSize) {
        this.name=name
        this.age=age
        this.footSize = footSize
    }
}
class Prince{
    constructor(name,age,snikers) {
        this.name=  name
        this.age=age
        this.snikers = snikers
    }
}
let girls = [
    new Girl(`katya`,17,28),
    new Girl(`Anna`,18,29),
    new Girl(`sofa`,18,30),
    new Girl(`marunka`,18,31),
    new Girl(`olya`,18,32),
    new Girl(`ira`,18,33),
    new Girl(`nana`,18,34),
    new Girl(`lilya`,18,35),
    new Girl(`vika`,18,36),
    new Girl(`Yla`,18,37)
]
const prins = new Prince(`albert`, 46, 34)
let mainGirl = girls.find(girl => girl.footSize === prins.snikers)
prins.wife = mainGirl