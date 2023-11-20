let x;
let y;
let numRows;
let numCols;
let totalPescamines;

let minesCount;
let minesPositions = [];


function iniciarPartida(){
    //RESET DE VARIABLES. 
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

    taulell.style.setProperty('--numCols', numCols); 

    let htmlContent = '';

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            htmlContent += `
                <div class="cell" data-x="${i}" data-y="${j}" data-mina="false" data-num-mines="0"
                     style="background-color: #ccc; border: 1px solid blue; margin: 2px;"
                     onclick="obreCasella(event)">
                </div>`;
        }
    }

    taulell.innerHTML = htmlContent;

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

    //ASSIGNAR MINES. 


    console.log("TOTES LES MINES: ", minesPositions);
}

function calculaAdjacents(){

}

function esMina(x,y){

}

function setMinesAdjacents(x, y, minesCount){

}

/*
    Al destapar un zero (NO MINA) s'han de obrir totes les caselles del voltant
    i s'hi ha una altra adjacent amb zero repetir el procés amb la que s'esta a zero del costat

    Al acabar el joc s'ha de deactivar el click de les caselles restants.
*/