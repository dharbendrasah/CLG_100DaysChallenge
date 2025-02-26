window.onload = function() {
    const menuBtn = document.querySelector("#menu-btn");
    const navMenus = document.querySelector(".nav-menus");

    menuBtn.addEventListener("click", () => {
        const value = getComputedStyle(navMenus).left;
        
        if(value == "0px")
            navMenus.style.left = "-230px";
        else
            navMenus.style.left = "0px";
    });
}