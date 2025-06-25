let todoList = [];
const date = new Date();
function renderList() {
    const storedList = localStorage.getItem("ToDoList");

    // ✅ Use fallback empty array if storedList is null
    todoList = storedList ? JSON.parse(storedList) : [];

    const tasksContainer = document.getElementById("tasks-cards-container");

    tasksContainer.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        tasksContainer.innerHTML += `<div class="tasks-card">
            <p>${todoList[i]}</p>
            <span id="show">${date.toLocaleString()}</span>
            <button class="delete-btn" onclick="deleteTask(${i})">
                <img src="./icons/delete.png" alt="delete" height="30px">
            </button>
        </div>`;
    }

    if (todoList.length === 0) {
        tasksContainer.innerHTML = "<p class='no-task-msg'>No Tasks Available</p><img src='./icons/Checklist-pana.png' class='no-task-img' alt='checklist' />";
    }
}

renderList();

function addTask() {

    const inputBox = document.getElementById("input-box");

    if (inputBox.value.trim() == "") {
        alert("Please Enter a task");
        return;
    }
    todoList.push(inputBox.value);
    localStorage.setItem("ToDoList", JSON.stringify(todoList));
    inputBox.value = "";

    renderList();
}
function deleteTask(index) {
    todoList.splice(index, 1);
    localStorage.setItem("ToDoList", JSON.stringify(todoList));
    renderList();
}
