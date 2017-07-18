var GrottoPlayerManager = {

	//create player at different places depending where the visitor was before
    createPlayer: function() {
        var widthPop = null, heightPop = config.previousY;

        //nothing special when coming from Experience, thus going to default
        switch( config.previousState ) {
            case 'languages':
            	widthPop = config.currentState.game.width - config.playerWidth - 1;
            	break;
            case 'about':
           	    widthPop = config.playerWidth + 1;
           	    break;
            default:
           	    widthPop = 100;
                heightPop = config.currentState.game.height - 80;
        }
        
        //if it's the start of the game, the ninja should appear sleeping
        var ninjaFrame = config.previousState === null ? 'ninja0' : 'ninja1';

        config.currentState.player = config.currentState.game.add.sprite(widthPop, heightPop, 'textureAtlas', ninjaFrame);
        
        //if the player is coming back from the Languages state, or it's the start of the game, he should start looking to his left
        if ( config.previousState === 'languages' || config.previousState === null )
            config.currentState.player.scale.x = -1;
    }
};
