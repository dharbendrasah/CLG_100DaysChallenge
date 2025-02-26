window.onload = ()=>{
  const navItems = document.querySelector(".nav-items");
  const menuBtn = document.querySelector(".menu-btn");

  menuBtn.addEventListener("click", () => {
    const val = getComputedStyle(navItems).left;
    if(val === "-250px")
      navItems.style.left = "0px";
    else
      navItems.style.left = "-250px";
  });
}