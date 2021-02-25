
           var board = [];
           var squares = [];
           var nbreCase = 64;
           var currentPiece = [null, null, null, null];

           var startPiece = null;
           var endPiece = null;
           var previousPiece = null; 
           var direction = null;
           var nextPiece = null;
           var currentLevel = 1;
           var victory = false;
           var countdown = 20;
           var active = false;

           window.onload = function initialize(){
               for(i=0; i < nbreCase; i++){
                   squares[i] = document.getElementById('a'+i);
               }
               for(j=0; j < nbreCase; j++){
                   board.push([null,null,null,null]);
               } 
               loadImgInBackGround();
               document.querySelector('h2').innerHTML = "Current level : "+currentLevel+"";
            }
           
            function start(){
                document.querySelector('h3').innerHTML = "Playing...";
                startingGame();
                addEventListenerForSquares();
            }
           
            function loadImgInBackGround(){
                document.getElementById('invisible_piece_a').className = "invisible_piece square moving_a_0";
                document.getElementById('invisible_piece_a1').className = "invisible_piece square moving_a_1";
                document.getElementById('invisible_piece_b').className = "invisible_piece square moving_b_0";
                document.getElementById('invisible_piece_b1').className = "invisible_piece square moving_b_1";
                document.getElementById('invisible_piece_c').className = "invisible_piece square moving_c_0";
                document.getElementById('invisible_piece_c1').className = "invisible_piece square moving_c_1";
                document.getElementById('invisible_piece_d').className = "invisible_piece square moving_d_0";
                document.getElementById('invisible_piece_d1').className = "invisible_piece square moving_d_1";
                document.getElementById('invisible_piece_e').className = "invisible_piece square moving_e_0";
                document.getElementById('invisible_piece_e1').className = "invisible_piece square moving_e_1";
                document.getElementById('invisible_piece_f').className = "invisible_piece square moving_f_0";
                document.getElementById('invisible_piece_f1').className = "invisible_piece square moving_f_1";
                document.getElementById('invisible_piece_y').className = "invisible_piece square moving_y";
                document.getElementById('invisible_piece_z').className = "invisible_piece square moving_z";
            }





            function eventlistner(e) {
                if(active){
                    changeSquareByClick(this.id);
                }
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
                        items[i].addEventListener('click', eventlistner);
                    }
               }
           
           function startingGame(){
                active = true;
                console.log("currentLevel =="+currentLevel);
                if(currentLevel == 1){         
                        board[17] = [false, false, true, false];
                        startPiece = 17;
                        document.getElementById('a'+17).className = "square p_y";
                        board[38] = [true, false, false, false];
                        endPiece = 38;
                        document.getElementById('a'+38).className = "square p_z";
                        currentPiece = [true, false, true, false];     
                        document.getElementById('current_piece').className = "square p_a";
                        createForbiddenArea();
                        countdownStart(20);
                } else if(currentLevel == 2){  
                        board[3] = [false, false, true, false];
                        startPiece = 3;
                        document.getElementById('a'+3).className = "square p_y";
                        board[45] = [true, false, false, false];
                        endPiece = 45;
                        document.getElementById('a'+45).className = "square p_z";
                        currentPiece = [true, false, true, false];     
                        document.getElementById('current_piece').className = "square p_a";
                        createForbiddenArea();
                        countdownStart(20);
                } else if(currentLevel == 3){  
                       board[16] = [false, false, true, false];
                       startPiece = 16;
                       document.getElementById('a'+16).className = "square p_y";
                       board[55] = [true, false, false, false];
                       endPiece = 55;
                       document.getElementById('a'+55).className = "square p_z";
                       currentPiece = [true, false, true, false];     
                       document.getElementById('current_piece').className = "square p_a";
                       createForbiddenArea();
                       countdownStart(20);
               } else if(currentLevel == 4){  
                        board[6] = [false, false, true, false];
                        startPiece = 6;
                        document.getElementById('a'+6).className = "square p_y";
                        board[58] = [true, false, false, false];
                        endPiece = 58;
                        document.getElementById('a'+58).className = "square p_z";
                        currentPiece = [true, false, true, false];     
                        document.getElementById('current_piece').className = "square p_a";
                        createForbiddenArea();
                        countdownStart(20);
               } else if(currentLevel == 5){  
                        board[1] = [false, false, true, false];
                        startPiece = 1;
                        document.getElementById('a'+1).className = "square p_y";
                        board[62] = [true, false, false, false];
                        endPiece = 62;
                        document.getElementById('a'+62).className = "square p_z";
                        currentPiece = [true, false, true, false];     
                        document.getElementById('current_piece').className = "square p_a";
                        createForbiddenArea();
                        countdownStart(20);
               }
           }
           
           function createForbiddenArea(){

            let forbiddenSquare = [false, false, false, false];
            if(currentLevel == 1){
                //17, 38 must be avoided
                board[11] = forbiddenSquare;  squares[11].className = "square forbidden";
                board[19] = forbiddenSquare;  squares[19].className = "square forbidden";
                board[27] = forbiddenSquare;  squares[27].className = "square forbidden";
                board[35] = forbiddenSquare;  squares[35].className = "square forbidden";
                board[43] = forbiddenSquare;  squares[43].className = "square forbidden";
            } else if(currentLevel == 2){
                //3, 45 must be avoided
                board[25] = forbiddenSquare;  squares[25].className = "square forbidden";
                board[26] = forbiddenSquare;  squares[26].className = "square forbidden";
                board[27] = forbiddenSquare;  squares[27].className = "square forbidden";
                board[28] = forbiddenSquare;  squares[28].className = "square forbidden";
                board[29] = forbiddenSquare;  squares[29].className = "square forbidden";
                board[30] = forbiddenSquare;  squares[30].className = "square forbidden";
                board[31] = forbiddenSquare;  squares[31].className = "square forbidden";
            } else if(currentLevel == 3){
                //16, 55 must be avoided
                board[30] = forbiddenSquare;  squares[30].className = "square forbidden";
                board[32] = forbiddenSquare;  squares[32].className = "square forbidden";
                board[34] = forbiddenSquare;  squares[34].className = "square forbidden";
                board[36] = forbiddenSquare;  squares[36].className = "square forbidden";
                board[38] = forbiddenSquare;  squares[38].className = "square forbidden";
                board[40] = forbiddenSquare;  squares[40].className = "square forbidden";
                board[42] = forbiddenSquare;  squares[42].className = "square forbidden";
            } else if(currentLevel == 4){
                //6, 58 must be avoided
                board[16] = forbiddenSquare;  squares[16].className = "square forbidden";
                board[17] = forbiddenSquare;  squares[17].className = "square forbidden";
                board[18] = forbiddenSquare;  squares[18].className = "square forbidden";
                board[20] = forbiddenSquare;  squares[20].className = "square forbidden";
                board[21] = forbiddenSquare;  squares[21].className = "square forbidden";
                board[22] = forbiddenSquare;  squares[22].className = "square forbidden";
                board[23] = forbiddenSquare;  squares[23].className = "square forbidden";
            } else if(currentLevel == 5){
                //1, 62 must be avoided    
                board[16] = forbiddenSquare;  squares[16].className = "square forbidden";
                board[17] = forbiddenSquare;  squares[17].className = "square forbidden";
                board[18] = forbiddenSquare;  squares[18].className = "square forbidden";
                board[19] = forbiddenSquare;  squares[19].className = "square forbidden";
                board[20] = forbiddenSquare;  squares[20].className = "square forbidden";
                board[21] = forbiddenSquare;  squares[21].className = "square forbidden";
                board[22] = forbiddenSquare;  squares[22].className = "square forbidden";

                board[33] = forbiddenSquare;  squares[33].className = "square forbidden";
                board[34] = forbiddenSquare;  squares[34].className = "square forbidden";
                board[35] = forbiddenSquare;  squares[35].className = "square forbidden";
                board[36] = forbiddenSquare;  squares[36].className = "square forbidden";
                board[37] = forbiddenSquare;  squares[37].className = "square forbidden";
                board[38] = forbiddenSquare;  squares[38].className = "square forbidden";
                board[39] = forbiddenSquare;  squares[39].className = "square forbidden";
            }



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
           }

         
           


        function moveStarterPiece(){
            document.getElementById("a"+startPiece).className = "square moving_y";
        }














           function countdownStart(cd){
            countdown = cd;
            timer = setInterval(function() {
                countdown--;
                document.querySelector('h4').innerHTML = "Starting in : "+countdown;
                if(countdown == 0) {
                    clearInterval(timer);
                    document.querySelector('h4').innerHTML = "";
                    fluidIsMoving();
                }
            }, 1000);
        }
        


           function animateTube() {  
            var pieceAttribute = checkPieceAttribute(board[previousPiece]);
            var classname = "";
            if(direction == 0){
                if(pieceAttribute == "A"){
                    classname = "square moving_a_1";
                }  
                else if (pieceAttribute == "D"){
                    classname = "square moving_d_1";
                }else {
                    classname = "square moving_c_0";
                }
            }
            else if(direction == 1){
                if(pieceAttribute == "B"){
                    classname = "square moving_b_0";
                }   
                else if (pieceAttribute == "D"){
                    classname = "square moving_d_0";
                } 
                else{
                    classname = "square moving_f_1";
                }
            }
            else if(direction == 2){
                if(pieceAttribute == "A"){
                    classname = "square moving_a_0";
                } 
                else if (pieceAttribute == "F"){
                    classname = "square moving_f_0";
                }
                else if (pieceAttribute == "Z"){
                    classname = "square moving_z";
                }
                else{
                    classname = "square moving_e_1";
                }
            }
            else {
                if(pieceAttribute == "B"){
                    classname = "square moving_b_1";
                }  
                else if (pieceAttribute == "C"){
                    classname = "square moving_c_1";
                }else{
                    classname = "square moving_e_0";
                }
            }
            document.getElementById("a"+previousPiece).className = classname;
           }



           function nextDirection(){ 
               if(direction != 2 && board[previousPiece][0] == true) {
                direction = 0;
               } else if(direction != 3 && board[previousPiece][1] == true) {
                direction = 1;
               } else if(direction != 0 && board[previousPiece][2] == true) {
                direction = 2;
               } else if(direction != 1 && board[previousPiece][3] == true) {
                direction = 3;
               } 
           }
           
           
           
           function checkPieceAttribute(piece){
            if(piece[0] == true && piece[2] == true) return "A";
            else if(piece[1] == true && piece[3] == true) return "B";
            else if(piece[1] == true && piece[2] == true) return "C";
            else if(piece[2] == true && piece[3] == true) return "D";
            else if(piece[0] == true && piece[1] == true) return "E";
            else if(piece[0] == true && piece[1] == false && piece[2] == false & piece[3] == false) return "Z";
            else return "F";
           }



           function resetBoard(){
                for(i=0; i < nbreCase; i++){
                    element = document.getElementById('a'+i);
                    element.className = "square";
                }
                for(j=0; j < nbreCase; j++){
                    board[j] = [null,null,null,null];
                } 

               document.getElementById('current_piece').className = "current_piece";
           }


          function fluidIsMoving(){   
            var skipFirstSeconde = 0;
            interval = setInterval(function(){       
                if(skipFirstSeconde == 1){
                    let stopTheLoop = false;
                    if(previousPiece == endPiece){
                        stopTheLoop = true;
                        document.querySelector('h3').innerHTML = "Victory!";
                        document.querySelector('h4').innerHTML = ".";
                        currentLevel++;
                        document.querySelector('h2').innerHTML = "Current level : "+currentLevel+"";
                        active = false;
                        resetBoard();
                        clearInterval(interval);
                    }
                    if(!stopTheLoop){
                        if(!checkIfNextPieceIsCorrect()){
                            document.querySelector('h3').innerHTML = "Defeat!";
                            document.querySelector('h4').innerHTML = ".";
                            active = false;
                            resetBoard();
                            clearInterval(interval);
                        } else {
                            console.log("piece number="+previousPiece);
                            console.log("direction="+direction);
                            animateTube();
                            nextDirection();
                        }
                    }
                } else{
                    console.log("skip first sec")
                    moveStarterPiece();
                    direction = 2;
                    previousPiece = startPiece;
                    skipFirstSeconde++; 
                }                    
            }, 1000)
        }   


        function checkIfNextPieceIsCorrect(){
            //top
            if(direction == 0){
                if(previousPiece == 0 || previousPiece == 1 || previousPiece == 2 || previousPiece == 3 || previousPiece == 4 || previousPiece == 5 || previousPiece == 6 || previousPiece == 7){
                    return false;
                } else if(board[previousPiece-8][2] == true){
                    previousPiece = previousPiece-8;
                } else if(board[previousPiece-8][2] == false || board[previousPiece-8][2] == null) {
                    return false;
                }
            //right
            } else if(direction == 1){
                if(previousPiece == 7 || previousPiece == 15 || previousPiece == 23 || previousPiece == 31 || previousPiece == 39 || previousPiece == 47 || previousPiece == 55 || previousPiece == 63){
                    return false;
               } else if(board[previousPiece+1][3] == true) {
                    previousPiece = previousPiece+1;
               } else if(board[previousPiece+1][3] == false || board[previousPiece+1][3] == null) {
                    return false;
               }
            //bottom
            } else if(direction == 2){              
                if(previousPiece == 56 || previousPiece == 57 || previousPiece == 58 || previousPiece == 59 || previousPiece == 60 || previousPiece == 61 || previousPiece == 62 || previousPiece == 63){
                        return false;
                   } else if(board[previousPiece+8][0] == true) {
                        previousPiece = previousPiece+8;
                   } else if(board[previousPiece+8][0] == false || board[previousPiece+8][0] == null) {
                        return false;
                   }
            //left    
            } else{
                if(previousPiece == 0 || previousPiece == 8 || previousPiece == 16 || previousPiece == 24 || previousPiece == 32 || previousPiece == 40 || previousPiece == 48 || previousPiece == 56){
                        return false;
                   } else if(board[previousPiece-1][1] == true) {
                        previousPiece = previousPiece-1;
                   } else if(board[previousPiece-1][1] == false || board[previousPiece-1][1] == null) {
                        return false;
                   }
            }
            return true;
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

  





        