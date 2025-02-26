window.onload = function () {

  let hit = null;
  let score = null;
  let count = null;

  const scoreElem = document.querySelector(".score");
  const btm = document.querySelector(".btm");
  const loader = document.querySelector("#loader");
  const startGameBtn = document.querySelector("#start-game-btn");

  const h1 = document.createElement("h1");
  h1.textContent = "Game Over😒"

  const button = document.createElement("button");
  button.setAttribute("id", "play-again-btn");
  button.textContent = "Play Again";

  const div = document.createElement("div");
  div.className = "game-over-popup";
  div.appendChild(h1);
  div.appendChild(button);
  
  function timer() {
    let interval = setInterval(() => {
      if (count >= 0) {
        document.querySelector(".timer").textContent = count--;
      }
      else {
        btm.innerHTML = null;
        btm.appendChild(div);
        audio.src = "./assets/game-over.mp3";
        audio.play();
        clearInterval(interval);
      }
    }, 1000);
  }

  function createBubble() {
    btm.innerHTML = null;
    for (i = 1; i <= 112; i++) {
      let rn = Math.floor(Math.random() * 10);
      btm.innerHTML += `<div class='bubble'>${rn}</div>`;
    }
  }

  function getNewHits() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = hit;
  }

  function updateScore() {
    score += 10;
    scoreElem.textContent = score;
  }

  btm.addEventListener("click", (e) => {
    let bubbleValue = Number(e.target.textContent)
    if (bubbleValue === hit) {
      updateScore();
      createBubble();
      getNewHits();
    }
  })

  const audio = new Audio();
  function start() {
    loader.style.animation =  "fade-anime 0.5s linear forwards";
    audio.src = "./assets/hurry-up.mp3";
    audio.play();
    count = 59;
    score = 0
    timer();
    createBubble();
    getNewHits();
  }

  startGameBtn.addEventListener("click", () => {
    start();
  });

  button.addEventListener("click", () => {
    start();
  })
}