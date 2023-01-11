class Bottle extends DrawableObject {

    height = 75;
    width = 75;

    IMAGES = [
        '../img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
        '../img/6_salsa_bottle/salsa_bottle.png'
    ]

    constructor(x,y,img) {
        super().loadImage(this.IMAGES[img]);
        this.x = x;
        this.y = y;
    }

}