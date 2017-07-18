var AboutPlayerManager = {

	//create player at different places depending where the visitor was before
    createPlayer: function() {
        config.currentState.player = config.currentState.game.add.sprite(config.currentState.game.width - config.playerWidth - 1, config.previousY, 'textureAtlas', 'ninja1');
        
        config.currentState.player.scale.x = -1;
    }
};
