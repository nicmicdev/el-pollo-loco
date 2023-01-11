class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };




    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

   


    drawFrame(ctx) {
        if (this instanceof Character)  {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y+100, this.width, this.height-100);
            ctx.stroke();
        }

        if ( this instanceof Chicken || this instanceof SmallChicken || this instanceof Endboss || this instanceof Bottle)  {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        if ( this instanceof Coin)  {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x+35, this.y+35, this.width-70, this.height-75);
            ctx.stroke();
        }
    }
    
}