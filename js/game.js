var game = document.getElementById("game"),
    stage = new PIXI.Stage(0x000000),
    renderer = PIXI.autoDetectRenderer(game.clientWidth, game.clientHeight),
    playerTexture = PIXI.Texture.fromImage("assets/player.png"),
    planetTexture = PIXI.Texture.fromImage("assets/planet.png"),
    player = new PIXI.Sprite(playerTexture),
    planet = new PIXI.Sprite(planetTexture);

game.appendChild(renderer.view);

planet.anchor.x = 0.5;
planet.anchor.y = 0.5;
planet.position.x = 400;
planet.position.y = 300;

player.anchor.x = 0.5;
player.anchor.y = 0.5;
player.position.x = 100;
player.position.y = 100;

stage.addChild(planet);
stage.addChild(player);

requestAnimFrame(animate);

function animate() {
    requestAnimFrame(animate);
    renderer.render(stage);
}
