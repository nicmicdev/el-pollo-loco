class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 5125;

    constructor(enemies,clouds,backgroundObjects){                                      //?wird aufgerufen sobald Objekt erstellt wird
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;


    }
}