<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 60e7498 (first commit: phaser game)
import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";
<<<<<<< HEAD
=======
import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
>>>>>>> 4ff2702 (Updated with latest template code and examples. Version 3.0.0.)
=======
>>>>>>> 60e7498 (first commit: phaser game)

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 60e7498 (first commit: phaser game)
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 369 },
      debug: false,
<<<<<<< HEAD
    },
  },
  scene: [Boot, Preloader, MainMenu, Game, GameOver],
=======
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
    ]
>>>>>>> 4ff2702 (Updated with latest template code and examples. Version 3.0.0.)
=======
    },
  },
  scene: [Boot, Preloader, MainMenu, Game, GameOver],
>>>>>>> 60e7498 (first commit: phaser game)
};

export default new Phaser.Game(config);
