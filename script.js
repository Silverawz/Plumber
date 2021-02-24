
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
           var countdown = 10;
           var active = false;

           window.onload = function initialize(){
               for(i=0; i < 63; i++){
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
                /*
                for(i = 0; i < 14; i++){
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
                        case 13: document.getElementById('invisible_piece_y').className = "invisible_piece square moving_y";
                        case 14: document.getElementById('invisible_piece_z').className = "invisible_piece square moving_z";
                    }
                }
                */
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
                        console.log("1");        
                        board[17] = [false, false, true, false];
                        startPiece = 17;
                        document.getElementById('a'+17).className = "square p_y";
                        board[38] = [true, false, false, false];
                        endPiece = 38;
                        document.getElementById('a'+38).className = "square p_z";
                        currentPiece = [true, false, true, false];     
                        document.getElementById('current_piece').className = "square p_a";
                        countdownStart60();
                } else if(currentLevel == 2){  
                     console.log("2");
                        board[3] = [false, false, true, false];
                        startPiece = 3;
                        document.getElementById('a'+3).className = "square p_y";
                        board[45] = [true, false, false, false];
                        endPiece = 45;
                        document.getElementById('a'+45).className = "square p_z";
                        currentPiece = [true, false, true, false];     
                        document.getElementById('current_piece').className = "square p_a";
                        countdownStart60();
                } else if(currentLevel == 3){  
                    console.log("2");
                       board[16] = [false, false, true, false];
                       startPiece = 16;
                       document.getElementById('a'+16).className = "square p_y";
                       board[32] = [true, false, false, false];
                       endPiece = 32;
                       document.getElementById('a'+32).className = "square p_z";
                       currentPiece = [true, false, true, false];     
                       document.getElementById('current_piece').className = "square p_a";
                       countdownStart60();
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














           function countdownStart60(){
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


         
           function moveFinishPiece(){
                wait = setTimeout(function(){     
                document.getElementById("a"+endPiece).className = "square moving_z";      
                currentLevel++;
                document.querySelector('h2').innerHTML = "Current level : "+currentLevel+"";
                document.querySelector('h3').innerHTML = "Victory !";
                }, 1000)
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
                }else{
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










           function checkWinCondition(pieceNumber){
               if(pieceNumber == endPiece){
                   return false;
               } else {
                   return true;
               }
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
            else return "F";
           }



          function fluidIsMoving(){   
            moveStarterPiece();// la piece Y bouge!
            var skipFirstSeconde = 0;
            interval = setInterval(function(){       
                if(skipFirstSeconde == 1){


                    //verifie que la piece suivante PUISSE partir (meme si c'est pas la bonne) 
                    
                    if(!checkIfNextPieceIsCorrect()){
                        // si elle ne peut pas alors defaite 
                        console.log("defaite");
                        clearInterval(interval);
                    } else {
                        //previousPiece cest la bonne
                        console.log("piece attribut="+checkPieceAttribute(board[previousPiece]));
                        //j'envoi la piece, il verifie les true dedans et garde uniquement le true qui n'est pas = a l'opposé de direction deja existante



                        animateTube();
                        nextDirection();
                        //newDirection();
                        // direction = toujours egale a celle de la starter

                        //sinon lance l'animation
                    }



                } else{
                    console.log("skip first sec")
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

  





        