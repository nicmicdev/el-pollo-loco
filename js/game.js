let canvas;
let world;
let fullscreenActive;
let keyboard = new Keyboard();



function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    // console.log('My character is', world.character);
    document.getElementById('startscreen').classList.add('d-none');    
    document.getElementById('start-btn').classList.add('d-none');    
}

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    fullscreenActive = true;
    document.getElementById('fullscreen').classList.add('fullscreen');
    document.getElementById('canvas').classList.add('fullscreen');
    document.getElementById('startscreen').classList.add('fullscreen');
    document.getElementById('start-btn-container').classList.add('fullscreen');
    document.getElementById('gameover').classList.add('fullscreen');
    document.getElementById('lost').classList.add('fullscreen');
    
    enterFullscreen(fullscreen);

}

function closeFullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    fullscreenActive = false;

    document.getElementById('fullscreen').classList.remove('fullscreen');
    document.getElementById('canvas').classList.remove('fullscreen');
    document.getElementById('startscreen').classList.remove('fullscreen');
    document.getElementById('start-btn-container').classList.remove('fullscreen');
    document.getElementById('gameover').classList.remove('fullscreen');
    document.getElementById('lost').classList.remove('fullscreen');


    exitFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
}

//EVENT LISTENERS

document.addEventListener("keydown", (e) => {
    if(e.keyCode == 27 && fullscreenActive){        // 'ESC' KEY
        console.log('ESC pressed!');
        closeFullscreen();
    }
    
});


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



