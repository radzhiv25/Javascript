// Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event){
    // Prevents form from submitting 
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Done button
    const doneBtn = document.createElement('button');
    doneBtn.innerHTML ='<i class = "fas fa-check"></i>';
    doneBtn.classList.add('done-btn');
    todoDiv.appendChild(doneBtn);
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    todoDiv.appendChild(deleteBtn);
    // Append to list
    todoList.appendChild(todoDiv);
    // clear input value
    todoInput.value = ""
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();  
    }
    if(item.classList[0] === "done-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('done');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }