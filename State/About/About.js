var InteractiveResume = InteractiveResume || {};

InteractiveResume.About = function() {};

InteractiveResume.About.prototype = {

    preload: function() {
		this.game.time.advancedTiming = true;
    },

    render: function() {
		this.game.debug.text(this.game.time.fps || '--', 10, 30, "#00ff00", "40px Courier");  
	},


    create: function() {
    	config.currentState = this;

    	AboutManager.generateAbout();
    },

    update: function() {
        AboutManager.updateAbout();
    }
};
