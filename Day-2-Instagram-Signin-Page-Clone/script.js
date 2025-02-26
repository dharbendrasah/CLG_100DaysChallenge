window.onload = function() {
    const mobileScreenImage = document.querySelector(".mobile-screen-image");
    
    let i = 0, id;
    id = setInterval(()=>{
        if(i >= 4) i = 0;
        mobileScreenImage.src = `./images/m${i+1}.png`;
        i++;
    }, 2000);

    const password = document.querySelector(".password");
    const toggleBtn = document.querySelector(".toggle-btn");
    toggleBtn.addEventListener("click", ()=>{
        if(password.type === "password") {
            password.type = "text";
            toggleBtn.textContent = "Hide";
        }
        else {
            password.type = "password";
            toggleBtn.textContent = "Show";
        }
    });
}