


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

// new Code for smoother movement
// and be able to use WASD keys

let ctx = player.getContext("2d");

function updatePlayerMovement(){
    ctx.fillRect(0,0,50,25);
    requestAnimationFrame(updatePlayerMovement);
}
