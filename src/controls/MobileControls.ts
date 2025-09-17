export class MobileControls {
	private scene: Phaser.Scene;
	private leftButton: Phaser.GameObjects.Graphics;
	private rightButton: Phaser.GameObjects.Graphics;
	private jumpButton: Phaser.GameObjects.Graphics;
	private leftPressed: boolean = false;
	private rightPressed: boolean = false;
	private jumpPressed: boolean = false;
	private activePointers: Set<number> = new Set();

	constructor(scene: Phaser.Scene) {
		this.scene = scene;
		this.createControls();
		this.setupInputHandlers();
	}

	private createControls(): void {
		const camera = this.scene.cameras.main;
		const buttonSize = 80;
		const margin = 20;

		// Left button
		this.leftButton = this.scene.add.graphics();
		this.leftButton.fillStyle(0x444444, 0.7);
		this.leftButton.fillRoundedRect(0, 0, buttonSize, buttonSize, 10);
		this.leftButton.fillStyle(0xffffff, 0.8);
		this.leftButton.fillTriangle(
			buttonSize * 0.6,
			buttonSize * 0.3,
			buttonSize * 0.6,
			buttonSize * 0.7,
			buttonSize * 0.3,
			buttonSize * 0.5
		);
		this.leftButton.setPosition(margin, camera.height - buttonSize - margin);
		this.leftButton.setScrollFactor(0);
		this.leftButton.setDepth(1000);
		this.leftButton.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, buttonSize, buttonSize),
			Phaser.Geom.Rectangle.Contains
		);

		// Right button
		this.rightButton = this.scene.add.graphics();
		this.rightButton.fillStyle(0x444444, 0.7);
		this.rightButton.fillRoundedRect(0, 0, buttonSize, buttonSize, 10);
		this.rightButton.fillStyle(0xffffff, 0.8);
		this.rightButton.fillTriangle(
			buttonSize * 0.4,
			buttonSize * 0.3,
			buttonSize * 0.4,
			buttonSize * 0.7,
			buttonSize * 0.7,
			buttonSize * 0.5
		);
		this.rightButton.setPosition(
			margin + buttonSize + 10,
			camera.height - buttonSize - margin
		);
		this.rightButton.setScrollFactor(0);
		this.rightButton.setDepth(1000);
		this.rightButton.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, buttonSize, buttonSize),
			Phaser.Geom.Rectangle.Contains
		);

		// Jump button
		this.jumpButton = this.scene.add.graphics();
		this.jumpButton.fillStyle(0x444444, 0.7);
		this.jumpButton.fillRoundedRect(0, 0, buttonSize, buttonSize, 10);
		this.jumpButton.fillStyle(0xffffff, 0.8);
		// this.jumpButton.fillText("↑", buttonSize / 2, buttonSize / 2);
		this.jumpButton.setPosition(
			camera.width - buttonSize - margin,
			camera.height - buttonSize - margin
		);
		this.jumpButton.setScrollFactor(0);
		this.jumpButton.setDepth(1000);
		this.jumpButton.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, buttonSize, buttonSize),
			Phaser.Geom.Rectangle.Contains
		);
	}

	private setupInputHandlers(): void {
		// Enable multi-touch
		this.scene.input.addPointer(2); // Allow up to 3 simultaneous touches

		// Left button handlers
		this.leftButton.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
			this.leftPressed = true;
			this.activePointers.add(pointer.id);
			this.updateButtonState(this.leftButton, true);
		});

		this.leftButton.on("pointerup", (pointer: Phaser.Input.Pointer) => {
			this.leftPressed = false;
			this.activePointers.delete(pointer.id);
			this.updateButtonState(this.leftButton, false);
		});

		this.leftButton.on("pointerout", (pointer: Phaser.Input.Pointer) => {
			this.leftPressed = false;
			this.activePointers.delete(pointer.id);
			this.updateButtonState(this.leftButton, false);
		});

		// Right button handlers
		this.rightButton.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
			this.rightPressed = true;
			this.activePointers.add(pointer.id);
			this.updateButtonState(this.rightButton, true);
		});

		this.rightButton.on("pointerup", (pointer: Phaser.Input.Pointer) => {
			this.rightPressed = false;
			this.activePointers.delete(pointer.id);
			this.updateButtonState(this.rightButton, false);
		});

		this.rightButton.on("pointerout", (pointer: Phaser.Input.Pointer) => {
			this.rightPressed = false;
			this.activePointers.delete(pointer.id);
			this.updateButtonState(this.rightButton, false);
		});

		// Jump button handlers
		this.jumpButton.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
			this.jumpPressed = true;
			this.activePointers.add(pointer.id);
			this.updateButtonState(this.jumpButton, true);
		});

		this.jumpButton.on("pointerup", (pointer: Phaser.Input.Pointer) => {
			this.jumpPressed = false;
			this.activePointers.delete(pointer.id);
			this.updateButtonState(this.jumpButton, false);
		});

		this.jumpButton.on("pointerout", (pointer: Phaser.Input.Pointer) => {
			this.jumpPressed = false;
			this.activePointers.delete(pointer.id);
			this.updateButtonState(this.jumpButton, false);
		});
	}

	private updateButtonState(
		button: Phaser.GameObjects.Graphics,
		pressed: boolean
	): void {
		button.clear();
		const buttonSize = 80;

		if (pressed) {
			button.fillStyle(0x666666, 0.9);
			button.fillRoundedRect(0, 0, buttonSize, buttonSize, 10);
		} else {
			button.fillStyle(0x444444, 0.7);
			button.fillRoundedRect(0, 0, buttonSize, buttonSize, 10);
		}

		// Redraw button content based on which button it is
		button.fillStyle(0xffffff, 0.8);

		if (button === this.leftButton) {
			button.fillTriangle(
				buttonSize * 0.6,
				buttonSize * 0.3,
				buttonSize * 0.6,
				buttonSize * 0.7,
				buttonSize * 0.3,
				buttonSize * 0.5
			);
		} else if (button === this.rightButton) {
			button.fillTriangle(
				buttonSize * 0.4,
				buttonSize * 0.3,
				buttonSize * 0.4,
				buttonSize * 0.7,
				buttonSize * 0.7,
				buttonSize * 0.5
			);
		} else if (button === this.jumpButton) {
			// For jump button, you might want to use text or a different shape
			const style = { fontSize: "32px", fill: "#ffffff" };
			const text = this.scene.add.text(
				buttonSize / 2,
				buttonSize / 2,
				"↑",
				style
			);
			text.setOrigin(0.5);
			text.setPosition(button.x + buttonSize / 2, button.y + buttonSize / 2);
			text.setScrollFactor(0);
			text.setDepth(1001);
		}
	}

	public isLeftPressed(): boolean {
		return this.leftPressed;
	}

	public isRightPressed(): boolean {
		return this.rightPressed;
	}

	public isJumpPressed(): boolean {
		return this.jumpPressed;
	}

	public destroy(): void {
		this.leftButton.destroy();
		this.rightButton.destroy();
		this.jumpButton.destroy();
		this.activePointers.clear();
	}
}
