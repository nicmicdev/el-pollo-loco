class SmallChicken extends MovableObject {

    y = 385;
    height = 45;
    width = 45;
    isDead = false;

    
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
        
    ];

    IMAGE_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);


        this.x = 250 + Math.random() * 7000; // number between

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
                // console.log('DEAD IMG SHOWING');
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
            
        }, 125);
    }

    



}