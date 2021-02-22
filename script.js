
           var board = [];
           var squares = [];
           var nbreCase = 64;
           var currentPiece = [null, null, null, null];
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
            }
           
            function start(){
                startingGame();
                addEventListenerForSquares();
            }
           
            function loadImgInBackGround(){
                for(i = 0; i < 12; i++){
                    switch(i){
                        case 1: document.getElementById('invisible_piece_a').className = "invisible_piece square moving_a_0";
                        case 2: document.getElementById('invisible_piece_a1').className = "invisible_piece square moving_a_1";
                        case 3: document.getElementById('invisible_piece_b').className = "invisible_piece square moving_b_0";
                        case 4: document.getElementById('invisible_piece_b1').className = "invisible_piece square moving_b_1";
                        case 5: document.getElementById('invisible_piece_c').className = "invisible_piece square moving_c_0";
                        case 6: document.getElementById('invisible_piece_c1').className = "invisible_piece square moving_c_1";
                        case 7: document.getElementById('invisible_piece_d').className = "invisible_piece square moving_d_0";
                        case 8: document.getElementById('invisible_piece_d1').className = "invisible_piece square moving_d_1";
                        case 9: document.getElementById('invisible_piece_e').className = "invisible_piece square moving_e_0";
                        case 10: document.getElementById('invisible_piece_e1').className = "invisible_piece square moving_e_1";
                        case 11: document.getElementById('invisible_piece_f').className = "invisible_piece square moving_f_0";
                        case 12: document.getElementById('invisible_piece_f1').className = "invisible_piece square moving_f_1";
                    }
                }
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
               console.log(lol+"==="+currentPiece.typeOf);
               if(currentPiece[0] == true && currentPiece[1] == false && currentPiece[2] == true && currentPiece[3] == false) {
                currentPiece = [false, true, false, true];
                classpicked = "p_b";
               }
               else if(currentPiece[0] == false && currentPiece[1] == true && currentPiece[2] == false && currentPiece[3] == true) {
                currentPiece = [false, true, true, false];
                classpicked = "p_c";
               }
               else if(currentPiece[0] == false && currentPiece[1] == true && currentPiece[2] == true && currentPiece[3] == false) {
                currentPiece = [false, false, true, true];
                classpicked = "p_d";
               }
               else if(currentPiece[0] == false && currentPiece[1] == false && currentPiece[2] == true && currentPiece[3] == true) {
                currentPiece = [true, true, false, false];
                classpicked = "p_e";
               }
               else if(currentPiece[0] == true && currentPiece[1] == true && currentPiece[2] == false && currentPiece[3] == false) {
                currentPiece = [true, false, false, true];
                classpicked = "p_f";
               }
               else if(currentPiece[0] == true && currentPiece[1] == false && currentPiece[2] == false && currentPiece[3] == true) {
                currentPiece = [true, false, true, false];
                classpicked = "p_a";
               }
               document.getElementById('current_piece').className = "square "+classpicked;
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
                       animateTube(pieceNumber, 0);
                       return false;
                   } else if(board[pieceNumber-8][2] == true) {
                        animateTube(pieceNumber, 0);
                       if(!checkWinCondition(pieceNumber-8)){
                           console.log("win");
                           return false;
                       }
                       nextPiece = pieceNumber-8;
                       previousDirection = 2;
                       secondDirection = newDirection(nextPiece);
                       return true;
                   } else if(board[pieceNumber-8][2] == false) {
                       animateTube(pieceNumber, 0);
                       return false;
                   }
               }
               //droite
               if(direction == 1){
                   if(pieceNumber == 7 || pieceNumber == 15 || pieceNumber == 23 || pieceNumber == 31 || pieceNumber == 39 || pieceNumber == 47 || pieceNumber == 55 || pieceNumber == 63){
                        animateTube(pieceNumber, 1);
                        return false;
                   } else if(board[pieceNumber+1][3] == true) {
                    animateTube(pieceNumber, 1);
                       if(!checkWinCondition(pieceNumber+1)){
                           console.log("win");
                           return false;
                       }
                       nextPiece = pieceNumber+1;
                       previousDirection = 3;
                       secondDirection = newDirection(nextPiece);
                       return true;
                   } else if(board[pieceNumber+1][3] == false) {
                    animateTube(pieceNumber, 1);
                       return false;
                   }
               }
               //bas
               if(direction == 2){
                   if(pieceNumber == 56 || pieceNumber == 57 || pieceNumber == 58 || pieceNumber == 59 || pieceNumber == 60 || pieceNumber == 61 || pieceNumber == 62 || pieceNumber == 63){
                    animateTube(pieceNumber, 2);
                    return false;
                   } else if(board[pieceNumber+8][0] == true) {
                    animateTube(pieceNumber, 2);
                       if(!checkWinCondition(pieceNumber+8)){
                           console.log("win");
                           return false;
                       }
                       nextPiece = pieceNumber+8;
                       previousDirection = 0;
                       secondDirection = newDirection(nextPiece);
                       return true;
                   } else if(board[pieceNumber+8][0] == false) {
                    animateTube(pieceNumber, 2);
                       return false;
                   }
               }
               //gauche
               if(direction == 3){
                   if(pieceNumber == 0 || pieceNumber == 8 || pieceNumber == 16 || pieceNumber == 24 || pieceNumber == 32 || pieceNumber == 40 || pieceNumber == 48 || pieceNumber == 56){
                    animateTube(pieceNumber, 3);
                    return false;
                   } else if(board[pieceNumber-1][1] == true) {
                    animateTube(pieceNumber, 3);
                       if(!checkWinCondition(pieceNumber-1)){
                           console.log("win");
                           return false;
                       }
                       nextPiece = pieceNumber-1;
                       previousDirection = 1;
                       secondDirection = newDirection(nextPiece);
                       return true;
                   } else if(board[pieceNumber-1][1] == false) {
                    animateTube(pieceNumber, 3);
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

