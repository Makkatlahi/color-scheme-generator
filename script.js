const colorPicker = document.getElementById("color-picker");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__color-select-btn")) {
    const colorCodeValue = colorPicker.value.replace("#", "");
    const colorSchemeSelection = document.getElementById("color-scheme").value;
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${colorCodeValue}&mode=${colorSchemeSelection}`
    )
      .then((res) => res.json())
      .then((data) => {
        main.innerHTML = "";
        footer.innerHTML = "";
        data.colors.forEach((color) => {
          const div = document.createElement("div");
          div.classList.add("color");
          div.style.backgroundColor = color.hex.value;

          div.addEventListener("click", () => {
            navigator.clipboard.writeText(color.hex.value);
            const copyToClipboard = document.querySelector(".copied-message");
            copyToClipboard.classList.remove("hidden");
            setTimeout(function () {
              copyToClipboard.classList.add("hidden");
            }, 3000);
          });

          main.appendChild(div);

          const pTag = document.createElement("p");
          pTag.classList.add("hex-code");
          pTag.textContent = color.hex.value;

          pTag.addEventListener("click", () => {
            navigator.clipboard.writeText(color.hex.value);
            const copyToClipboard = document.querySelector(".copied-message");
            copyToClipboard.classList.remove("hidden");
            setTimeout(function () {
              copyToClipboard.classList.add("hidden");
            }, 3000);
          });

          footer.appendChild(pTag);
        });
      });
  }
});
