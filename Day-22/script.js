const img = document.getElementById("img");
const slider = document.getElementById("slider");
const counter = document.getElementById("counter");
const uploadBtn = document.getElementById("uploadBtn");

slider.addEventListener("input", function() {
  const value = this.value;
  img.style.filter = `brightness(${value}%)`;
  counter.textContent = value;
});

uploadBtn.addEventListener("change", function() {
  const file = this.files[0];
  const url = URL.createObjectURL(file);
  img.setAttribute("src", url);
});

img.addEventListener("click", function() {
  Swal.fire({
    imageUrl: this.src,
    showConfirmButton: false,
    backdrop: "rgba(0, 0, 0, 0.9)",
    customClass: {
      image: "popup-image",
      popup: "popup-model"
    }
  });
});