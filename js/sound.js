//BACKGROUND MUSIC
let music = new Audio('audio/music.mp3');


//GAME SOUNDS
let sound_jump = new Audio('audio/jump3.mp3');
let sound_bottle_collect = new Audio('audio/bottle-collect.mp3');
let sound_coin_collect = new Audio('audio/coin-collect.mp3');
let sound_character_hurt = new Audio('audio/character-hurt.mp3');
let sound_character_throw = new Audio ('audio/character-throw.mp3');
let sound_bottle_splash = new Audio ('audio/bottle-splash.mp3');
let sound_endboss_hurt = new Audio ('audio/endboss-hurt.mp3');
let sound_chicken_dead = new Audio ('audio/chicken-dead.mp3');
let sound_endboss_attack = new Audio ('audio/tense.mp3');
let sound_game_over = new Audio ('audio/you-win.mp3');
let sound_lost = new Audio ('audio/lost.mp3');



//VOLUME SETTINGS
music.volume = 0.05;
sound_game_over.volume = 0.15;
sound_coin_collect.volume = 0.15;
sound_chicken_dead.volume = 0.25;
sound_endboss_hurt.volume = 0.15;
sound_bottle_splash.volume = 0.35;
sound_endboss_attack.volume = 0.5;
sound_jump.volume = 0.35;


//SOUND FUNCTIONS

function soundMute() {
    document.getElementById('sound').classList.add('d-none');
    document.getElementById('sound-mute').classList.remove('d-none');
    soundIsOn = false;
    sound_endboss_attack.pause();
}


function soundOn() {
    document.getElementById('sound').classList.remove('d-none');
    document.getElementById('sound-mute').classList.add('d-none');
    if (world.endboss.startWalking) sound_endboss_attack.play();
    soundIsOn = true;
}


function musicMute() {
    document.getElementById('music').classList.add('d-none');
    document.getElementById('music-mute').classList.remove('d-none');
    music.pause();
}


function musicOn() {
    document.getElementById('music').classList.remove('d-none');
    document.getElementById('music-mute').classList.add('d-none');
    music.play();
}


function playSound(soundName) {
    if (soundIsOn) soundName.play();
}

function pauseSound(soundName) {
    soundName.pause();
}

// if (gameStarted && !world.endboss.startWalking) 