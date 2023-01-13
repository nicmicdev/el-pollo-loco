class World {

    character = new Character();

    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();
    statusBottles = new StatusBottles();
    statusCoins = new StatusCoins();
    throwableObjects = [];
    bottlesCollected = 10;
    coinsCollected = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {

            this.checkEnemyCollision();
            this.checkEnbossCollision();
            this.checkThrowObjects();

        }, 200);

        setInterval(() => {
            this.checkCoinCollision();
            this.checkBottleCollision();
            this.checkChickenDead();
            
        }, 500/60);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.bottlesCollected > 0 && this.character.otherDirection == false) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottlesCollected--;
        }
    }

    checkThrowCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.throwableObjects.isColliding(enemy)) {
                
            }
         });

    }

    checkEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && this.character.speedY  == 0) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                console.log('Collision with Character, energy:', this.character.energy);
            } 
         });
    }
    
    checkEnbossCollision() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                console.log('Collision with Endboss, energy:', this.character.energy);
            } 
         });
    }

    checkChickenDead() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.speedY < 0 && this.character.isAboveGround()) {
                 this.level.enemies.splice(index,1);
                 this.character.speedY = 20;          //character jumps up little bit if colliding from top 
                 console.log('CHICKEN IS DEAD!');
            }
         });
        
    }

    checkCoinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index,1);
                this.coinsCollected++;
                
                console.log('COIN COLLISION! ', this.coinsCollected, 'coins collected');
            }
         });
    }

    checkBottleCollision() {
        this.level.botlles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.botlles.splice(index,1);
                this.bottlesCollected++;
                
                console.log('BOTTLE COLLISION!', this.bottlesCollected, 'bottles collected');
            }
         });
    }

    



   


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);


        this.addObjectsToMap(this.level.backgroundObjects);
        
        this.ctx.translate(-this.camera_x, 0);
        //---------Space for fixed objects--------------
        this.addToMap (this.statusBar);
        this.addToMap (this.statusBottles);
        this.addToMap (this.statusCoins);
        this.drawAmountOfCollectedObjects();
        //---put fixed objects in the space in between---
        this.ctx.translate(this.camera_x, 0);


        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.botlles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);


        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        // draw() wird immer wieder aufgerufen
        requestAnimationFrame(function () {
            self.draw();
        })

    }

    drawAmountOfCollectedObjects() {
        this.ctx.font = '30px Times New Roman';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.coinsCollected, 70, 92);     // number of coins
        this.ctx.fillText(this.bottlesCollected, 160, 92);   // number of bottles
    }

    

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {

        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }


    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}