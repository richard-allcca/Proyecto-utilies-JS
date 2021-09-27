const d = document;
const $root = d.getElementById("root");
const $form = d.querySelector("form");
const $inputs = d.querySelectorAll("form [required]");

d.addEventListener("DOMContentLoaded", (e) => {
  //? GET valores de INPUT
  d.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.target.matches("form [required]")) {
      console.log(e.target);
    }
  });

  $form.addEventListener("click", (e) => {
    //? GET valores de RADIO
    if (e.target.matches("form [type='radio']")) {
      console.log(e.target.value);
    }
    //? GET valores de CHECKBOX
    if (e.target.matches("form [type='checkbox']")) {
      console.log(e.target.value);
    }
    //? GET valores de LIST
    if (e.target.matches("form select")) {
      console.log(e.target.value);
    }
  });
});
