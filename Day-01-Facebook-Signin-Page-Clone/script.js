window.onload = function () {
    const password = document.querySelector(".password");
    const passwordToogleBtnIcon = document.querySelector(".password-toogle-btn-icon");

    passwordToogleBtnIcon.addEventListener("click", () => {
        if(password.type === "password") {
            password.type = "text";
            passwordToogleBtnIcon.classList.replace("ri-eye-off-line", "ri-eye-line");
        }
        else if(password.type === "text") {
            password.type = "password";
            passwordToogleBtnIcon.classList.replace("ri-eye-line", "ri-eye-off-line");
        }
    });
}