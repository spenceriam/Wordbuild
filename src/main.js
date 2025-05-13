import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Load any assets needed for the preloader or initial game state
        console.log('BootScene preload');
    }

    create() {
        console.log('BootScene create');
        this.scene.start('GameScene');
    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        console.log('GameScene preload');
        // Load game assets here
    }

    create() {
        console.log('GameScene create');
        this.add.text(400, 300, 'Welcome to Wordbuild!', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    }

    update() {
        // Game logic here
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1A2238',
    parent: 'game-container', // This ID should be in your index.html
    scene: [BootScene, GameScene]
};

const game = new Phaser.Game(config);
