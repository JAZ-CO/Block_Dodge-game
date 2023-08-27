
// store elements needed in variables
const player = document.getElementById("player");
let obstacles = document.getElementsByClassName("obstacles");
let game = document.getElementById("game");
let wall = document.getElementById("wall");
let score = document.getElementById("score");

// this variable allow us to increament the score, storing it, and reset it
let scoreCount = 0;

// function for the obstacles location
function obstacleVerticalChangeFunc(){
    for(let i =0; i< obstacles.length; i++){
        // below is just 50/50 for the position of the blue obstacle

        // upper position
        if((Math.random() *100) > 50){
            obstacles[i].style.top = -113 + "px";
    
        }
        // downward position
        else{
            obstacles[i].style.top = 129 + "px";
        }
        
    }
    
}

function checkCollisionFunc(){
    // below is to store each left and top position of the player and obtacle to check the collision between them 
    let chracterTop =parseInt( window.getComputedStyle(player).getPropertyValue("top"));
    let chracterLeft = parseInt( window.getComputedStyle(player).getPropertyValue("left"));
    let blockCollision =parseInt( window.getComputedStyle(obstacles[0]).getPropertyValue("left"));
    let blockTop = parseInt( window.getComputedStyle(obstacles[0]).getPropertyValue("top"));

    // below is basically drawing the conditions manually then apply it here
    if(chracterLeft +50 - blockCollision >=0 &&
        chracterLeft +50 <= blockCollision + 100){
        if(blockTop === -113){
            if(chracterTop < 237){
                vx = -12;
                // this is for damage animation by using css then removing at after the timeout
                player.style.animation ="playerBlinking 1.5s forwards";
                setTimeout(function(){player.style.animation ="none";},1500)
            }

        }
        else if (blockTop === 129){
            if(chracterTop > 130){
                vx = -12;
                // this is for damage animation by using css then removing at after the timeout
                player.style.animation ="playerBlinking 1.5s forwards";
                setTimeout(function(){player.style.animation ="none";},1500)
            }
        }
        
        
    }
}

function scoreFunc(){
    scoreCount++;
    score.innerHTML = "Score: " + scoreCount;
}

// I made below variables like this so the intervals doesn't start before the game
let obstacleVerticalChange;

let checkCollision;

let scoreInterval;