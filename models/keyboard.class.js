class Keyboard {
    LEFT = false; 
    RIGHT = false;
    UP = false;
    DOWN = false; 
    SPACE = false;
    D = false; 
}

document.addEventListener("keydown", (e) => {
    if(e.keyCode == 39 && !world.endboss.isDead() && !world.character.isDead()){
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37 && !world.endboss.isDead() && !world.character.isDead()){
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38 && !world.endboss.isDead() && !world.character.isDead()){
        keyboard.UP = true;
    }
    if(e.keyCode == 40 && !world.endboss.isDead() && !world.character.isDead()){
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32 && !world.endboss.isDead() && !world.character.isDead()){
        keyboard.SPACE = true;
    }
    if(e.keyCode == 68 && !world.endboss.isDead() && !world.character.isDead() ){
        keyboard.D = true;
    }
});

document.addEventListener("keyup", (e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37){
        keyboard.LEFT = false;
    }
    if(e.keyCode == 38){
        keyboard.UP = false;
    }
    if(e.keyCode == 40){
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32){
        keyboard.SPACE = false;
    }
    if(e.keyCode == 68){
        keyboard.D = false;
    }
});



