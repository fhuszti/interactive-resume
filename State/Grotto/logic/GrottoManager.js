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
};
