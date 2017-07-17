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

        if (config.currentState.player.x < 20 && config.currentState.player.y < 150) {
            config.currentState.game.state.start('Languages');
        }
        if (config.currentState.player.x < 20 && config.currentState.player.y > config.currentState.game.height - 150) {
            config.currentState.game.state.start('Academics');
        }
        if (config.currentState.player.x > config.currentState.game.width - 20 && config.currentState.player.y < 150) {
            config.currentState.game.state.start('Experience');
        }
        if (config.currentState.player.x > config.currentState.game.width - 20 && config.currentState.player.y > gameVariables.currentState.game.height - 250) {
            config.currentState.game.state.start('Contact');
        }
    },
};
