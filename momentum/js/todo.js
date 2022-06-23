const toDoForm= document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const toDos = [];
const TODOS_KEY = "todos";
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo){//list요소를 어떻게 추가해줄 것인가.
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delete_btn = document.createElement("button");
    delete_btn.innerHTML = "❎";
    delete_btn.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(delete_btn);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is turn of", item);
}
const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if(saveTodos){
    const parsedToDos = JSON.parse(savedTodos);
    parsedToDos.forEach(sayHello);
}
