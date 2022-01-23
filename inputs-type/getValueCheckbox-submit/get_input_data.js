// =================================================================
// ? input checkbox - obtener todos los valores
// =================================================================

const d = document,
  $valores = d.querySelectorAll(".valores");
$button = d.getElementById("btn");

d.addEventListener("submit", (e) => {
  if (e.target.matches("form")) {
    e.preventDefault();

    $valores.forEach((el) => {
      if (el.checked == true) {
        console.log(el.checked);
        console.log(el.value);
      }
    });
  }
});
