class StatusCoins extends DrawableObject {

    height = 55;
    width = 55;
    x = 5;
    y = 50;

    IMAGE = 'img/7_statusbars/3_icons/icon_coin.png';
    
    constructor() {
        super().loadImage(this.IMAGE);
    }

}