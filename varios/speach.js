const d = document,
  w = window;

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  /* obtener las voces del sistema */
  d.addEventListener("DOMContentLoaded", (e) => {

    // evento "voiceschange" para obtener las voces del S.O 
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {

      // guardamos en una variable las voces disponibles
      voices = w.speechSynthesis.getVoices();

      // agregamos cada elemento del arr "voices" al select 
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name}---${voice.lang}`;

        $speechSelect.appendChild($option);
      })
    })
  })

  /* asignar las voces al select   */
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechSynthesis.voice = voices.find(voice => voice.name === e.target.value)
    }

  })
  /* para que lea el texto */
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  })
}