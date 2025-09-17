import { Scene } from "phaser";

export class MainMenu extends Scene {
	constructor() {
		super("MainMenu");
	}

	create(): void {
		this.add.image(512, 384, "background");
		this.add.image(512, 350, "logo").setScale(0.3);
		this.add
			.text(512, 510, "CLICK TO START", {
				fontFamily: "Arial Black",
				fontSize: 38,
				color: "#ffffff",
				stroke: "#000000",
				strokeThickness: 8,
				align: "center",
			})
			.setOrigin(0.5);

		this.setupNavigation();
	}

	private setupNavigation(): void {
		const isMobile = this.sys.game.device.input.touch;

		if (isMobile) {
			// For mobile: Create a dedicated "Start Game" button to avoid accidental touches
			const startButton = this.add
				.rectangle(512, 600, 300, 80, 0x4a90e2)
				.setStrokeStyle(4, 0xffffff)
				.setInteractive({ cursor: "pointer" });

			this.add
				.text(512, 600, "START GAME", {
					fontFamily: "Arial Black",
					fontSize: 32,
					color: "#ffffff",
				})
				.setOrigin(0.5);

			startButton.on("pointerdown", () => {
				this.scene.start("Game");
			});
		} else {
			// Desktop: Any click starts the game
			this.input.once("pointerdown", () => {
				this.scene.start("Game");
			});
		}
	}
}
