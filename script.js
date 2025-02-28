//init on empty array element called tasks
let tasks = []
//add on click event listener
document.getElementById('addTaskBtn').addEventListener('click' , function ()(
    //get value of input box and store in variable called taskInput
    let taskInput = document.GetElementById('taskInput').value

//check if taskInput has value
if(taskInput){
    tasks.push(taskInput)

    document.getElementById('taskInput').value = ''

    displayTasks()
}

console.log(tasks)

))

//function to display list
function displayTasks() {
    let taskList = document.getElementById('taskList')

    taskList.innerHTML = ''


    task.forEach((task, index) => {
let li = document.createElement('li')

li.classList.add(
    "list-group-item",
    "d-flex"
    "justify-content-between"
    "align-items-center"



);
li.innerHtml = `$(tasks) <button class='btn btn-dark btn-sm' onclick= 'removeTask($(Index))'`
    }
    )
}