class menuScene extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }
    preload() {

    }
    create() {
        this.scene.start("gameScene")
    }
    update() {

    }
}