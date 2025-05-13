import Phaser from 'phaser';
import WebFontLoader from 'webfontloader';

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        console.log('PreloadScene: preload');

        // Simple loading text while fonts are loading
        const loadingText = this.make.text({
            x: this.cameras.main.width / 2,
            y: this.cameras.main.height / 2,
            text: 'Loading Fonts...',
            style: {
                font: '30px Exo 2', // Use a basic available font for the loader itself
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        // Array of fonts to load
        const fontsToLoad = ['Bungee Shade', 'Exo 2', 'Rubik', 'Press Start 2P'];

        WebFontLoader.load({
            google: {
                families: fontsToLoad
            },
            active: () => {
                console.log('PreloadScene: Fonts loaded successfully.');
                loadingText.destroy();
                // If you have other assets to load with Phaser's loader, start them here
                // and then transition in this.load.on('complete')
                // For now, just transition directly as we are only loading fonts in this step.
                this.scene.start('MainMenuScene');
            },
            inactive: () => {
                // This callback is triggered if the browser does not support web fonts
                // or if none of the fonts could be loaded.
                console.warn('PreloadScene: Fonts failed to load or are not supported. Using fallback fonts.');
                loadingText.destroy();
                this.scene.start('MainMenuScene'); // Proceed with fallback fonts
            },
            // fontloading: (familyName, fvd) => {
            //     console.log('Loading font:', familyName, fvd);
            // },
            // fontactive: (familyName, fvd) => {
            //     console.log('Font active:', familyName, fvd);
            // },
            // fontinactive: (familyName, fvd) => {
            //     console.warn('Font inactive:', familyName, fvd);
            // }
        });

        // Remove previous Phaser loader example if it was just for dummy assets
        // The WebFontLoader handles its own loading indication or completion.
    }

    create() {
        console.log('PreloadScene: create');
        // Scene transition is handled by WebFontLoader callbacks
    }
}
