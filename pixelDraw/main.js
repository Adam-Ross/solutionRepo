const grid = document.querySelector("#grid");
const color = "black";
// Create a board
createGrid();
function createGrid() {
  for (let i = 0; i < 1612; i++) {
    createBox();
  }
  loadEventListeners();
}

function createBox() {
  const div = document.createElement("div");
  div.classList.add("box");
  grid.appendChild(div);
}

function loadEventListeners() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.style.backgroundColor = `${color}`;
    });
  });
}
