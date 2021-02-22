/*
var board = [[null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],
            [null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],
            [null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],
            [null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null]];
            */
           var board = [];
           var squares = [];
           var nbreCase = 64;
           var currentPiece = null;
           var startPiece = null;
           var endPiece = null;
           var numberOfPieces = 0;
           var previousDirection = null;
           var secondDirection = null;
           var nextPiece = null;
           var test = 0;
           
           window.onload = function initialize(){
               for(i=0; i < 63; i++){
                   squares[i] = document.getElementById('a'+i);
               }
               for(j=0; j < nbreCase; j++){
                   board.push([null,null,null,null]);
               } 
               loadImgInBackGround();
               startingGame();
               addEventListenerForSquares();
            }
           
           
            function loadImgInBackGround(){
                for(i = 0; i < 12; i++){
                    switch(i){
                        case 1: document.getElementById('invisible_piece_a').className = "square moving_a_0";
                        case 2: document.getElementById('invisible_piece_a1').className = "square moving_a_1";
                        case 3: document.getElementById('invisible_piece_b').className = "square moving_b_0";
                        case 4: document.getElementById('invisible_piece_b1').className = "square moving_b_1";
                        case 5: document.getElementById('invisible_piece_c').className = "square moving_c_0";
                        case 6: document.getElementById('invisible_piece_c1').className = "square moving_c_1";
                        case 7: document.getElementById('invisible_piece_d').className = "square moving_d_0";
                        case 8: document.getElementById('invisible_piece_d1').className = "square moving_d_1";
                        case 9: document.getElementById('invisible_piece_e').className = "square moving_e_0";
                        case 10: document.getElementById('invisible_piece_e1').className = "square moving_e_1";
                        case 11: document.getElementById('invisible_piece_f').className = "square moving_f_0";
                        case 12: document.getElementById('invisible_piece_f1').className = "square moving_f_1";
                    }
                }
/*
                for(j = 0; j < 12; j++){
                    document.querySelector('.invisible_piece')[j].style.visibility = 'hidden';
                }
*/
            }





            function printDetails(e) {
                changeSquareByClick(this.id);
              }

              function changeSquareByClick(squareNumber){  
                let index;
                for(z = 0; z < 64; z++){
                    if(squareNumber == 'a'+z) {
                        index = z;
                    }
                }
                   if(board[index][0] != null){
                       console.log(index+"already used!!!");
                       return null;
                   }
                   else if(board[index][0] == null) {
                       board[index] = currentPiece;
                       backgroundImgOfPiece(index);
                       generateNewPiece(index);
                   } 
               }



               function addEventListenerForSquares(){
           

                   
                    var items = document.getElementsByClassName('square');
                    for (var i = 0; i < items.length; i++) {
                        items[i].addEventListener('click', printDetails);
                    }


                     /*
                   document.querySelectorAll("div.square").forEach(function(item) {
                    item.addEventListener('click', function() {
                        console.log(this.innerHTML);
                    });
                     });
                   
                   
                   
                  
                   .addEventListener('click', function(e) {
                       console.log("You clicked button " + e.target.innerHTML.toLowerCase());
                       });
                   
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
                   */
               }
           
           function startingGame(){
               board[3] = [false, false, true, false];
               startPiece = 3;
               document.getElementById('a'+3).className = "square p_y";
               board[12] = [true, false, false, false];
               endPiece = 12;
               document.getElementById('a'+12).className = "square p_z";
               currentPiece = [true, false, true, false];
           
               document.getElementById('current_piece').className = "square p_a";
               //document.getElementById('current_piece').innerHTML = currentPiece;
           }
           

           
           function backgroundImgOfPiece(squareNumber){
               let selector = document.getElementById("a"+squareNumber);
               let attributionImage = "";
               if(board[squareNumber][0] == true && board[squareNumber][1] == false && board[squareNumber][2] == true && board[squareNumber][3] == false){
                   attributionImage = "square p_a";
               } else if(board[squareNumber][0] == false && board[squareNumber][1] == true && board[squareNumber][2] == false && board[squareNumber][3] == true){
                   attributionImage = "square p_b";
               } else if(board[squareNumber][0] == false && board[squareNumber][1] == true && board[squareNumber][2] == true && board[squareNumber][3] == false){
                   attributionImage = "square p_c";
               } else if(board[squareNumber][0] == false && board[squareNumber][1] == false && board[squareNumber][2] == true && board[squareNumber][3] == true){
                   attributionImage = "square p_d";
               } else if(board[squareNumber][0] == true && board[squareNumber][1] == true && board[squareNumber][2] == false && board[squareNumber][3] == false){
                   attributionImage = "square p_e";
               } else if(board[squareNumber][0] == true && board[squareNumber][1] == false && board[squareNumber][2] == false && board[squareNumber][3] == true){
                   attributionImage = "square p_f";
               }
               selector.className = attributionImage;
           }
           
           
           
           
           
           
           
           function generateNewPiece(squareNumber){
               let classpicked = "";
               let randomNumber = Math.random(0,10);
               if(randomNumber < 0.15) {
                   currentPiece = [true, false, true, false];
                   classpicked = "p_a";
               }
               else if(randomNumber > 0.15 && randomNumber < 0.35 ) {
                   currentPiece = [false, true, false, true];
                   classpicked = "p_b";
               }
               else if(randomNumber > 0.35 && randomNumber < 0.5 ) {
                   currentPiece = [false, true, true, false];
                   classpicked = "p_c";
               }
               else if(randomNumber > 0.5 && randomNumber < 0.65 ) {
                   currentPiece = [false, false, true, true];
                   classpicked = "p_d";
               }
               else if(randomNumber > 0.65 && randomNumber < 0.8 ) {
                   currentPiece = [true, true, false, false];
                   classpicked = "p_e";
               }
               else if(randomNumber > 0.8 && randomNumber < 1 ) {
                   currentPiece = [true, false, false, true];
                   classpicked = "p_f";
               }
               document.getElementById('current_piece').className = "square "+classpicked;
              // document.getElementById('current_piece').innerHTML = currentPiece;
               console.log(randomNumber);
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
                   if(pieceNumber == 0 || pieceNumber == 1 || pieceNumber == 2 || pieceNumber == 3 || pieceNumber == 4 || pieceNumber == 5 || pieceNumber == 6 || pieceNumber == 7){
                       return false;
                   } else if(board[pieceNumber-8][2] == true) {
                       if(!checkWinCondition(pieceNumber-8)){
                           console.log("win");
                           return false;
                       }
                       nextPiece = pieceNumber-8;
                       previousDirection = 2;
                       secondDirection = newDirection(nextPiece);
                       animateTube(pieceNumber, 0);
                       return true;
                   } else if(board[pieceNumber-8][2] == false) {
                       return false;
                   }
               }
               //droite
               if(direction == 1){
                   if(pieceNumber == 7 || pieceNumber == 15 || pieceNumber == 23 || pieceNumber == 31 || pieceNumber == 39 || pieceNumber == 47 || pieceNumber == 55 || pieceNumber == 63){
                       return false;
                   } else if(board[pieceNumber+1][3] == true) {
                       if(!checkWinCondition(pieceNumber+1)){
                           console.log("win");
                           return false;
                       }
                       nextPiece = pieceNumber+1;
                       previousDirection = 3;
                       secondDirection = newDirection(nextPiece);
                       animateTube(pieceNumber, 1);
                       return true;
                   } else if(board[pieceNumber+1][3] == false) {
                       return false;
                   }
               }
               //bas
               if(direction == 2){
                   if(pieceNumber == 56 || pieceNumber == 57 || pieceNumber == 58 || pieceNumber == 59 || pieceNumber == 60 || pieceNumber == 61 || pieceNumber == 62 || pieceNumber == 63){
                       return false;
                   } else if(board[pieceNumber+8][0] == true) {
                       if(!checkWinCondition(pieceNumber+8)){
                           console.log("win");
                           return false;
                       }
                       nextPiece = pieceNumber+8;
                       previousDirection = 0;
                       secondDirection = newDirection(nextPiece);
                       animateTube(pieceNumber, 2);
                       return true;
                   } else if(board[pieceNumber+8][0] == false) {
                       return false;
                   }
               }
               //gauche
               if(direction == 3){
                   if(pieceNumber == 0 || pieceNumber == 8 || pieceNumber == 16 || pieceNumber == 24 || pieceNumber == 32 || pieceNumber == 40 || pieceNumber == 48 || pieceNumber == 56){
                       return false;
                   } else if(board[pieceNumber-1][1] == true) {
                       if(!checkWinCondition(pieceNumber-1)){
                           console.log("win");
                           return false;
                       }
                       nextPiece = pieceNumber-1;
                       previousDirection = 1;
                       secondDirection = newDirection(nextPiece);
                       animateTube(pieceNumber, 3);
                       return true;
                   } else if(board[pieceNumber-1][1] == false) {
                       return false;
                   }
               }
           }
           


           function animateTube(currentPiece, direction) {    
               if(currentPiece == startPiece) {
                return null;
               } 
            var pieceAttribute = checkPieceAttribute(board[currentPiece]);
            var classname = "";
            if(direction == 0){
                if(pieceAttribute == "A"){
                    classname = "square moving_a_1";
                }  
                else if (pieceAttribute == "E"){
                    classname = "square moving_e_0";
                } else {
                    classname = "square moving_f_1";
                }
            }
            else if(direction == 1){
                if(pieceAttribute == "B"){
                    classname = "square moving_b_0";
                }       
                else if (pieceAttribute == "C"){
                    classname = "square moving_c_0";
                } else{
                    classname = "square moving_e_1";
                }
            }
            else if(direction == 2){
                if(pieceAttribute == "A"){
                    classname = "square moving_a_0";
                } 
                else if (pieceAttribute == "D"){
                    classname = "square moving_d_0";
                } else{
                    classname = "square moving_c_1";
                }
            }
            else {
                if(pieceAttribute == "B"){
                    classname = "square moving_b_1";
                }  
                else if (pieceAttribute == "D"){
                    classname = "square moving_d_1";
                } else{
                    classname = "square moving_f_0";
                }
            }
            document.getElementById("a"+currentPiece).className = classname;
           }




           function checkPieceAttribute(piece){
                if(piece[0] == true && piece[2] == true) return "A";
                else if(piece[1] == true && piece[3] == true) return "B";
                else if(piece[1] == true && piece[2] == true) return "C";
                else if(piece[2] == true && piece[3] == true) return "D";
                else if(piece[0] == true && piece[1] == true) return "E";
                else return "F";
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
           
           
           
           /* NEW

           formule pour trouver la pièce suivante a aller 
           
           --- haut ---
           
           index - 8 = donne la bonne pièce en haut 
           sauf
           pour les index 0, 1, 2, 3, 4, 5, 6, 7 = game over
           
           
           --- droite ---
           index + 1 = donne la pièce à droite 
           sauf
           pour les index 7, 15, 23, 31, 39, 47, 55, 63 = game over
           
           --- en bas ---
           
           index + 8 = donne la bonne pièce en bas 
           sauf
           pour les index 56, 57, 58, 59, 60, 61, 62, 63 = game over
           
           --- a gauche ---
           index - 1 = donne la pièce à gauche 
           sauf
           pour les index 0, 8, 16, 24, 32, 40, 48, 56 = game over



           */



           /* 
           OLD
           
           formule pour trouver la pièce suivante a aller 
           
           --- haut ---
           
           index - 4 = donne la bonne pièce en haut 
           sauf
           pour les index 0, 1, 2, 3 = game over
           
           
           --- droite ---
           index + 1 = donne la pièce à droite 
           sauf
           pour les index 3, 7, 11, 15 = game over
           
           --- en bas ---
           
           index + 4 = donne la bonne pièce en bas 
           sauf
           pour les index 12, 13, 14, 15 = game over
           
           --- a gauche ---
           index - 1 = donne la pièce à gauche 
           sauf
           pour les index 0, 5, 9, 13 = game over
           */