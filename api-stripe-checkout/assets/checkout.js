import STRIPE_KEY from "./stripe-keys.JS";
// console.log(STRIPE_KEY.secret);

const d = document,
  $tacos = d.getElementById("tacos"),
  $template = d.getElementById("taco-template"),
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEY.secret}`,
    },
  };
// variables para guardar ID  de precios y products
let products, prices;

//* funcion para dividir en decimal el string del precio
const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  // esperamos las respuestas de fetch.all y por cada una crearemos un arreglo y al final por c/respuesta individual vamos agregando las respuesta y en formato JSON
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    // console.log(json);
    products = json[0].data;
    prices = json[1].data;
    // console.log(products, prices);

    prices.forEach((el) => {
      // filtra y x c/product compara el id d products con el product de precios
      let productData = products.filter((product) => product.id === el.product);
      // console.log(el.unit_amount);

      //* data-price para el figure
      let $taco = $template.content.childNodes[1];
      $taco.setAttribute("data-price", el.id);

      //* img con su atributos para el figure
      let $img = $template.content.childNodes[1].childNodes[1];
      let urlImg = productData[0].images[0];
      let $name = productData[0].name;
      $img.src = urlImg;
      $img.alt = $name;

      //* figcaption Precio
      let $figcaption = $template.content.childNodes[1].childNodes[3];
      $figcaption.innerHTML = `${productData[0].name} <br>  
       ${el.unit_amount_decimal.slice("", -2)},00 ${el.currency}`;

      let $clone = d.importNode($taco, true);
      $fragment.appendChild($clone);
    });
    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "ocurrio un error al conectar con Stripe";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });

//? redirects a pagina de pagos y url de success
d.addEventListener("click", (e) => {
  //? (*) para que tenga efecto en todos los elementos de .taco
  if (e.target.matches(".taco *")) {
    let price = e.target.parentElement.getAttribute("data-price");

    Stripe(STRIPE_KEY.public)
      .redirectToCheckout({
        lineItems: [{ price: price, quantity: 1 }], //1 objeto por cada precio de product
        mode: "subscription", //modo de cobro mensual (si tiene)
        successUrl: "http://127.0.0.1:5500/assets/succes.html",
        cancelUrl: "https://www.pago-cancelado",
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          $tacos.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});

//! para este ejercicio se activo el modo solo cliente, =>Para generar páginas de compra con un SKU de producto o un ID de precio desde el Dashboard, se harán públicos tus ID de producto. Los usuarios que conozcan el ID público de un producto podrán comprar ese producto. No se pueden comprar productos archivados.Si no quieres que los ID de producto sean públicos o quieres rellenar de forma dinámica una página de compra sin usar productos en Stripe, intégrate usando la integración de servidor y clientes de Checkout. https://dashboard.stripe.com/settings/checkout
