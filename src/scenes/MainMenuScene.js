import Phaser from 'phaser';
import { loadHighScore } from '../utils/localStorageManager';

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        console.log('MainMenuScene: preload');
    }

    create() {
        console.log('MainMenuScene: create');

        // Display High Score
        const highScore = loadHighScore();
        this.add.text(this.cameras.main.width - 20, 20, `High Score: ${highScore}`,
            {
                font: '20px Exo 2',
                fill: '#FFD166' // UI Accent color
            }
        ).setOrigin(1, 0); // Align to top-right

        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 - 100, 'Wordbuild', {
            font: '48px Bungee Shade', // Using specified title font
            fill: '#F7B801' // Using specified platform yellow color
        }).setOrigin(0.5);

        const startButton = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 + 20, 'Start Game', {
            font: '32px Exo 2',
            fill: '#FFD166', // Using specified UI accent color
            backgroundColor: '#2D3047', // Using specified UI background color
            padding: { x: 20, y: 10 }
        })
        .setOrigin(0.5)
        .setInteractive();

        startButton.on('pointerdown', () => {
            console.log('Start button clicked');
            this.scene.start('GameScene');
        });

        startButton.on('pointerover', () => {
            startButton.setStyle({ fill: '#F7B801' });
        });

        startButton.on('pointerout', () => {
            startButton.setStyle({ fill: '#FFD166' });
        });
    }
}
