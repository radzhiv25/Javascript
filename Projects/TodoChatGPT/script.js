// JavaScript for the to-do list application
let form = document.querySelector("form");
let input = form.querySelector("input");
let todoList = document.querySelector("#todo-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let text = input.value;
    input.value = "";
    let newTodo = document.createElement("li");
    let newTodoText = document.createElement("span");
    let newTodoButton = document.createElement("button");
    newTodoText.innerHTML = text;
    newTodoButton.innerHTML = "Delete";
    newTodo.appendChild(newTodoText);
    newTodo.appendChild(newTodoButton);
    todoList.appendChild(newTodo);
    newTodoButton.addEventListener("click", function () {
        todoList.removeChild(newTodo);
    });
});


