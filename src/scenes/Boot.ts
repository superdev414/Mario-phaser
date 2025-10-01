import { Scene } from "phaser";
import { CONFIG } from "../config";

export class Boot extends Scene {
	constructor() {
		super("Boot");
	}

	preload(): void {
		this.load.image("background", `${CONFIG.ASSETS_BASE_URL}assets/images/background/bg.png`);
	}

	create(): void {
		this.scene.start("Preloader");
	}
}
