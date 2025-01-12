const body = document.querySelector('body');

const container = document.getElementById('container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function defaultGrid(){
    let gridSize = parseInt(prompt("Enter the number of rows and columns for the grid (e.g., 16):", "16"));
    if (gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid positive number!");
        return defaultGrid();
    }
    makeRows(gridSize);
    makeColumns(gridSize);
    addHoverEffect();
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

function addHoverEffect(){
    for(let i=0; i < cells.length; i++){
        cells[i].addEventListener('mouseover', function (){
            this.style.backgroundColor = 'black';
        });
    }
}


defaultGrid();

