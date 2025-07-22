import { Scene } from "phaser";

export class GameOver extends Scene {
	constructor() {
		super("GameOver");
	}

	create(): void {
		this.cameras.main.setBackgroundColor(0xff0000);
		this.add.image(512, 384, "background").setAlpha(0.5);
		this.add
			.text(512, 384, "Game Over", {
				fontFamily: "Arial Black",
				fontSize: 64,
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
			// For mobile: Create a dedicated "Restart" button to avoid accidental touches
			const restartButton = this.add
				.rectangle(512, 600, 300, 80, 0xe74c3c)
				.setStrokeStyle(4, 0xffffff)
				.setInteractive({ cursor: "pointer" });

			this.add
				.text(512, 600, "RESTART", {
					fontFamily: "Arial Black",
					fontSize: 32,
					color: "#ffffff",
				})
				.setOrigin(0.5);

			restartButton.on("pointerdown", () => {
				this.scene.start("MainMenu");
			});
		} else {
			// Desktop: Any click restarts
			this.input.once("pointerdown", () => {
				this.scene.start("MainMenu");
			});
		}
	}
}
