const container = document.getElementById("grid");
let size = 16;

const createGrid = (gridSize) => {
    container.innerHTML = ""; 

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-item");
        square.style.width = `calc(640px / ${gridSize})`;
        square.style.height = `calc(640px / ${gridSize})`;
        square.style.border = "1px solid lightgray";

  
        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        });

        container.appendChild(square);
    }
};

document.querySelector(".btn1").addEventListener("click", () => {
    let gridSize = parseInt(prompt("Enter grid size of the square (e.g., 16):"), 10);
    if (gridSize > 0 && gridSize <= 100) { 
        size = gridSize;
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

createGrid(size);



