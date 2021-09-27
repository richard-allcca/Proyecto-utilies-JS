const d = document,
   w = window,
   n = navigator;

export default function networkStatus() {

   const $div = d.createElement("div")

   const isOnLine = () => {
      if (n.onLine) {
         $div.textContent = "Conexión Reestablecida";
         $div.classList.remove("offline");
         $div.classList.add("online");
      } else {
         $div.textContent = "Conexión Perdida";
         $div.classList.add("offline");
         $div.classList.remove("online")
      }
      d.body.insertAdjacentElement("afterbegin", $div);
      setTimeout(() => {
         d.body.removeChild($div)
      }, 1500);
   };
   w.addEventListener("online", (e) => isOnLine());
   w.addEventListener("offline", (e) => isOnLine());
}