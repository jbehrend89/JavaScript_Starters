var todoItems = [
    {
        text: "Example",
        complete: false,
    },
];

let todoTasksText = [];
let todoTasksStatus = [];

updateTodoList();

function addTodoItem() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
    }
    updateTodoList();
}

function updateTodoList() {
    // get the todo-list element from the page
    let todoListElement = document.getElementById("todo-list");
    todoListElement.innerHTML = ""; //this line stops it adding multiple lines of the same data
    // for each task in the todaTaskText list:
    // create a new paragraph element
    todoTasksText.forEach((item, index) => {
    let newTodoTaskElement = createNewTodoItemElement (item, index)
    todoListElement.appendChild(newTodoTaskElement);
});
}

function createNewTodoItemElement(item, index) {
    // console.log(item, index);
    // console.log(item);
    let item_element = document.createElement("p");
//      set the inner text of the paragraph to the task text
    item_element.innerText = item
    console.log(item_element)

    if (todoTasksStatus[index] == true){
        item_element.classList.add("complete");
    }
//      create a new list item (<li>) element
    let listItem = document.createElement('li');
//      add the paragraph tag as a child of the li element 
    listItem.appendChild(item_element);

    let completeButtonElement = document.createElement ("input");
    completeButtonElement.type = "button"
    completeButtonElement.value = "completed";
    completeButtonElement.onclick = function(){
        markComplete(index)
    }
    listItem.appendChild(completeButtonElement);

    return listItem

}

function markComplete(index) {
    if (todoTasksStatus[index] == false){
        todoTasksStatus[index] = true;
    } else {
        //true
        todoTasksStatus[index] = false;
    }
    updateTodoList();
}
