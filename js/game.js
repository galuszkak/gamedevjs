var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', {
    preload: preload,
    create: create,
    render: render,
    update: update
});

var planet, player1, player2, cursors, jumpButton;

function preload() {
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
    planet = new Phaser.Circle(game.world.centerX, game.world.centerY, 100);
    planet.r = planet.diameter/2;


    player1 = game.add.sprite(32, 32, 'dude');
    player1.body.bounce.y = 0.2;
    player1.body.collideWorldBounds = true;
    player1.body.setSize(16, 32, 8, 16);

    player1.animations.add('left', [0, 1, 2, 3], 10, true);
    player1.animations.add('turn', [4], 20, true);
    player1.animations.add('right', [5, 6, 7, 8], 10, true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function render() {
    game.debug.renderCircle(planet, "#FAFAFA")
}

function update () {
    if(planet.distance(player1) >=100){
        game.physics.accelerateToObject(player1, planet, 60, 200, 200);
    }
    else{
        player1.body.velocity.x = 0;
        player1.body.velocity.y = 0;
    }

    player1.body.angularVelocity = 0;

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        player1.body.angularVelocity = -200;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        player1.body.angularVelocity = 200;
    }
}
