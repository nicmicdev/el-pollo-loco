class StatusCoins extends DrawableObject {

    height = 125;
    width = 125;
    x = -30;
    y = 20;

    IMAGE = '../img/8_coin/coin_1.png';
    
    constructor() {
        super().loadImage(this.IMAGE);
    }

}