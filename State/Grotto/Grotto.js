var InteractiveResume = InteractiveResume || {};

InteractiveResume.Grotto = function() {};

InteractiveResume.Grotto.prototype = {

    preload: function() {
		this.game.time.advancedTiming = true;
    },

    render: function() {
		this.game.debug.text(this.game.time.fps || '--', 10, 30, "#00ff00", "40px Courier");  
	},


    create: function() {
    	config.currentState = this;

    	GrottoManager.generateGrotto();
    },

    update: function() {
        GrottoManager.updateGrotto();
    }
};
