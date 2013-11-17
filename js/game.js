var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', {
    preload: preload,
    create: create,
    render: render,
    update: update
});

var planet, player, cursors, jumpButton, facing = 'left', jumpTimer = 0;

function preload() {
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
    game.plugins.add(plugin);

    player = game.add.sprite(32, 32, 'dude');
    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 6;
    player.body.setSize(16, 32, 8, 16);
    player.anchor.setTo(0.5, 0.5);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function update () {
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
        }
    }
    else
    {
        if (facing != 'idle')
        {
            player.animations.stop();

            if (facing == 'left')
            {
                player.frame = 0;
            }
            else
            {
                player.frame = 5;
            }

            facing = 'idle';
        }
    }

    if (jumpButton.isDown && player.body.touching.down && game.time.now > jumpTimer)
    {
        player.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }
}

function render() {
    game.debug.renderSpriteInfo(player, 32, 32);
    var x = Math.round(player.x);

    if (x <= 0) {
        player.x = game.world.width - 16 - 1;
    } else if (x >= game.world.width - 16) {
        player.x = 1;
    }
}

var plugin = new Phaser.Plugin(game);
plugin.update = function () {
    player._x = player.x;
    player._y = player.y;
    player._angle = player.angle;

    // move

    // rotate

    // move
};

plugin.postRender = function () {
    player.x = player._x;
    player.y = player._y;
    player.angle = player._angle;
};
