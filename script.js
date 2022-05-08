const formEl = document.getElementById("color-form");

let colors = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"];

function populateColors() {
  for (let i = 1; i <= 5; i++) {
    const colorBox = document.querySelector(`#color-${i} > .color`);
    const colorCodeDiv = document.querySelector(`#color-${i} > .color-code`);
    colorBox.style.backgroundColor = colors[i - 1];
    colorCodeDiv.textContent = colors[i - 1];
  }
}

populateColors();

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const seedColor = document.getElementById("color").value.slice(1);
  const mode = document.getElementById("mode").value;
  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
    .then((response) => response.json())
    .then((data) => {
      colors = data.colors.map((color) => color.hex.value);
      console.log(colors);
      populateColors();
    });
});
