arr = ['Main','Products','About us','Contacts']
const ul = document.createElement(`ul`)
document.body.appendChild(ul)
for (const item of arr){
    const ulPart = document.createElement(`li`)
    ulPart.innerText = item
    ul.appendChild(ulPart)
}