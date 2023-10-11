function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const nameOfColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", cangeBackgroundColor);

function cangeBackgroundColor(){
  const newColor = getRandomHexColor();
  widget.style.backgroundColor = newColor;
  nameOfColor.textContent = newColor;
}
