const menuButton = document.querySelector(".iconButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");
const newTask = { taskContent: "Javascript lernen", when: "", done: false };

const taskOne = createTaskListItem(newTask);

taskList.append(taskOne);

function createTaskListItem(task) {
  const label = document.createElement("label");
  label.className = "taskItem";
  const input = document.createElement("input");
  input.className = "taskItem__checkbox";
  input.setAttribute("type", "checkbox");
  input.checked = task.done;
  const span = document.createElement("span");
  span.className = "taskItem__labelText";
  span.innerText = task.taskContent;
  label.append(input, span);
  return label;
}
