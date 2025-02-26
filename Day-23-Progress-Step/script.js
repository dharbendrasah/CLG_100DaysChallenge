const prev = document.getElementById("prev");
const next = document.getElementById("next");

function selectAllBox() {
  return Array.from(document.getElementsByClassName("box"));
}

function selectAllLine() {
  return Array.from(document.getElementsByClassName("line"));
}

function findActiveBoxIdx(allBox) {
  return allBox.findIndex(Box => Box.classList.contains("active"));
}

function findActiveLineIdx(allLine) {
  return allLine.findIndex(Line => Line.classList.contains("active"));
}

prev.addEventListener("click", () => {
  const allBox = selectAllBox();
  const activeBoxIdx = findActiveBoxIdx(allBox);

  if(activeBoxIdx >= 1 && activeBoxIdx <= allBox.length-1) {
    allBox[activeBoxIdx].classList.remove("active");
    allBox[activeBoxIdx].classList.remove("preserve");
    allBox[activeBoxIdx - 1].classList.add("active");
  }

  const allLine = selectAllLine();
  const activeLineIdx = findActiveLineIdx(allLine);
  if(activeLineIdx >= 0 && activeLineIdx<=allLine.length-1) {
    allLine[activeLineIdx].classList.remove("active");
    allLine[activeLineIdx].classList.remove("preserve");
    if(activeLineIdx >= 1)
      allLine[activeLineIdx - 1].classList.add("active");
  }

  isBtnClickable()
});

next.addEventListener("click", () => {
  const allBox = selectAllBox();
  let activeBoxIdx = findActiveBoxIdx(allBox);
  
  if(activeBoxIdx >= 0 && activeBoxIdx <= allBox.length-2) {
    allBox[activeBoxIdx].classList.remove("active");
    allBox[activeBoxIdx].classList.add("preserve");
    allBox[activeBoxIdx + 1].classList.add("active");
  }

  const allLine = selectAllLine();
  let activeLineIdx = findActiveLineIdx(allLine);
  if(activeLineIdx >= -1 && activeLineIdx <= allLine.length-2) {
    if(activeLineIdx != -1) {
      allLine[activeLineIdx].classList.remove("active");
      allLine[activeLineIdx].classList.add("preserve");
    }
    allLine[activeLineIdx + 1].classList.add("active");
  }

  isBtnClickable()
});

function isBtnClickable() {
  const firstElem = document.querySelector(".box1");
  const lastElem = document.querySelector(".box5");

  if(firstElem.classList.contains("active")) {
    prev.style.backgroundColor = "black";
    prev.style.cursor = "not-allowed";
  }
  else {
    prev.style.backgroundColor = "#4bc1e8";
    prev.style.cursor = "pointer";
  }
  
  if(lastElem.classList.contains("active")) {
    next.style.backgroundColor = "black";
    next.style.cursor = "not-allowed";
  }
  else {
    next.style.backgroundColor = "#4bc1e8";
    next.style.cursor = "pointer";
  }
}
isBtnClickable();