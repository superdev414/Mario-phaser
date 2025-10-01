import { Scene } from "phaser";
import { CONFIG } from "../config";

export class Preloader extends Scene {
	constructor() {
		super("Preloader");
	}

	init(): void {
		this.add.image(512, 384, "background");
		this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
	}

	preload(): void {
		this.load.setPath(`${CONFIG.ASSETS_BASE_URL}assets`);

		this.load.image("logo", "images/ui/jumper-title.png");
		this.load.image("sky", "images/background/sky.png");
		this.load.image("platform-sm", "images/platforms/platform-sm-i.png");
		this.load.image("platform-lg", "images/platforms/platform-lg-i.png");
		this.load.image("left-button", "images/controls/icons8-left-arrow.png");
		this.load.image("right-button", "images/controls/icons8-right-arrow.png");
		this.load.image("jump-button", "images/controls/icons8-up-arrow.png");
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

	create(): void {
		this.scene.start("MainMenu");
	}
}
