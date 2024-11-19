class Client{


    constructor(id,name,surname,email, phone,order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
let customers = [
    new Client(1,`pasha`,`kokos`,`asd@gmailasd`,123122,[`cucumbers`,`tomatos`,`milk`]),
    new Client(3,`marik`,`kokos`,`asd@gmailasd`,123123,[`cucumbers`,`tomatos`]),
    new Client(5,`denus`,`kokos`,`asd@gmailasd`,123124,[`cucumbers`,`tomatos`,`coffe`,`soda`]),
    new Client(2,`olya`,`kokos`,`asd@gmailasd`,123125,[`cucumbers`,`tomatos`,]),
    new Client(4,`Anna`,`kokos`,`asd@gmailasd`,123126,[`cucumbers`,`tomatos`]),
    new Client(6,`Oleg`,`kokos`,`asd@gmailasd`,123127,[`cucumbers`,`tomatos`,`pepsi`]),
    new Client(7,`Ivan`,`kokos`,`asd@gmailasd`,123128,[`cucumbers`,`tomatos`]),
    new Client(8,`Matas`,`kokos`,`asd@gmailasd`,123129,[`cucumbers`,`tomatos`]),
    new Client(9,`Sasha`,`kokos`,`asd@gmailasd`,1231234,[`cucumbers`,`tomatos`]),
    new Client(10,`andriy`,`kokos`,`asd@gmailasd`,123123533,[`cucumbers`,`tomatos`])
]

console.log(customers.sort((a,b) => a.order.length - b.order.length))