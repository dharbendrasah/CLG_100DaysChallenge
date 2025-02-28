const container = document.querySelector(".container");
const title = document.querySelector(".title");
const playAgainBtn = document.querySelector(".play-again-btn");
const correctOrder = ["00.jpg", "10.jpg", "20.jpg", "01.jpg", "11.jpg", "21.jpg", "02.jpg", "12.jpg", "22.jpg"];
const totalImages = correctOrder.length;


function getUniqueNums(start = 0, end) {
  const unique = [];
  for (let i = start; i < end; i++) {
    const rn = Math.floor(Math.random() * end);
    unique.every(n => rn != n) ? unique.push(rn) : i--;
  }
  return unique;
}

function randomImage() {
  container.innerHTML = "";
  const uniqueNums = getUniqueNums(0, totalImages);
  for (let i = 0; i < totalImages; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.setAttribute("id", `box${i + 1}`);
    div.setAttribute("class", `box box${i + 1}`);

    img.setAttribute("id", `img${i + 1}`);
    img.setAttribute("class", "img");
    img.setAttribute("draggable", "true");
    img.setAttribute("src", `./images/${correctOrder[uniqueNums[i]]}`);

    container.appendChild(div);
    div.appendChild(img);
  }

  dragStartFun();
  dragEndFun();
}
randomImage();


function dragStartFun() {
  const images = document.querySelectorAll(".img");
  images.forEach((img) => {
    img.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });
}

function dragEndFun() {
  const boxes = Array.from(document.querySelectorAll(".box"));
  boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  
    box.addEventListener("drop", dropFunc);
  });
}

function dropFunc(e) {
  const data = e.dataTransfer.getData("text/plain");
  const img = document.getElementById(data);

  const src = e.target.src;
  e.target.src = img.src;
  img.setAttribute("src", src);

  checkOrder() && win();
}

function win() {
  const boxes = Array.from(document.querySelectorAll(".box"));
  boxes.forEach(box => {
    box.removeEventListener("drop", dropFunc);
    box.classList.add("border-none");
  });
  title.textContent = "Congratulations!";
  playAgainBtn.classList.remove("hide");
  playAgainBtn.classList.add("show");
  celebration();

  container.addEventListener("click", sweetAlert);
}

function checkOrder() {
  const images = document.querySelectorAll(".img");
  const imagesOrder = [];
  images.forEach(img => {
    const nameArr = img.getAttribute("src").split("/");
    const name = nameArr[nameArr.length - 1];
    imagesOrder.push(name);
  })
  return imagesOrder.every((name, idx) => name === correctOrder[idx]);
}

function playAgain() {
  randomImage();
  playAgainBtn.classList.remove("show");
  playAgainBtn.classList.add("hide");
  title.textContent = "PUZZLE";
  container.removeEventListener("click", sweetAlert);
}
playAgainBtn.addEventListener("click", playAgain);

function celebration() {
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    // valentines day animation
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });

    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });

    // fireworks animation
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

function sweetAlert() {
  Swal.fire({
    imageUrl: "./images/main-img.jpg",
    showConfirmButton: false,
    backdrop: "rgba(0, 0, 0, 0.7)",
  });  
}
