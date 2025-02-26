window.onload = function() {
    const navLinksContainer = document.querySelector(".nav-links-container");
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", () => {
        navLinksContainer.style.left = 0;
    });

    closeBtn.addEventListener("click", () => {
        navLinksContainer.style.left = -300;
    })
}