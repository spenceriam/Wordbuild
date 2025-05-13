import Phaser from 'phaser';
import LetterBlock from '../gameObjects/LetterBlock'; // Import the LetterBlock class

const PLATFORM_SPEED = 350; // Define platform speed

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.platform = null; // Initialize platform variable
        this.cursors = null; // Initialize cursors variable
        this.testLetter = null; // Initialize testLetter variable
    }

    preload() {
        console.log('GameScene: preload');
        // Assets are loaded in PreloadScene
    }

    create() {
        console.log('GameScene: create');

        // Get game dimensions
        const { width, height } = this.sys.game.config;

        // --- Platform Setup ---
        // Change from staticImage to sprite for movement
        this.platform = this.physics.add.sprite(width / 2, height - 50, 'platform');
        this.platform.setImmovable(true); // Makes blocks collide solid with it
        this.platform.body.allowGravity = false; // Platform doesn't fall
        this.platform.setCollideWorldBounds(true); // Keep platform on screen

        // Optionally, scale the platform if needed (example)
        // this.platform.setScale(2);
        // Note: setImmovable needs the body size to be correct, scaling affects this.
        // If scaled, might need body size adjustment: this.platform.body.setSize(width, height, center_x, center_y);

        // Create a single LetterBlock instance
        // Spawn it near the top center
        this.testLetter = new LetterBlock(this, width / 2, 50, 'W');

        // Set up collision between the letter block and the platform
        this.physics.add.collider(this.testLetter, this.platform);

        // Placeholder text (optional, can be removed)
        this.add.text(width / 2, 50, 'Game Scene - Play Area', {
            font: '32px Exo 2',
            fill: '#EF476F' // Use a theme color
        }).setOrigin(0.5);

        // Button to go back to Main Menu
        const backButton = this.add.text(width - 20, height - 20, 'Back to Menu', {
            font: '20px Exo 2',
            fill: '#FFD166'
        }).setOrigin(1, 1).setInteractive();

        backButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
        });

        // Initialize keyboard controls
        this.cursors = this.input.keyboard.createCursorKeys();

        // --- Touch Controls Setup ---
        this.input.on('pointerdown', (pointer) => {
            this.handlePointerMove(pointer);
        });
        this.input.on('pointermove', (pointer) => {
            if (pointer.isDown) {
                this.handlePointerMove(pointer);
            }
        });
        this.input.on('pointerup', (pointer) => {
            // Stop platform movement when touch/mouse is released
            this.platform.setVelocityX(0);
        });
    }

    // Helper function to handle touch/mouse movement
    handlePointerMove(pointer) {
        const screenWidth = this.cameras.main.width;
        if (pointer.x < screenWidth / 2) {
            // Touched/clicked left half
            this.platform.setVelocityX(-PLATFORM_SPEED);
        } else {
            // Touched/clicked right half
            this.platform.setVelocityX(PLATFORM_SPEED);
        }
    }

    update(time, delta) {
        // -- Platform Movement (Keyboard) --
        // Keyboard controls override touch if keys are pressed
        if (this.cursors.left.isDown) {
            this.platform.setVelocityX(-PLATFORM_SPEED);
        } else if (this.cursors.right.isDown) {
            this.platform.setVelocityX(PLATFORM_SPEED);
        } else if (!this.input.activePointer.isDown) {
            // Only stop if keyboard isn't active AND pointer isn't down
            this.platform.setVelocityX(0);
        }

        // Ensure LetterBlock's update is called if it needs continuous updates (like text positioning)
        if (this.testLetter && this.testLetter.active) {
            this.testLetter.update();
        }
    }
}
