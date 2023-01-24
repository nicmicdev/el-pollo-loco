let canvas;
let world;
let fullscreenActive;
let keyboard = new Keyboard();
let gameStarted = false;
let soundIsOn = true;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('startscreen').classList.add('d-none');    
    document.getElementById('play-btn').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('info-btn').classList.add('d-none');
    document.getElementById('hud').classList.remove('d-none');
    mobileTouchEvents();
    music.play();
    gameStarted = true;
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

function stopGame() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function restart(){
    window.location.href = 'index.html';
}

