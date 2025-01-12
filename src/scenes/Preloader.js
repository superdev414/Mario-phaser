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
		this.load.image("logo", "images/ui/game-logo.png");
		this.load.image("sky", "images/background/sky.png");
		this.load.image("platform-sm", "images/platforms/platform-sm-i.png");
		this.load.image("platform-lg", "images/platforms/platform-lg-i.png");
		this.load.image("floor", "images/platforms/floor.png");
		this.load.image("bomb", "images/items/bomb-i.png");
		this.load.spritesheet("coin", "images/items/coin.png", {
			frameWidth: 18,
			frameHeight: 18,
		});
		this.load.spritesheet("dude", "images/characters/jumper-hero.png", {
			frameWidth: 32,
			frameHeight: 48,
		});
		this.load.audio("collectSound", "audio/collect.mp3");
		this.load.audio("explosionSound", "audio/bmb-ex-ii.mp3");
	}

	create() {
		this.scene.start("MainMenu");
	}
}
