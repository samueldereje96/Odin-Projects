document.addEventListener("DOMContentLoaded", () => {
    const drawBoard = document.querySelector(".draw-board");
    const eraserButton = document.getElementById("eraser");
    const randomButton = document.getElementById("randomize");
    const gridSize = document.getElementById("grid-size");
    const gridSizeLabel = document.getElementById("grid-size-label")

    defaultPenColor = "#000000";
    defaultBgColor = "#ffffff";
    defaultGridSize = 16;

    let pen = defaultPenColor;
    let bgColor = defaultBgColor;
    let isEraserActive = false;
    let isRandomActive = false;

    createGrid(defaultGridSize);

    function createGrid (size) {
        drawBoard.innerHTML = "";
        const squareSize = 640 / size; 
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const square = document.createElement("div");
                square.classList.add("grid-square");
                square.style.width = `${squareSize}px`;
                square.style.height = `${squareSize}px`;
                drawBoard.appendChild(square);
            }
        }
        draw();
    }
    
    function draw() {
        const squares = document.querySelectorAll(".grid-square");
        squares.forEach(square =>
            square.addEventListener("click", () => {
                if (isRandomActive) {
                    square.style.backgroundColor = getRandomColor();
                } else if (isEraserActive) {
                    square.style.backgroundColor = bgColor;
                } else {
                    square.style.backgroundColor = pen;
                }
            })
        )
    } 
    function getRandomColor () {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    document.getElementById("colorInput").addEventListener("input", (event) => {
        pen = event.target.value;
        isRandomActive = false;
    })
    document.getElementById("bgInput").addEventListener("input", (event) => {
        bgColor = event.target.value;
        const squares = document.querySelectorAll(".grid-square");
        squares.forEach(square => {
            square.style.backgroundColor = bgColor;
        }
    );
    });
    document.getElementById("randomize").addEventListener("click", () => {
        isRandomActive = !isRandomActive;
        isEraserActive = false;
        randomButton.classList.toggle("active", isRandomActive);
        eraserButton.classList.remove("active");
    })
    document.getElementById("eraser").addEventListener("click", () => {
        isEraserActive = !isEraserActive;
        isRandomActive = false;
        eraserButton.classList.toggle("active", isEraserActive);
        randomButton.classList.remove("active");
    })
    gridSize.addEventListener("input", (event) => {
        const size = event.target.value;
        gridSizeLabel.textContent = `${size} X ${size}`;
        createGrid(size);
    })
    document.getElementById("reset").addEventListener("click", () => {
        isRandomActive = false;
        isEraserActive = false;

        pen = defaultPenColor;
        colorInput.value = defaultPenColor;
        bgInput.value = defaultBgColor;
        bgColor = defaultBgColor;
        
        gridSize.value = defaultGridSize;
        gridSizeLabel.textContent = `${defaultGridSize} X ${defaultGridSize}`;
        randomButton.classList.remove("active");
        eraserButton.classList.remove("active");

        createGrid(defaultGridSize);
    })
})