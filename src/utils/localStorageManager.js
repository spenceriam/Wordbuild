// src/utils/localStorageManager.js

const HIGH_SCORE_KEY = 'wordbuild_highScore';
const GAME_PROGRESS_KEY = 'wordbuild_gameProgress'; // Example for future use

/**
 * Saves the high score to Local Storage.
 * @param {number} score The high score to save.
 */
export function saveHighScore(score) {
    try {
        localStorage.setItem(HIGH_SCORE_KEY, score.toString());
        console.log(`High score saved: ${score}`);
    } catch (e) {
        console.error('Failed to save high score to Local Storage:', e);
    }
}

/**
 * Loads the high score from Local Storage.
 * @returns {number} The saved high score, or 0 if not found or error.
 */
export function loadHighScore() {
    try {
        const score = localStorage.getItem(HIGH_SCORE_KEY);
        if (score === null) {
            return 0; // No high score saved yet
        }
        return parseInt(score, 10);
    } catch (e) {
        console.error('Failed to load high score from Local Storage:', e);
        return 0;
    }
}

/**
 * Clears the high score from Local Storage.
 */
export function clearHighScore() {
    try {
        localStorage.removeItem(HIGH_SCORE_KEY);
        console.log('High score cleared from Local Storage.');
    } catch (e) {
        console.error('Failed to clear high score from Local Storage:', e);
    }
}

// Example functions for game progress - can be expanded later
/**
 * Saves game progress.
 * @param {object} progressData The game progress data to save.
 */
export function saveGameProgress(progressData) {
    try {
        localStorage.setItem(GAME_PROGRESS_KEY, JSON.stringify(progressData));
        console.log('Game progress saved.');
    } catch (e) {
        console.error('Failed to save game progress:', e);
    }
}

/**
 * Loads game progress.
 * @returns {object|null} The saved game progress, or null if not found or error.
 */
export function loadGameProgress() {
    try {
        const progressData = localStorage.getItem(GAME_PROGRESS_KEY);
        if (progressData === null) {
            return null;
        }
        return JSON.parse(progressData);
    } catch (e) {
        console.error('Failed to load game progress:', e);
        return null;
    }
}

/**
 * Clears game progress from Local Storage.
 */
export function clearGameProgress() {
    try {
        localStorage.removeItem(GAME_PROGRESS_KEY);
        console.log('Game progress cleared from Local Storage.');
    } catch (e) {
        console.error('Failed to clear game progress from Local Storage:', e);
    }
}
