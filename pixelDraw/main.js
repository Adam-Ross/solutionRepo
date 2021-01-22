const grid = document.querySelector("#grid");
const list = document.querySelector("#colorList");
let currentColor = "#011823";
const colors = [
  {
    color: "red",
    hex: "#FD350A",
  },
  {
    color: "green",
    hex: "#50FD0A",
  },
  {
    color: "blue",
    hex: "#0AB0FD",
  },
  {
    color: "white",
    hex: "white",
  },
  {
    color: "black",
    hex: "#011823",
  },
];

// Create a board
createGrid();
function createGrid() {
  for (let i = 0; i < 1612; i++) {
    createBox();
  }
  createColor(colors);
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
      box.style.backgroundColor = `${currentColor}`;
    });
  });

  const colorItems = document.querySelectorAll(".colorPicker");
  colorItems.forEach((elem) => {
    elem.addEventListener("click", () => {
      currentColor = elem.style.backgroundColor;
      console.log(currentColor);
    });
  });
}

function createColor(colors) {
  colors.forEach((elem) => {
    const { color, hex } = elem;
    const li = document.createElement("li");
    li.classList.add("colorPicker");
    li.style.backgroundColor = `${hex}`;
    li.TextContent = `${color}`;
    list.appendChild(li);
  });
}
