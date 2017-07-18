var AboutManager = {

    generateAbout: function() {
    	funcs.addBackground();

    	//Initial map setup
        funcs.mapSetup('aboutMap');

        //create player at different places depending where the visitor was before
        AboutPlayerManager.createPlayer();

        //setting physics for the player and things other than platforms
        config.currentState.game.physics.arcade.enable(config.currentState.player);

        //fine tune some player parameters now that the player has a physical body
    	funcs.playerSetup();
    },







    updateAbout: function() {
    	//collisions
        config.currentState.game.physics.arcade.collide(config.currentState.player, config.currentState.blockedLayer);

        //Player movements management
        funcs.playerMov();

        //if the player touches the right border at certain heights, we go back to the Grotto
        if ( config.currentState.player.body.right === config.currentState.game.width && (config.currentState.player.y > config.currentState.game.height - 150 || config.currentState.player.y < 100) ) {
            config.previousState = 'about';
            config.previousX = config.currentState.player.x;
            config.previousY = config.currentState.player.y;

            config.currentState.game.state.start('Grotto');
        }
    },
};
