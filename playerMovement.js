
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