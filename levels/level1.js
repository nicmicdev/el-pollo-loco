const level1 = new Level(
    
    // ENEMIES 
    
    [                     
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
        // new SmallChicken(),
        // new SmallChicken(),
        new Endboss()
    ],

    // BOTTLES
    
    [
        new Bottle(500, 370, 0),
        new Bottle(600, 370, 1),
        new Bottle(550, 150, 2),


    ],

    //COINS

    [
        new Coin (400, 150)

    ],


    //CLOUDS

    [
        new Cloud(150),
        new Cloud(500),
        new Cloud(1000),
        new Cloud(1500),
        new Cloud(2000),
        new Cloud(2500),
        new Cloud(3000),
        new Cloud(3500),
        new Cloud(4000),
        new Cloud(4500),
        new Cloud(5500),
        new Cloud(6000),
        new Cloud(6500),
        new Cloud(7000),
        new Cloud(8000),
        new Cloud(9000),
        new Cloud(10000),
        new Cloud(11000),
        new Cloud(12000)

         
    ],

    //BACKGROUND OBJECTS

    [
         
        new BackgroundObject('../img/5_background/layers/air.png',-719),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png',-719),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png',-719),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png',-719),
         
        new BackgroundObject('../img/5_background/layers/air.png',0),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png',0),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png',0),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png',0),
        
        new BackgroundObject('../img/5_background/layers/air.png',719),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png',719),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png',719),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png',719),

        new BackgroundObject('../img/5_background/layers/air.png',719*2),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png',719*2),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png',719*2),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png',719*2),
        
        new BackgroundObject('../img/5_background/layers/air.png',719*3),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png',719*3),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png',719*3),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png',719*3),

        new BackgroundObject('../img/5_background/layers/air.png',719*4),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png',719*4),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png',719*4),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png',719*4),
        
        new BackgroundObject('../img/5_background/layers/air.png',719*5),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png',719*5),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png',719*5),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png',719*5),

        new BackgroundObject('../img/5_background/layers/air.png',719*6),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png',719*6),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png',719*6),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png',719*6),

        new BackgroundObject('../img/5_background/layers/air.png',719*7),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png',719*7),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png',719*7),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png',719*7),

        

        
    ]

);