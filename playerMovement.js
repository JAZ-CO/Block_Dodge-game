// player intial left and top
let x = 150;
let y = 200;

let vx = 0;
let vyu =0;
let vyd = 0;

function update(){
    
    x += vx;
    y += vyu;
    y += vyd;
    
    
    player.style.left = x + "px"
    player.style.top = y + "px"
    

    vx = 0;
    
    // still working on limiting the player movement area:
    if( y >= 0 && y <=407)
        requestAnimationFrame(update);
    else if (y < 0 && vyd >0)
        requestAnimationFrame(update);
    else if(y > 407 && vyu <0)
        requestAnimationFrame(update);
    

}
update();

// new movement script below with the above script

addEventListener("keydown",function(e){
    
    
    if(e.code === "KeyW" ){
        if(parseInt(getComputedStyle(player).top) >= 0){
        vyu = -1;
        }
        else{
            player.style.top = 0 + "px"
        }

    }
    if(e.code === "KeyS"){
        if(parseInt(getComputedStyle(player).top) <= 405){
        vyd = 1;
        }
        else{
            player.style.top = 450 + "px"
        }

    }



});

addEventListener("keyup",function(e){
    
    if(e.code === "KeyW"){
        vyu = 0;

    }
    if(e.code === "KeyS"){
        vyd = 0;

    }
});

// Dash ability code
// document.addEventListener("keydown", function(event){
//     if(event.code === "ArrowUp"){
//         if(parseInt(getComputedStyle(player).top) >=-10 ){
//         let newTop = parseInt(getComputedStyle(player).top)-10;
//         player.style.top = newTop + "px"
//         }
//     }
//     else if(event.code === "ArrowDown"){
//         if(parseInt(getComputedStyle(player).top) <=380 ){
//         let newTop = parseInt(getComputedStyle(player).top)+10;
//         player.style.top = newTop + "px"
//         }
//     }
// })