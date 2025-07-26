const count = document.querySelector("#count");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const changeBy = document.querySelector("#change-by");
const resetBtn = document.querySelector(".reset");

minusBtn.addEventListener("click", () => {
  let changeByValue = Number(changeBy.value);

  let countValMinus = Number(count.innerText);
  count.innerText = countValMinus - changeByValue;
});
plusBtn.addEventListener("click", () => {
  let changeByValue = Number(changeBy.value);

  let countValPlus = Number(count.innerText);
  count.innerText = countValPlus + changeByValue;
});
resetBtn.addEventListener("click", () => {
  count.innerHTML = 0;
});
