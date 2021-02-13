var board = [[null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],
            [null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],
            [null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],
            [null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null]];
var squares = [null,null,null,null,
               null,null,null,null,
               null,null,null,null,
               null,null,null,null];
var currentPiece = null;
var startPiece = null;
var endPiece = null;
var numberOfPieces = 0;
var previousDirection = null;
var secondDirection = null;
var nextPiece = null;
var test = 0;

window.onload = function initialize(){
    for(i=0; i < 16; i++){
        squares[i] = document.getElementById('a'+i);
    }
    startingGame();
    addEventListenerForSquares();
}


function addEventListenerForSquares(){
    
    squares[0].addEventListener('click', () => {
        changeSquareByClick(0);
    }); 
    squares[1].addEventListener('click', () => {
        changeSquareByClick(1);
    }); 
    squares[2].addEventListener('click', () => {
        changeSquareByClick(2);
    }); 
    squares[3].addEventListener('click', () => {
        changeSquareByClick(3);
    });  
    squares[4].addEventListener('click', () => {
        changeSquareByClick(4);
    }); 
    squares[5].addEventListener('click', () => {
        changeSquareByClick(5);
    }); 
    squares[6].addEventListener('click', () => {
        changeSquareByClick(6);
    }); 
    squares[7].addEventListener('click', () => {
        changeSquareByClick(7);
    }); 
    squares[8].addEventListener('click', () => {
        changeSquareByClick(8);
    }); 
    squares[9].addEventListener('click', () => {
        changeSquareByClick(9);
    }); 
    squares[10].addEventListener('click', () => {
        changeSquareByClick(10);
    }); 
    squares[11].addEventListener('click', () => {
        changeSquareByClick(11);
    }); 
    squares[12].addEventListener('click', () => {
        changeSquareByClick(12);
    }); 
    squares[13].addEventListener('click', () => {
        changeSquareByClick(13);
    }); 
    squares[14].addEventListener('click', () => {
        changeSquareByClick(14);
    }); 
    squares[15].addEventListener('click', () => {
        changeSquareByClick(15);
    });   
}

function startingGame(){
    document.getElementById('a3').innerHTML = "start direction bas";
    board[3] = [false, false, true, false];
    startPiece = 3;
    document.getElementById('a13').innerHTML = "end par le haut";
    board[13] = [true, false, false, false];
    endPiece = 13;
    currentPiece = [true, false, true, false];
    document.getElementById('current_piece').innerHTML = currentPiece;
}

function changeSquareByClick(squareNumber){
    if(board[squareNumber][0] != null){
        console.log(squareNumber+"already used!!!");
        return null;
    }
    else if(board[squareNumber][0] == null){
        document.getElementById("a"+squareNumber).innerHTML = currentPiece;
        board[squareNumber] = currentPiece;
        generateNewPiece(squareNumber);
    } 
}

function generateNewPiece(squareNumber){
   
    let randomNumber = Math.random(0,10);
    if(randomNumber < 0.15) currentPiece = [true, false, true, false];
    else if(randomNumber > 0.15 && randomNumber < 0.3 ) currentPiece = [false, true, false, true];
    else if(randomNumber > 0.35 && randomNumber < 0.5 ) currentPiece = [false, true, true, false];
    else if(randomNumber > 0.5 && randomNumber < 0.65 ) currentPiece = [false, false, true, true];
    else if(randomNumber > 0.65 && randomNumber < 0.8 ) currentPiece = [true, true, false, false];
    else if(randomNumber > 0.8 && randomNumber < 1 ) currentPiece = [true, false, false, true];
    document.getElementById('current_piece').innerHTML = currentPiece;
    console.log(randomNumber);
  
    /*
    if(test == 0){    
        currentPiece = [true, false, false, true];
        document.getElementById('current_piece').innerHTML = currentPiece;
    } 
    else if(test == 1){
        currentPiece = [false, true, false, true];
        document.getElementById('current_piece').innerHTML = currentPiece;
    }
    else if(test == 2){
        currentPiece = [false, true, true, false];
        document.getElementById('current_piece').innerHTML = currentPiece;
     }
     else if(test == 3){
        currentPiece = [false, true, true, false];
        document.getElementById('current_piece').innerHTML = currentPiece;
     }
    test++; 
    */
    lol++;
    if(lol ==13){
        go();
    }
     
}

