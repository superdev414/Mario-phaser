import { Scene } from "phaser";

/** @type {Phaser.Physics.Arcade.Sprite} */
var player;

/** @type {Phaser.Physics.Arcade.StaticGroup} */
var platforms;

/** @type {CursorKeys} */
var cursors;

/** @type {Phaser.Physics.Arcade.Group} */
var coins;

/** @type {Phaser.Sound.BaseSound} */
var collectSound;

/** @type {Phaser.Physics.Arcade.Group} */
var bombs;

/** @type {Phaser.Sound.BaseSound} */
var explosionSound;

/** @type {Phaser.GameObjects.Text} */
var scoreText;

/** @type {boolean} */
var gameOver = false;

/** @type {number} */
var score = 0;

/**
 * @typedef {Object} CursorKeys
 * @property {Phaser.Input.Keyboard.Key} up
 * @property {Phaser.Input.Keyboard.Key} down
 * @property {Phaser.Input.Keyboard.Key} left
 * @property {Phaser.Input.Keyboard.Key} right
 */

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    collectSound = this.sound.add("collectSound");
    explosionSound = this.sound.add("explosionSound");

    platforms = this.physics.add.staticGroup();
    platforms.create(505, 735, "floor").setScale(3).refreshBody();

    // firtst platform
    platforms.create(150, 420, "platform-lg");
    platforms.create(700, 300, "platform-lg");

    // third platform
    platforms.create(515, 550, "platform-sm");

    // fourth platform
    platforms.create(910, 450, "platform-sm");

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "spin",
      frames: this.anims.generateFrameNumbers("coin", { start: 0, end: 4 }),
      frameRate: 9,
      repeat: -1,
    });

    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.sprite(100, 500, "dude");
    player.setBounce(0.2);
    player.body.setSize(player.width, player.height * 0.9, false);

    coins = this.physics.add.group({
      key: "coin",
      repeat: 18,
      setXY: { x: 21, y: 0, stepX: 55 },
    });

    coins.children.iterate(function (child) {
      child.play("spin");
    });

    bombs = this.physics.add.group();

    var scoreLabel = this.add.text(16, 16, "Score:", {
      fontSize: "32px",
      fill: "#ffffff",
      fontStyle: "bold",
      fontFamily: '"Roboto Condensed", Arial, sans-serif',
      stroke: "#000000",
      strokeThickness: 6,
    });

    scoreText = this.add.text(16 + scoreLabel.width, 16, "0", {
      fontSize: "32px",
      fill: "#ffffff",
      fontStyle: "bold",
      fontFamily: '"Roboto Condensed", Arial, sans-serif',
      stroke: "#000000",
      strokeThickness: 6,
    });

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(coins, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.overlap(player, coins, collectCoin, null, this);
    this.physics.add.collider(player, bombs, hitBomb, null, this);
    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }

  update() {
    if (gameOver) {
      return;
    }
    this.physics.world.wrap(player, 0);
    bombs.children.each(function (bomb) {
      this.physics.world.wrap(bomb, 0);
    }, this);

    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);
      player.anims.play("right", true);
    } else {
      player.setVelocityX(0);
      player.anims.play("turn");
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-333);
    }
  }
}

function collectCoin(player, coin) {
  coin.disableBody(true, true);
  collectSound.play();
  score += 10;
  scoreText.setText(score.toString());

  this.tweens.add({
    targets: scoreText,
    scale: { from: 1.5, to: 1 },
    ease: "Cubic",
    duration: 300,
    repeat: 0,
    yoyo: false,
    onUpdate: function () {
      scoreText.setColor("#ffb600");
    },
    onComplete: function () {
      scoreText.setColor("#ffffff");
    },
  });

  var x =
    player.x < 275
      ? Phaser.Math.Between(275, 600)
      : Phaser.Math.Between(0, 275);

  var bomb = bombs.create(x, Phaser.Math.Between(9, 21), "bomb");
  bomb.setBounce(1);
  bomb.setVelocity(
    Phaser.Math.Between(-175, 175),
    Phaser.Math.Between(50, 200)
  );
  if (coins.countActive(true) === 0) {
    coins.children.iterate(function (child) {
      child.enableBody(true, child.x, 30, true, true);
    });
  }
}

function hitBomb(player) {
  this.physics.pause();
  player.setTint(0xff0000);
  player.anims.play("turn");
  gameOver = true;
  explosionSound.play();
  setTimeout(resetGame.bind(this), 2000);
}

function resetGame() {
  this.scene.restart();
  gameOver = false;
  score = 0;
  scoreText.setText("Score: " + score);
}
