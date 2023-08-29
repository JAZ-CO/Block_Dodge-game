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
    requestAnimationFrame(update);
}
update();

// new movement script below with the above script

addEventListener("keydown",function(e){
    
    if(e.code === "KeyW"){
        vyu = -1;

    }
    if(e.code === "KeyS"){
        vyd = 1;

    }

})

addEventListener("keyup",function(e){
    
    if(e.code === "KeyW"){
        vyu = 0;

    }
    if(e.code === "KeyS"){
        vyd = 0;

    }
})

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