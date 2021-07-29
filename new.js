const form = document.querySelector(".task-form");
form.onsubmit = function (event) {
  event.preventDefault();
  const newTask = { taskTitle: "", date: "", done: false };

  const dateInputChecked = document.querySelector(".when_btn:checked").value;
  const taskContent = document.getElementById("enterTask").value;

  newTask.taskTitle = taskContent;
  newTask.date = dateInputChecked;

  console.log(newTask);
};
