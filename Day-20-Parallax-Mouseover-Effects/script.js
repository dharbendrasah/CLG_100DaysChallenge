const main = document.getElementById("main");
const box = document.querySelectorAll(".box");

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

window.addEventListener('mousemove', throttle(() => {
  box.forEach((elem) => {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);

    let top = getComputedStyle(elem).getPropertyValue("top");
    let initialY = top;
    top = parseFloat(top) + y + "px";

    let left = getComputedStyle(elem).getPropertyValue("left");
    let initialX = left;
    left = parseFloat(left) + x + "px";

    elem.style.transform = `translate(${x}px, ${y}px)`;
    setTimeout(() => {
      elem.style.transform = `translate(0px, 0px)`;
    },1000);
  });
}, 1000));

box.forEach((elem) => {
  elem.addEventListener("click", () => {
    const img = elem.querySelector("img");
    Swal.fire({
      imageUrl: img.src,
      showConfirmButton: false,
      backdrop: "rgba(0, 0, 0, 0.9)",
      customClass : {
        image: "popup-image",
        popup: "popup-model",
      }
    });
  })
});

