var config = {
    width: 800,
    height : 600,
    backgroundColor: 0,
    scene: [loadScene,menuScene,gameScene],
    physics: {
        default: 'arcade'
    }
}


var game = new Phaser.Game(config);

var spotlight;
var spotlight2;
var enemies = []
var music = {
        mute: false,
        volume: 5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
    }