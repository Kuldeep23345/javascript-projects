let hitVal = "";
function makeBubbles() {
  let valStore = "";
  for (let i = 0; i <= 250; i++) {
    let rn = Math.floor(Math.random() * 10);
    valStore += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".bubbles-container").innerHTML = valStore;
}
function hitRun() {
  hitVal = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = hitVal;
}

function runTimer() {
  let timer = 60;
   setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timer);
      document.querySelector(
        ".bubbles-container"
      ).innerHTML = `<h1 class="game-over">Game Over !</h1>`;
    }
  }, 1000);
}
let score = 0;
function increaseScore() {
  score += 10;
  document.querySelector(".score").textContent = score;
}

function comparison() {
  document
    .querySelector(".bubbles-container")
    .addEventListener("click", (e) => {
      let targetValue = parseInt(e.target.innerText);
      if (hitVal === targetValue) {
        increaseScore();
        makeBubbles();
        hitRun();
      }
    });
}
comparison();
runTimer();
hitRun();
makeBubbles();
