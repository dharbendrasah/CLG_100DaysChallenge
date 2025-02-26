window.onload = function() {
  const hourElem = document.getElementById("hour");
  const minElem  = document.getElementById("min");
  const secElem  = document.getElementById("sec");
  const timeFormatElem = document.getElementById("time-format");
  
  setInterval(() => {
    const time = new Date();

    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    const timeFormat = hrs >= 12 ? "PM" : "AM";

    if(hrs > 12) {
      hrs -= 12;
      hrs = "0" + hrs;
    }

    if(min < 10) 
      min = "0" + min;

    if(sec < 10)
      sec = "0" + sec;
    
    hourElem.textContent = hrs;
    minElem.textContent  = min;
    secElem.textContent  = sec;
    timeFormatElem.textContent = timeFormat;
  }, 1000);

}