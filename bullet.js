// Bullet class
class Bullet{
    constructor(){
    this.x = 0;
    this.y = 0;

    this.shoot = false;
    
    this.bulletHTML = document.createElement("div");
    this.bulletHTML.setAttribute("id","bullet");
    }

    setPosition(top,left){
        this.y = top + 50;
        this.x = left + 50;

        
    }
    
    

}
let bullet = new Bullet();

document.addEventListener("keydown", function(event){
    if(event.code === "Space" && !gameInIntro){
        console.log("bullet shoot");
            if(!bullet.shoot){
             bullet.shoot = true;
            bullet.setPosition(parseInt( window.getComputedStyle(player).getPropertyValue("top")),parseInt( window.getComputedStyle(player).getPropertyValue("left")));
            bullet.bulletHTML.style.left = bullet.x + "px";

            bullet.bulletHTML.style.top = bullet.y + "px";
            wall.appendChild(bullet.bulletHTML);
            
        setTimeout(function(){
            if(wall.contains(bullet.bulletHTML)){
            wall.removeChild(bullet.bulletHTML);
            console.log("Bullet removed");
            bullet.shoot= false;
            }
        }, 1500)
        
    }
    } 
});