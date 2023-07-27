let player = document.getElementById("player");
let obstacles = document.getElementsByClassName("obstacles");
let game = document.getElementById("game");
let wall = document.getElementById("wall");
let score = document.getElementById("score");
let scoreCount = 0;
// function for the obstacles location
function obstacleVerticalChangeFunc(){
    for(let i =0; i< obstacles.length; i++){
        if((Math.random() *100) > 50){
            obstacles[i].style.top = -113 + "px";
    
        }
        else{
            obstacles[i].style.top = 129 + "px";
        }
        
    }
    
}

function checkCollisionFunc(){
    let chracterTop =parseInt( window.getComputedStyle(player).getPropertyValue("top"));
    let chracterLeft = parseInt( window.getComputedStyle(player).getPropertyValue("left"));
    let blockCollision =parseInt( window.getComputedStyle(obstacles[0]).getPropertyValue("left"));
    let blockTop = parseInt( window.getComputedStyle(obstacles[0]).getPropertyValue("top"));

    
    if(chracterLeft +50 - blockCollision >=0 &&
        chracterLeft +50 <= blockCollision + 100){
        if(blockTop === -113){
            if(chracterTop < 237){
                
                let newPlayerLeft =  parseInt( window.getComputedStyle(player).getPropertyValue("left")) -10;
                player.style.left = newPlayerLeft + "px";
            }

        }
        else if (blockTop === 129){
            if(chracterTop > 130){
               
                let newPlayerLeft =  parseInt( getComputedStyle(player).left) -10;
                player.style.left = newPlayerLeft + "px";
            }
        }
        
        
    }
}

function scoreFunc(){
    scoreCount++;
    score.innerHTML = "Score: " + scoreCount;
}

let obstacleVerticalChange;

let checkCollision;

let scoreInterval;






