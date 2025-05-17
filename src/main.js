import Phaser from 'phaser';
import gameConfig from './config/gameConfig';

// Initialize Phaser using the shared configuration once the page loads.
window.addEventListener('load', () => {
  new Phaser.Game(gameConfig);
});

