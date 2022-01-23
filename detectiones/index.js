import { moveBall } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  moveBall(e.target, ".ball", ".stage");
});
