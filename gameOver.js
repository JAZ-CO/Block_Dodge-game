let gameOver = false;
let gameOverBorder = document.getElementById("gameOverBorder");

let overBtn = document.createElement("input");
overBtn.setAttribute("type","button");
overBtn.setAttribute("id","gameOverBtn");
overBtn.setAttribute("value","Replay!");

let overLabel = document.createElement("p");

overLabel.innerHTML = "GAMEOVER";

let scores = [];
let players = [new User("Dummy",200),new User("Not",30)];

let leaderBoard= "Leaderboard: <br>";

let leaderBoardHTML = document.createElement("p");


function gameOverFunc(){
    {
        if(parseInt(getComputedStyle(player).left) <= 10){
           
            gameOver = true;
            gameOverBorder.appendChild(overLabel);
            gameOverBorder.appendChild(overBtn);
            clearInterval(enemyMove);
            clearInterval(obstacleVerticalChange);
            clearInterval(checkCollision);
            clearInterval(gameOverInterval);
            clearInterval(scoreInterval);

            bullet.bulletHTML.style.animation = "none";
            obstacles[0].style.left = getComputedStyle(obstacles[0]).left;
    
            obstacles[0].style.animation = "none";


            // below is user scores leaderboard
            let playerExists = false;
            players = JSON.parse(localStorage.getItem("PlayerList"));

            for(let i = 0; i< players.length;i++){
                if(players[i].name === userNameInput.value){
                    console.log("old name")
                    console.log(players);
                    playerExists = true;
                    
                    if(scoreCount > players[i].score){
                        players[i].score = scoreCount;
                        localStorage.setItem("PlayerList",JSON.stringify(players));
                    }
                }
            }
            if(!playerExists){
                console.log("new name")
                
                players.push(new User(userNameInput.value,scoreCount))
                localStorage.setItem("PlayerList",JSON.stringify(players));
                console.log(players);
            }
            playerExists = false;

            for(let i = 0; i < players.length;i++){

                for(let j = 0; j< players.length; j++){

                    if(players[i].score > players[j].score){
                        let temp = players[i];
                        players[i] = players[j];
                        players[j] = temp;
                        i--
                        break;
                    }
                }
            }
            // test scores leaderboard
            for(let i = 0; i< players.length; i++){
                console.log(players[i].name);
            }

            for(let i = 0 ; i < players.length;i++){
                leaderBoard +=  (i+ 1) + "- " + players[i].name + ": " + players[i].score + "<br>";
            }
            leaderBoardHTML.innerHTML = leaderBoard;
            gameOverBorder.appendChild(leaderBoardHTML);

            //
            //
            
            
        }
    
    }
}

let gameOverInterval = setInterval(gameOverFunc,1)

overBtn.onclick = function(){
    gameOver = false;

    gameOverBorder.removeChild(overLabel);
    gameOverBorder.removeChild(overBtn);

    //top: 200px;
    //left: 150px;

    player.style.left = "150px";
    player.style.top = "200px";

    obstacles[0].style.left = "700px";
    
    obstacles[0].style.animation = "blueMove 2s infinite linear";

    bullet.bulletHTML.style.animation = "bulletMovement 1.5s linear";

    enemyInterval= setTimeout(enemyFunc,1);

    obstacleVerticalChange = setInterval(obstacleVerticalChangeFunc,2000);

    checkCollision = setInterval(checkCollisionFunc,227);


    gameOverInterval = setInterval(gameOverFunc,1);

    scoreCount = 0;
    scoreInterval = setInterval(scoreFunc,300);

    gameOverBorder.removeChild(leaderBoardHTML);
    leaderBoard= "Leaderboard: <br>";

    
}