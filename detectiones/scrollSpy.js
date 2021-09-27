//? Activa enlaces del menu para señalar la ubicacion del usuario en dichas secciones

const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      // console.log(entry, id);

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    //? 1° parameter -> si no especificamos un selector para root tomara como base el document para fijar el scroll
    // root
    //? 2° parameter -> con valor negativo reduce su campo de vision del document hacia adentro y centro
    // rootMargin: "-250px"
    //? 3° parameter -> con "0" se activa cuando el objeto en pantalla esta completo, pero con "0.5" se activara con 50% del objetivo
    threshold: [0.5, 0.7],
    //? ademas si usas [ ] para poner 2 valores los tomara como minimo y maximo (este metodo es recomendable)
  });

  $sections.forEach((el) => observer.observe(el));
}
