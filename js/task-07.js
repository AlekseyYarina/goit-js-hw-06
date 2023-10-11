const inputSizeControl = document.querySelector("#font-size-control");
const changeSizeText = document.querySelector("#text");

inputSizeControl.addEventListener("input", changingSize);

function changingSize() {
  const fontSize = inputSizeControl.value + "px";
  changeSizeText.style.fontSize = fontSize;
}
