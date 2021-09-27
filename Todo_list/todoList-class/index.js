import TaskManager from "./TaskManager.js";
const $texto = document.getElementById("textTask");
const $listTask = document.getElementById("listTask");

document.addEventListener("DOMContentLoaded", (e) => {
  let taskManager = new TaskManager($listTask, $texto);

  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-success")) {
      taskManager.add();
      taskManager.refresh();
      $texto.value = "";
      $texto.focus();
    }
    if (e.target.matches(".btn-danger")) {
      taskManager.remove(e.target.id);
    }
  });
});

setTimeout(() => {}, 1000);
