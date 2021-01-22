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

// Create functions
function createGrid() {
  createBoxes();
  createColor(colors);
  createRandomizer();
  loadEventListeners();
}

function loadEventListeners() {
  addEventListenrToBoxes();
  addEventListenerToColors();
  addEventListenerToRandomizer();
}

function createBoxes() {
  for (let i = 0; i < 1612; i++) {
    createBox();
  }
}

function createBox() {
  const div = document.createElement("div");
  div.classList.add("box");
  grid.appendChild(div);
}

function addEventListenrToBoxes() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.style.backgroundColor = `${currentColor}`;
    });
  });
}

function addEventListenerToColors() {
  const colorItems = document.querySelectorAll(".colorPicker");
  colorItems.forEach((elem) => {
    elem.addEventListener("click", () => {
      currentColor = elem.style.backgroundColor;
      console.log(currentColor);
    });
  });
}

function addEventListenerToRandomizer() {
  const randomizer = document.querySelector("#randomizer");
  const boxes = document.querySelectorAll(".box");
  randomizer.addEventListener("click", () => {
    boxes.forEach((elem) => {
      let random = colors[Math.floor(Math.random() * colors.length)];
      let { hex } = random;
      elem.style.backgroundColor = hex;
    });
  });
}

function createRandomizer() {
  const randomizer = document.createElement("button");
  randomizer.classList.add("btn");
  randomizer.textContent = "Ranomizer";
  randomizer.id = "randomizer";
  list.appendChild(randomizer);
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
