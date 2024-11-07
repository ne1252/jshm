let time = prompt("введіть хвилину(0-59)")
if (time >= 0 && time <= 15){
    console.log("зараз перша чверть")
}
else if (time > 15 && time <= 30){
    console.log("Заращ друга чверть")
}
else if (time > 30 && time <= 45){
    console.log("Зараз 3 чверть")
}
else if (time > 45 && time <= 59){
    console.log("зараз 4 чверть")
}