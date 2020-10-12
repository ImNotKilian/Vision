class loadScene extends Phaser.Scene {
    constructor() {
        super("loadScene")
    }
    preload() {

    }
    create() {
        this.scene.start("gameScene") 
    }
    update() {

    }
}