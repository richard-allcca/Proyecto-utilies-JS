const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id);

  const options = {
    enableHighAccuracy: true, // pide al dispositivo que tome la mejor lectura posible de la ubicación
    timeout: 5000, // cuanto tiempo espera para tomar la lectura
    maximumAge: 0, // evita que las lecturas se guarden en cache
  };

  const success = (position) => {
    let coords = position.coords;
    $id.innerHTML = `
    <p>Tu posición actual es:</p>
    <ul>
    <li>Latitud: <b>${coords.latitude}</b></li>
    <li>Longitud: <b>${coords.longitude}</b></li>
    <li>Precisión: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
    // console.log(coords);p
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message} </mark></p> `;
    console.log(`Error ${err.code}: ${err.message}`);
  };

  // getCurrentPosition recibe 3 parametros 1° funtion de success 2° funtion de error 3° options
  n.geolocation.getCurrentPosition(success, error, options);

  //? como un listener que va detectando tu pocisión segun estas en movimiento
  // n.watchPosition()
  // para mas info sobre esta clase entra a este link: https://www.w3schools.com/jsref/api_geolocation.asp
}
