const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(), //obtiene el area de un elemento
    limitsStage = $stage.getBoundingClientRect();

  // console.log(e.keyCode);
  // console.log(e.key);
  // console.log(limitsBall, limitsStage);

  let section = d.querySelector('a[href="#seccion2"]'); //? valida si el panel esta en foco y activar el movimento

  if (section.classList.contains("active")) {
    switch (e.keyCode) {
      case 37:
        if (limitsBall.left > limitsStage.left) {
          e.preventDefault();
          x--;
        }
        // if (redondeo > limitsStage.left) x--;
        break;
      case 38:
        if (limitsBall.top > limitsStage.top) {
          e.preventDefault();
          y--;
        }
        break;
      case 39:
        if (limitsBall.right < limitsStage.right) {
          e.preventDefault();
          x++;
        }
        break;
      case 40:
        if (limitsBall.bottom < limitsStage.bottom) {
          e.preventDefault();
          y++;
        }
        break;

      default:
        break;
    }
    $ball.style.transform = `translate(${x * 5}px,${y * 6}px) `;
  }
}

export function shorcuts(e) {
  // console.log(e.type);
  // console.log(e.key); //detección del evento
  // console.log(e.keyCode);//codigo de tecla

  // evento para "alert" con (alt + a)
  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el Teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Has lanzado una confirmación con el Teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Has lanzado prompt con el Teclado");
  }
}
