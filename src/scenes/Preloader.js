import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(512, 384, "background");

    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("assets");

    this.load.image("logo", "jumper-title.png");
    this.load.image("sky", "sky.png");
    this.load.image("platform-sm", "platform-sm-i.png");
    this.load.image("platform-lg", "platform-lg-i.png");
    this.load.image("floor", "ground-base.png");
    this.load.image("star", "star.png");
    // this.load.image("coin", "coin.png");
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
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("MainMenu");
  }
}
