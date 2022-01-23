const d = document,
  $valores = d.querySelectorAll(".valores"),
  $radio = d.querySelectorAll(".radio"),
  $paises = d.getElementById("paises"),
  $button = d.getElementById("btn"),
  $btnRadio = d.getElementById("btnRadio"),
  $btnList = d.getElementById("btnList");

d.addEventListener("click", (e) => {
  // if (e.target != $button) {
  //   return false;
  // }
  //? checbox
  if (e.target == $button) {
    $valores.forEach((el) => {
      if (el.checked == true) {
        console.log(el.checked);
        console.log(el.value);
      }
    });
  }
  //? radio
  if (e.target == $btnRadio) {
    $radio.forEach((el) => {
      if (el.checked == true) {
        console.log(el.checked);
        console.log(el.value);
      }
    });
  }
  //? lista
  if (e.target == $btnList) {
    console.log($paises.value);
  }
});
