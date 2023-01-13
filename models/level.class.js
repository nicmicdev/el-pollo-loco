class Level {
    enemies;
    endboss;
    botlles;
    coins;
    clouds;
    backgroundObjects;
    level_end_x = 5125;

    constructor(enemies, endboss, bottles, coins, clouds,backgroundObjects){  //?wird aufgerufen sobald Objekt erstellt wird
        this.enemies = enemies;
        this.endboss = endboss;
        this.botlles = bottles;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;


    }
}