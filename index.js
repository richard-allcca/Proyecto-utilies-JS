import { digitalClock } from "./temporizadores/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  digitalClock("#reloj", "#activar-reloj", "#detener-reloj");
});

function saludo() {
  return console.log("hola mundo desde javascript");
}
