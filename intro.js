// helps with bullet not being shoot at the begining
let gameInIntro = true;

let gameIntroId = document.getElementById("intro")

let userNameInput = document.createElement("input");
userNameInput.setAttribute("type","text");
userNameInput.setAttribute("placeholder","Enter your name:");

let startBtn = document.createElement("input");
startBtn.setAttribute("type","button");
startBtn.setAttribute("id","startBtn");
startBtn.setAttribute("value","Start!");

let introLabel = document.createElement("p");

introLabel.innerHTML = "Block Dodge";

gameIntroId.appendChild(introLabel);
gameIntroId.appendChild(userNameInput);
gameIntroId.appendChild(startBtn);

startBtn.onclick = function(){
    if(userNameInput.value){
    gameInIntro = false;
    gameIntroId.removeChild(introLabel);
    gameIntroId.removeChild(userNameInput);
    gameIntroId.removeChild(startBtn);

    enemyInterval= setTimeout(enemyFunc,1000);
    scoreInterval = setInterval(scoreFunc,300);
    checkCollision = setInterval(checkCollisionFunc,227);
    obstacleVerticalChange = setInterval(obstacleVerticalChangeFunc,2000);

    obstacles[0].style.left = "700px";
    
    obstacles[0].style.animation = "blueMove 2s infinite linear";

    bullet.bulletHTML.style.animation = "bulletMovement 1.5s linear";
    }
    else{
        alert("User name not entered!");
    }


}
