const d = document,
  ls = localStorage;

const $form = d.getElementById("form");
const $formInput = d.getElementById("form-input");
const $ulList = d.getElementById("ul");

const taskData = JSON.parse(ls.getItem("lsData")) || [];

const updateTask = () => {
  const listTasksString = JSON.stringify(taskData);
  ls.setItem("lsData", listTasksString);
};

const render = () => {
  const html = taskData.map((el) => `<li>${el}</li>`);
  $ulList.innerHTML = html.join("");
  const $listTasks = d.querySelectorAll("ul li");
  $listTasks.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      el.parentNode.removeChild(el);
      taskData.splice(i, 1);
      updateTask();
    });
  });
};

d.addEventListener("DOMContentLoaded", (e) => {
  render();

  d.addEventListener("click", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      const taskText = $formInput.value;
      $formInput.value = "";
      taskData.push(taskText);

      updateTask();
      render();
    }
  });
});
