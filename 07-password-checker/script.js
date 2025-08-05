let display = document.querySelector(".display");
let output = document.querySelector(".output");
display.addEventListener("input", () => {
  let password = display.value;
  if (password.length < 8) {
    output.innerHTML = "password is too short";
    output.style.color = "red";
  } else {
    output.innerHTML = "password is long enough";
    output.style.color = "green";
  }
  if (password.search(/[a-z]/) == -1) {
    output.innerHTML = "password is missing a lowercase letter ";
    output.style.color = "red";
  } else if (password.search(/[A-Z]/) == -1) {
    output.innerHTML = "password is missing a uppercase letter ";
    output.style.color = "red";
  } else if (password.search(/[0-9]/) == -1) {
    output.innerHTML = "password is missing number ";
    output.style.color = "red";
  } else if (password.search(/[!/@/#/$/%/^/&/*/*]/) == -1) {
    output.innerHTML = "password is missing special  ";
    output.style.color = "red";
  } else {
    output.innerHTML = "password is too strong";
    output.style.color = "green";
  }
});
