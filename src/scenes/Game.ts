import { Scene } from "phaser";

let player: Phaser.Physics.Arcade.Sprite;
let platforms: Phaser.Physics.Arcade.StaticGroup;
let cursors: Phaser.Types.Input.Keyboard.CursorKeys;
let coins: Phaser.Physics.Arcade.Group;
let collectSound: Phaser.Sound.BaseSound;
let bombs: Phaser.Physics.Arcade.Group;
let explosionSound: Phaser.Sound.BaseSound;
let scoreText: Phaser.GameObjects.Text;
let gameOver: boolean = false;
let score: number = 0;

// Custom interface for bombs with bounce tracking
interface BombSprite extends Phaser.Physics.Arcade.Sprite {
	bounceCount?: number;
	maxBounces?: number;
}

export class Game extends Scene {
	constructor() {
		super("Game");
	}

	create(): void {
		collectSound = this.sound.add("collectSound");
		explosionSound = this.sound.add("explosionSound");

		platforms = this.physics.add.staticGroup();
		platforms.create(505, 735, "floor").setScale(3).refreshBody();

		// first platform
		platforms.create(150, 420, "platform-lg");
		platforms.create(700, 300, "platform-lg");

		// third platform
		platforms.create(515, 550, "platform-sm");

		// fourth platform
		platforms.create(910, 450, "platform-sm");

		this.anims.create({
			key: "left",
			frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1,
		});

		this.anims.create({
			key: "turn",
			frames: [{ key: "dude", frame: 4 }],
			frameRate: 20,
		});

		this.anims.create({
			key: "right",
			frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1,
		});

		this.anims.create({
			key: "spin",
			frames: this.anims.generateFrameNumbers("coin", { start: 0, end: 4 }),
			frameRate: 9,
			repeat: -1,
		});

		cursors = this.input.keyboard!.createCursorKeys();

		player = this.physics.add.sprite(100, 500, "dude");
		player.setBounce(0.2);
		player.body!.setSize(player.width, player.height * 0.9, false);

		coins = this.physics.add.group({
			key: "coin",
			repeat: 18,
			setXY: { x: 21, y: 100, stepX: 55 },
		});

		coins.children.iterate((child) => {
			const coin = child as Phaser.Physics.Arcade.Sprite;
			coin.play("spin");
			return true;
		});

		bombs = this.physics.add.group();

		const scoreLabel = this.add.text(16, 16, "Score:", {
			fontSize: "32px",
			color: "#ffffff",
			fontStyle: "bold",
			fontFamily: '"Roboto Condensed", Arial, sans-serif',
			stroke: "#000000",
			strokeThickness: 6,
		});

		scoreText = this.add.text(16 + scoreLabel.width, 16, "0", {
			fontSize: "32px",
			color: "#ffffff",
			fontStyle: "bold",
			fontFamily: '"Roboto Condensed", Arial, sans-serif',
			stroke: "#000000",
			strokeThickness: 6,
		});

		this.physics.add.collider(player, platforms);
		this.physics.add.collider(coins, platforms);
		this.physics.add.collider(
			bombs,
			platforms,
			(bomb, platform) => {
				const bombSprite = bomb as BombSprite;
				// Count bounces when bomb hits a platform
				if (bombSprite.bounceCount !== undefined) {
					bombSprite.bounceCount++;
					if (bombSprite.bounceCount >= bombSprite.maxBounces!) {
						bombSprite.destroy();
					}
				}
			},
			undefined,
			this
		);
		this.physics.add.overlap(
			player,
			coins,
			this.collectCoin as any,
			undefined,
			this
		);
		this.physics.add.collider(
			player,
			bombs,
			this.hitBomb as any,
			undefined,
			this
		);
		this.input.once("pointerdown", () => {
			this.scene.start("GameOver");
		});
	}

