let gameOver = false;
let gameOverBorder = document.getElementById("gameOverBorder");

let overBtn = document.createElement("input");
overBtn.setAttribute("type","button");
overBtn.setAttribute("id","gameOverBtn");
overBtn.setAttribute("value","Replay!");

let overLabel = document.createElement("p");

overLabel.innerHTML = "GAMEOVER";

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
            
            bullet.bulletHTML.style.animation = "none";
            obstacles[0].style.left = getComputedStyle(obstacles[0]).left;
    
            obstacles[0].style.animation = "none";
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





    
}