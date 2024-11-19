
function User (id,name,surname,email,phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    function push(){
        users.push(this.user)
    }}

let users = [
    new User(1,`pasha`,`kokos`,`asd@gmailasd`,123122),
    new User(2,`marik`,`kokos`,`asd@gmailasd`,123123),
    new User(3,`denus`,`kokos`,`asd@gmailasd`,123124),
    new User(4,`olya`,`kokos`,`asd@gmailasd`,123125),
    new User(5,`Anna`,`kokos`,`asd@gmailasd`,123126),
    new User(6,`Oleg`,`kokos`,`asd@gmailasd`,123127),
    new User(7,`Ivan`,`kokos`,`asd@gmailasd`,123128),
    new User(8,`Matas`,`kokos`,`asd@gmailasd`,123129),
    new User(9,`Sasha`,`kokos`,`asd@gmailasd`,1231234),
    new User(10,`andriy`,`kokos`,`asd@gmailasd`,123123533)
]

console.log(users.filter(user => user.id % 2 === 0))