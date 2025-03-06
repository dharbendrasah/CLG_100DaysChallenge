const listItem = Array.from(document.querySelectorAll(".list-item"));
console.log(listItem);

function activeBtn(e) {
  listItem.forEach((list) => {
    list.classList.remove("active");
    e.target.classList.add("active");
  });
}

listItem.forEach((list) => {
  list.addEventListener("click", activeBtn);
});