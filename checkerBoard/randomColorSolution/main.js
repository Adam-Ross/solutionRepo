const board = document.querySelector(".board");

// Call create board
createBoard();

function createBoard() {
  let obj = {
    color1: getRandomNumber(1, 255),
    color2: getRandomNumber(1, 255),
    color3: getRandomNumber(1, 255),
  };

  for (let i = 0; i < 80; i++) {
    createBox(obj);
    obj.color1 = getRandomNumber(1, 255);
    obj.color2 = getRandomNumber(1, 255);
    obj.color3 = getRandomNumber(1, 255);
  }
}

function createBox(obj) {
  const { color1, color2, color3 } = obj;
  const div = document.createElement("div");
  div.style.height = "200px";
  div.style.width = "200px";
  div.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  board.appendChild(div);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
