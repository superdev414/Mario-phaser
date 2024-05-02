<<<<<<< HEAD
<<<<<<< HEAD
import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.image(512, 384, "background");
    this.add.image(512, 300, "logo");
    this.add
      .text(512, 460, "CLICK TO START", {
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
=======
import { Scene } from 'phaser';
=======
import { Scene } from "phaser";
>>>>>>> 60e7498 (first commit: phaser game)

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.image(512, 384, "background");

    this.add.image(512, 300, "logo");

    this.add
      .text(512, 460, "CLICK TO START", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

<<<<<<< HEAD
        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
>>>>>>> 4ff2702 (Updated with latest template code and examples. Version 3.0.0.)
=======
    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }
>>>>>>> 60e7498 (first commit: phaser game)
}
