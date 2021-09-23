const birthdate = document.querySelector(".birthDate");
const luckyNumber = document.querySelector(".luckyNumber");
const btn = document.querySelector(".btn");
const textArea = document.querySelector("#output");

function gettingValue() {
  if (birthdate.value.length == 0 && luckyNumber.value.length == 0) {
    textArea.value = "Please enter both the input field to proceed";
  } else if (birthdate.value.length == 0) {
    textArea.value = "Enter your date of birth";
  } else if (luckyNumber.value.length == 0) {
    textArea.value = "Enter the lucky number";
  } else {
    processing();
  }
}

function processing() {
  const newvar = birthdate.value.replaceAll("-", "");
  const newvar2 = Number(newvar);
  lastProcess(newvar);
}

function lastProcess(value) {
  let addUp = 0;
  for (i = 0; i < value.length; i++) {
    addUp += Number(value.charAt(i));
  }
  if (addUp % luckyNumber.value == 0) {
    textArea.value = "congrats your birthday is lucky";
  } else {
    textArea.value = "sorry your birthday is not lucky";
  }
}

btn.addEventListener("click", gettingValue);
