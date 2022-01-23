import { alarma, digitalClock } from "./reloj.js";

const d = document;
// $reloj = d.getElementById("reloj"),
// $activarR = d.getElementById("activar-reloj"),
// $detenerR = d.getElementById("detener-reloj");

d.addEventListener("DOMContentLoaded", (e) => {
  digitalClock("#reloj", "#activar-reloj", "#detener-reloj");
  alarma("./assets/trueno.mp3", "#activar-alarma", "#detener-alarma");
});
