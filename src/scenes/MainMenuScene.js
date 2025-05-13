import Phaser from 'phaser';

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        console.log('MainMenuScene: preload');
    }

    create() {
        console.log('MainMenuScene: create');
        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 - 50, 'Wordbuild', {
            font: '48px Bungee Shade', // Using specified title font
            fill: '#F7B801' // Using specified platform yellow color
        }).setOrigin(0.5);

        const startButton = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 + 50, 'Start Game', {
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
