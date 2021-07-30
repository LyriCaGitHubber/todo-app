import { getLocalStorage } from "./util/localStorage.js";

const Tasks = getLocalStorage("tasks", []);
console.log(Tasks);
const taskItems = Tasks.map((task) => createTaskListItem(task));
const taskList = document.querySelector(".taskList");

taskList.append(...taskItems);

//Date Buttons
const btnToday = document.querySelector("#today");
const btnTomorrow = document.querySelector("#tomorrow");
const btnSelectDate = document.querySelector("#selectDate");

btnToday.onclick = () => {
  taskList.innerHTML = "";
  const taskListToday = Tasks.filter((today) => today.date === "Today");
  const todayItems = taskListToday.map((task) => createTaskListItem(task));
  taskList.append(...todayItems);
};

btnTomorrow.onclick = () => {
  taskList.innerHTML = "";
  const tasksTomorrow = Tasks.filter(
    (tomorrow) => tomorrow.date === "Tomorrow"
  );
  const tomorrowItems = tasksTomorrow.map((task) => createTaskListItem(task));
  taskList.append(...tomorrowItems);
};

// Creates html dom for list items
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
