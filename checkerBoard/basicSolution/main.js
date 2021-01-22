const board = document.querySelector(".board");

// Call create board
createBoard();

function createBoard() {
  let color = "red";

  for (let i = 0; i < 300; i++) {
    color === "red" ? (color = "black") : (color = "red");
    createBox(color);
  }
}

function createBox(color) {
  const div = document.createElement("div");
  div.style.height = "200px";
  div.style.width = "200px";
  div.style.backgroundColor = color;

  board.appendChild(div);
}

function checkCurrentColor() {}
