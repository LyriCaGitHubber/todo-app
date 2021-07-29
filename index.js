import { getLocalStorage } from "./util/localStorage.js";

const tasks = [
  {
    title: getLocalStorage("Description", []),
    date: "tomorrow",
    isDone: false,
  },
];

const taskItems = tasks.map((task) => createTaskListItem(task));

const taskList = document.querySelector(".taskList");

const submit = document.querySelector(".btn");

submit.onclick = () => {
  taskList.append(...taskItems);
  window.location.href = "/new.html";
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
  span.innerText = task.title;
  label.append(input, span);
  return label;
}
