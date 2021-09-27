const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark, panelStage, ball) {
   const $themeBtn = d.querySelector(btn),
      $selectors = d.querySelectorAll("[data-dark]"),
      $stage = d.querySelector(panelStage),
      $ball = d.querySelector(ball);

   // console.log($selectors);
   let moon = "🌙";
   let sun = "☀️";

   const darkmode = () => {
      $selectors.forEach((el) => el.classList.add(classDark));
      $themeBtn.textContent = sun;
      $stage.classList.add("panel-dark-mode")
      $ball.classList.add("ball-dark-mode")
      ls.setItem("theme", "dark");
   }
   const lightmode = () => {
      $selectors.forEach(el => el.classList.remove(classDark));
      $themeBtn.textContent = moon;
      $stage.classList.remove("panel-dark-mode")
      $ball.classList.remove("ball-dark-mode")
      ls.setItem("theme", "light");
   }
   d.addEventListener("click", (e) => {

      if (e.target.matches(btn)) {
         if ($themeBtn.textContent === moon) {
            darkmode()
         } else {
            lightmode()
         }
      }
   })
   // con el sgte evento podemos mantener el thema oscuro 
   d.addEventListener("DOMContentLoaded", (e) => {
      // metodo para obtener del localstorage una variable localStorage es "getItem("nombre de la variable")"
      console.log(ls.getItem("theme"));
      if (ls.getItem("theme") === null) ls.setItem("theme", "light");
      // metodo para asignarle una variable de tipo localStorage es "setItem("nombre","valor")"
      if (ls.getItem("theme") === "light") lightmode();
      if (ls.getItem("theme") === "dark") darkmode();
   })
}
