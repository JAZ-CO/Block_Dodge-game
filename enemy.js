let enemy = document.createElement("div");
enemy.setAttribute("id","enemy");

let enemyInterval;
let enemyMove;


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

// the difference was supposed to be 50 & 100 but it makes it detect even if its outside so I change it manually until I feel like it fits     

    if(Math.abs(parseInt(window.getComputedStyle(enemy).left) -parseInt(window.getComputedStyle(player).left)) < 30){
        if(Math.abs(parseInt(window.getComputedStyle(enemy).top) -parseInt(window.getComputedStyle(player).top)) < 85){
            let newPlayerLeft =  parseInt( window.getComputedStyle(player).getPropertyValue("left")) -0.5;
            player.style.left = newPlayerLeft + "px";
        }
    }
    if(parseInt(getComputedStyle(enemy).left) === -50){
        let fluctuation = 0.0;

    enemy.style.left = (760 +(Math.random() *200)) + "px";
    }
    
},20)
}

enemyInterval= setTimeout(enemyFunc,1000)

