var GrottoPlayerManager = {

	//create player at different places depending where the visitor was before
    createPlayer: function() {
        var widthPop = null, heightPop = null;

        //nothing special when coming from Experience, thus going to default
        switch( config.previousState ) {
            case 'languages':
            	widthPop = 50;
            	heightPop = 100;
            	break;
            case 'contact':
           	    widthPop = config.currentState.game.width - 30;
           	    heightPop = 430;
           	    break;
            case 'academics':
           	    widthPop = 50;
           	    heightPop = config.currentState.game.height - 100;
           	    break;
            default:
           	    widthPop = 50;
           	    heightPop = config.currentState.game.height - 50;
        }
        
        config.currentState.player = config.currentState.game.add.sprite(widthPop, heightPop, 'textureAtlas', 'ninja1');
        
        //if the player is coming back from the Languages state, he should start looking to his left
        if ( config.previousState === 'languages' )
            config.currentState.player.scale.x = -1;
    }
};
