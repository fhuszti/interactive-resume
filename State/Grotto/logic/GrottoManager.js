var GrottoManager = {

    generateGrotto: function() {
    	funcs.addBackground();

    	//Initial map setup
        funcs.mapSetup('grottoMap');

        //create player at different places depending where the visitor was before
        GrottoPlayerManager.createPlayer();

        //setting physics for the player and things other than platforms
        config.currentState.game.physics.arcade.enable(config.currentState.player);

        //fine tune some player parameters now that the player has a physical body
    	funcs.playerSetup();
    },







    updateGrotto: function() {
    	//collisions
        config.currentState.game.physics.arcade.collide(config.currentState.player, config.currentState.blockedLayer);

        //Player movements management
        funcs.playerMov();

        //if the player touches the left border at certain heights, we go to About
        if ( config.currentState.player.body.left === 0 && (config.currentState.player.y > config.currentState.game.height - 150 || config.currentState.player.y < 100) ) {
            config.previousState = 'grotto';
            config.previousX = config.currentState.player.x;
            config.previousY = config.currentState.player.y;

            config.currentState.game.state.start('About');
        }
    },
};
