class Level {
    enemies;
    bottles;
    coins;
    clouds;
    backgroundObjects;
    level_end_x = 5125;

    constructor(enemies, bottles, coins, clouds,backgroundObjects){  //?wird aufgerufen sobald Objekt erstellt wird
        this.enemies = enemies;
        this.botlles = bottles;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;


    }
}