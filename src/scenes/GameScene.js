import Phaser from 'phaser';
import LetterBlock from '../gameObjects/LetterBlock'; // Import the LetterBlock class

const PLATFORM_SPEED = 350; // Define platform speed
const LETTER_SPEED_X = 120; // Horizontal movement speed for letters
const LETTER_SPEED_Y = 100; // Falling speed for letters
const PUZZLE_WORD = 'STACK';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.platform = null; // Player platform
        this.cursors = null; // Keyboard cursors
        this.letters = null; // Group containing falling letters
        this.letterTimer = null; // Timer event for spawning letters
        this.letterDirection = 1; // Direction toggle for spawning letters
        this.currentLetterIndex = 0; // Track which letter to spawn next
        this.collectedLetters = []; // Letters captured by player
        this.puzzleText = null; // Display for puzzle progress
        this.transporterKey = null; // Spacebar to activate transporter
        this.transporterZone = null; // Area above platform used for capturing
    }

    preload() {
        console.log('GameScene: preload');
        // Assets are loaded in PreloadScene
    }

    create() {
        console.log('GameScene: create');

        // Get game dimensions
        const { width, height } = this.sys.game.config;

        // --- Platform Setup ---
        this.platform = this.physics.add.sprite(width / 2, height - 50, 'platform');
        this.platform.setImmovable(true); // Makes blocks collide solid with it
        this.platform.body.allowGravity = false; // Platform doesn't fall
        this.platform.setCollideWorldBounds(true); // Keep platform on screen

        // Optionally, scale the platform if needed (example)
        // this.platform.setScale(2);
        // Note: setImmovable needs the body size to be correct, scaling affects this.
        // If scaled, might need body size adjustment: this.platform.body.setSize(width, height, center_x, center_y);

        // Group for all falling letters
        this.letters = this.physics.add.group();

        // Spawn letters at intervals
        this.letterTimer = this.time.addEvent({
            delay: 1000,
            callback: this.spawnLetter,
            callbackScope: this,
            loop: true
        });

        // Collision with platform so letters bounce off it
        this.physics.add.collider(this.letters, this.platform);

        // Display puzzle progress
        this.puzzleText = this.add.text(width / 2, 50, this.formatPuzzleText(), {
            font: '32px Rubik',
            fill: '#F8F9FA'
        }).setOrigin(0.5);

        // Button to go back to Main Menu
        const backButton = this.add.text(width - 20, height - 20, 'Back to Menu', {
            font: '20px Exo 2',
            fill: '#FFD166'
        }).setOrigin(1, 1).setInteractive();

        backButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
        });

        // Initialize keyboard controls
        this.cursors = this.input.keyboard.createCursorKeys();
        this.transporterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Setup transporter zone above the platform
        this.transporterZone = this.add.zone(this.platform.x, this.platform.y - 40, 120, 80);
        this.physics.world.enable(this.transporterZone);
        this.transporterZone.body.setAllowGravity(false);
        this.transporterZone.body.setImmovable(true);

        // --- Touch Controls Setup ---
        this.input.on('pointerdown', (pointer) => {
            this.handlePointerMove(pointer);
        });
        this.input.on('pointermove', (pointer) => {
            if (pointer.isDown) {
                this.handlePointerMove(pointer);
            }
        });
        this.input.on('pointerup', (pointer) => {
            // Stop platform movement when touch/mouse is released
            this.platform.setVelocityX(0);
        });
    }

    // Helper function to handle touch/mouse movement
    handlePointerMove(pointer) {
        const screenWidth = this.cameras.main.width;
        if (pointer.x < screenWidth / 2) {
            // Touched/clicked left half
            this.platform.setVelocityX(-PLATFORM_SPEED);
        } else {
            // Touched/clicked right half
            this.platform.setVelocityX(PLATFORM_SPEED);
        }
    }

    update(time, delta) {
        // -- Platform Movement (Keyboard) --
        // Keyboard controls override touch if keys are pressed
        if (this.cursors.left.isDown) {
            this.platform.setVelocityX(-PLATFORM_SPEED);
        } else if (this.cursors.right.isDown) {
            this.platform.setVelocityX(PLATFORM_SPEED);
        } else if (!this.input.activePointer.isDown) {
            // Only stop if keyboard isn't active AND pointer isn't down
            this.platform.setVelocityX(0);
        }


        // Update transporter zone position to follow the platform
        this.transporterZone.x = this.platform.x;
        this.transporterZone.y = this.platform.y - 40;

        // Capture letters when transporter key is pressed
        if (Phaser.Input.Keyboard.JustDown(this.transporterKey)) {
            this.physics.overlap(this.transporterZone, this.letters, (zone, letter) => {
                this.captureLetter(letter);
            });
        }

        // Update each letter block's text positioning
        this.letters.children.each(letter => {
            if (letter.update) {
                letter.update();
            }
        });
    }

    spawnLetter() {
        if (this.currentLetterIndex >= PUZZLE_WORD.length) {
            this.letterTimer.remove(false);
            return;
        }

        const letterChar = PUZZLE_WORD[this.currentLetterIndex];
        const { width } = this.sys.game.config;
        const x = this.letterDirection > 0 ? 20 : width - 20;
        const velocityX = this.letterDirection * LETTER_SPEED_X;
        const letter = new LetterBlock(this, x, 20, letterChar, velocityX, LETTER_SPEED_Y);
        letter.setBounce(1, 0);
        letter.setCollideWorldBounds(true);
        this.letters.add(letter);

        this.currentLetterIndex++;
        this.letterDirection *= -1;
    }

    captureLetter(letter) {
        this.collectedLetters.push(letter.letter);
        this.updatePuzzleText();

        const beam = this.add.line(0, 0, this.platform.x, this.platform.y - 10, letter.x, letter.y, 0x9D65C9)
            .setOrigin(0, 0)
            .setLineWidth(2);
        this.tweens.add({
            targets: beam,
            alpha: 0,
            duration: 200,
            onComplete: () => beam.destroy()
        });

        letter.destroy();
    }

    formatPuzzleText() {
        return '_ '.repeat(PUZZLE_WORD.length).trim();
    }

    updatePuzzleText() {
        let display = '';
        for (let i = 0; i < PUZZLE_WORD.length; i++) {
            display += (this.collectedLetters[i] || '_') + ' ';
        }
        this.puzzleText.setText(display.trim());
    }
}
