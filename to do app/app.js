let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let taskDiv = document.querySelector(".tasks");

// empty array to store the function
let arrayOftasks = [];

//adding taskes to array
if(localStorage.getItem("data")){
    arrayOftasks = JSON.parse(localStorage.getItem("data"));
}

getDataFromLocalStorage();

taskDiv.addEventListener("click",(e)=>{
    if (e.target.classList.contains("del")){
        //remove task from the tasks div
        e.target.parentElement.remove()
        //removal function from local storage
        removeTaskFromLocalStorage(e.target.parentElement.getAttribute("id-data"));
    }
    if(e.target.classList.contains("task")){
        //toggle the class "done"
        e.target.classList.toggle("done");
        //toggle the state "completed from the opject (task)"
        toggleCompletedState(e.target.getAttribute("id-data"))
    }
})

submit.addEventListener("click",()=>{ //check if the input field is empty
    if(input.value != ""){
        addTaskToArray(input.value);
        input.value = "" //Empty input field
    }
})

function addTaskToArray (taskText){
    //task Data
    const task = {
        id: Date.now(),
        content: taskText,
        completed: false
    };
    arrayOftasks.push(task);
    //append the elements to the page
    addElementsToPageFrom(arrayOftasks);
    //add taskes to local storage
    addTaskToLocalStorageFrom(arrayOftasks);
}

function addElementsToPageFrom (arrayOftasks){
    taskDiv.innerHTML = ""
    //looping on Array Of functions
    arrayOftasks.forEach((task)=>{
        let div = document.createElement("div");
        div.className = "task";
        if(task.completed){
            div.className = "task done"
        }
        div.setAttribute ("id-data", task.id);
        div.appendChild(document.createTextNode(task.content));
        //Creat Delete span
        let span = document.createElement("span");
        span.className ="del";
        span.appendChild(document.createTextNode("delete"));
        div.appendChild(span);
        //append task to main div
        taskDiv.appendChild(div);
    })
}
function addTaskToLocalStorageFrom(arrayOftasks){
    window.localStorage.setItem("data", JSON.stringify(arrayOftasks))
}

function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("data");
    if(data){
        let tasks = JSON.parse(data)
        addElementsToPageFrom(tasks)
    }
}

function removeTaskFromLocalStorage(taskId){
    arrayOftasks = arrayOftasks.filter((task)=> task.id !=taskId)
    addTaskToLocalStorageFrom(arrayOftasks);
}
function toggleCompletedState(taskId){
    for (let i = 0; i < arrayOftasks.length; i++) {
        if (arrayOftasks[i].id == taskId) {
        arrayOftasks[i].completed == false ? (arrayOftasks[i].completed = true) : (arrayOftasks[i].completed = false);
}
    }
        addTaskToLocalStorageFrom(arrayOftasks);
}