class StatusBottles extends DrawableObject {

    height = 50;
    width = 50;
    x = 100;
    y = 55;

    IMAGE = 'img/7_statusbars/3_icons/icon_salsa_bottle.png';
    
    constructor() {
        super().loadImage(this.IMAGE);
    }

}