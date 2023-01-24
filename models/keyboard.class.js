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


function mobileTouchEvents() {
    mRIGHT();
    mLEFT();
    mUP();
    mTHROW();
}


function mRIGHT(){
    document.getElementById('mRIGHT').addEventListener('touchstart', e => {
        e.preventDefault();
        keyboard.RIGHT = true;
    
    });
    document.getElementById('mRIGHT').addEventListener('touchend', e => {
        e.preventDefault();
        keyboard.RIGHT = false;
    
    });
}


function mLEFT(){
    document.getElementById('mLEFT').addEventListener('touchstart', e => {
        e.preventDefault();
        keyboard.LEFT = true;
    
    });
    document.getElementById('mLEFT').addEventListener('touchend', e => {
        e.preventDefault();
        keyboard.LEFT = false;
    
    });
}


function mUP(){
    document.getElementById('mUP').addEventListener('touchstart', e => {
        e.preventDefault();
        keyboard.SPACE = true;
    
    });
    document.getElementById('mUP').addEventListener('touchend', e => {
        e.preventDefault();
        keyboard.SPACE = false;
    
    });
}


function mTHROW(){
    document.getElementById('mTHROW').addEventListener('touchstart', e => {
        e.preventDefault();
        keyboard.D = true;
    
    });
    document.getElementById('mTHROW').addEventListener('touchend', e => {
        e.preventDefault();
        keyboard.D = false;
    
    });
}


//EVENT LISTENER FOR FULLSCREEN
document.addEventListener('fullscreenchange', (e) => {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        closeFullscreen();
        console.log('Close Fullscreen works');
    }
});


