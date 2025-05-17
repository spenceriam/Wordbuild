import Phaser from 'phaser';
import gameConfig from './config/gameConfig';

// Initialize Phaser game using the centralized configuration.
// Scenes are defined within gameConfig.
const game = new Phaser.Game(gameConfig);
