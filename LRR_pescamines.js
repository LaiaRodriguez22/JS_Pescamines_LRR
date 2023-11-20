let x;
let y;
let numRows;
let numCols;
let totalPescamines;

let minesCount;
let minesPositions = [];


function iniciarPartida(){

    minesPositions = []; 
    
    numRows = prompt('Introdueix el num de files (DE 10 A 30):');
    numCols = prompt('Introduce el número de columnas (DE 10 A 30):');

    // NUM DE FILES.
    numRows = Math.max(10, Math.min(30, parseInt(numRows))) || 10;

    // NUM COLUMNES.
    numCols = Math.max(10, Math.min(30, parseInt(numCols))) || 10;

    //console.log("NUM FILES: " + numRows);
    //console.log("NUM COLS: " + numCols);

    crearTaulell();
}

function crearTaulell(){
    const taulell = document.getElementById('taulell');
    taulell.innerHTML = ''; // RESET EL TAULELL

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.x = i;
            cell.dataset.y = j;
            cell.dataset.mina = 'false';
            cell.style.backgroundColor = '#ccc';
            cell.style.border = '1px solid blue';
            cell.style.margin = '2px';
            cell.addEventListener('click', obreCasella);
            taulell.appendChild(cell);
        }
    }
    setMines();    
}

function obreCasella(event) {
    const clickedCell = event.target;
      x = parseInt(clickedCell.dataset.x);
      y = parseInt(clickedCell.dataset.y);

    console.log("CLICK A " + x + ", " + y );
}

function setMines(){
      totalPescamines = numRows * numCols;
      // EL 17%. 
      minesCount = Math.ceil(0.17 * totalPescamines); 
  
      const cells = document.querySelectorAll('.cell');
      const cellsArray = Array.from(cells);
      //RESET DE MINES POSITIONS. 
      minesPositions = []; 
  
      //ASSIGNAR MINES. 

      
      console.log("TOTES LES MINES: ", minesPositions);
}

function calculaAdjacents(){

}

function esMina(x,y){

}

function setMinesAdjacents(x, y, minesCount){

}