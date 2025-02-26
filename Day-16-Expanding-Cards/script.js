window.onload = function(){
  const panel = document.querySelectorAll(".panel");

  panel.forEach((elem, idx) => {
    elem.addEventListener("click", () => {
      elem.classList.add("active");
      for(let i=0; i<panel.length; i++) {
        if(i != idx)
          panel[i].classList.remove("active");
      }
    })
  })
  
}