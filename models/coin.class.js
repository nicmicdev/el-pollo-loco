class Coin extends DrawableObject {

    height = 125;
    width = 125;

    offset = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
    }


    IMAGE = 'img/8_coin/coin_1.png';
    
    constructor(x,y) {
        super().loadImage(this.IMAGE);
        this.x = x;
        this.y = y;
    }

}