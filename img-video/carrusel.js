const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".sliders-btns .next"),
    $prevBtn = d.querySelector(".sliders-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");

  let i = 0;
  // ========================================
  //? marcadores de punto(codigo personal)
  // ========================================
  const $contenedor = d.querySelector(".sliders-slides"),
    $contentPunto = d.querySelector(".content-punto");

  for (let i = 0; i < $slides.length; i++) {
    let punto = d.createElement("div");
    punto.classList.add(`punto`);
    $contentPunto.appendChild(punto);
  }

  $contenedor.insertAdjacentElement("afterend", $contentPunto);
  let childNodes = [...$contentPunto.childNodes];
  childNodes[i].classList.add("active_punto");

  // ========================================
  //? eventos para cambiar vista de slider
  // ========================================
  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      childNodes[i].classList.remove("active_punto");
      i--;
    }
    if (i < 0) {
      i = $slides.length - 1;
    }

    $slides[i].classList.add("active");

    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      childNodes[i].classList.remove("active_punto");
      i++;
    }
    if (i >= $slides.length) {
      i = 0;
    }

    $slides[i].classList.add("active");
    childNodes[i].classList.add("active_punto");
  });
}
