import { Scene } from "phaser";

export class MainMenu extends Scene {
	constructor() {
		super("MainMenu");
	}

	create() {
		this.add.image(512, 384, "background");
<<<<<<< HEAD
		this.add.image(512, 375, "logo").setScale(0.6);
		this.add
			.text(512, 675, "CLICK TO START", {
=======
		this.add.image(512, 250, "logo");
		this.add
			.text(512, 550, "CLICK TO START", {
>>>>>>> main
				fontFamily: "Arial Black",
				fontSize: 38,
				color: "#ffffff",
				stroke: "#000000",
				strokeThickness: 8,
				align: "center",
			})
			.setOrigin(0.5);

		this.input.once("pointerdown", () => {
			this.scene.start("Game");
		});
	}
}
