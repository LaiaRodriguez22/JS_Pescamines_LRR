let numMax = 30;
let numMin = 10;

let x;
let y;

let numRows;
let numCols;

let totalPescamines;
let nMinesAdjacents;
let minesPositions = [];

//let cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
//let cells = document.querySelectorAll('.cell');

function iniciarPartida(){
    //RESET DE VARIABLES. 
    minesPositions = []; 
    
    numRows = prompt('Introdueix el num de files (DE 10 A 30):');
    numCols = prompt('Introduce el número de columnas (DE 10 A 30):');

    // NUM DE FILES.
    numRows = Math.max(numMin, Math.min(numMax, parseInt(numRows))) || numMin;

    // NUM COLUMNES.
    numCols = Math.max(numMin, Math.min(numMax, parseInt(numCols))) || numMin;

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
                <div class="cell" data-x="${i}" data-y="${j}" data-mina="false" onclick="obreCasella(event)"></div>`;
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
    esMina(x,y);
    //DESACTIVAR DES D'AQUI 
}

function setMines(){
    let totalCells = numRows * numCols;
    // EL 17%. 
    let minesCount = Math.ceil(0.17 * totalCells); 
    //ARRAY QUE GUARDA LES POS DE LES MINES. 
    let minesPositions = []; 

    //AGAFES TOTS ELS DIVS ANOMENATS CELL. 
    let cellsDocument = document.querySelectorAll('.cell');
    let cellsArray = Array.from(cellsDocument);

    for (let i = 0; i < minesCount; i++) {
        let randomIndex = Math.floor(Math.random() * cellsArray.length);
        let cellArray = cellsArray[randomIndex];

        cellArray.dataset.mina = 'true';
        minesPositions.push({ x: parseInt(cellArray.dataset.x), y: parseInt(cellArray.dataset.y) });
    }

    //IMPRIMEIX ARRAY DE POS DE TOTES LES MINES
    console.log("TOTES LES MINES: ", minesPositions);
}

function calculaAdjacents(){
    const cells = document.querySelectorAll('.cell');
    
}

function esMina(x,y){
    const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);

    if(cell.dataset.mina === 'true'){
        console.log("ETS A LA CELA I ES MINA: " + x, y);
        return cell.dataset.mina === 'true';
    }
    else{
        console.log("ETS A LA CELA I nooooooo MINA: " + x, y);
        console.log("AQUI TORNARIES A CRIDAR AL CALCULA ADJ??");
        return cell.dataset.mina === 'false';
    }
}

function setMinesAdjacents(x, y, minesCount){
    const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
    cell.dataset.numMines = nMinesAdjacents;
}

/*
    Al destapar un zero (NO MINA) s'han de obrir totes les caselles del voltant
    i s'hi ha una altra adjacent amb zero repetir el procés amb la que s'esta a zero del costat

    Al acabar el joc s'ha de deactivar el click de les caselles restants.
*/