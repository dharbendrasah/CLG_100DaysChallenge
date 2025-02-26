const content = document.querySelector(".content-section");

const images = [
  "./assets/Mountain_light.jpg",
  "./assets/Riverside_light.png",
  "./assets/Tree_light.jpg",
  "./assets/Village-Light.png"
]

const deg = [0, 10, -10];


function throttle(fn, delay) {
  let isThr = false;

  return function (...args) {
      if (!isThr) {
          fn.apply(this, args);
          isThr = true;

          setTimeout(() => {
              isThr = false;
          }, delay);
      }
  };
}

content.addEventListener('mousemove', throttle((dets) => {
  const card = document.createElement("div");
  card.className = "card";

  card.style.left = dets.x + "px";
  card.style.top = `${dets.y - 100 - 250}px`;

  const d = Math.floor(Math.random() * deg.length);
  card.style.transform = `rotate(${d}deg)`;

  const imgContainer = document.createElement("div");
  imgContainer.className = "imgContainer";

  const img = document.createElement("img");
  const rn = Math.floor(Math.random() * images.length);
  img.setAttribute("src", images[rn]);
  imgContainer.appendChild(img);

  card.appendChild(imgContainer);
  content.appendChild(card);

  setTimeout(() => {
    card.remove();
  }, 1500);
}, 500));
