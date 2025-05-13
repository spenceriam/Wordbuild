import Phaser from 'phaser';
import LetterBlock from '../gameObjects/LetterBlock'; // Import the LetterBlock class

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        console.log('GameScene: preload');
        // Assets are loaded in PreloadScene
    }

    create() {
        console.log('GameScene: create');

        // Get game dimensions
        const { width, height } = this.sys.game.config;

        // Add platform - positioned at bottom center
        // Since it's physics-enabled, its origin is (0.5, 0.5) by default
        this.platform = this.physics.add.staticImage(width / 2, height - 50, 'platform');
        // You might need to adjust the Y position depending on the actual platform image height

        // Optionally, scale the platform if needed (example)
        // this.platform.setScale(2).refreshBody(); // refreshBody updates the physics body after scaling a static object

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
    }

    update(time, delta) {
        // Game loop logic goes here
        // Ensure LetterBlock's update is called if it needs continuous updates (like text positioning)
        if (this.testLetter && this.testLetter.active) {
            this.testLetter.update();
        }
    }
}
