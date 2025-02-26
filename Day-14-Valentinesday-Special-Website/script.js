window.onload = () => {

  const name = document.querySelector("#name");
  const yourName = prompt("Enter Your Name");
  name.textContent = yourName;
  name.style.top = 300 + "px";
  name.style.left = 500 + "px";


  gsap.to(".img-container", {
    width: "100%",
    duration: 2.5,
    stagger: 2.5,
    ease: "expo.out",
    repeat: -1
  });

  gsap.to(".text h1", {
    y: "-200%",
    duration: 2.5,
    stagger: 2.5,
    ease: "power4.out",
    repeat: -1,
    display: "none",
  })

  const imojiList = ["❤️", "🤗", "💖", "😍", "💕", "😘", "🥰", "🤭", "❤️‍🩹", "🕊️", "🥀", "𝓘 𝓵𝓸𝓿𝓮 𝔂𝓸𝓾 !"];
  const len = imojiList.length;
  const center = document.querySelector("#center");

  function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
      if (!isThr) {
        fn.apply(this, args);
        isThr = true;

        setTimeout(() => {
          isThr = false;
        }, delay);
      }
    };
  }

  center.addEventListener('mousemove', throttle((dets) => {
    const rect = center.getBoundingClientRect();
    const left = dets.x - rect.left;
    const top = dets.y - rect.top;
    const rn = Math.floor(Math.random() * len);

    const div = document.createElement("div");
    div.className = "imoji";
    div.style.left = left + "px";
    div.style.top = top - 200 + "px";
    
    const icon = document.createElement("p");
    icon.className = "icon";
    icon.textContent = imojiList[rn];

    div.appendChild(icon);
    center.appendChild(div);
    
    gsap.from(".icon", {
      y: 200,
      duration: 1.5,
      ease: "power4.out",
    })

    setTimeout(() => {
      div.remove();
    }, 1500);
  }, 500));

  const songsBtn = document.querySelector("#songs-btn");
  const song = new Audio('./assets/shikayat.mp3');
  songsBtn.addEventListener("click", () => {
    if(songsBtn.textContent === "Play") {
      song.play();
      songsBtn.textContent = "Pause";
    }
    else {
      song.pause();
      songsBtn.textContent = "Play";
    }
  })
}