import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        console.log('BootScene: preload');
        // Potentially load minimal assets for PreloadScene's loading bar itself if complex
    }

    create() {
        console.log('BootScene: create');
        this.scene.start('PreloadScene'); // Start PreloadScene next
    }
}
