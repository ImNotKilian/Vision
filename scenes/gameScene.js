class gameScene extends Phaser.Scene {
  constructor() {
    super("gameScene")
  }
  preload() {
    this.load.audio("background", "assets/background.wav"); 
    this.load.image("player", "assets/player.png")
    this.load.image('mask', 'assets/mask1.png');
    this.load.image('mask2', 'assets/mask2.png');
  }
  create() {
    this.hitEnemy = function() {
      this.physics.pause();
      this.player.setTint(0xff0000);
    }
    this.music = this.sound.add("background", music);
    this.music.play()
    this.player = this.physics.add.image(100, 522.5, "player").setOrigin(0, 0)
    this.player.setScale(0.5)
    this.player.setBounce(1.2);
    this.player.setCollideWorldBounds(true);
    spotlight = this.make.sprite({
      x: 400,
      y: 300,
      key: 'mask',
      add: false
    }).setOrigin(0,0);
    spotlight2 = this.make.sprite({
      x: 0,
      y: 0,
      key: 'mask2',
      add: false
    }).setOrigin(0,0);
    this.player.mask = new Phaser.Display.Masks.BitmapMask(this, spotlight);
    this.tweens.add({
      targets: spotlight2,
      alpha: 0,
      duration: 2000,
      ease: 'Sine.easeInOut',
      loop: -1,
      yoyo: true
  });
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    spotlight.x = this.player.x-100;
    spotlight.y = this.player.y-100;
    spotlight2.x = 0
    for (let j = 0; j < enemies.length; j++) {
      if (enemies[j].y > 590) {
           enemies[j] = this.physics.add.image(Math.floor(Math.random() * (800 - 100)) + 100,100,"player").setScale(0.5)
           enemies[j].mask = new Phaser.Display.Masks.BitmapMask(this, spotlight2);
           this.physics.add.collider(this.player, enemies[j], this.hitEnemy, null, this);
      } else {
        enemies[j].setVelocityY(160);
      }
      spotlight2.y = enemies[j].y-100;
    }
    if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-160);

    }
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(160);
    }
    else
    {
        this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.setVelocityY(-330);
    }
    if (enemies.length < 5) {
      for (let j = 0; j < 5; j++) {
        enemies[j] = this.physics.add.image(Math.floor(Math.random() * (800 - 100)) + 100,100,"player").setScale(0.5)
        enemies[j].mask = new Phaser.Display.Masks.BitmapMask(this, spotlight2);
        this.physics.add.collider(this.player, enemies[j], this.hitEnemy, null, this);
     }
    }
  }
}