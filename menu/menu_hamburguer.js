const d = document;

export default function hamburgerMenu(panelBtn, panel, menuLink) {


   d.addEventListener("click", (e) => {
      if (e.target.matches(panelBtn)) {
         d.querySelector(panel).classList.toggle("is-active")
         /* el segundo is-active es para que el boton sea X */
         d.querySelector(panelBtn).classList.toggle("is-active")
      }
      if (e.target.matches(menuLink)) {
         d.querySelector(panel).classList.remove("is-active")
         d.querySelector(panelBtn).classList.remove("is-active")
      }
   })
} 