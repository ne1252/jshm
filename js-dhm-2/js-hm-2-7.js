let day = prompt("Напишіть яке сьогодні число(1-31)")
if (day >=1 ?? day <=10){
    console.log("Перша декада")
}
else if (day >10 && day <= 20){
    console.log("2 декада")
}
else if(day>20&&day<=31){
    console.log("3 декада")
}