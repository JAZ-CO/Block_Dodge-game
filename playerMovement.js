document.addEventListener("keydown", function(event){
    if(event.code === "ArrowUp"){
        if(parseInt(getComputedStyle(player).top) >=-10 ){
        let newTop = parseInt(getComputedStyle(player).top)-10;
        player.style.top = newTop + "px"
        }
    }
    else if(event.code === "ArrowDown"){
        if(parseInt(getComputedStyle(player).top) <=380 ){
        let newTop = parseInt(getComputedStyle(player).top)+10;
        player.style.top = newTop + "px"
        }
    }
})

// new Code for smoother movement (unused yet)
// and be able to use WASD keys

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = parseInt((getComputedStyle(player).left));
let y = parseInt((getComputedStyle(player).top));

let vx = 0;
let vyu =0;
let vyd = 0;

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    x += vx;
    y += vyu;
    y += vyd;
    ctx.fillRect(x,y,50,100);
    requestAnimationFrame(update);
}
update();

// new movement script below with the above script

addEventListener("keydown",function(e){
    console.log(e.code);
    if(e.code === "KeyD"){
        vx = 3;

    }
    if(e.code === "KeyA"){
        vx = -3;

    }
    if(e.code === "KeyW"){
        vyu = -3;

    }
    if(e.code === "KeyS"){
        vyd = 3;

    }
})
addEventListener("keyup",function(e){
    console.log(e.code);
    if(e.code === "KeyD"){
        vx = 0;

    }
    if(e.code === "KeyA"){
        vx = 0;

    }
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