	update(): void {
		if (gameOver) {
			return;
		}

		// Handle player wrapping - allow wrapping on all edges like Pac-Man
		this.physics.world.wrap(player, 0);

		// Handle bomb wrapping - horizontal wrapping and vertical boundaries
		bombs.children.each((bomb) => {
			const bombSprite = bomb as BombSprite;
			// Only wrap horizontally
			if (bombSprite.x < -bombSprite.width) {
				bombSprite.x = this.cameras.main.width + bombSprite.width;
			} else if (bombSprite.x > this.cameras.main.width + bombSprite.width) {
				bombSprite.x = -bombSprite.width;
			}

			// Prevent bombs from going above screen - bounce them back down
			if (bombSprite.y < 0) {
				bombSprite.y = 0;
				bombSprite.setVelocityY(Math.abs(bombSprite.body!.velocity.y)); // Reverse to downward
				// Count this as a bounce
				if (bombSprite.bounceCount !== undefined) {
					bombSprite.bounceCount++;
					if (bombSprite.bounceCount >= bombSprite.maxBounces!) {
						bombSprite.destroy();
						return true; // Exit early since bomb is destroyed
					}
				}
			}

			// Prevent bombs from going below screen - bounce them back up
			if (bombSprite.y > this.cameras.main.height) {
				bombSprite.y = this.cameras.main.height;
				bombSprite.setVelocityY(-Math.abs(bombSprite.body!.velocity.y)); // Reverse to upward
				// Count this as a bounce
				if (bombSprite.bounceCount !== undefined) {
					bombSprite.bounceCount++;
					if (bombSprite.bounceCount >= bombSprite.maxBounces!) {
						bombSprite.destroy();
						return true; // Exit early since bomb is destroyed
					}
				}
			}

			return true;
		}, this);

		if (cursors.left.isDown) {
			player.setVelocityX(-160);
			player.anims.play("left", true);
		} else if (cursors.right.isDown) {
			player.setVelocityX(160);
			player.anims.play("right", true);
		} else {
			player.setVelocityX(0);
			player.anims.play("turn");
		}

		if (cursors.up.isDown && player.body!.touching.down) {
			player.setVelocityY(-333);
		}
	}

	private collectCoin(
		player: Phaser.Types.Physics.Arcade.GameObjectWithBody,
		coin: Phaser.Types.Physics.Arcade.GameObjectWithBody
	): void {
		const coinSprite = coin as Phaser.Physics.Arcade.Sprite;
		coinSprite.disableBody(true, true);
		collectSound.play();
		score += 10;
		scoreText.setText(score.toString());

		this.tweens.add({
			targets: scoreText,
			scale: { from: 1.5, to: 1 },
			ease: "Cubic",
			duration: 300,
			repeat: 0,
			yoyo: false,
			onUpdate: () => {
				scoreText.setColor("#ffb600");
			},
			onComplete: () => {
				scoreText.setColor("#ffffff");
			},
		});

		const playerSprite = player as Phaser.Physics.Arcade.Sprite;
		const x =
			playerSprite.x < 275
				? Phaser.Math.Between(275, 600)
				: Phaser.Math.Between(0, 275);

		const bomb = bombs.create(
			x,
			Phaser.Math.Between(9, 50),
			"bomb"
		) as BombSprite;
		bomb.setBounce(0.8); // Reduced bounce to prevent excessive jumping
		bomb.setVelocity(
			Phaser.Math.Between(-150, 150), // Reduced horizontal velocity
			Phaser.Math.Between(20, 100) // Reduced vertical velocity
		);

		// Add some drag to make bombs feel more realistic
		bomb.setDrag(10);

		// Initialize bounce counter for this bomb
		bomb.bounceCount = 0;
		bomb.maxBounces = 30;

		if (coins.countActive(true) === 0) {
			coins.children.iterate((child) => {
				const coinSprite = child as Phaser.Physics.Arcade.Sprite;
				coinSprite.enableBody(true, coinSprite.x, 30, true, true);
				return true;
			});
		}
	}

	private hitBomb(
		player: Phaser.Types.Physics.Arcade.GameObjectWithBody
	): void {
		this.physics.pause();
		const playerSprite = player as Phaser.Physics.Arcade.Sprite;
		playerSprite.setTint(0xff0000);
		playerSprite.anims.play("turn");
		gameOver = true;
		explosionSound.play();
		setTimeout(() => this.resetGame(), 2000);
	}

	private resetGame(): void {
		this.scene.restart();
		gameOver = false;
		score = 0;
		scoreText.setText("Score: " + score);
	}
}
