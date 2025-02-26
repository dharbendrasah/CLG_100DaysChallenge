window.onload = function() {

  const form = document.getElementById("form");

  const dobEl = document.getElementById("dob");
  const life = document.getElementById("life");

  const yearEl = document.getElementById("year");
  const monthEl = document.getElementById("month");
  const dayEl = document.getElementById("day");
  const hourEl = document.getElementById("hour");
  const minuteEl = document.getElementById("minute");
  const secondEl = document.getElementById("second");

  const calcLife = (bYear=0, bMonth=0, bDay=0) => {
    const date  = new Date();
    const year  = date.getFullYear() - bYear;

    const cMonth = date.getMonth() + 1;
    const lMonth = (bMonth > cMonth) ? (bMonth - cMonth) : (cMonth - bMonth);

    const cDay = date.getDate();
    const lDay = (bDay > cDay) ? (bDay - cDay) : (cDay - bDay);

    const hour  = date.getHours();
    const min   = date.getMinutes();
    const sec   = date.getSeconds();


    yearEl.textContent   = year  <= 9 ? `0${year}`  : year;
    monthEl.textContent  = lMonth <= 9 ? `0${lMonth}` : lMonth;
    dayEl.textContent    = lDay   <= 9 ? `0${lDay}`   : lDay;
    hourEl.textContent   = hour  <= 9 ? `0${hour}`  : hour;
    minuteEl.textContent = min   <= 9 ? `0${min}`   : min;
    secondEl.textContent = sec   <= 9 ? `0${sec}`   : sec;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dob = form.date.value;
    const [bYear, bMonth, bDay] = dob.split("-");

    dobEl.style.display = "none";
    life.style.display = "block";

    await setInterval(() => {
      calcLife(bYear, bMonth, bDay);
    }, 1000);

  });
  
}