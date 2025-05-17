import Phaser from 'phaser';
import gameConfig from './config/gameConfig';

window.addEventListener('load', () => {
  // Initialize Phaser using the shared game configuration
  new Phaser.Game(gameConfig);
});
