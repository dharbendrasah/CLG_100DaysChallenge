const boxes = document.querySelectorAll(".box");
const yellow = document.querySelector(".yellow");

yellow.addEventListener("dragstart", (e) => {
  setTimeout(() => {
    yellow.classList.add('hide');
  }, 0);
});

yellow.addEventListener("dragend", (e) => {
  yellow.classList.remove('hide');
});

boxes.forEach(box => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hoverEffect");
  });

  box.addEventListener("dragleave", () => {
    box.classList.remove("hoverEffect");
  })

  box.addEventListener("drop", () => {
    box.appendChild(yellow);
    box.classList.remove("hoverEffect");
  });
});