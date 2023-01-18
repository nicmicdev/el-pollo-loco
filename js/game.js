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
    document.getElementById('canvas').classList.remove('d-none');

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
    document.getElementById('close-fullscreen-btn').classList.remove('d-none');
    
    enterFullscreen(fullscreen);

}

function closeFullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    fullscreenActive = false;

    exitFullscreen(fullscreen);

    document.getElementById('fullscreen').classList.remove('fullscreen');
    document.getElementById('canvas').classList.remove('fullscreen');
    document.getElementById('startscreen').classList.remove('fullscreen');
    document.getElementById('start-btn-container').classList.remove('fullscreen');
    document.getElementById('gameover').classList.remove('fullscreen');
    document.getElementById('lost').classList.remove('fullscreen');
    document.getElementById('close-fullscreen-btn').classList.add('d-none');

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


document.addEventListener('fullscreenchange', (e) => {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        closeFullscreen();
        console.log('Close Fullscreen works');
    }
});


