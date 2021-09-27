const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    // console.log($players, random, winner);
    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
// =================================================================
//? SORTE MITOCODE
// =================================================================
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function lottery() {
  const result = [];

  while (result.length < 6) {
    const number = randomIntFromInterval(1, 45);
    if (result.includes(number)) {
      continue;
    }
    result.push(number);
  }

  return result;
}
console.log(lottery());

// =================================================================
//? SORTE YOUTUBE
// =================================================================
// const getWinnercomment = (selector) => {
//    const $players = d.querySelectorAll(selector),
//       randon = Math.floor(Math.random() * $players.length),
//       winner = $players[randon];
// }

// getWinnercomment("ytd-comment-thread-rederer #author-text span")
