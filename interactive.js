var InteractiveResume = InteractiveResume || {};

InteractiveResume.game = new Phaser.Game(640, 368, Phaser.AUTO, '');

InteractiveResume.game.state.add('Boot', InteractiveResume.Boot);

InteractiveResume.game.state.add('Preload', InteractiveResume.Preload);

InteractiveResume.game.state.add('Grotto', InteractiveResume.Grotto);

InteractiveResume.game.state.add('Languages', InteractiveResume.Languages);

InteractiveResume.game.state.add('Frameworks', InteractiveResume.Frameworks);

InteractiveResume.game.state.add('Misc', InteractiveResume.Misc);

InteractiveResume.game.state.add('Academics', InteractiveResume.Academics);

InteractiveResume.game.state.add('Contact', InteractiveResume.Contact);

InteractiveResume.game.state.add('Experience', InteractiveResume.Experience);

InteractiveResume.game.state.start('Boot');