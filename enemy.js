let enemy = document.createElement("div");
enemy.setAttribute("id","enemy");

// these are two funtions that runs in interval of time
let enemyInterval;
let enemyMove;

// Function to spawn the enemy at the start
function enemyFunc(){
    
    
    enemy.style.left = (760 +(Math.random() *200)) + "px";

    if(!wall.contains(enemy)){
        wall.appendChild(enemy);
        
    }


let fluctuation = 0.0;



enemyMove = setInterval(function(){
    if(!wall.contains(enemy)){
        
        wall.appendChild(enemy);
        enemy.style.left = (760 +(Math.random() *200)) + "px";

    }
    fluctuation += 0.02;
    
    enemy.style.top = ((parseInt(getComputedStyle(wall).width) + 90)/2 * Math.abs(Math.sin(fluctuation))) + "px";
    enemy.style.left = (parseInt(getComputedStyle(enemy).left) -1.2) + "px";

// the difference was supposed to be 50 & 100 but it makes it detect even if its outside so I change it manually until it fits     

    if(Math.abs(parseInt(window.getComputedStyle(enemy).left) -parseInt(window.getComputedStyle(player).left)) < 30){
        if(Math.abs(parseInt(window.getComputedStyle(enemy).top) -parseInt(window.getComputedStyle(player).top)) < 85){
            vx = -1;
        }
    }
    if(parseInt(getComputedStyle(enemy).left) === -50){
        let fluctuation = 0.0;

    enemy.style.left = (760 +(Math.random() *200)) + "px";
    }
    
},20)
}

