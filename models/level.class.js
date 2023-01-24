class Level {
    chickens;  
    smallChickens;
    endboss;
    botlles;
    coins;
    clouds;
    backgroundObjects;
    level_end_x = 5125;

    constructor(chickens,smallChickens, endboss, bottles, coins, clouds,backgroundObjects){ 
        this.chickens = chickens; 
        this.smallChickens = smallChickens;
        this.endboss = endboss;
        this.botlles = bottles;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}