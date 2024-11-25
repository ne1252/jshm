let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    const div = document.createElement(`div`)
    const h3 = document.createElement(`h3`)
    const p =document.createElement(`p`)
    document.body.appendChild(div)
    h3.innerText = course.title
    p.innerText = course.monthDuration
    div.append(h3,p)
}