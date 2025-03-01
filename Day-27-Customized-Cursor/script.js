const main = document.getElementById("main");
function heartFunc(e) {
  const x = e.x;
  const y = e.y;
  const heart = document.createElement("img");
  heart.classList.add("heart");
  const size = Math.floor(Math.random() * 100) + 30;
  heart.style.width  = `${size}px`;

  heart.setAttribute("src", "./heart.png");
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  main.appendChild(heart);

  const interval = setTimeout(() => {
    heart.remove();
    clearInterval(interval);
  }, 1000);
}

main.addEventListener("mousemove", throttle(heartFunc, 100));

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