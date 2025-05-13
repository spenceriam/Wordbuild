import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        console.log('PreloadScene: preload');

        // Display a loading bar or a simple loading message
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(this.cameras.main.width / 2 - 160, this.cameras.main.height / 2 - 25, 320, 50);

        let loadingText = this.make.text({
            x: this.cameras.main.width / 2,
            y: this.cameras.main.height / 2 - 50,
            text: 'Loading...', 
            style: {
                font: '20px Exo 2',
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
            console.log('PreloadScene: load complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            this.scene.start('MainMenuScene'); // Or directly to GameScene for now
        }, this);

        // Example asset loading (replace with actual assets later)
        // this.load.image('logo', 'assets/images/logo.png');
        // this.load.audio('backgroundMusic', ['assets/audio/music.mp3', 'assets/audio/music.ogg']);

        // Simulate loading time for demonstration if no assets are being loaded
        // This helps to see the loading bar in action.
        // Remove this in actual implementation when assets are present.
        this.load.image('dummy', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');

    }

    create() {
        console.log('PreloadScene: create');
        // The 'complete' event in preload will trigger scene transition
    }
}
