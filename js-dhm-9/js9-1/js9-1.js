const box = document.createElement(`div`)
box.classList.add(`bgColor`)
box.classList.add(`textSize`)
box.classList.add(`color`)
const copy = box.cloneNode(true)
document.body.append(box,copy)