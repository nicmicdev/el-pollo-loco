class Cloud extends MovableObject {
    y = 0;
    width = 500;
    height = 250;
    

    constructor(x) {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = x;
        this.animateClouds();            
    }

    
    animateClouds() {
        setInterval(() => {
            this.x -= 0.15;
            
        }, 1000 / 60);
    }



}