// =================================================================
// ? input todo list sin persitencia de datos
// =================================================================
const d = document,
  $formInput = d.getElementById("form-input"),
  $ulList = d.getElementById("ul-list");

d.addEventListener("submit", (e) => {
  let list = "";
  if (e.target.matches("form")) {
    e.preventDefault();

    console.log($formInput.value);
    list += `<li>${$formInput.value}</li>`;
    $ulList.innerHTML += list;
    $formInput.value = "";
    $formInput.focus();
  }
});
