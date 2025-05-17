# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.9.0] - 2025-05-17
### Added
- Alternating left-to-right and right-to-left falling letters with bounce logic.
- Simple transporter mechanic for capturing letters and filling the puzzle word.
- Centralized Phaser initialization in `src/main.js` using `gameConfig`.

## [0.8.0] - 2025-05-12
### Added
- Implemented basic touch controls for platform movement in `GameScene` (touch left/right half of screen).
- Added `pointerdown`, `pointermove`, and `pointerup` listeners.
- Created `handlePointerMove` helper function.
- Updated `update` loop logic to handle stopping platform when neither keyboard nor touch is active.
### Changed
- Marked platform boundaries and physics properties tasks as complete in TODO list (covered by existing implementation for MVP).

## [0.7.0] - 2025-05-12
### Added
- Implemented platform movement in `GameScene` using left/right arrow keys.
- Changed platform from `staticImage` to `sprite` with `immovable` and `allowGravity=false` properties.
- Added keyboard cursor key listener (`this.cursors`).
- Updated platform velocity in `update` loop based on key presses.
- Defined `PLATFORM_SPEED` constant.
### Changed
- Renamed "Week" to "Part" in `wordbuild-todo-phase1.md`.

## [0.6.0] - 2025-05-12
### Added
- Created `src/gameObjects` directory.
- Defined `LetterBlock` class in `src/gameObjects/LetterBlock.js`, extending `Phaser.Physics.Arcade.Sprite`.
- `LetterBlock` includes basic physics (bounce, world bounds) and displays its assigned letter using the 'Rubik' font.
- Implemented collision detection between `LetterBlock` instances and the platform in `GameScene`.
- Added a single test `LetterBlock` ('W') to `GameScene` to demonstrate falling and collision.
- Added an `update` method to `LetterBlock` to keep the letter text centered during movement.
- Added a safe `destroy` method to `LetterBlock` to clean up the letter text.

## [0.5.0] - 2025-05-12
### Added
- Created placeholder image files for `platform.png` and `letter_block.png` in `src/assets/images/`.
- Updated `PreloadScene` to load image assets after fonts, reintroducing the loading bar for asset loading phase.
- Added the `platform` sprite to `GameScene` as a static physics body positioned at the bottom center.

## [0.4.0] - 2025-05-12
### Added
- Installed `webfontloader` dependency.
- Implemented web font loading in `PreloadScene.js` for 'Bungee Shade', 'Exo 2', 'Rubik', and 'Press Start 2P' from Google Fonts.
- `PreloadScene` now displays a "Loading Fonts..." message and transitions upon font load completion or failure.

## [0.3.0] - 2025-05-12
### Added
- `localStorageManager.js` utility for saving and loading data (e.g., high scores).
- Integrated high score display into `MainMenuScene`.
- Added a basic WebGL compatibility check in `BootScene` with a console warning for fallback to Canvas.

## [0.2.0] - 2025-05-12
### Added
- Responsive layout improvements in `styles.css`.
- Scene management system (`BootScene`, `PreloadScene`, `MainMenuScene`, `GameScene`).
- Centralized `gameConfig.js`.
- Phaser Scale Manager configuration for responsiveness.
- Placeholder `GameScene`.

## [0.1.0] - 2025-05-12
### Added
- Initial project setup with HTML, CSS, JS.
- Integrated Phaser.js framework.
- Configured Webpack with `webpack-dev-server` and basic plugins (HTML, Copy).
- Established basic folder structure (`src`, `assets`, `scenes`, `config`, `utils`).
- Updated `index.html` to include a `div` with `id="game-container"` for Phaser.
- Successfully started the development server.