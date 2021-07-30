import { setLocalStorage, getLocalStorage } from "./util/localStorage.js";

const form = document.querySelector(".task-form");

form.onsubmit = function (event) {
  event.preventDefault();

  const oldTasks = getLocalStorage("tasks", []);

  const newTask = { taskTitle: "", date: "", done: false };

  const dateInputChecked = document.querySelector(".when_btn:checked").value;
  const taskContent = document.getElementById("enterTask").value;

  newTask.taskTitle = taskContent;
  newTask.date = dateInputChecked;

  const newTasks = [...oldTasks, newTask];

  setLocalStorage("tasks", newTasks);

  location.href = "/";
};
