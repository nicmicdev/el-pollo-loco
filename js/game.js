let canvas;
let world;
let fullscreenActive;
let keyboard = new Keyboard();



function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    // console.log('My character is', world.character);
    document.getElementById('startscreen').classList.add('d-none');    
    document.getElementById('play-btn').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('info-btn').classList.add('d-none');
    mobilePressEvents();

}

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    fullscreenActive = true;

    document.getElementById('fullscreen').classList.add('fullscreen');
    document.getElementById('canvas').classList.add('fullscreen');
    document.getElementById('startscreen').classList.add('fullscreen');
    document.getElementById('gameover').classList.add('fullscreen');
    document.getElementById('lost').classList.add('fullscreen');
    document.getElementById('close-fullscreen-btn').classList.remove('d-none');
    document.getElementById('fullscreen-btn').classList.add('d-none');
    
    enterFullscreen(fullscreen);

}

function closeFullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    fullscreenActive = false;

    exitFullscreen(fullscreen);

    document.getElementById('fullscreen').classList.remove('fullscreen');
    document.getElementById('canvas').classList.remove('fullscreen');
    document.getElementById('startscreen').classList.remove('fullscreen');
    document.getElementById('gameover').classList.remove('fullscreen');
    document.getElementById('lost').classList.remove('fullscreen');
    document.getElementById('close-fullscreen-btn').classList.add('d-none');
    document.getElementById('fullscreen-btn').classList.remove('d-none');

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

function openMenu(id){
    document.getElementById(id).classList.remove('d-none');
    showOverlay();
}

function closeMenu(id){
    document.getElementById(id).classList.add('d-none');
    hideOverlay();
}

function hideOverlay() {
    document.getElementById('overlay').classList.add('d-none');
}


function showOverlay() {
    document.getElementById('overlay').classList.remove('d-none');
}



function restart(){
    window.location.href = 'index.html';
}

function soundMute() {
    document.getElementById('sound').classList.add('d-none');
    document.getElementById('sound-mute').classList.remove('d-none');
}


function soundOn() {
    document.getElementById('sound').classList.remove('d-none');
    document.getElementById('sound-mute').classList.add('d-none');
}


function musicMute() {
    document.getElementById('music').classList.add('d-none');
    document.getElementById('music-mute').classList.remove('d-none');
}


function musicOn() {
    document.getElementById('music').classList.remove('d-none');
    document.getElementById('music-mute').classList.add('d-none');
}

//EVENT LISTENERS


document.addEventListener('fullscreenchange', (e) => {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        closeFullscreen();
        console.log('Close Fullscreen works');
    }
});


// function mobilePressEvents() {
//     document.getElementById('mRIGHT').addEventListener('touchstart', e => {
//         e.preventDefault();
//         console.log('HUD right pressed');
//         keyboard.RIGHT = true;
    
//     });
    
//     document.getElementById('mRIGHT').addEventListener('touchend', e => {
//         e.preventDefault();
//         console.log('HUD right touchend');
//         keyboard.RIGHT = false;
    
//     });
    

// }



