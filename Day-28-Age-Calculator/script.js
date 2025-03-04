const form = document.forms.dobForm;
const input = form.date;
const btn = form.btn;

const age = document.getElementsByClassName("age")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let flag = false;

  const dob = input.value;
  let [birthYear, birthMonth, birthDate] = dob.split("-");
  birthYear = Number(birthYear);
  birthMonth = Number(birthMonth);
  birthDate = Number(birthDate);

  const date = new Date();
  currentYear = date.getFullYear();
  currentMonth = date.getMonth() + 1;
  currentDate = date.getDate();

  if(birthYear < currentYear) {
    flag = true;
  }
  else if(birthYear === currentYear) {
    if(birthMonth < currentMonth) 
      flag = true;
    else if(birthMonth === currentMonth) 
      if(birthDate <= currentDate)
        flag = true;
  }

  if(flag) calculate();
  else error();
  
  function error() {
    age.textContent = "Invalid Date of Birth";
    age.classList.remove("text-green");
    age.classList.add("text-red");
  }

  function calculate() {
    const livedYear = currentYear - birthYear;
    const livedMonth =
      currentMonth > birthMonth ?
        currentMonth - birthMonth :
        birthMonth - currentMonth;
  
    const livedDate =
      currentDate > birthDate ?
        currentDate - birthDate :
        birthDate - currentDate;
    
    age.textContent = `Your age is ${livedYear} Years ${livedMonth} Months and ${livedDate} Days.`; 
    age.classList.remove("text-red");
    age.classList.add("text-green");
  }
});