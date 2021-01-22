const board = document.querySelector(".board");

// Call create board
createBoard();

function createBoard() {
  let gradient = 1;

  for (let i = 0; i < 80; i++) {
    createBox(gradient);
    gradient = gradient + 5;
  }
}

function createBox(gradient) {
  const div = document.createElement("div");
  div.style.height = "200px";
  div.style.width = "200px";
  div.style.backgroundColor = `rgb(255, 0, ${gradient})`;
  div.style.border = `1px solid rgb(255, ${gradient}, ${gradient})`;

  board.appendChild(div);
}
