class Chicken extends MovableObject {

    y = 370;
    height = 70;
    width = 70;
    isDead = false;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];


    IMAGE_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);
        this.x = 250 + Math.random() * 7000; // number between 250 and 7000 to spawn chickens
        this.speed = 0.15 + Math.random()*0.25;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        },1000/60)
        this.animateChickenDeadOrWalking();
    }

    animateChickenDeadOrWalking() {
        setInterval(() => {
            if (this.energy == 0 )  {
                this.playAnimation(this.IMAGE_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }  
        }, 125);
    }
}