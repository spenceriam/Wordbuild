# Wordbuild: Changelog

All notable changes to the Wordbuild project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.1] - 2025-05-12
### Added
- Implemented basic touch controls for platform movement in `GameScene` (touch left/right half of screen).
- Added `pointerdown`, `pointermove`, and `pointerup` listeners.
- Created `handlePointerMove` helper function.
- Updated `update` loop logic to handle stopping platform when neither keyboard nor touch is active.
### Changed
- Marked platform boundaries and physics properties tasks as complete in TODO list (covered by existing implementation for MVP).

## [0.2.0] - 2025-05-12
### Added
- Implemented platform movement in `GameScene` using left/right arrow keys.
- Changed platform from `staticImage` to `sprite` with `immovable` and `allowGravity=false` properties.
- Added keyboard cursor key listener (`this.cursors`).
- Updated platform velocity in `update` loop based on key presses.
- Defined `PLATFORM_SPEED` constant.
### Changed
- Renamed "Week" to "Part" in `wordbuild-todo-phase1.md`.

## [0.1.5] - 2025-05-12
### Added
- Created `src/gameObjects` directory.
- Defined `LetterBlock` class in `src/gameObjects/LetterBlock.js`, extending `Phaser.Physics.Arcade.Sprite`.
- `LetterBlock` includes basic physics (bounce, world bounds) and displays its assigned letter using the 'Rubik' font.
- Implemented collision detection between `LetterBlock` instances and the platform in `GameScene`.
- Added a single test `LetterBlock` ('W') to `GameScene` to demonstrate falling and collision.
- Added an `update` method to `LetterBlock` to keep the letter text centered during movement.
- Added a safe `destroy` method to `LetterBlock` to clean up the letter text.

## [0.1.4] - 2025-05-12
### Added
- Created placeholder image files for `platform.png` and `letter_block.png` in `src/assets/images/`.
- Updated `PreloadScene` to load image assets after fonts, reintroducing the loading bar for asset loading phase.
- Added the `platform` sprite to `GameScene` as a static physics body positioned at the bottom center.

## [0.1.3] - 2025-05-12
### Added
- Installed `webfontloader` dependency.
- Implemented web font loading in `PreloadScene.js` for 'Bungee Shade', 'Exo 2', 'Rubik', and 'Press Start 2P' from Google Fonts.
- `PreloadScene` now displays a "Loading Fonts..." message and transitions upon font load completion or failure.

## [0.1.2] - 2025-05-12
### Added
- `localStorageManager.js` utility for saving and loading data (e.g., high scores).
- Integrated high score display into `MainMenuScene`.
- Added a basic WebGL compatibility check in `BootScene` with a console warning for fallback to Canvas.

## [0.1.1] - 2025-05-12
### Added
- Responsive layout improvements in `styles.css`.
- Dedicated `PreloadScene.js` with a visual loading bar.
- Placeholder `MainMenuScene.js` with a title and interactive "Start Game" button.
- `GameScene.js` as a separate file with a placeholder and back-to-menu button.
- `BootScene.js` as a separate file, transitioning to `PreloadScene`.
- Centralized Phaser game configuration in `src/config/gameConfig.js`, including:
  - Setup for Arcade Physics.
  - Phaser Scale Manager for `FIT` mode and `CENTER_BOTH` auto-centering.
  - Defined min/max responsive scaling dimensions.
  - Scene registration for `BootScene`, `PreloadScene`, `MainMenuScene`, and `GameScene`.
- Updated `src/main.js` to use the new `gameConfig` and removed inline scene definitions.

## [0.1.0] - 2025-05-12
### Added
- Initial project scaffolding: `index.html`, `styles.css`, `main.js` (placeholder).
- Core project files: `.gitignore`, `package.json`.
- Established project folder structure: `src/` with subdirectories for `assets`, `scenes`, `config`, `utils`, and `README.md` files for each.
- Installed initial npm dependencies including Phaser, Webpack, Webpack CLI, Webpack Dev Server, Babel, HTML Webpack Plugin, and Copy Webpack Plugin.
- Configured Webpack (`webpack.config.js`) for development build, including:
  - Entry point set to `src/main.js`.
  - Output to `dist/bundle.js`.
  - `HtmlWebpackPlugin` to generate `index.html` from template.
  - `CopyWebpackPlugin` to copy assets and `styles.css` to `dist`.
  - `webpack-dev-server` with hot reloading.
  - Babel for ES6+ transpilation.
- Created a basic Phaser game instance in `src/main.js` with `BootScene` and `GameScene`.
- Updated `index.html` to include a `div` with `id="game-container"` for Phaser.
- Successfully started the development server.

## [0.3.0] - YYYY-MM-DD (Future)
### Added
- Word validation system
- Letter placement mechanics
- Basic scoring system
- Lives implementation
- Level progression framework
- Initial word database

## [0.4.0] - YYYY-MM-DD (Future)
### Added
- Main menu interface
- Game HUD elements
- Game over screen
- Basic sound effects
- Simple tutorial system
- Responsive design refinements

## [0.5.0] - YYYY-MM-DD (Future)
### Added
- Performance optimizations
- Mobile control improvements
- Enhanced visual feedback
- Browser compatibility fixes
- Local storage for game progress
- Basic analytics implementation

## [1.0.0] - YYYY-MM-DD (Future) - MVP Release
### Added
- Complete MVP feature set
- Final placeholder graphics
- Optimized gameplay mechanics
- Tuned difficulty curve
- Production deployment
- User feedback mechanism

---

## Template for Future Updates

## [1.1.0] - YYYY-MM-DD (Future)
### Added
- [New features]

### Changed
- [Changes to existing functionality]

### Deprecated
- [Features that will be removed in upcoming releases]

### Removed
- [Features removed in this release]

### Fixed
- [Bug fixes]

### Security
- [Security improvements]
