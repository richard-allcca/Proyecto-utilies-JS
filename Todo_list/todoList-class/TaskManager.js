export default class TaskManager {
  taskArray = [];
  lastId = 0;
  listTasks = null;
  tagText = null;
  lsData = "tasks";

  constructor(listTasks, tagText) {
    this.listTasks = listTasks;
    this.tagText = tagText;

    if (localStorage.getItem("lsData") !== null) {
      this.taskArray = JSON.parse(localStorage.getItem("lsData")) || [];
      // la sgte instruction le da el valor el ultimo id para al agregar element le de el sgte id y continuar la secuencia
      this.lastId =
        this.taskArray.length > 0
          ? this.taskArray[this.taskArray.length - 1].id
          : 0;
      // renderiza los elementos del localStorage
      this.refresh();
    }
  }

  add() {
    this.lastId++;
    this.taskArray.push({
      id: this.lastId,
      text: this.tagText.value,
    });
    localStorage.setItem("lsData", JSON.stringify(this.taskArray));
    // this.refresh();
  }

  remove(id) {
    this.taskArray = this.taskArray.filter((el) => el.id !== parseInt(id));
    localStorage.setItem("lsData", JSON.stringify(this.taskArray));

    this.refresh();
  }

  refresh() {
    this.listTasks.innerHTML = "";
    this.taskArray.forEach((el) => {
      const $tr = document.createElement("tr");
      const $td = document.createElement("td");
      const $tdRemove = document.createElement("td");

      $td.innerHTML = el.text;
      $tdRemove.innerHTML = `<button id=${el.id} class="btn-danger">Eliminar</button>`;

      $tr.insertAdjacentElement("beforeend", $td);
      $tr.insertAdjacentElement("beforeend", $tdRemove);
      this.listTasks.insertAdjacentElement("beforeend", $tr);
    });
  }
}
