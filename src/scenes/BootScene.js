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

        // Check for WebGL support
        const webGLSupported = this.sys.game.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer;
        if (!webGLSupported) {
            console.warn('WebGL is not supported by this browser. Phaser will fall back to Canvas renderer, which may have performance implications.');
        }

        this.scene.start('PreloadScene'); // Start PreloadScene next
    }
}
