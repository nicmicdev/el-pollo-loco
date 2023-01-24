class World {

    character = new Character();
    endboss = level1.endboss[0];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();
    statusBottles = new StatusBottles();
    statusCoins = new StatusCoins();
    throwableObjects = [];
    bottlesCollected = 0;
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
        this.slowInterval();
        this.fastInterval();
    }

    slowInterval() {
        setInterval(() => {
            this.checkEnemyCollision(this.level.chickens, 5);
            this.checkEnemyCollision(this.level.smallChickens, 2);
            this.checkEnbossCollision();
            this.checkThrowObjects();
            this.checkThrowCollision();
            this.checkDistanceToEndboss();
            this.checkBehindEndboss();
            this.checkEndscreen();

        }, 200);
    }

    fastInterval() {
        setInterval(() => {
            this.checkCoinCollision();
            this.checkBottleCollision();
            this.checkChickenDead();
            this.checkSmallChickenDead();

        }, 500 / 60);
    }

    checkDistanceToEndboss() {
        if (this.character.x > 4400) {
            this.endboss.startWalking = true;
            pauseSound(music);
            playSound(sound_endboss_attack);
           
        }
    }


    checkThrowObjects() {
        if (this.keyboard.D && this.bottlesCollected > 0 && this.character.otherDirection == false && !this.endboss.isHurt() && !this.endboss.isDead()) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottlesCollected--;
            playSound(sound_character_throw);
            setTimeout(() => {
                playSound(sound_bottle_splash);
            }, 850);
        }
    }


    checkThrowCollision() {
        this.throwableObjects.forEach((bottle) => {
            if (this.endboss.isColliding(bottle) && !this.endboss.isDead()) {
                this.endboss.hit(5);
                this.endboss.startAttack = true;
                playSound(sound_endboss_hurt);
            }
        });
    }


    checkEnemyCollision(array, damage) {
        array.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && this.character.speedY == 0) {
                this.character.hit(damage);
                this.statusBar.setPercentage(this.character.energy);
                playSound(sound_character_hurt);
            }
        });
    }

    
    checkEnbossCollision() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && !this.endboss.isDead()) {
                this.character.hit(7);
                this.statusBar.setPercentage(this.character.energy);
                playSound(sound_character_hurt);
            }
        });
    }


    checkChickenDead() {
        this.level.chickens.forEach((enemy, index) => {
            if (!enemy.isDead && this.character.isColliding(enemy) && this.character.speedY < 0) {
                enemy.kill();
                this.character.speedY = 20;     //character jumps up little bit if colliding from top
                setTimeout(() => {
                    this.level.chickens.splice(index, 1);
                }, 300);
                playSound(sound_chicken_dead);
            }
        });

    }


    checkSmallChickenDead() {
        this.level.smallChickens.forEach((enemy, index) => {
            if (!enemy.isDead && this.character.isColliding(enemy) && this.character.speedY < 0) {
                enemy.kill();
                this.character.speedY = 20;     //character jumps up little bit if colliding from top
                setTimeout(() => {
                    this.level.smallChickens.splice(index, 1);
                }, 300);
                playSound(sound_chicken_dead);
            }
        });

    }


    checkCoinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                this.coinsCollected++;
                playSound(sound_coin_collect);
            }
        });
    }


    checkBottleCollision() {
        this.level.botlles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.botlles.splice(index, 1);
                this.bottlesCollected++;
                playSound(sound_bottle_collect);
            }
        });
    }


    checkEndscreen() {
        if (this.endboss.isDead()) {
            this.executeGameOver();
        }
        if (this.character.isDead()) {
            this.executeYouLost();
        }
    }


    executeGameOver() {
        setTimeout(() => {
            document.getElementById('gameover').classList.remove('d-none');
            document.getElementById('gameover-msg').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
            document.getElementById('menu-btn-container').classList.add('d-none');
            document.getElementById('hud').classList.add('d-none');
            pauseSound(sound_endboss_attack);
            pauseSound(music);
            playSound(sound_game_over);
            stopGame();
        }, 1000);
    }


    executeYouLost() {
        setTimeout(() => {
            document.getElementById('lost').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
            document.getElementById('menu-btn-container').classList.add('d-none');
            document.getElementById('hud').classList.add('d-none');
            sound_endboss_attack.pause();
            pauseSound(music);
            playSound(sound_lost);
            stopGame();
        }, 1000);
    }


    checkBehindEndboss() {
        if (this.characterIsBehindEndboss()) {
            this.character.energy = 0;
        }
    }


    characterIsBehindEndboss() {
        return this.character.x - 250 > this.endboss.x
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawBackground();
        this.ctx.translate(-this.camera_x, 0);
        //---------SPACE FOR FIXED OBJECTS--------------
        this.drawFixedObjects();
        //---PUT FIXED OBJECTS IN THE SPACE IN BETWEEN---
        this.ctx.translate(this.camera_x, 0);
        this.drawMovableObjects();
        this.drawCollecitbles();
        this.ctx.translate(-this.camera_x, 0);
        this.animationFrame();
    }

    drawBackground() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
    }

    drawMovableObjects() {
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.chickens);
        this.addObjectsToMap(this.level.smallChickens);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects); 
    }

    drawCollecitbles() {
        this.addObjectsToMap(this.level.botlles);
        this.addObjectsToMap(this.level.coins);

    }

    drawFixedObjects() {
        this.drawStatusBars();
        this.drawAmountOfCollectedObjects();
    }


    drawAmountOfCollectedObjects() {
        this.ctx.font = '30px zabars';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(this.coinsCollected, 70, 92);     // number of coins
        this.ctx.fillText(this.bottlesCollected, 160, 92);   // number of bottles
    }


    drawStatusBars() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBottles);
        this.addToMap(this.statusCoins);
    }

    animationFrame() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
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