const d = document;

export function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    //  aqui no usamos matches xk hacemos la comparacion directa con la variable que contiene el valor del ID
    if (e.target === $form) {
      e.preventDefault();
      if (e.target === "Escape") e.target.value = "";
      // window.open recibe 3 parametros
      tester = window.open(
        $form.direccion.value, // recibe la ubicacion del input
        "tester", // el target(nombre variable)guarda el contenido de la new window
        `innnerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}` // las medidas de la ventana por abrir
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      tester.close();
    }
  });
}
