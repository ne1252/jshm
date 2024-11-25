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
    div.classList.add(`item`)
    document.body.appendChild(div)
    const h1 = document.createElement(`h1`)
    h1.classList.add(`heading`)
    h1.innerText = course.title
    const p = document.createElement(`p`)
    p.classList.add(`description`)
    p.innerText = course.monthDuration
    div.append(h1,p)
}