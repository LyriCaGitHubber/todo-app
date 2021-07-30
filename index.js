import { getLocalStorage } from "./util/localStorage.js";

const Tasks = getLocalStorage("tasks", []);
const taskItems = Tasks.map((task) => createTaskListItem(task));

const taskList = document.querySelector(".taskList");

taskList.append(...taskItems);
console.log(taskItems);
const btnToday = document.querySelector("#today");
const btnTomorrow = document.querySelector("#tomorrow");
const btnSelectDate = document.querySelector("#selectDate");

btnToday.onclick = () => {
  taskList.innerHTML = "";
  const todayFilter = taskItems.filter(
    (item) => item.className == "taskItem.today"
  );
  console.log(todayFilter);
};

function createTaskListItem(task) {
  const label = document.createElement("label");
  label.className = "taskItem";
  const input = document.createElement("input");
  input.className = "taskItem__checkbox";
  input.setAttribute("type", "checkbox");
  input.checked = task.done;
  const span = document.createElement("span");
  span.className = "taskItem__labelText";
  span.innerText = task.taskTitle;
  label.append(input, span);
  return label;
}
