import "./task-list.css";
import checkedTaskItem from "./tasklist-item-checked.html";
import uncheckedTaskItem from "./tasklist-item-unchecked.html";

export default {
  title: "Components/Task-List",
  parameters: { layout: "fullscreen" },
};

export const taskItemCheck = () => checkedTaskItem;
export const taskItemUncheck = () => uncheckedTaskItem;
