class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 55;
    speed = 0.35;

    offset = {
        top: 100,
        bottom: 15,
        left: 20,
        right: 50
    };
    startWalking = false;
    startAttack = false;



    IMAGES_STANDING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];


    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];


    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];
    

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    
    
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_STANDING[0]);
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 5000;
        this.animate();
    }

    animate() {     
        setInterval(() => {
            if (this.startWalking) {
                this.moveLeft();
                // console.log('ENDBOSS STARTS WALKING');
            }
        },1000/60)
        
        setInterval(() => {
            
            if (this.isDead()) {
                this.speed = 0;
                this.playAnimation(this.IMAGES_DEAD);   
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.startAttack) {
                this.playAnimation(this.IMAGES_WALKING);
                this.speed = 1.5;
            } else if (this.startWalking) {
                this.playAnimation(this.IMAGES_WALKING);
            } 
            else {
                this.playAnimation(this.IMAGES_STANDING);
            }

            
        }, 200);
    }

    


    // setInterval(() => {
    //     this.playAnimation(this.IMAGES_STANDING)
    //     }, 200);
}