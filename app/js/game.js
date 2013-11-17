var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, render: render });

var circle;

function preload(){

}

function create(){
    circle = new Phaser.Circle(game.world.centerX, game.world.centerY, 64);

}

function render(){
    game.debug.renderCircle(circle,'#cfffff');
}
