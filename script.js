const colorPicker = document.getElementById("color-picker");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__color-select-btn")) {
    console.log(colorPicker.value);
  }
});
