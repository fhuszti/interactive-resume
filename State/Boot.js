var InteractiveResume = InteractiveResume || {};

InteractiveResume.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
InteractiveResume.Boot.prototype = {

    preload: function() {
        //the texture atlas
	   this.load.atlasJSONArray('textureAtlas', 'assets/atlas/png/textureAtlas.png', 'assets/atlas/json/textureAtlas.json');
    },

    create: function() {
        //loading screen will have a white background
        this.game.stage.backgroundColor = '#000';

        //scaling options
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //screen size will be set automatically
        this.scale.refresh();

        //physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Preload');
    }

};