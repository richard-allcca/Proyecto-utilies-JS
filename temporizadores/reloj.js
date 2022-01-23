const d = document;

//? RELOJ
export function digitalClock(reloj, activarR, detenerR) {
  // const $reloj = d.querySelector(reloj);
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(activarR)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML = `<h3>${clockHour}</h3>`;
        // $reloj.innerHTML = `<h3>${clockHour}</h3>`
      }, 1000);

      // disabled desactiva el boton del reloj
      e.target.disabled = true;
    }
    if (e.target.matches(detenerR)) {
      clearInterval(clockTempo);

      /* usa esto solo si quieres eliminar el reloj de la pantalla */
      // d.querySelector(reloj).innerHTML = null;

      /* FIXME ten cuidado al usar el parametro para activar el reloj  */
      d.querySelector(activarR).disabled = false;
    }
  });
}

//? ALARMA
export function alarma(sound, activarA, detenerA) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(activarA)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 1000);

      e.target.disabled = true;
    }
    if (e.target.matches(detenerA)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      // con currenteTime el sonido regresa a cero
      $alarm.currentTime = 0;

      d.querySelector(activarA).disabled = false;
    }
  });
}
