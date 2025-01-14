const body = document.querySelector('body');
const title = document.getElementById('title');
const container = document.getElementById('container');

let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let isDrawing = false;

title.addEventListener('click',() => {
    let gridSize = parseInt(prompt("Enter the number of rows and columns for the grid (e.g., 16):", "16"));
    if (gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid positive number!");
        return;
    }
    clearGrid();
    makeRows(gridSize);
    makeColumns(gridSize);
    addDrawingEffect();
});

function clearGrid() {
    container.innerHTML = "";
}

function makeRows(rowNum){
    for( r=0 ; r<rowNum ; r++){
        let row = document.createElement('div');
        container.appendChild(row).className="gridRow";
    }
}

function makeColumns(cellNum){
    for(i=0 ; i < rows.length ; i++){
        for(j=0; j < cellNum; j++){
            let newCell = document.createElement('div');
            rows[i].appendChild(newCell).className='cell';
        }
    }
}

function addDrawingEffect() {
    container.addEventListener('mousedown', () => isDrawing = true);
    container.addEventListener('mouseup', () => isDrawing = false);
    container.addEventListener('mouseleave', () => isDrawing = false);


    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function () {
            if (isDrawing) {
                this.style.backgroundColor = 'black';
            }
        });

        cells[i].addEventListener('mousedown', function () {
            this.style.backgroundColor = 'black';
        });
    }
}


