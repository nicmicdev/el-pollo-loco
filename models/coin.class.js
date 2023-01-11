class Coin extends CollectibleObject {

    height = 125;
    width = 125;

    IMAGE = '../img/8_coin/coin_1.png';
    
    constructor(x,y) {
        super().loadImage(this.IMAGE);
        this.x = x;
        this.y = y;
    }

}