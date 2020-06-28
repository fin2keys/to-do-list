
const todoContainer = document.querySelector('.todo-list-container')
const mainButton = document.querySelector('input[value="TO-DO"]')
const deleteButton = document.querySelector('.todo-list-container')

let counter = -1

const addNewTodo = () => {
  counter++
  const toDo = document.querySelector('input[type="text"]')
  const newtoDoContainer = document.createElement('div')
  newtoDoContainer.className = 'to-do-content'
  newtoDoContainer.setAttribute('data-key', `${counter}`)
  const newtoDo = document.createElement('div')
  const newTrashCan = document.createElement('div')
  newtoDo.className = 'to-do'
  newTrashCan.className = 'trash-can'
  newTrashCan.setAttribute('data-key', `${counter}`)
  newtoDo.innerHTML = `<a>${toDo.value}</a>`
  todoContainer.appendChild(newtoDoContainer)
  newtoDoContainer.appendChild(newtoDo)
  newtoDoContainer.appendChild(newTrashCan)
  toDo.value = ''
}

const removeTodo = event => {
  for(timer = 0; timer < todoContainer.childElementCount; timer++) {
    if(event.target.dataset.key == document.getElementsByClassName('to-do-content')[timer].dataset.key) {
      document.getElementsByClassName('to-do-content')[timer].remove()
    }
  }
  //console.log(event)
  //document.getElementsByClassName('to-do-content')[counter].remove()
}

mainButton.addEventListener('click', addNewTodo)
deleteButton.addEventListener('click', removeTodo)


