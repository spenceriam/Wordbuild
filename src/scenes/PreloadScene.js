import Phaser from 'phaser';
import WebFontLoader from 'webfontloader';

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        console.log('PreloadScene: preload');

        // Loading text while fonts are loading
        const fontLoadingText = this.make.text({
            x: this.cameras.main.width / 2,
            y: this.cameras.main.height / 2,
            text: 'Loading Fonts...',
            style: {
                font: '30px Exo 2', // Use a basic available font for the loader itself
                fill: '#ffffff'
            }
        });
        fontLoadingText.setOrigin(0.5, 0.5);

        // Array of fonts to load
        const fontsToLoad = ['Bungee Shade', 'Exo 2', 'Rubik', 'Press Start 2P'];

        WebFontLoader.load({
            google: {
                families: fontsToLoad
            },
            active: () => {
                console.log('PreloadScene: Fonts loaded successfully.');
                fontLoadingText.destroy();
                
                // Now load other assets using Phaser's loader
                this.loadAssets();
            },
            inactive: () => {
                console.warn('PreloadScene: Fonts failed to load or are not supported. Using fallback fonts.');
                fontLoadingText.destroy();

                // Still attempt to load other assets even if fonts failed
                this.loadAssets();
            }
        });
    }

    loadAssets() {
        console.log('PreloadScene: loading other assets');

        // Display a loading bar for other assets
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(this.cameras.main.width / 2 - 160, this.cameras.main.height / 2 - 25, 320, 50);

        let loadingText = this.make.text({
            x: this.cameras.main.width / 2,
            y: this.cameras.main.height / 2 - 50,
            text: 'Loading Assets...',
            style: {
                font: '20px Exo 2', // Use a loaded font if possible, or fallback
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        let percentText = this.make.text({
            x: this.cameras.main.width / 2,
            y: this.cameras.main.height / 2,
            text: '0%',
            style: {
                font: '18px Exo 2',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(this.cameras.main.width / 2 - 150, this.cameras.main.height / 2 - 15, 300 * value, 30);
        }, this);

        this.load.on('complete', function () {
            console.log('PreloadScene: Asset load complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            this.scene.start('MainMenuScene'); // Transition after assets are loaded
        }, this);

        // Load actual game assets
        this.load.image('platform', 'assets/images/platform.png');
        this.load.image('letter_block', 'assets/images/letter_block.png');

        // If no assets are queued, the 'complete' event might not fire immediately.
        // If loading only images and they load instantly, ensure transition still happens.
        // Phaser handles this reasonably well, but keep in mind for complex loading scenarios.
        
        // Trigger the loading start manually if needed after queueing
        // this.load.start(); // Usually not necessary unless defined after create()
    }

    create() {
        console.log('PreloadScene: create');
        // Scene transition is handled by WebFontLoader callbacks triggering loadAssets,
        // and then by the Phaser loader's 'complete' event.
    }
}
