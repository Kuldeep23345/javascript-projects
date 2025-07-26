let display = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");
let string = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let innerValue = e.target.innerText;
    if (innerValue == "AC") {
      string = "";
      display.value = string;
    } else if (innerValue == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (innerValue == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string += innerValue;
      display.value = string;
    }
  });
});
