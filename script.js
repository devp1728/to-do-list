//init on empty array element called tasks
let tasks = [];

//add on click event listener
document.getElementById('addTaskBtn').addEventListener('click', function () {
    //get value of input box and store in variable called taskInput
    let taskInput = document.getElementById('taskInput').value;

    //check if taskInput has value
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById('taskInput').value = '';
        displayTasks();
    }
});

//function to display list
function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'>Remove</button>`;
        taskList.appendChild(li);
        taskCounter.textContent = tasks.length;
    });
}

//function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

//add event listener to clear all tasks
document.getElementById('clearTaskBtn').addEventListener('click', function () {
    tasks = [];
    displayTasks();
});
