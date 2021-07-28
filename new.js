const form = document.querySelector(".task-form");
form.onsubmit = function (event) {
  event.preventDefault();
  const newTask = { task: "", date: "", done: false };
  newTask.task = document.getElementById("enterTask").value;
  newTask.date = document.querySelector(".when_btn:checked").value;
  newTask.done = true;

  console.log(newTask, newTask.task, newTask.date, newTask.done);
};
