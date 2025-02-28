const boxes = Array.from(document.getElementsByClassName("boxes"))[0];
const btn = Array.from(document.getElementsByClassName("btn"))[0];
const correctList = ["Elon Mush", "Jeff Bezos", "Larry Ellison", "Mark Zuckerberg", "Bernard Arnault", "Larry Page", "Sergey Brin", "Warren Buffett", "Stev Ballmer", "Jensen Huang"];

function generateUniqueNums() {
  let nums = [];
  for(let i=0; i<10; i++) {
    const rn = Math.floor(Math.random() * 10);
    nums.every(n => n!==rn) ? nums.push(rn) : i--;
  }
  return nums;
}

function generateRandom() {
  const rn = generateUniqueNums();
  boxes.innerHTML = `<div class="box">
  <h1 class="spot">1</h1>
  <div draggable="true" id="1" class="name-icon">
  <h3 class="name">${correctList[rn[0]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">2</h1>
  <div draggable="true" id="2" class="name-icon">
  <h3 class="name">${correctList[rn[1]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">3</h1>
  <div draggable="true" id="3" class="name-icon">
  <h3 class="name">${correctList[rn[2]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">4</h1>
  <div draggable="true" id="4" class="name-icon">
  <h3 class="name">${correctList[rn[3]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">5</h1>
  <div draggable="true" id="5" class="name-icon">
  <h3 class="name">${correctList[rn[4]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">6</h1>
  <div draggable="true" id="6" class="name-icon">
  <h3 class="name">${correctList[rn[5]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">7</h1>
  <div draggable="true" id="7" class="name-icon">
  <h3 class="name">${correctList[rn[6]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">8</h1>
  <div draggable="true" id="8" class="name-icon">
  <h3 class="name">${correctList[rn[7]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">9</h1>
  <div draggable="true" id="9" class="name-icon">
  <h3 class="name">${correctList[rn[8]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>
  
  <div class="box">
  <h1 class="spot">10</h1>
  <div draggable="true" id="10" class="name-icon">
  <h3 class="name">${correctList[rn[9]]}</h3>
  <img src="./assets/grid-line.svg" alt="menu-line" class="grid-line">
  </div>
  </div>`;

  const nameIconSets = Array.from(document.getElementsByClassName("name-icon"));

  dragStartFunc(nameIconSets);
  dragOverFunc(nameIconSets);
  dropFunc(nameIconSets)
}
generateRandom();

function start(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragStartFunc(nameIconSets) {
  nameIconSets.forEach(nameIcon => {
    nameIcon.addEventListener("dragstart", start);
  });
}

function dragOverFunc(nameIconSets) {
  nameIconSets.forEach(nameIcon => {
    nameIcon.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  });
}

function dropFunc(nameIconSets) {
  nameIconSets.forEach(nameIcon => {
    nameIcon.addEventListener("drop", (e) => {
      const draggableElemId = e.dataTransfer.getData("text/plain");
      const draggableElem = document.getElementById(draggableElemId);
      const draggableElemParent = draggableElem.parentNode;
  
      e.target.parentNode.appendChild(draggableElem);      
      draggableElemParent.appendChild(e.target);
    });
  })
}

function checkOrder() {
  const names = Array.from(document.getElementsByClassName("name"));
  const result = correctList.every((n, idx) => n === names[idx].textContent);
  result ? win(names) : alert("Please try again!");
}

function win(names) {
  names.forEach(elem => elem.classList.add("text-green"));
  btn.textContent = "Play Again";

  const nameIconSets = Array.from(document.getElementsByClassName("name-icon"));
  nameIconSets.forEach(nameIcon => nameIcon.removeEventListener("dragstart", start));

  setTimeout(() => {
    alert("Congratulations! You guess it.");
  })
}

function playAgain() {
  generateRandom();
  const names = Array.from(document.getElementsByClassName("name"));
  names.forEach(elem => elem.classList.remove("text-green"));
  btn.textContent = "Check Order";
}

btn.addEventListener("click", () => {
  if(btn.textContent === "Check Order")
    checkOrder();
  else if(btn.textContent === "Play Again")
    playAgain();
});