const d = document;

export default function searchFilter(input, selector) {
  // const $selector = d.querySelectorAll(selector);

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      // si la presiona la tecla escape limpia el input
      if (e.key === "Escape") e.target.value = "";

      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
