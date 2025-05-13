import Phaser from 'phaser';
import BootScene from '../scenes/BootScene';
import PreloadScene from '../scenes/PreloadScene';
import MainMenuScene from '../scenes/MainMenuScene';
import GameScene from '../scenes/GameScene'; // Assuming GameScene will be further developed

const gameConfig = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 800, // Default width, will be adjusted by Scale Manager
    height: 600, // Default height, will be adjusted by Scale Manager
    backgroundColor: '#1A2238', // Background Blue from UI/UX doc
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // No global gravity, can be set per-object
            debug: process.env.NODE_ENV === 'development' // Show physics debug info in development
        }
    },
    scale: {
        mode: Phaser.Scale.FIT, // Fit to window, maintaining aspect ratio
        autoCenter: Phaser.Scale.CENTER_BOTH, // Center game canvas
        min: {
            width: 320, // Minimum width for responsiveness
            height: 480  // Minimum height for responsiveness
        },
        max: {
            width: 1920, // Maximum width
            height: 1080 // Maximum height
        }
    },
    scene: [BootScene, PreloadScene, MainMenuScene, GameScene]
};

export default gameConfig;
