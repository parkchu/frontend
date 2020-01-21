import App from "./App.js";
import { filterMap } from "./utils/constants.js";

const data = [
  {
    content: "새로운 타이틀",
    isCompleted: false,
    onEdit: false
  },
  {
    content: "완료된 타이틀",
    isCompleted: true,
    onEdit: false
  },
  {
    content: "완료된 타이틀",
    isCompleted: true,
    onEdit: false
  }
];

const init = () => {
  const app = new App({
    $targetTodoList: document.querySelector("#todo-list"),
    $targetTodoInput: document.querySelector("#new-todo-title"),
    $targetTodoCount: document.querySelector(".todo-count"),
    $targetTodoFilter: document.querySelector(".filters"),
    filter: filterMap.ALL,
    data
  });
};

init();