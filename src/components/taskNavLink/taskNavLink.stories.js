import "./taskNavLink.css";
import taskNavLink from "./taskNavLink.html";
import taskNavLinkActive from "./taskNavLinkActive.html";

export default {
  title: "Components/TaskNav",
  parameters: { layout: "fullscreen" },
};

export const regular = () => taskNavLink;
export const active = () => taskNavLinkActive;
