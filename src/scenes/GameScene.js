import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        console.log('GameScene: preload');
        // Load game-specific assets here if not loaded in PreloadScene
        // For now, this can remain empty as PreloadScene will handle major assets.
    }

    create() {
        console.log('GameScene: create');
        // Example text, can be replaced with actual game elements
        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Game Scene - Let\'s Build Words!', {
            font: '32px Exo 2',
            fill: '#4ECDC4' // Using Word Frame color
        }).setOrigin(0.5);

        // Example: Go back to Main Menu (useful for testing)
        const backButton = this.add.text(this.cameras.main.width - 100, this.cameras.main.height - 30, 'Main Menu', {
            font: '18px Exo 2',
            fill: '#FFD166'
        })
        .setOrigin(0.5)
        .setInteractive();

        backButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
        });
    }

    update(time, delta) {
        // Game loop logic here
    }
}