let lol = 0;
function go(){
    fluidIsMoving();
}

function fluidIsMoving(){
    interval = setInterval(function(){
    console.log("en cours");
    let conclusion = checkNextPiecePosition();
    if(!conclusion){
        clearInterval(interval);
        console.log("end");
    }}, 1000)
}



/* verification */

function checkNextPiecePosition(){
    let validate = true;
    if(numberOfPieces == 0){
        for(i = 0; i < board[startPiece].length; i++){
            if(board[startPiece][i] == true){
                validate = checkException(i, startPiece);
            }
        }
    } else {
        console.log("nextPiece="+nextPiece);
        console.log("secondDirection="+secondDirection);
        console.log("numberOfPieces="+numberOfPieces);
        validate = checkException(secondDirection, nextPiece);
    }
    numberOfPieces++;
    return validate;
}


function checkException(direction, pieceNumber){
    //haut
    if(direction == 0){
        if(pieceNumber == 0 || pieceNumber == 1 || pieceNumber == 2 || pieceNumber == 3){
            return false;
        } else if(board[pieceNumber-4][2] == true) {
            if(!checkWinCondition(pieceNumber-4)){
                console.log("win");
                return false;
            }
            nextPiece = pieceNumber-4;
            previousDirection = 2;
            secondDirection = newDirection(nextPiece);
            return true;
        } else if(board[pieceNumber-4][2] == false) {
            return false;
        }
    }
    //droite
    if(direction == 1){
        if(pieceNumber == 3 || pieceNumber == 7 || pieceNumber == 11 || pieceNumber == 15){
            return false;
        } else if(board[pieceNumber+1][3] == true) {
            if(!checkWinCondition(pieceNumber+1)){
                console.log("win");
                return false;
            }
            nextPiece = pieceNumber+1;
            previousDirection = 3;
            secondDirection = newDirection(nextPiece);
            return true;
        } else if(board[pieceNumber+1][3] == false) {
            return false;
        }
    }
    //bas
    if(direction == 2){
        if(pieceNumber == 12 || pieceNumber == 13 || pieceNumber == 14 || pieceNumber == 15){
            return false;
        } else if(board[pieceNumber+4][0] == true) {
            if(!checkWinCondition(pieceNumber+4)){
                console.log("win");
                return false;
            }
            nextPiece = pieceNumber+4;
            previousDirection = 0;
            secondDirection = newDirection(nextPiece);
            return true;
        } else if(board[pieceNumber+4][0] == false) {
            return false;
        }
    }
    //gauche
    if(direction == 3){
        if(pieceNumber == 0 || pieceNumber == 5 || pieceNumber == 9 || pieceNumber == 13){
            return false;
        } else if(board[pieceNumber-1][1] == true) {
            if(!checkWinCondition(pieceNumber-1)){
                console.log("win");
                return false;
            }
            nextPiece = pieceNumber-1;
            previousDirection = 1;
            secondDirection = newDirection(nextPiece);
            return true;
        } else if(board[pieceNumber-1][1] == false) {
            return false;
        }
    }
}

function checkWinCondition(pieceNumber){
    if(pieceNumber == endPiece){
        return false;
    } else {
        return true;
    }
}


function newDirection(piece){
    for(i = 0; i < board[piece].length; i++){
        if(board[piece][i] == true && previousDirection != i){
            return i;
        }
    }
}




/* formule pour trouver la pièce suivante a aller 

--- haut ---

index - 4 = donne la bonne pièce en haut 
sauf
pour les index 0, 1, 2, 3 = game over


--- droite ---
index + 1 = donne la pièce à droite 
sauf
pour les index 3, 7, 11, 15 = game over

--- en bas ---

index + 4 = donne la bonne pièce en haut 
sauf
pour les index 12, 13, 14, 15 = game over

--- a gauche ---
index - 1 = donne la pièce à gauche 
sauf
pour les index 0, 5, 9, 13 = game over

*/