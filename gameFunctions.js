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
        config.currentState.player.body.gravity.y = 900;

        //Animations
        config.currentState.player.anchor.setTo(0.5, 1);
        config.currentState.player.animations.add('run', Phaser.Animation.generateFrameNames('ninja', 1, 6), 15, true);

        //move player with cursor keys
        config.currentState.cursors = config.currentState.game.input.keyboard.createCursorKeys();
    }

};
