var funcs = {

	/*
	Add a background image to the game
	*/
	addBackground: function() {
        config.currentState.background = config.currentState.add.sprite(0, 0, 'textureAtlas', 'background');
    },







	/*
    Initial map setup
    */
    mapSetup: function(map) {
        config.currentState.map = config.currentState.game.add.tilemap(map);

        //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
        config.currentState.map.addTilesetImage('mainSpritesheet', 'mainTiles');

        //create layers
        config.currentState.firstBackgroundLayer = config.currentState.map.createLayer('firstBackgroundLayer');
        config.currentState.secondBackgroundLayer = config.currentState.map.createLayer('secondBackgroundLayer');
        config.currentState.blockedLayer = config.currentState.map.createLayer('blockedLayer');

        //collision on blockedLayer
        config.currentState.map.setCollisionBetween(1, 100000, true, 'blockedLayer');

        //resizes the game world to match the layer dimensions
        config.currentState.firstBackgroundLayer.resizeWorld();
        config.currentState.secondBackgroundLayer.resizeWorld();
        config.currentState.blockedLayer.resizeWorld();
    },







    /*
    fine tune some player parameters
    */
    playerSetup: function() {
        config.currentState.player.body.collideWorldBounds = true;

        //to prevent the player from "floating" above the ground, reducing its physical body size to ease collisions
        //config.currentState.player.body.setSize(30, 25);

        //player gravity
        config.currentState.player.body.gravity.y = 1500;

        //Animations
        config.currentState.player.anchor.setTo(0.5, 1);
        config.currentState.player.animations.add('run', Phaser.Animation.generateFrameNames('ninja', 1, 6), 15, true);

        //move player with cursor keys
        config.currentState.cursors = config.currentState.game.input.keyboard.createCursorKeys();
    },







    /*
    Player movements management
    */
    playerJump: function() {
        if (config.currentState.player.body.blocked.down || config.currentState.player.body.touching.down) {
            config.currentState.player.body.velocity.y -= 500;
            config.currentState.player.frameName = 'ninja4';
        }
    },

    playerMov: function() {
        //Reset speed to steady every frame
        config.currentState.player.body.velocity.x = 0;

        //Player movements management
        if (config.currentState.cursors.right.isDown || config.currentState.game.input.pointer1.isDown && Math.floor(config.currentState.game.input.x / (config.currentState.game.width *0.5)) === config.RIGHT) {
            //  Move to the right
            config.currentState.player.body.velocity.x = 125;
            
            if (config.currentState.player.scale.x < 0)
                config.currentState.player.scale.x *= -1;
            
            config.currentState.player.animations.play('run');
        } 
        else if (config.currentState.cursors.left.isDown || config.currentState.game.input.pointer1.isDown && Math.floor(config.currentState.game.input.x / (config.currentState.game.width *0.5)) === config.LEFT) {
            //  Move to the left
            config.currentState.player.body.velocity.x = -125;
            
            if (config.currentState.player.scale.x > 0)
                config.currentState.player.scale.x *= -1;
            
            config.currentState.player.animations.play('run');
        } 
        else {
            //  Stand still
            config.currentState.player.animations.stop();
            config.currentState.player.frameName = 'ninja1';
        }

        //Jump management
        if (config.currentState.cursors.up.isDown || config.currentState.game.input.pointer1.isDown && Math.floor(config.currentState.game.input.y / (config.currentState.game.height *0.5)) === config.UP) {
            this.playerJump();
        }
    },

};
