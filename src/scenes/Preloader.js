import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.add.image(512, 384, "background");
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
  }

  preload() {
    this.load.setPath("assets");
    this.load.image("logo", "jumper-title.png");
    this.load.image("sky", "sky.png");
    this.load.image("platform-sm", "platform-sm-i.png");
    this.load.image("platform-lg", "platform-lg-i.png");
    this.load.image("floor", "ground-base.png");
    this.load.image("star", "star.png");
    this.load.image("bomb", "bomb.png");
    this.load.spritesheet("coin", "coin.png", {
      frameWidth: 18,
      frameHeight: 18,
    });
    this.load.spritesheet("dude", "dude-ii.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.audio("collectSound", "collect.mp3");
    this.load.audio("explosionSound", "explosion.mp3");
  }

  create() {
    this.scene.start("MainMenu");
  }
}
