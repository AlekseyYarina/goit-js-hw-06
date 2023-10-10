const counter = document.querySelector("#counter");
const btnDecrement = counter.firstElementChild;
const value = btnDecrement.nextElementSibling;
const btnIncrement = counter.lastElementChild;

let valueToNumber = Number(value.textContent);

btnDecrement.addEventListener("click", () => {
  valueToNumber -= 1;
  value.textContent = valueToNumber;
});

btnIncrement.addEventListener("click", () => {
  valueToNumber += 1;
  value.textContent = valueToNumber;
});
