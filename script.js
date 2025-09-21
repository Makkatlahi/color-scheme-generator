const colorPicker = document.getElementById("color-picker");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__color-select-btn")) {
    // console.log(colorPicker.value);
    const colorCodeValue = colorPicker.value;
    const splitColorCode = colorCodeValue.split("#");
    // console.log(splitColorCode);
    fetch(`https://www.thecolorapi.com/scheme?hex=${splitColorCode}`)
      .then((res) => res.json())
      .then((data) => {
        const main = document.querySelector(".main");
        let colorHTML = ``;
        data.colors.forEach((color) => {
          colorHTML += `<div class="color">${color.hex.value}</div>`;
        });
        main.insertAdjacentHTML("afterbegin", colorHTML);
      });
  }
});
