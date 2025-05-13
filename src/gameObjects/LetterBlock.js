/**
 * Represents a single letter block in the game.
 */
import Phaser from 'phaser';

export default class LetterBlock extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, letter = 'A') {
        // Call the parent constructor (Sprite)
        super(scene, x, y, 'letter_block'); // Use the loaded asset key

        // Enable physics for this object
        scene.physics.world.enable(this);
        scene.add.existing(this); // Add the sprite to the scene

        // Assign the letter
        this.letter = letter;

        // Optional: Set physics properties (e.g., gravity, bounce)
        this.setBounce(0.3); // Add a slight bounce
        this.setCollideWorldBounds(true); // Keep it within the game world

        // Add the letter text on top of the block
        // Use Rubik font as specified in wordbuild-ui-ux.md for letters
        this.letterText = scene.add.text(0, 0, this.letter, {
            font: '32px Rubik', // Use Rubik font
            fill: '#060606', // Dark color for contrast on red block
            align: 'center'
        }).setOrigin(0.5);

        // Keep the text centered on the block
        Phaser.Display.Align.In.Center(this.letterText, this);

        // Make the text follow the sprite (simple approach)
        // A more robust approach might involve containers or updating position in 'update'
        // We need to update position continuously
        // this.letterText.x = this.x; 
        // this.letterText.y = this.y;
    }

    // Method to update the text position if needed (especially if block rotates/moves complexly)
    update() {
        // Keep text centered on the block during movement
        this.letterText.x = this.x;
        this.letterText.y = this.y;
    }

    // Optional: Method to handle cleanup when the block is destroyed
    destroy(fromScene) {
        if (this.letterText) {
            this.letterText.destroy();
        }
        super.destroy(fromScene);
    }
}
