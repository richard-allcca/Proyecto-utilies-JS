const d = document;

const $todoForm = d.getElementById("todo-form");
const $inputForm = d.getElementById("input-form");
const $listTask = d.getElementById("list-task");

const listTask = JSON.parse(localStorage.getItem("todoText")) || [];

const updateTask = () => {
  const ls_listTaskString = JSON.stringify(listTask);
  localStorage.setItem("todoText", ls_listTaskString);
};

const render = () => {
  const template = listTask.map((el) => `<li>${el}</li>`);
  $listTask.innerHTML = template.join("");
  //? asignando eventos - listItemn
  const $listTask_li = d.querySelectorAll("#list-task li");
  $listTask_li.forEach((el, i) => {
    el.addEventListener("click", () => {
      el.parentNode.removeChild(el);
      listTask.splice(i, 1);
      updateTask();
    });
  });
};

d.addEventListener("DOMContentLoaded", () => {
  render();

  d.addEventListener("submit", (e) => {
    if (e.target === $todoForm) {
      e.preventDefault();
      const todoText = $inputForm.value;
      $inputForm.value = "";
      listTask.push(todoText);

      updateTask();
      render();
    }
  });
});

//? metodo del profe
// $todoForm.onsubmit = (e) => {
//   e.preventDefault();
//   const todoText = $inputForm.value;
//   $inputForm.value = "";
//   listTask.push(todoText);

//   const ls_listTaskString = JSON.stringify(listTask);
//   localStorage.setItem("todoText", ls_listTaskString);

//   render();
// };
