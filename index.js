const tasks = [
  {
    title: "Javascript lernen",
    date: "tomorrow",
    isDone: false,
  },
  {
    title: "HTML lernen",
    date: "today",
    isDone: false,
  },
  {
    title: "CSS lernen",
    date: "tomorrow",
    isDone: true,
  },
  {
    title: "CSS lernen",
    date: "tomorrow",
    isDone: true,
  },
];

const taskItems = tasks.map((task) => createTaskListItem(task));

const taskList = document.querySelector(".taskList");

const submit = document.querySelector(".btn");

submit.onclick = () => {
  taskList.append(...taskItems);
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
