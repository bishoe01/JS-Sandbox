const toDoForm= document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newTodo){//list요소를 어떻게 추가해줄 것인가.
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delete_btn = document.createElement("button");
    li.appendChild(span);
    span.appendChild(delete_btn);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);