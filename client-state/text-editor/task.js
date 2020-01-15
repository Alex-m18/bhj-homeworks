let dataText = document.getElementById("editor");

let previousText = localStorage.getItem("dataText");

dataText.textContent = previousText;

dataText.addEventListener("keypress", dataText_OnKeyPress);

function dataText_OnKeyPress(e) {
  localStorage.setItem("dataText", this.value + e.key);
}

clearBtn.addEventListener("click", function() {
  dataText.value = "";
  localStorage.removeItem("dataText");
});
