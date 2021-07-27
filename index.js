const menuButton = document.querySelector(".iconButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

const taskOne = createTaskListItem();

taskList.append(taskOne);

function createTaskListItem() {
  const taskListItem = document.createElement("label");
  taskListItem.className = "taskItem";
  const taskListInput = document.createElement("input");
  taskListInput.className = "taskItem__checkbox";
  taskListInput.setAttribute("type", "checkbox");
  const taskListSpan = document.createElement("span");
  taskListSpan.className = "taskItem__labelText";
  taskListSpan.innerText = "New Task";
  taskListItem.append(taskListInput, taskListSpan);
  return taskListItem;
}

console.log(createTaskListItem());
