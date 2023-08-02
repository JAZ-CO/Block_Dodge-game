
setInterval(function(){
    if(wall.contains(bullet.bulletHTML)){

    let bulletLeftsRight = parseInt(getComputedStyle(bullet.bulletHTML).left) + 10;

    let enemyLeft = parseInt(getComputedStyle
    (enemy).left);
    
    let enemyLeftRight = parseInt(getComputedStyle
        (enemy).left) + 35;

    if(bulletLeftsRight >= enemyLeft && bulletLeftsRight <= enemyLeftRight){
        let bulletTop = parseInt(getComputedStyle(bullet.bulletHTML).top);

        let bulletBottom = parseInt(getComputedStyle(bullet.bulletHTML).bottom);
    
        let enemyTop = parseInt(getComputedStyle(enemy).top);
        let enemyBottom = parseInt(getComputedStyle(enemy).bottom);
    
        if((bulletTop - enemyTop) >= 0 && (bulletBottom - enemyBottom >=0)){
            console.log("enemy removed!")
            
            wall.removeChild(enemy);       
        }
    }

    }
},1)
