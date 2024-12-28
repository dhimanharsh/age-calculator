let btn = document.querySelector(".check");
let x = document.querySelector("#day");
let y = document.querySelector("#month");
let z = document.querySelector("#year");

function ageCalculator() {
  let day = Number(x.value);
  let month = Number(y.value);
  let year = Number(z.value);


  let date = new Date().getDate();
  let mont = new Date().getMonth() + 1;
  let currentYear = new Date().getFullYear();
  
  if (day > 31) {
    window.alert("Day cannot be greater than 31.");
    return;
  }
  if (month > 12) {
    window.alert("Month cannot be greater than 12.");
    return;
  }
  if (year > currentYear) {
    window.alert("Year cannot be greater than the current year.");
    return;
  }



  let resultOne = Math.abs(date - day);
  let resultTwo = Math.abs(mont - month);
  let resultThree = Math.abs(currentYear - year);

  let a = (document.getElementsByTagName("h2")[0].innerText = resultThree);
  let b = (document.getElementsByTagName("h2")[1].innerText = resultTwo);
  let c = (document.getElementsByTagName("h2")[2].innerText = resultOne);
}
btn.addEventListener("click", ageCalculator);
