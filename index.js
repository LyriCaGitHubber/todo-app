const menuButton = document.querySelector(".iconButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

const taskOne = createTaskListItem();

taskList.append(taskOne);

function createTaskListItem() {
  const label = document.createElement("label");
  label.className = "taskItem";
  const input = document.createElement("input");
  input.className = "taskItem__checkbox";
  input.setAttribute("type", "checkbox");
  const span = document.createElement("span");
  span.className = "taskItem__labelText";
  span.innerText = "New Task";
  label.append(input, span);
  return label;
}

console.log(createTaskListItem());
